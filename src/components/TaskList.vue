<template>
  <div class="task__container">
    <h2 class="task__title">Список задач:</h2>
    <ul class="task__list">
      <TaskItem v-for="(task, index) in tasks"
                v-bind:key="index"
                :index="index"
                :id="task.id"
                :text="task.text"
                :completed="task.completed"
                @onToggleComplated="onToggleComplated"
                @onRemoveTask="onRemoveTask" />
    </ul>
    <AddForm @onAddTask="onAddTask"/>
  </div>
</template>

<script>
  import TaskItem from "./TaskItem.vue";
  import AddForm from "./AddForm.vue";

  export default {
    name: 'TaskList',
    data: () => ({
    tasks: [
      {
        id: "task1",
        text: "Изучить Vue.js",
        completed: false,
      },
      {
        id: "task2",
        text: "Купить продукты",
        completed: false,
      },
      {
        id: "task3",
        text: "Прочитать книги",
        completed: false,
      }
    ]
  }),
    components: {
      TaskItem, AddForm
    },
    methods: {
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
        this.tasks.splice(index, 1);
      }

    }
  }
</script>
