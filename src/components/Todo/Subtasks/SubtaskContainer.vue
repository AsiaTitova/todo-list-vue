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
                @onToggleComplated="onToggleComplated"
                @onDeleteSubtask="onDeleteSubtask" />
    </ul>
    <AddSubtaskForm
      :params="params"/>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
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
    ...mapActions([
        'COMPLETE_SUBTASKS'
      ]),
    onToggleComplated(index) {
      this.$store.dispatch('COMPLETE_SUBTASKS', {
        completed: this.checked,
      });
      this.subtasks[index] = !this.subtasks[index];
    },
    onDeleteSubtask(index) {
      console.log(this.subtasks);
      this.subtasks.splice(index, 1);
    },
  },
  ...mapGetters({
      storeSubtasks: 'subtasks'
    }),
    subtasks () {
      return this.storeSubtasks(this.params)
    }
}
</script>
