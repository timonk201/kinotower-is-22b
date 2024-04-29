<script lang="ts" setup>
  const authStore = useAuthStore();
  const genderStore = useGenderStore();
  const router = useRouter();
  const email = ref('');
  const password = ref('');
  const fio = ref('');
  const birthday = ref('');
  const gender = ref(null);
  const errorMsg = ref('');
  const register = async () => {
    try {
      await authStore.signUp({
        fio: fio.value,
        email: email.value,
        password: password.value,
        birthday: birthday.value,
        gender_id: gender.value,
      });
      router.push('/')
    } catch (error:any) {
      errorMsg.value = error.message;
    }
  };
</script>

<template>
  <main class="form-signin w-100 m-auto">
  <form @submit.prevent="register">
    <img class="mb-4" src="/logo.svg" alt="" width="72" height="57"><span class="h3">inoTower</span>
    <h1 class="h3 mb-3 fw-normal">Please sign up</h1>
    <div class="form-floating mb-2">
      <input type="text" v-model="fio" class="form-control" id="fio">
      <label for="fio">User name</label>
    </div>
    <div class="form-floating mb-2">
      <input type="email" v-model="email" class="form-control" id="floatingInput" placeholder="name@example.com">
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating mb-2">
      <input type="password" v-model="password" class="form-control" id="floatingPassword" placeholder="Password">
      <label for="floatingPassword">Password</label>
    </div>
    <div class="form-floating mb-2">
      <input type="date" v-model="birthday" class="form-control" id="birthday">
      <label for="birthday">Birthday</label>
    </div>
    <div class="form-floating mb-3">
      <select class="form-select" v-model="gender">
        <option :value="null">Select gender...</option>
        <option v-for="gender in genderStore.genders" 
        :key="gender.id" 
        :value="gender.id">{{ gender.name }}</option>
      </select>
    </div>
    <button class="btn btn-success w-100 py-2" type="submit">Sign up</button>
  </form>
  <div v-if="errorMsg" class="alert alert-danger alert-dismissible fade show mt-2" role="alert">
    {{ errorMsg }}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
</main>
</template>

<style>
.form-signin {
  max-width: 330px;
  padding: 1rem;
}
</style>