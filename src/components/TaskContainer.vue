<template>
  <div class="task__container">
    <h2 class="task__title">Список задач:</h2>
    <ul class="task__list">
      <TaskItem v-for="(task, index) in TASKS"
                v-bind:key="index"
                :index="index"
                :id="task.id"
                :text="task.text"
                :completed="task.completed"
                @onToggleComplated="onToggleComplated"
                @onRemoveTask="onRemoveTask" />
    </ul>
    <AddForm
      :quickly="quickly"
      @onAddTask="onAddTask"/>
  </div>
</template>

<script>
  import axios from 'axios';
  import {mapActions, mapGetters} from 'vuex';
  import TaskItem from "./TaskItem.vue";
  import AddForm from "./AddForm.vue";

  export default {
    name: 'TaskContainer',
    data: () => ({
      quickly: false
    }),
    components: {
      TaskItem, AddForm
    },
    methods: {
      ...mapActions([
        'GET_TASKS'
      ]),
      onToggleComplated(index) {
        this.tasks[index] = !this.tasks[index];
      },
      onAddTask(text) {
        this.tasks.push({
          text,
          completed: false
        })
      },
      onRemoveTask(index) {
        axios.
        delete('http://localhost:3001/tasks/ + ', {
          text: this.text
        }).then(response => {});
        this.tasks.splice(index, 1);
      }
    },
    computed: {
      ...mapGetters([
        'TASKS'
      ])
    },
    mounted() {
      this.GET_TASKS()
    },
  }
</script>
