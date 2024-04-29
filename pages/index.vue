<script lang="ts" setup>
  const filmsStore = useFilmsStore();
  const categoriesStore = useCategoriesStore();
  const countriesStore = useCountriesStore();
  const category = ref(null);
  const country = ref(null);
  const sortBy = ref('name');

  watch(category, (newCategory) => {
    filmsStore.addCategoryToParams(newCategory);
  });
  watch(country, (newCountry) => {
    filmsStore.addCountryToParams(newCountry);
  });
  watch(sortBy, (newSortBy) => {
    filmsStore.addSortToParams(newSortBy);
  });
  filmsStore.fetchFilms();
</script>

<template>
  <div class="row">
    <div class="col-md-4">
      <select class="form-select" v-model="category">
        <option selected :value="null">Select genre...</option>
        <option v-for="category in categoriesStore.categories" :key="category.id" :value="category.id">{{ category.name }} {{ category.filmCount }}</option>
      </select>
    </div>
    <div class="col-md-4">
      <select class="form-select" v-model="country">
        <option selected :value="null">Select country...</option>
        <option v-for="country in countriesStore.countries" :key="country.id" :value="country.id">{{ country.name }}</option>
      </select>
    </div>
    <div class="col-md-3">
      <select class="form-select" v-model="sortBy">
        <option value="1">Name</option>
        <option value="2">Year</option>
        <option value="3">Rating</option>
      </select>
    </div>
    <div class="col-md-1">
      <button class="btn btn-outline-warning" @click="filmsStore.resetParams()">Reset</button>
    </div>
  </div>

  <div class="row row-cols-1 row-cols-md-3 g-4 mt-3">
  <div class="col" v-for="film in filmsStore.films" :key="filmsStore.id">
    <div class="card h-100">
      <img :src="film.link_img" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ film.name }}</h5>
        <p class="card-text">Rating: {{ Number(film.ratingAvg).toFixed(1) }}</p>
        <p class="card-text">{{ film.duration }} min.</p>
        <p class="card-text">
          <template v-for="(category, index) in film.categories" :key="category.id">
            {{ category.name }}{{ (index < film.categories.length - 1) ? ', ' : '' }}
          </template>
        </p>
      </div>
      <div class="card-footer text-end">
        <button class="btn btn-outline-info" type="button">View</button>
      </div>
    </div>
  </div>
</div>

<nav class="mt-3 d-flex justify-content-center" aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" 
      @click.prevent="filmsStore.addPageToParams(filmsStore.page - 1)" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item" v-for="i in Math.ceil(filmsStore.total/filmsStore.size)">
      <a class="page-link" @click.prevent="filmsStore.addPageToParams(i)" :class="{'active': i == filmsStore.page}" href="#">{{ i }}</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#" 
      @click.prevent="filmsStore.addPageToParams(filmsStore.page + 1)" 
      :class="{'disabled': Math.ceil(filmsStore.total/filmsStore.size) == filmsStore.page}" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
</template>

<style>

</style>