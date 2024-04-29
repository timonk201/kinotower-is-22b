<template>
  <div class="login-box">
  <div class="card card-outline card-primary">
    <div class="card-header text-center">
      <a href="" class="h1"><b>REGISTRATION</b></a>
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
          <input type="password" name="password" class="form-control" placeholder="Password">
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
        <div class="d-grid gap-2 col-6 mx-auto">
          <button class="btn btn-success" type="button">Sign up</button>
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