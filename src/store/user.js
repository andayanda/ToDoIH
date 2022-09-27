// /store/user.js

import { defineStore } from 'pinia';
import supabase from '../supabase/index';

export default defineStore('user', {
  state: () => ({
    user: undefined,
  }),

  actions: {
    async fetchUser() {
      const user = await supabase.auth.user();
      this.user = user;
    }, // create a new user
    async signUp(email, password) {
      const { user, error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) throw error;
      if (user) this.user = user;
    },
    async signOut() {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      this.user = null;
    },
    async signIn(email, password) {
      const { user, error } = await supabase.auth.signIn({
        email,
        password,
      });
      if (error) throw error;
      if (user) this.user = user;
    },
    async resetPass(email) {
      // esta parte funciona bien con Netlify
      const { user, error } = await supabase.auth.api.resetPasswordForEmail(
        email,
      );
      if (error) throw error;
      if (user) this.user = user;
    },
    async updatePass(accessToken, password) {
      // esta parte no linka bien; manda a localhost
      const { user, error } = await supabase.auth.api.updateUser(accessToken, {
        password,
      });
      if (error) throw error;
      if (user) this.user = user;
    },
    async signInWithGoogle() {
      // esta parte no linka bien;
      const { user, error } = await supabase.auth.signIn({
        provider: 'google',
      });
      if (error) throw error;
      if (user) this.user = user;
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'user',
        storage: localStorage,
      },
    ],
  },
});
