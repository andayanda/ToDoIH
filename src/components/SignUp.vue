<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div class="box">
    <h2>Sign up for an account</h2>
    <form>
      <div class="box-container mb-3">
        <label for="email" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
          v-model="email"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="password"
        />
      </div>
      <div class="mb-3">
        <label for="confirmPassword" class="form-label">Confirm Password</label>
        <input
          type="confirmPassword"
          class="form-control"
          id="confirmPassword"
          v-model="confirmPassword"
        />
      </div>
    </form>

    <button type="submit" class="btn btn-primary" @click="handleSignUp">
      Sign Up
    </button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';

export default {
  name: 'SignUp.vue',
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
  methods: {
    ...mapActions(userStore, ['signUp']),
    handleSignUp() {
      if (this.password !== this.confirmPassword) {
        console.log('las contraseñas no coinciden');
        return;
      }
      const userData = {
        email: this.email,
        password: this.password,
      };
      this.signUp(userData.email, userData.password);
      alert('Recuerde confirmar su email de registro');
    },
  },
};
</script>
<style>
.box {
  max-width: 380px;
  margin-left: auto;
  margin-right: auto;
}
</style>
