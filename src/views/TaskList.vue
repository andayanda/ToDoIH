<template>
  <div>
    <router-link v-for="item in tasks" :key="item.id" :to="`/task/${item.id}` " class="itemBox">
      <h4>{{ item.title }}</h4>
      <!-- Default dropend button -->
      <div class="btn-group dropend">
        <button
          type="button"
          class="btn btn-secondary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Description
        </button>
        <ul class="dropdown-menu">
          {{
            item.description
          }}
          <!-- Dropdown menu links -->
        </ul>
      </div>
      {{ item.insertedAt.substring(0, 10) }}
      Priority:

      {{ item.priority }}
      <p>Tiempo estimado</p>
      {{ item.estimate }} Días
    </router-link>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import taskStore from '@/store/task';
import userStore from '@/store/user';

export default {
  name: 'TaskList.vue',
  computed: {
    ...mapState(taskStore, ['tasks']),
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(taskStore, ['fetchTasks']),
  },
};
</script>
<style>
  .itemBox {
    display: flex;
    justify-content: space-around;
    text-decoration: none;
   color:black;
  }
</style>
