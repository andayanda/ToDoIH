<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div>
    <h2>Sign up for an account</h2>
    <form @submit.prevent="handleSignup">
      <div>
        <label for="email">Email</label>
        <input id="email" type="email" v-model="email" />
      </div>
      <div>
        <label for="password">Password</label>
        <input id="password" type="password" v-model="password" />
      </div>
      <div> <label for="confirmPassword">Confirm Password</label>
        <input id="confirmPassword" type="confirmPassword" v-model="confirmPassword" /></div>
    </form>
  </div>

  <button @click="handleSignUp">Sign Up</button>
  <button @click="handleSignIn">Sign In</button>
</template>
<!-- <SignUp /> -->

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';
// import SignUp from '../components/SignUp.vue';

export default {
  name: 'AuthView.vue',
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
    };
  },
  // components: 'SignUp.vue',
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['signUp', 'signOut', 'signIn']),
    handleSignUp() {
      if (this.password !== this.confirmPassword) {
        console.log('las contraseñas no coinciden');
        return;
      }git 
      const userData = {
        email: this.email,
        password: this.password,
      };
      this.signUp(userData.email, userData.password);
    },
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
