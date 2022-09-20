<template>
  <div>
    <router-link v-for="item in tasks" :key="item.id" :to="`/task/${item.id}` "
     :class="{isImportant:item.priority ===1, isUrgent:item.priority ===2}"
      class="itemBox">
      <h4>{{ item.title }}</h4>
      {{ item.insertedAt.substring(0, 10) }}
           <!-- {{ item.priority }} -->
      <p>Tiempo estimado</p>
      {{ item.estimate }} Días
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
   background-color: rgb(181, 181, 191);
 margin: 1.5em;
  }
  .isImportant {
    background-color: rgb(255, 0, 149);
    color:aliceblue;
     }
  .isUrgent{
    background-color: rgb(69, 177, 89);
    color:aliceblue;
     }
  .isImportant a {
    background-color: rgb(210, 210, 237);
    border-color: black;
    color:aliceblue;
  }
</style>
