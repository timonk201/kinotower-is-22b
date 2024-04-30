<script lang="ts" setup>
  const filmDetailStore = useFilmDetailStore();
  const route = useRoute();
  const message = ref('');

  filmDetailStore.fetchFilm(route.params.id);
  filmDetailStore.fetchReview(route.params.id);
  const addReview = () => {
    if (message.value) {
      filmDetailStore.addReview(message.value)
    }
  }

  const addRating = (ball:number) => {
    if (ball) {
      filmDetailStore.addRating(ball);
    }
  }
</script>

<template>
    <template v-if="filmDetailStore.film">
      <div class="row">
    <div class="col rating-text">{{ Number(filmDetailStore.film.ratingAvg).toFixed(1) }}</div>
    <div class="col">
      <iframe width="560" height="315" :src="filmDetailStore.film.link_video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    <div class="col d-flex flex-column align-items-center">
      <div class="mb-2"><a @click="addRating(5)" href="#" class="text-warning"><i class="fa-solid fa-star fa-2xl"></i></a></div>
      <div><a @click="addRating(4)" href="#" class="text-warning"><i class="fa-solid fa-star fa-xl"></i></a></div>
      <div><a @click="addRating(3)" href="#" class="text-warning"><i class="fa-solid fa-star fa-lg"></i></a></div>
      <div><a @click="addRating(2)" href="#" class="text-warning"><i class="fa-solid fa-star fa-sm"></i></a></div>
      <div><a @click="addRating(1)" href="#" class="text-warning"><i class="fa-solid fa-star fa-xs"></i></a></div>
    </div>
  </div>
  <div class="row">
    <div class="col">{{ filmDetailStore.film.name }}</div>
  </div>
  <div class="row">
    <div class="col-md-1">{{ filmDetailStore.film.duration }} min.</div>
    <div class="col-md-1">{{ filmDetailStore.film.country.name }}</div>
    <div class="col-md-1">{{ filmDetailStore.film.year_of_issue }}</div>
    <div class="col-md-1">{{ filmDetailStore.film.age }}+</div>
    <div class="col-md-2">{{ filmDetailStore.film.created_at }}</div>
    <div class="col-md-3">
      <template v-for="(category, index) in filmDetailStore.film.categories">
        {{ category.name }}{{ (index < filmDetailStore.film.categories.length - 1) ? ', ' : '.' }}
      </template>
    </div>
    <div class="col-md-3 text-end">
      <a class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" :href="filmDetailStore.film.link_kinopoisk">Kinopoisk</a>
    </div>
  </div>
  <div class="row">
    <div class="col-md-10">
      <div class="mt-3">
        <label for="message" class="form-label">Add review</label>
        <textarea v-model="message" class="form-control" id="message" rows="3"></textarea>
      </div>
    </div>
    <div class="col-md-2 d-flex align-items-end">
      <button @click="addReview" type="button" class="btn btn-outline-warning">Send</button>
    </div>
  </div>
  <div class="row">
    <div class="row">
      <div class="col rating-text">Reviews</div>
    </div>
    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-11">
        <div class="row" v-for="review in filmDetailStore.reviews" :key="review.id">
          <div class="col">
            <div class="row">
              <div class="col">{{ review.user.fio }}</div>
              <div class="col-md-2">{{ review.created_at }}</div>
            </div>
            <div class="row">
              <div class="col">{{ review.message }}</div>
            </div>
            <hr>
          </div>
        </div>
      </div>
    </div>
  </div>
    </template>
</template>

<style>
.rating-text{
font-size: 50px;
color: rgb(221, 103, 6);
font-weight: bold;
}
</style>