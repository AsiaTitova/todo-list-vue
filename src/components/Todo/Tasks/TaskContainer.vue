<template>
  <div class="wrap">
    <div class="task__container">
      <router-link to="/" class="task__link">
        <icon-base
            class="task__icon"
            width="459"
            height="459"
            viewBox="0 0 459 459"
            icon-name="back"
            iconColor="#2aaee4"><icon-back /></icon-base>
      </router-link>
      <h2 class="task__title">Список задач:</h2>
      <Filters  :tasks="tasks"
                :filter="filter"
                @getCompleteTasks="getCompleteTasks"/>
      <ul class="task__list">
        <TaskItem v-for="(task, index) in filteredTasks"
                  v-bind:key="index"
                  :index="index"
                  :id="task.id"
                  :text="task.text"
                  @getCurrentTask="getCurrentTask"
                  @getCurrentId="getCurrentId" />
      </ul>
      <AddForm />
    </div>
    <router-view/>
    <SubtaskContainer
      :subtasks="subtasks"
      :params="params" />
  </div>
</template>

<script>
  import TaskItem from "./TaskItem.vue";
  import AddForm from "./AddForm.vue";
  import Filters from "./Filters.vue";
  import IconBase from "../../Icon/IconBase.vue";
  import IconBack from "../../../assets/img/icons/IconBack.vue";
  import SubtaskContainer from "../Subtasks/SubtaskContainer.vue";

  export default {
    name: 'TaskContainer',
    data: () => ({
      subtasks: [],
      params: '',
      filtersTasks: [],
      selected: '',
      filter: [
        {text: 'Все', value: 'ALL'},
        {text: 'Исполненные', value: 'COMPLETE'},
        {text: 'Неисполненные', value: 'NO_COMPLETE'}
      ]
    }),
    props: {
      tasks: Array
    },
    components: {
      TaskItem, AddForm, IconBase, IconBack, SubtaskContainer, Filters
    },
    methods: {
      getCurrentTask(index) {
        let currentTask = this.filteredTasks.filter(task => this.filteredTasks[index].id === task.id);
        this.subtasks = currentTask[0].subtasks;
        this.$router.push({name: 'Todo', params: {id: this.tasks[index].id} });
        return this.subtasks;
      },
      getCurrentId(index) {
        this.params = this.filteredTasks[index].id;
        return this.params;
      },
      getCompleteTasks(value) {
        this.filtersTasks = [];
        this.subtasks = [];
        if (value === 'COMPLETE') {
          let newTasks = this.tasks.filter(task => task.completed === true);
          this.filtersTasks = newTasks;
          return this.filtersTasks;
        }
        if (value === 'NO_COMPLETE') {
          let newTasks = this.tasks.filter(task => task.completed === false);
          this.filtersTasks = newTasks;
          return this.filtersTasks;
        }
        if (value === 'ALL') {
          this.filtersTasks = [];
          return this.filtersTasks;
        }

      }

    },
    computed: {
      filteredTasks() {
        if (this.filtersTasks.length) {
          return this.filtersTasks;
        } else {
          return this.tasks;
        }
      }
    }
  }
</script>
