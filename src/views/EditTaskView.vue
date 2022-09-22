<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div>
    <input
      type="title"
      class="form-control"
      id="title"
      v-model="title"
      :placeholder="task.title"
    />
    <label for="title" class="form-floating"></label>
  </div>
  <div>
    <textarea
      name="description"
      class="form-control"
      :placeholder="task.description"
      id="description"
      v-model="description"
    >
    </textarea>
  </div>
  <div class="col">
      <select class="form-select col-sm-10" v-model="estimate">
        <option value="">Estimate time in days</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        <option value="3">Four</option>
        <option value="3">Five</option>
      </select>
    </div>
   <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value="false"
          id="isComplete"
          v-model="isComplete"
        />
        <label class="form-check-label" for="isComplete"> Completed </label>
      </div>
  <button @click="handleUpdateTask" class="btn btn-info">
    Update your task
  </button>
</template>

<script>
import { mapActions } from 'pinia';
import taskStore from '@/store/task';

export default {
  name: 'EditTaskView',
  data() {
    return {
      task: null,
      title: '',
      description: '',
      isComplete: false,
    };
  },
  methods: {
    ...mapActions(taskStore, ['updateTask', 'getTaskByID']),
    handleUpdateTask() {
      const editedTask = {
        id: this.task.id,
        title: this.title,
        description: this.description,
        isComplete: this.isComplete,

      };
      console.log(editedTask);
      this.updateTask(
        editedTask.id,
        editedTask.title,
        editedTask.description,
        editedTask.isComplete,
      );
      this.$router.push({ path: '/tasks' });
    },
  },
  created() {
    const { taskId } = this.$route.params;
    if (taskId) {
      this.task = this.getTaskByID(taskId);
    }
  },
};
</script>
