<script lang="ts" setup>
  const authStore = useAuthStore();
  const router = useRouter();
  const email = ref('');
  const password = ref('');
  const errorMsg = ref('');
  const login = async () => {
    try {
      if (email.value && password.value) {
        await authStore.signIn(email.value, password.value);
        router.push('/')
      } else {
        throw new Error('Please input email and password');
      }
    } catch(error:any) {
      errorMsg.value = error.message;
    }
  }
</script>

<template>
  <main class="form-signin w-100 m-auto">
  <form @submit.prevent="login">
    <img class="mb-4" src="/logo.svg" alt="" width="72" height="57"><span class="h3">inoTower</span>
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

    <div class="form-floating mb-2">
      <input type="email" v-model="email" class="form-control" id="floatingInput" placeholder="name@example.com">
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating mb-3">
      <input type="password" v-model="password" class="form-control" id="floatingPassword" placeholder="Password">
      <label for="floatingPassword">Password</label>
    </div>

    <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button>
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