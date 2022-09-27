<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
    <div class="modal-container">
        <h2>New Password</h2>
        <form @submit.prevent="handleNewPass">
            <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input
            id="password"
            type="password"
            class="form-control"
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
    </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';

export default {
  name: 'NewPass.vue',
  data() {
    return {

      accessToken: '',
      password: '',
    };
  },
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['newPass']),
    handleNewPass() {
      if (this.password !== this.confirmPassword) {
        alert('las contraseñas no coinciden');
      }
      const userData = {
        accessToken: this.accessToken,
        password: this.password,
      };
      this.updatePass(userData.accessToken, userData.password);
    },
  },
};
</script>
