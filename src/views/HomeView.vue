<template>
  <div class="container"></div>
  <h1>Esta es la vista Home</h1>
  <NewTask />
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
