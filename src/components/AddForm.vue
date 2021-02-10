<template>
  <div class="task__add-form add-form">
    <form method="POST">
      <input class="add-form__input" type="text" id="add-task" v-model="text">
      <label class="add-form__label visually-hidden" for="add-task">Добавить задачу</label>
      <button @click="onAddTask" class="add-form__submit" type="button">Добавить</button>
      <label v-if="quickly" class="add-form__label add-form__label--quickly" for="quickly">Срочно</label>
      <input v-if="quickly" class="add-form__checkbox visually-hidden" type="checkbox" id="quickly">
    </form>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'AddForm',
    data: () => ({
      text: ""
    }),
    props: {
      quickly: Boolean,
      newId: Function
    },
    methods: {
      onAddTask() {
        axios.
        post('http://localhost:3001/tasks', {
          text: this.text
        }).then(response => {
          document.querySelector(".add-form__input").value='';
        })
      },
      addTask() {
        this.$emit("onAddTask");
      }
    }
  }
</script>
