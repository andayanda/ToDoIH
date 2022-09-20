<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div class="box">
    <h2>Log In</h2>
    <form @submit.prevent="handleSignIn">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input id="email" type="email" class="form-control" v-model="email" />
      </div>
      <div>
        <label for="password" class="form-label">Password</label>
        <input id="password" type="password" class="form-control" v-model="password" />
      </div>
    </form>  <button class="btn btn-primary" @click="handleSignIn">Sign In</button>
    <div></div>
</div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';

export default {
  name: 'SignIn.vue',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['signIn']),
    handleSignIn() {
      const userData = {
        email: this.email,
        password: this.password,
      };
      this.signIn(userData.email, userData.password);
    },
  },
};
</script>
<style>
</style>
