<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div class="modal-container">
    <h2>Log In</h2>
    <form @submit.prevent="handleSignIn" class="was-validated" >
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input id="email" type="email" class="form-control" v-model="email" />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          id="password"
          type="password"
          class="form-control"
          v-model="password"
          @keyup.enter="handleSignIn"
        />
        <div class="valid-feedback">Valid.</div>
    <div class="invalid-feedback">Please fill out this field.</div>
      </div>
    </form>
    <div>
      <button class="btn btn-primary" @click="handleSignIn"
     >Sign In</button>
    </div>

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
    ...mapActions(userStore, ['signIn', 'signInWithGoogle', 'resetPass']),
    handleSignIn() {
      const userData = {
        email: this.email,
        password: this.password,
      };
      this.signIn(userData.email, userData.password);
    },
    // funcionalidades para revisar
    // handleSignInGoogle() {
    //   this.signInWithGoogle();
    // },
    // handleRresetPass() {
    //   const userData = {
    //     email: this.email,
    //   };
    //   this.resetPass(userData.email);
    //   alert(`Password reset email sent to: ${userData.email}`);
    // },
  },
};
</script>
<style>
.modal-container {
  width: 90%;
  background-color: #c8e667;
  margin: auto;
  max-width: 600px;
  max-height: 80%;
  padding: 3em 2.5em;
  border-radius: 10px;
  display: grid;
  gap: 1em;
  grid-auto-columns: 100%;
  place-items: center;
}
</style>
