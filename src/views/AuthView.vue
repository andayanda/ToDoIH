<template>
  <h1>Esta es la vista de SignUp/In</h1>
  <button @click="handleSignUp">Sign Up</button>
  <button @click="handleSignIn">Sign In</button>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';

export default {
  name: 'AuthView.vue',
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['signUp', 'signOut', 'signIn']),
    handleSignUp() {
      const userData = {
        email: 'pepito@gmail.com',
        password: 'papepi123',
      };
      this.signUp(userData.email, userData.password);
    },
    handleSignOut() {
      this.signOut();
      if (this.user === null) {
        this.$router.push('/auth');
      }
    },
    handleSignIn() {
      const userData = {
        email: 'carmela@gmail.com',
        password: 'papepi123',
      };
      this.signIn(userData.email, userData.password);
    },
  },
  watch: {
    user() {
      if (this.user) {
        console.log(this.user);
        this.$router.push({ path: '/' });
      }
    },
  },
};
</script>
