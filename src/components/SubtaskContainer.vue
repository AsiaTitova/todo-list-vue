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
      :quickly="quickly"
      @onAddSubtasks="onAddSubtasks(context)"/>
  </div>
</template>

<script>
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
      tasks: Array,
      subtasks: Array
    },
  components: {
    SubtaskItem, AddSubtaskForm
  },
  methods: {
    ...mapActions([
        'ADD_SUBTASKS'
    ]),
    onToggleComplated(index) {
      this.tasks[index] = !this.tasks[index];
    },
    onAddSubtasks(index, context) {
      this.$store.dispatch('ADD_SUBTASKS', this.index , {context});
    }
  },
  computed: {
      ...mapGetters([
        'SUBTASKS'
      ])
    }
}
</script>
