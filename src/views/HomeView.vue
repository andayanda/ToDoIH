<template>

  <h1>My To-Do app</h1>
  <NewTask />

</template>

<script>
// @ is an alias to /src

import NewTask from '@/components/NewTask.vue';

export default {
  name: 'HomeView',
  components: { NewTask },
};
</script>
