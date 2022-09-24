<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <SignIn></SignIn>
  <router-link :to="`/register`">
    <div>
      <h3>Don't have an account yet?</h3>
    </div>
  </router-link>
</template>

<script>
import SignIn from '../components/SignIn.vue';

export default {
  name: 'AuthView',
  components: { SignIn },
};
</script>
