// /store/task.js

import { defineStore } from 'pinia';
import supabase from '../supabase/index';

export default defineStore('tasks', {
  state: () => ({
    taskCreated: null,
    tasks: [],
  }),
  actions: {
    async fetchTasks() { // Read tasks
      const { data: tasks } = await supabase
        .from('tasks')
        .select('*')
        .order('id', { ascending: false });
      this.tasks = tasks;
    }, // create a new task
    async createTask(id, userId, title, isComplete, insertedAt, priority, estimate) {
      const { data, error } = await supabase
        .from('tasks')
        .insert([
          {
            id,
            userId,
            title,
            isComplete,
            insertedAt,
            priority,
            estimate,
          },
        ]);
      if (error) throw error;
      else this.taskCreated = data;
    },
  },
});
