// /store/task.js

import { defineStore } from 'pinia';
import supabase from '../supabase/index';

export default defineStore('tasks', {
  state: () => ({
    tasks: [],
  }),
  actions: {
    async fetchTasks() {
      // Read tasks
      const { data: tasks } = await supabase
        .from('tasks')
        .select('*')
        .order('id', { ascending: false });
      this.tasks = tasks;
    }, // create a new task
    async createTask(
      userId,
      title,
      description,
      priority,
      estimate,
      isComplete,
    ) {
      const { data, error } = await supabase.from('tasks').insert([
        {
          userId,
          title,
          description,
          priority,
          estimate,
          isComplete,
        },
      ]);
      if (error) throw error;
      else if (data.length) {
        this.tasks.push(data[0]);
      }
    },
  },
});
