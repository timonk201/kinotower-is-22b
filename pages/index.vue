<script lang="ts" setup>
  const filmsStore = useFilmsStore();
  const categoriesStore = useCategoriesStore();
  filmsStore.fetchFilms();

</script>

<template>
  <div class="row">
    <div class="col-md-4">
      <select class="form-select">
        <option selected :value="null">Select genre...</option>
        <option v-for="category in categoriesStore.categories" :key="category.id" :value="category.id">{{ category.name }} {{ category.filmCount }}</option>
      </select>
    </div>
    <div class="col-md-4">
      <select class="form-select">
        <option selected :value="null">Select country...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <div class="col-md-3">
      <select class="form-select">
        <option value="1">Name</option>
        <option value="2">Year</option>
        <option value="3">Rating</option>
      </select>
    </div>
    <div class="col-md-1">
      <button class="btn btn-outline-warning">Reset</button>
    </div>
  </div>

  <div class="row row-cols-1 row-cols-md-3 g-4 mt-3">
  <div class="col" v-for="film in filmsStore.films" :key="filmsStore.id">
    <div class="card h-100">
      <img :src="film.link_img" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ film.name }}</h5>
        <p class="card-text">Rating: {{ Number(film.ratingAvg).toFixed(1)  }}</p>
        <p class="card-text">{{ film.duration }} min.</p>
        <p class="card-text">
          <template v-for="(category, index) in film.categories" :key="category.id">
            {{ category.name }} {{ (index < film.categories.length - 1) ? ', ' : '' }}
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
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
</template>

<style>

</style>