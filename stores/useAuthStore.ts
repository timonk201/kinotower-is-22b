import { assertNuxtCompatibility } from 'nuxt/kit';
import { defineStore } from 'pinia'
import { api } from '~/api';

export const useAuthStore = defineStore('auth', () => {
  const authData = ref(null);
  const authCookie = useCookie('authData');
  
  async function signIn(email:string, password:string) {
    try {
      const res = await api.post('/auth/signin', {email, password});
      saveAuthData(res.data);
    } catch(e:any) {
      throw new Error(e.response.data.message);
    }
  }

  async function signUp(data:object) {
    try {
      const res = await api.post('/auth/signup', data);
    saveAuthData(res.data);
    } catch (e:any) {
      throw new Error(e.response.data.message);
    }
  }

  function saveAuthData(data:object) {
    authData.value = data;
    authCookie.value = btoa(JSON.stringify(data));
  }

  function readAuthData() {
    if (authCookie.value) {
      const data = JSON.parse(atob(authCookie.value));
      authData.value = data;
    } 
  }

  function removeAuthData() {
    authCookie.value = null;
    authData.value = null;
  }

  readAuthData();

  return {
    authData,
    signUp,
    signIn,
    
  }
});
