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
  <label for="endDate">End Date:</label>
  <input type="date" id="endDate" name="endDate"  v-model="endDate">
  <div class="col">
      <select class="form-select col-sm-10" v-model="estimate">
        <option value="">Estimate time in days</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        <option value="4">Four</option>
        <option value="5">Five</option>
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
        <label class="form-check-label" for="isComplete"> Is it Completed? </label>
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
      endDate: '',
      estimate: 0,
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
        endDate: this.endDate,
        estimate: this.estimate,

      };

      this.updateTask(
        editedTask.id,
        editedTask.title,
        editedTask.description,
        editedTask.isComplete,
        editedTask.endDate,
        editedTask.estimate,
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
