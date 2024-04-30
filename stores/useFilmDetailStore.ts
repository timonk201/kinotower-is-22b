import { defineStore } from 'pinia'
import { api } from '~/api';

export const useFilmDetailStore = defineStore('filmDetail', () => {
  const film = ref(null);
  const reviews = ref([]);
  const authStore = useAuthStore();

  async function fetchFilm(id:number) {
    const res = await api.get('/films/' + id);
    film.value = res.data;
  }

  async function fetchReview(id:number) {
    const res = await api.get(`/films/${id}/reviews`);
    reviews.value = res.data.reviews;
  }

  async function addReview(message:string) {
    const res = await api.post('/users/' + authStore.authData.id + '/reviews', {
      film_id: film.value.id,
      message,
    }, {
      headers: {
        'Authorization': 'Bearer ' + authStore.authData.token,
      }
    });
    fetchReview(film.value.id);
  }

  async function addRating(ball:number) {
    await api.post('/users/' + authStore.authData.id + '/ratings', {
      film_id: film.value.id,
      ball,
    }, {
      headers: {
        'Authorization': 'Bearer ' + authStore.authData.token,
      }
    });
    fetchFilm(film.value.id);
  }

  return {
    film,
    fetchFilm,
    reviews,
    fetchReview,
    addReview,
    addRating,
    
  }
})
