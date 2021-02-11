<template>
  <div class="task__add-form add-form">
    <form method="POST">
      <input class="add-form__input add-form__input--tasks" type="text" id="add-task" v-model="text">
      <label class="add-form__label visually-hidden" for="add-task">Добавить задачу</label>
      <button @click="onAddTasks(); onResetText()" class="add-form__button" type="button">Добавить</button>
      <button @click="onResetText" class="add-form__button" type="button">Отмена</button>
    </form>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex';

  export default {
    name: 'AddForm',
    data: () => ({
      text: ''
    }),
    props: {
      quickly: Boolean,
      newId: Function
    },
    methods: {
      ...mapActions([
        'ADD_TASKS'
      ]),
      onResetText() {
        document.querySelector('.add-form__input--tasks').value = '';
      },
      onAddTasks() {
        this.$store.dispatch('ADD_TASKS', { text: this.text });
      }
    },
    computed: {
      ...mapGetters([
        'TASKS'
      ])
    }
  }
</script>
