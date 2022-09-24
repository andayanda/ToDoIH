<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <SignIn></SignIn>
  <router-link :to="`/register`">
    <div>
      <p>Aún no estás registrado?</p>
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
