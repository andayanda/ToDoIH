<template>
  <nav v-if="user !== null"> <!--Cuando el usuario esté registrado saldra este boton de logout-->
    <router-Link to="/">Home</router-Link>
    <router-Link @click="handelSignOut" to="/auth">Sign Out</router-Link>
  </nav>
  <!--Cuando el usuario No esté registrado saldra este boton de registro o de logu-->
  <!-- <nav v-else>
    <router-Link @click="handleSignUp" to="/auth">Registrarse</router-Link>
    <router-Link @click="handelSignIn" to="/auth">Sign In</router-Link>
  </nav> -->
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
    handleSignOut() {
      this.signOut();
      if (this.user === null) {
        this.$router.push('/auth');
      }
    },
  },
  watch: {
    user() {
      if (this.user) {
        console.log(this.user);
        this.$router.push({ path: '/' });
      }
    },
  },
};
</script>
