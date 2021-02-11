<template>
  <div class="subtask__container">
    <h2 class="subtask__title">Подзадачи:</h2>
    <ul class="subtask__list">
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
      :quickly="quickly"
      @onAddTask="addTask(textValue, quicklyValue)"/>
  </div>
</template>

<script>
  import axios from 'axios';
  import {mapActions, mapGetters} from 'vuex';
  import SubtaskItem from "./SubtaskItem.vue";
  import AddSubtaskForm from "./AddSubtaskForm.vue";

  export default {
    name: 'SubtaskContainer',
    data: () => ({
      text: '',
      quickly: true
  }),
  props: {
      subtasks: Array
    },
  components: {
    SubtaskItem, AddSubtaskForm
  },
  methods: {
    ...mapActions([
      'GET_SUBTASKS'
    ]),
    onToggleComplated(index) {
      this.tasks[index] = !this.tasks[index];
    }
  },
  computed: {
      ...mapGetters([
        'SUBTASKS'
      ])
    },
    mounted() {
      this.GET_SUBTASKS()
    },
}
</script>
