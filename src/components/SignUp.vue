<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';

export default {
  name: 'SignUp.vue',
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
    ...mapActions(userStore, ['signUp', 'signOut', 'signIn']),
    handleSignUp() {
      const userData = {
        email: this.email.valueOf,
        password: this.password.valueOf,
      };
      this.signUp(userData.email, userData.password);
    },
  },
};
</script>
