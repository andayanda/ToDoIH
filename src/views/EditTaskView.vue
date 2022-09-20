<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div>
    <input
      type="title"
      class="form-control"
      id="title"
      v-model="task.title"
      placeholder="{{task.title}}"
    />
    <label for="title" class="form-floating"></label>
  </div>
  <div>
    <textarea
      name="description"
      class="form-control"
      placeholder="Leave a comment here"
      id="description"
      v-model="task.description"
    >
    </textarea>
  </div>
  <div class="col">
      <select class="form-select col-sm-10" v-model="task.estimate">
        <option selected>Estimate time in days</option>
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
          value="true"
          id="isComplete"
          v-model="task.isComplete"
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
    };
  },
  methods: {
    ...mapActions(taskStore, ['updateTask', 'getTaskByID']),
    handleUpdateTask() {
      const editedTask = {
        title: this.title,
        description: this.description,
        priority: this.priority,
        estimate: this.estimate,
        isComplete: this.isComplete,
      };
      this.updateTask(
        editedTask.title,
        editedTask.description,
        editedTask.priority,
        editedTask.estimate,
        editedTask.isComplete,
      );
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
