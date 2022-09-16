<template>
    <button @click="createTask" class="btn btn-info">Add your task</button>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import taskStore from '@/store/task';

export default {
  name: 'NewTask',
  data() {
    return {
      taskItem: {
        title: 'crear tareas',
        description: '',
        estimate: 10,
        priority: 5,
        state: 'In progress',
        userId: '',
      },
    };
  },
  computed: {
    ...mapState(taskStore, ['tasks']),
  },
  methods: {
    ...mapActions(taskStore, ['fetchTasks', 'createTask']),
    handleCreateTask() {
      this.createTask();
    },
  },

};
</script>
