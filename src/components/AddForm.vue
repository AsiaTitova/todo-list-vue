<template>
  <div class="task__add-form add-form">
    <form method="POST">
      <input class="add-form__input" type="text" id="add-task" v-model="text">
      <label class="add-form__label visually-hidden" for="add-task">Добавить задачу</label>
      <button @click="addTask" class="add-form__submit" type="button">Добавить</button>
      <label class="add-form__label add-form__label--quickly" for="quickly">Срочно</label>
      <input class="add-form__checkbox visually-hidden" type="checkbox" id="quickly" checked>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'AddForm',
    data: () => ({
      text: "",
    }),
    methods: {
      addTask() {
        if(this.text) {
          this.$emit("onAddTask", this.text);
          this.text = "";
        }
      }
    }
  }
</script>
