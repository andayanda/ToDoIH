<!-- eslint-disable no-alert -->
<!-- eslint-disable no-alert -->
 <template >
 <p v-if="!tasks.length">
Todavía no tienes tareas</p>

  <div>
    <router-link
      v-for="item in tasks"
      :key="item.id"
      :to="`/task/${item.id}`"
      :class="{
        isImportant: item.priority === 1,
        isUrgent: item.priority === 2,
        isComplete: item.isComplete === true,
      }"
      class="itemBox"
    >
      <h4>{{ item.title }}</h4>

      <p>Tiempo estimado:
      {{ item.estimate }} Días</p>
      <!-- <p v-if="endDate!==null"> Vencimiento: -->
      <!-- {{ item.insertedAt.substring(0, 10) }} -->
     <!-- v-if="this.item.endDate !== 'null'" -->
      <p v-if="item.endDate" >Vencimiento:
      {{ item.endDate }}</p>
      <p v-else></p>
      <!-- {{item.insertedAt.substring(0, 10) - item.endDate}}  NAN-->
      <!-- Default dropend button -->
      <div class="btn-group dropend" v-if="item.description">
        <button
          type="button"
          class="btn btn-secondary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Description
        </button>
        <ul class="dropdown-menu">
          {{
            item.description
          }}
          <!-- Dropdown menu links -->
        </ul>
      </div>
      <button @click.prevent="handleDeleteTask(item.id)" class="btn-secondary">X</button>
    </router-link>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import taskStore from '@/store/task';
import userStore from '@/store/user';

export default {
  name: 'TaskList.vue',
  computed: {
    ...mapState(taskStore, ['tasks']),
    ...mapState(userStore, ['user']),
    // timeLeft() {
    //   return (this.insertedAt.substring(0, 10)) - (this.endDate)
    // },
  },
  methods: {
    ...mapActions(taskStore, ['fetchTasks', 'deleteTask']),
    handleDeleteTask(taskId) {
      this.deleteTask(taskId);
    },
  },
  created() {
    this.fetchTasks();
  },
};
</script>
<style>
.itemBox {
  display: flex;
  justify-content: space-around;
  text-decoration: none;
  color: black;
  background-color: rgb(181, 181, 191);
  margin: 1.5em;
}
.isImportant {
  background-color: rgb(255, 0, 149);
  color: aliceblue;
}
.isUrgent {
  background-color: rgb(69, 177, 89);
  color: aliceblue;
}
.isComplete{
  text-decoration: line-through;
  background-color: grey;
  color: black;
}
.isImportant a {
  background-color: rgb(210, 210, 237);
  border-color: black;
  color: aliceblue;
}
.close{
 color: black;
}
</style>
