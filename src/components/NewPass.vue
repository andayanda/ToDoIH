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

      password: '',
    };
  },
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, 'newPass'),
    handleNewPass() {
      const userData = {
        accessToken: this.accessToken,
        password: this.password,
      };
      this.updateUser(userData.password);
    },
  },
};
</script>
