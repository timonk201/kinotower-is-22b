import { defineStore } from 'pinia'
import { api } from '~/api';

export const useFilmsStore = defineStore('films', () => {
  const films = ref([]);
  async function fetchFilms() {
    const res = await api.get('/films');
    films.value = res.data.films;

  }

  return {
    films,
    fetchFilms,
    
  }
});
