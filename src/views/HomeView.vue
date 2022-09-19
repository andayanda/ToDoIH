<template>
  <div class="container">
  <h1>My To-Do app</h1>
  <NewTask />
</div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions } from 'pinia';
import taskStore from '@/store/task';
import NewTask from '@/components/NewTask.vue';

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
  components: { NewTask },
};
</script>
