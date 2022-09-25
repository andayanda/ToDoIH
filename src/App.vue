<template>
  <div class="container shadow-sm p-3 mb-5 bg-body rounded">
    <!-- <img src="../src/assets/post-it.svg" alt=""> -->
    <AppHeader></AppHeader>
    <NavBar></NavBar>
    <router-view />
  </div>
</template>
<script>
import userStore from '@/store/user';
import { mapState, mapActions } from 'pinia';
import NavBar from './components/NavBar.vue';
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'App',

  components: {
    NavBar,
    AppHeader,
  },
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['fetchUser']),
  },
  async created() {
    try {
      await this.fetchUser(); // here we call fetch user
      console.log(this.user);
    } catch (e) {
      console.error(e);
    }
  },
  watch: {
    user() {
      if (this.user) {
        // redirect them to logout if the user is not there

        this.$router.push({ path: '/' });
      } else {
        // continue to dashboard
        this.$router.push({ path: '/auth' });
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #096C7D;
  background-color: #abc7a93b;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #99483D;
}

nav a.router-link-exact-active {
  color:#829936;
}
</style>
