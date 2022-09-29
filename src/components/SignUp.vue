<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div class="modal-container">
    <h2>Sign up for an account</h2>
        <label for="password" class="form-label"  pattern=".{6,}">Password</label>
    <form>
      <div class="mb-3">
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
        <label for="password" class="form-label"  pattern=".{6,}">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="password"
        />
        <div id="pswHelp" class="form-text">
         Minimum 6 characters
        </div>
      </div>
      <div class="mb-3">
        <label for="confirmPassword" class="form-label">Confirm Password</label>
        <input
          type="confirmPassword"
          class="form-control"
          id="confirmPassword"
          v-model="confirmPassword"
          @keyup.enter="handleSignUp"
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
        alert('las contraseñas no coinciden');
      }
      const userData = {
        email: this.email,
        password: this.password,
      };
      this.signUp(userData.email, userData.password);
      alert('Gracias por registrarse. Recuerde confirmar su email de registro');
    },
  },
};
</script>
