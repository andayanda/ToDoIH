<template>
  <div>{{task.title}}</div>
</template>

<script>
import { mapActions } from 'pinia';
import taskStore from '@/store/task';

export default {
  name: 'EditTaskView',
  data() {
    return {
      task: null,
    };
  },

  methods: {
    ...mapActions(taskStore, ['updateTask', 'getTaskByID']),
  },
  created() {
    const { taskId } = this.$route.params;
    if (taskId) {
      this.task = this.getTaskByID(taskId);
    }
  },
};
</script>
