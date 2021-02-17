<template>
  <div class="subtask__container">
    <h2 class="subtask__title">Подзадачи:</h2>
    <ul class="subtask__list">
      <li class="subtasks__none" v-if="!subtasks">Нет подзадач</li>
      <SubtaskItem v-for="(subtask, index) in subtasks"
                v-bind:key="index"
                :index="index"
                :id="subtask.id"
                :data="subtask.data"
                :text="subtask.text"
                :completed="subtask.completed"
                :quickly="subtask.quickly"
                @onDeleteSubtask="onDeleteSubtask"
                :params="params"
                :subtasks="subtasks"/>
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
      text: '',
      refs: []
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
    onDeleteSubtask(index) {
      this.subtasks.splice(index, 1);
    }
  },
  ...mapGetters({
      storeSubtasks: 'subtasks'
    }),
    subtasks () {
      return this.storeSubtasks(this.params);
    }
}
</script>
