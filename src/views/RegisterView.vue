<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
<SignUp></SignUp>

</template>

<script>
import { mapState } from 'pinia';
import userStore from '@/store/user';
import SignUp from '../components/SignUp.vue';

export default {
  name: 'RegisterView.vue',
  components: { SignUp },
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
