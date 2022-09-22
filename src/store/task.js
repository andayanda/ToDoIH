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
    ) {
      const { data, error } = await supabase.from('tasks').insert([
        {
          userId,
          title,
          description,
          priority,
          estimate,
        },
      ]);
      if (error) throw error;
      else if (data.length) {
        this.tasks.push(data[0]);
      }
    },
    // update task
    async updateTask(id, title, description, isComplete) {
      const dataToUpdate = {};
      if (title !== '') {
        dataToUpdate.title = title;
      }
      if (description !== '') {
        dataToUpdate.description = description;
      }
      if (isComplete !== false) {
        dataToUpdate.isComplete = isComplete;
      }
      const { data, error } = await supabase
        .from('tasks')
        .update(dataToUpdate)
        .match({
          id,
        });
      if (error) throw error;
      else if (data.length) {
        const taskIndex = this.tasks.findIndex((task) => task.id === id);
        this.tasks[taskIndex].title = data[0].title;
        this.tasks[taskIndex].description = data[0].description;
        this.tasks[taskIndex].isComplete = data[0].isComplete;
      }
    },
    getTaskByID(taskId) {
      return this.tasks.find((task) => task.id === parseInt(taskId, 10));
    },
    // delete task
    async deleteTask(id) {
      const { data, error } = await supabase
        .from('tasks')
        .delete()
        .match({
          id,
        });
      if (error) throw error;
      else if (data.length) {
        const taskIndex = this.tasks.findIndex((task) => task.id === id);
        this.tasks.splice(taskIndex, 1);
      }
    },

  },
});
