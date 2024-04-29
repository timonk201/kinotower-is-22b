import { defineStore } from 'pinia'
import { api } from '~/api';

export const useFilmsStore = defineStore('films', () => {
  const films = ref([]);
  const params = {
    page: 1,
    size: 2,
    sortBy: 'name',
    sortDir: 'asc',
    category: null,
    country: null,
  };

  const page = ref(params.page);
  const size = ref(params.size);
  const total = ref(null);

  function addCategoryToParams(category:number|null) {
    params.category = category;
    fetchFilms();
  }

  function addCountryToParams(country:number|null) {
    params.country = country;
    page.value = 1;
    fetchFilms();
  }

  function addSortToParams(sortBy:string) {
    params.sortBy = sortBy;
    page.value = 1;
    fetchFilms();
  }

  function addPageToParams(p:number) {
    if (p < 1) {
      p = 1;
    }
    if (p > Math.ceil(total.value/size.value)) {
      p = Math.ceil(total.value/size.value);
    }
    page.value = p;
    params.page = p;
    fetchFilms();
  }

  function resetParams() {
    params.sortBy = 'name';
    params.category = null;
    params.country = null;
    fetchFilms();
  }

  async function fetchFilms() {
    const res = await api.get('/films', {params});
    films.value = res.data.films;
    page.value = res.data.page;
    size.value = res.data.size;
    total.value = res.data.total;
  }

  return {
    films,
    fetchFilms,
    addCategoryToParams,
    addCountryToParams,
    addSortToParams,
    resetParams,
    page,
    total,
    size,
    addPageToParams,
  }
});
