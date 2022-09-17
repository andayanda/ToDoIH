<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div>
    <form>
      <div class="row mb-3">
        <label for="title" class="col-sm-2 col-form-label">Tittle</label>
        <div class="col-sm-10">
          <input type="title" class="form-control" id="title" />
        </div>
      </div>
      <div class="row mb-3">
        <label for="description" class="col-sm-2 col-form-label"
          >Description</label
        >
        <div class="col-sm-10">
          <textarea name="description" rows="10" cols="30"> </textarea>
        </div>
      </div>
      <fieldset class="row mb-3">
        <legend class="col-form-label col-sm-2 pt-0">Priority</legend>
        <div class="col-sm-10">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="gridRadios"
              id="gridRadios1"
              value="option1"
              checked=""
            />
            <label class="form-check-label" for="gridRadios1"> Urgent </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="gridRadios"
              id="gridRadios2"
              value="option2"
            />
            <label class="form-check-label" for="gridRadios2">
              Important
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="gridRadios"
              id="gridRadios3"
              value="option3"
            />
            <label class="form-check-label" for="gridRadios3"> Can wait </label>
          </div>
        </div>
      </fieldset>
      <select class="form-select form-select-sm" aria-label=".form-select-sm">
        <option selected>Estimate time in days</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        <option value="3">Four</option>
        <option value="3">Five</option>
      </select>
      <p>{{ today }}</p>
      <p>{{ expiration }}</p>
    </form>
  </div>
  <button @click="handleCreateTask" class="btn btn-info">Add your task</button>
  <!-- {{taskItem}} -->
</template>

<script>
import { mapState, mapActions } from 'pinia';
import taskStore from '@/store/task';
import userStore from '@/store/user';

export default {
  name: 'NewTask.vue',
  computed: {
    ...mapState(taskStore, ['tasks']),
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(taskStore, ['createTask']),
    handleCreateTask() {
      const taskItem = {
        userId: this.user.id,
        title: 'segunda tarea',
        description: 'Bla Bla Bla',
        priority: 1,
        estimate: 2,
        isComplete: false,
      };
      this.createTask(
        taskItem.userId,
        taskItem.title,
        taskItem.description,
        taskItem.priority,
        taskItem.estimate,
        taskItem.isComplete,
      );
    },
  },
};
</script>
