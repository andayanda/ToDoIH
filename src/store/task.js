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
    async updateTask(id, title, description, isComplete) {
      const { data, error } = await supabase
        .from('tasks')
        .update({
          title,
          description,
          isComplete,
        })
        .match({
          id,
        });
      if (error) throw error;
      else if (data.length) {
        const taskIndex = this.tasks.findIndex(
          (task) => task.id === id,
        );
        this.tasks[taskIndex].title = data[0].title;
        this.tasks[taskIndex].description = data[0].description;
        this.tasks[taskIndex].isComplete = data[0].isComplete;
      }
    },
    getTaskByID(taskId) {
      return this.tasks.find((task) => task.id === parseInt(taskId, 10));
    },
    async deleteTask(title, description, priority, estimate, isComplete) {
      const { data, error } = await supabase
        .from('tasks')
        .delete({
          title,
          description,
          priority,
          estimate,
          isComplete,
        })
        .match({
          title,
          description,
          priority,
          estimate,
          isComplete,
        });
      if (error) throw error;
      else if (data.length) {
        this.tasks.filter(data[0]);
      }
    },
    // getTaskByID(taskId) {
    //   return this.tasks.find((task) => task.id === taskId);
    // },
  },
});
