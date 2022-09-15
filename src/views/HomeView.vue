<template>
  <div class="home"></div>
  <h1>Esta es la vista Home</h1>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions } from 'pinia';
import taskStore from '@/store/task';

export default {
  name: 'HomeView',
  computed: {
    ...mapState(taskStore, ['tasks']),
  },
  methods: {
    ...mapActions(taskStore, ['fetchTasks']),
  },
  created() {
    const taskData = {
      title: 'mi primera tarea',
    };
    this.fetchTasks(taskData.title);
  },
};
</script>
