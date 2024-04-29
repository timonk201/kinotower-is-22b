<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="/logo.svg" alt="logo" width="40">inoTower
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <div>
        <nuxt-link class="btn btn-outline-success me-2" type="button" to="/regist">Sign up</nuxt-link>
        <nuxt-link class="btn btn-outline-primary" type="button" to="/auth">Sign in</nuxt-link>
      </div>
    </div>
  </div>
</nav>

<div class="container py-2 mb-auto" style="min-height: calc(100vh - 190px) !important;">
  <slot />
</div>

  <div class="container-fluid">
  <footer class="d-flex flex-wrap justify-content-center align-items-center py-3 my-4 border-top">
    <div class="col-md-auto d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
        <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
      </a>
      <span class="mb-3 mb-md-0 text-body-secondary">© 2024 KinoTower</span>
    </div>

  </footer>
</div>
</template>

<script lang="ts" setup>

</script>

<style>
.container {
  min-height: calc(100vh - 40px - 150px);
}
</style>