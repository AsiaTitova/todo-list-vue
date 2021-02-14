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
      <ul class="task__list">
        <TaskItem v-for="(task, index) in tasks"
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
  import IconBase from "../../Icon/IconBase.vue";
  import IconBack from "../../../assets/img/icons/IconBack.vue";
  import SubtaskContainer from "../Subtasks/SubtaskContainer.vue";

  export default {
    name: 'TaskContainer',
    data: () => ({
      subtasks: [],
      params: ''
    }),
    props: {
      tasks: Array
    },
    components: {
      TaskItem, AddForm, IconBase, IconBack, SubtaskContainer
    },
    methods: {
      getCurrentTask(index) {
        let currentTask = this.tasks.filter(task => this.tasks[index].id === task.id);
        this.subtasks = currentTask[0].subtasks;
        if (this.subtasks.id !== this.tasks[index].id) {
          this.$router.push({name: 'Todo', params: {id: this.tasks[index].id} });
        }
        return this.subtasks;
      },
      getCurrentId(index) {
        this.params = this.tasks[index].id;
        return this.params;
      }
    }
  }
</script>
