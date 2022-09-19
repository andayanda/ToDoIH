<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <NewTask />
  <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value="true"
          id="isComplete"
          v-model="isComplete"
        />
        <label class="form-check-label" for="isComplete"> Completed </label>
      </div>
      <button @click="handleUpDateTask" class="btn btn-info">Update your task</button>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import taskStore from '@/store/task';
import userStore from '@/store/user';
import NewTask from '@/components/NewTask.vue';

export default {
  name: 'TaskItem.vue',
  computed: {
    ...mapState(taskStore, ['tasks']),
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(taskStore, ['updateTask']),
  },
  components: { NewTask },
};
</script>

<style>
</style>
