<template>
  <div class="container">
    <!-- <img src="../src/assets/post-it.svg" alt=""> -->
    <NavBar></NavBar>
    <router-view />
  </div>
</template>
<script>
import userStore from '@/store/user';
import { mapState, mapActions } from 'pinia';
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',

  components: {
    NavBar,
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
}
.container{
  background-image: url("./assets/post-it.svg");
  background-repeat: no-repeat, repeat;
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
