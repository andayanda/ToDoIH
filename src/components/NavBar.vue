<template>
  <nav v-if="user !== null"> <!--Cuando el usuario esté registrado saldra este boton de logout-->
    <router-Link to="/">Home</router-Link>
    <button @click="handleSignOut">Sign Out</button>
  </nav>
  </template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';

export default {
  name: 'NavBar.vue',
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['signOut']),
    async handleSignOut() {
      await this.signOut();
      if (this.user === null) {
        this.$router.push('/auth');
      }
    },
  },
};
</script>
