<template>
  <div class="subtask__container">
    <h2 class="subtask__title">Список задач:</h2>
    <ul class="subtask__list">
      <SubtaskItem v-for="(subtask, index) in SUBTASKS"
                v-bind:key="index"
                :index="index"
                :id="subtask.id"
                :text="subtask.text"
                :completed="subtask.completed"
                :quickly="subtask.quickly"
                @onToggleComplated="onToggleComplated"
                @onRemoveTask="onRemoveTask" />
    </ul>
    <AddForm
      :quickly="quickly"
      @onAddTask="addTask(textValue, quicklyValue)"/>
  </div>
</template>

<script>
  import axios from 'axios';
  import {mapActions, mapGetters} from 'vuex';
  import SubtaskItem from "./SubtaskItem.vue";
  import AddForm from "./AddForm.vue";

  export default {
    name: 'SubtaskContainer',
    data: () => ({
      text: '',
      quickly: true
  }),
  components: {
    SubtaskItem, AddForm
  },
  methods: {
    ...mapActions([
      'GET_SUBTASKS'
    ]),
    onToggleComplated(index) {
      this.tasks[index] = !this.tasks[index];
    },
    addTask(textValue, quicklyValue) {
      axios.
      post('http://localhost:3001/subtasks', {
        text: textValue,
        quickly: quicklyValue
      }).then(response => {})
    },
    onRemoveTask(index) {
      this.tasks.splice(index, 1);
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
