<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <SignIn></SignIn>
<SignUp></SignUp>

</template>

<script>
import { mapState } from 'pinia';
import userStore from '@/store/user';
import SignUp from '../components/SignUp.vue';
import SignIn from '../components/SignIn.vue';

export default {
  name: 'AuthView.vue',
  components: { SignUp, SignIn },
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
    };
  },
  computed: {
    ...mapState(userStore, ['user']),
  },
};
</script>
