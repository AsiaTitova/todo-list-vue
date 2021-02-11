<template>
  <div class="task__add-form add-form">
    <form method="POST">
      <input class="add-form__input add-form__input--subtasks" type="text" id="add-task" v-model="text">
      <label class="add-form__label visually-hidden" for="add-task">Добавить задачу</label>
      <label class="add-form__label add-form__label--quickly" for="quickly">Срочно</label>
      <input class="add-form__checkbox visually-hidden" type="checkbox" id="quickly" v-model="checked">
      <button @click="onAddTask" class="add-form__button" type="button">Добавить</button>
      <button @click="onResetText" class="add-form__button" type="button">Отмена</button>
    </form>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'AddSubtaskForm',
    data: () => ({
      text: "",
      checked: false
    }),
    props: {
      quickly: Boolean,
      newId: Function
    },
    methods: {
      onAddTask() {
        axios.
        post('http://localhost:3001/tasks' + `${id}`, {
          subtasks: {
            text: this.text,
            quickly: this.checked
          }
        }).then(response => {
          document.querySelector(".add-form__input--subtasks").value='';
        })
      },
      onResetText() {
        document.querySelector('.add-form__input--subtasks').value = '';
      }
    }
  }
</script>
