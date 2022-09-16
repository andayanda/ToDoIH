<template>
     <button @click="handleCreateTask" class="btn btn-info">Add your task</button>
     <!-- {{taskItem}} -->
</template>

<script>
import { mapState, mapActions } from 'pinia';
import taskStore from '@/store/task';

export default {
  name: 'NewTask.vue',
  computed: {
    ...mapState(taskStore, ['tasks']),
  },
  methods: {
    ...mapActions(taskStore, ['fetchTasks', 'createTask']),
    handleCreateTask() {
      const taskItem = {
        title: 'primera tarea',
        description: 'Bla Bla Bla',
      };
      this.createTask(taskItem.title, taskItem.description);
    },
  },
};
</script>
