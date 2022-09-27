<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
<SignUp></SignUp>
<NewPass></NewPass>

</template>

<script>
import { mapState } from 'pinia';
import userStore from '@/store/user';
import NewPass from '@/components/NewPass.vue';
import SignUp from '../components/SignUp.vue';

export default {
  name: 'RegisterView.vue',
  components: { SignUp, NewPass },
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
