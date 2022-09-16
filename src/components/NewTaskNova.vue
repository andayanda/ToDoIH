<template>
  <button @click="handleCreateTask" class="btn btn-info">Add your task</button>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import taskStore from '@/store/task';

export default {
  name: 'NewTaskNova',
  data() {
    return {
      taskItem: {
        id: 1,
        userId: '',
        title: 'crear tareas',
        priority: 5,
        estimate: 10,
        insertedAt: ' ',
        isComplete: false,
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
  async created() {
    // no sé bien qué hace pero está en App.vue para la creacion de usuario
    try {
      await this.fetchTasks(); // here we call fetch user
      console.log(this.tasks);
    } catch (e) {
      console.error(e);
    }
  },
};
</script>
