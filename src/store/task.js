// /store/task.js

import { defineStore } from 'pinia';
import supabase from '../supabase/index';

export default defineStore('tasks', {
  state: () => ({
    taskCreated: null,
    tasks: [],
  }),
  actions: {
    async fetchTasks() {
      const { data: tasks } = await supabase
        .from('tasks')
        .select('*')
        .order('id', { ascending: false });
      this.tasks = tasks;
    }, // create a new task
    async createTask(task) {
      const { taskReturned, error } = await supabase.from('tasks').insert(task);
      if (error) throw error;
      else this.taskCreated = taskReturned;
    },
  },
});
