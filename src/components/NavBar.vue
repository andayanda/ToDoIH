<template>
  <nav class="navbar"
   v-if="user !== null"> <!--Cuando el usuario esté registrado saldra este boton de logout-->
   <div class="container-fluid">
    <router-Link to="/" class="navbar-brand">
      <img src="../assets/Pencil.jpg" class="img-fluid" alt="..."/>Home</router-Link>
    <router-Link to="/tasks" class="navbar-brand">Tasks</router-Link>
    <button class="navbar-toggler" @click="handleSignOut">Sign Out</button>
   </div>
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
<style>
  .navbar{
    background-color: #7ea8e68f;
   padding: 1em 2em;
  }
</style>
