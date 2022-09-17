<template>
  <div v-for="item in tasks" :key="item.id">
  {{item.title}}
  {{item.description}}
  {{item.priority}}
  {{item.estimate}}
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
