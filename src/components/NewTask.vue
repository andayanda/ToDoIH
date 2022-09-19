<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div class="form">
    <form>
      <div class="row mb-3">
        <div>
          <input
            type="title"
            class="form-control"
            id="title"
            v-model="title"
            placeholder="Enter Task"
          />
          <label for="title" class="form-floating"></label>
        </div>
      </div>
      <div class="form-floating">
        <div>
          <textarea
            name="description"
            class="form-control"
            placeholder="Leave a comment here"
            id="description"
            v-model="description"
          >
          </textarea>
          <label for="description" class="col-sm-2 col-form-label"></label>
        </div>
      </div>
      <div class="row">
        <fieldset class="col">
          <!-- <legend class="col-form-label col-sm-2 pt-0">Priority</legend> -->
          <div class="col-sm-6">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="priority"
                id="priority1"
                value="1"
                checked=""
                v-model="priority"
              />
              <label class="form-check-label" for="priority1"> Urgent </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="priority"
                id="priority2"
                value="2"
                v-model="priority"
              />
              <label class="form-check-label" for="priority2">
                Important
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="priority"
                id="priority3"
                value="3"
                v-model="priority"
              />
              <label class="form-check-label" for="priority3"> Can wait </label>
            </div>
          </div>
        </fieldset>
      <div class="col">
      <select class="form-select col-sm-10" v-model="estimate">
        <option selected>Estimate time in days</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        <option value="3">Four</option>
        <option value="3">Five</option>
      </select>
    </div>
      </div>
      <!-- <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value="true"
          id="isComplete"
          v-model="isComplete"
        />
        <label class="form-check-label" for="isComplete"> Completed </label>
      </div> -->
    </form>
  </div>
  <button @click="handleCreateTask" class="btn btn-info">Add your task</button>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import taskStore from '@/store/task';
import userStore from '@/store/user';

export default {
  name: 'NewTask.vue',
  data() {
    return {
      title: '',
      description: '',
      priority: 1,
      estimate: 1,
      // isComplete: false,
    };
  },

  computed: {
    ...mapState(taskStore, ['tasks']),
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(taskStore, ['createTask']),
    handleCreateTask() {
      const taskItem = {
        userId: this.user.id,
        title: this.title,
        description: this.description,
        priority: this.priority,
        estimate: this.estimate,
        // isComplete: this.isComplete,
      };
      this.createTask(
        taskItem.userId,
        taskItem.title,
        taskItem.description,
        taskItem.priority,
        taskItem.estimate,
        // taskItem.isComplete,
      );
    },
  },
};
</script>
<style>
  .container{
    margin-top: 2em;
    margin-bottom: 2em;
  }
  .form {
    margin-bottom: 3em;
}
</style>
