<template>
  <div class="login-box">
  <div class="card card-outline card-primary">
    <div class="card-header text-center">
      <a href="" class="h1"><b>EDIT MY PROFILE</b></a>
    </div>
    <div class="card-body">
      <p class="login-box-msg"></p>
      <form action="" method="post">
        <div class="input-group mb-3">
          <input type="text" name="fio" class="form-control" placeholder="Fio">
        </div>
        <div class="input-group mb-3">
          <input type="email" name="email" class="form-control" placeholder="Email">
        </div>
        <div class="input-group mb-3">
          <input type="date" name="birthday" class="form-control" placeholder="Birthday">
        </div>
        <div class="select-group mb-3">
          <select id="inputState" class="form-select">
            <option selected>Gender...</option>
            <option>Man</option>
            <option>Woman</option>
          </select>
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <button class="btn btn-dark me-md-2 btn-lg" type="button">Save</button>
        </div>
      </form>
      <div>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>