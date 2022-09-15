<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
<SignUp></SignUp>
</template>
<!-- <SignUp /> -->

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';
import SignUp from '../components/SignUp.vue';

export default {
  name: 'AuthView.vue',
  components: { SignUp },
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
      }
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
