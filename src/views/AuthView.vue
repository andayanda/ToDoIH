<template>
  <h1>Esta es la vista de SignUp/In</h1>
  <button @click="handleSingnUp">Singn Up</button>
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
    ...mapActions(userStore, ['signUp']),
    handleSingnUp() {
      const userData = {
        email: 'carmela@gmail.com',
        password: 'papepi123',
      };
      this.singnUp(userData.email, userData.password);
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
