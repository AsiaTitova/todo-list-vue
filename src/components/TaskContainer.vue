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
      <h2 class="task__title" @click="getCurrentTask">Список задач:</h2>
      <ul class="task__list">
        <TaskItem v-for="(task, index) in tasks"
                  v-bind:key="index"
                  :index="index"
                  :id="task.id"
                  :text="task.text"
                  @getCurrentTask="getCurrentTask"/>
      </ul>
      <AddForm />
    </div>
    <router-view/>
    <SubtaskContainer
      :subtasks="subtasks" />
  </div>
</template>

<script>
  import TaskItem from "./TaskItem.vue";
  import AddForm from "./AddForm.vue";
  import Loader from "./Loader.vue";
  import IconBase from "./IconBase.vue";
  import IconBack from "../assets/img/icons/IconBack.vue";
  import SubtaskContainer from "./SubtaskContainer.vue";

  export default {
    name: 'TaskContainer',
    data: () => ({
      subtasks: []
    }),
    props: {
      tasks: Array
    },
    components: {
      TaskItem, AddForm, Loader, IconBase, IconBack, SubtaskContainer
    },
    methods: {
      getCurrentTask(index) {
        this.$router.push({name: 'Todo', params: {id: this.tasks[index].id} })
        console.log(this.tasks[index].id);
        let currentTask = this.tasks.filter(task => this.tasks[index].id === task.id);
        this.subtasks = currentTask[0].subtasks;
        return this.subtasks;
      }
    }
  }
</script>
