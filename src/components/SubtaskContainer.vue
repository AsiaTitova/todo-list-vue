<template>
  <div class="subtask__container">
    <h2 class="subtask__title">Подзадачи:</h2>
    <ul class="subtask__list">
      <li class="subtasks__none" v-if="!subtasks">Нет подзадач</li>
      <SubtaskItem v-for="(subtask, index) in subtasks"
                v-bind:key="index"
                :index="index"
                :id="subtask.id"
                :text="subtask.text"
                :completed="subtask.completed"
                :quickly="subtask.quickly"
                @onToggleComplated="onToggleComplated" />
    </ul>
    <AddSubtaskForm
      :params="params"/>
  </div>
</template>

<script>
  import SubtaskItem from "./SubtaskItem.vue";
  import AddSubtaskForm from "./AddSubtaskForm.vue";

  export default {
    name: 'SubtaskContainer',
    data: () => ({
      text: ''
  }),
  props: {
      subtasks: Array,
      params: String
    },
  components: {
    SubtaskItem, AddSubtaskForm
  },
  methods: {
    onToggleComplated(index) {
      this.tasks[index] = !this.tasks[index];
    }
  }
}
</script>
