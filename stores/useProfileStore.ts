import { defineStore } from 'pinia'
import { api } from '~/api';

export const useProfileStore = defineStore('profile', () => {
  const authStore = useAuthStore();
  const profile = ref(null);
  const reviews = ref([]);
  const ratings = ref([]);

  async function fetchProfile() {
    const res = await api.get('/users/' + authStore.authData.id, {
      headers: {
        'Authorization': 'Bearer ' + authStore.authData.token,
      }
    });
    profile.value = res.data;
  }

  async function fetchReviews() {
    const res = await api.get('/users/' + authStore.authData.id + '/reviews', {
      headers: {
        'Authorization': 'Bearer ' + authStore.authData.token,
      }
    });
    reviews.value = res.data.reviews;
  }

  async function fetchRatings() {
    const res = await api.get('/users/' + authStore.authData.id + '/ratings', {
      headers: {
        'Authorization': 'Bearer ' + authStore.authData.token,
      }
    });
    ratings.value = res.data.ratings;
  }

  async function updateProfile(userData:object) {
    await api.put('/users', userData, {
      headers: {
        'Authorization': 'Bearer ' + authStore.authData.token,
      }
    });
    fetchProfile();
  }

  return {
    profile, 
    fetchProfile,
    reviews,
    fetchReviews,
    ratings,
    fetchRatings,
    updateProfile,
    
  }
});
