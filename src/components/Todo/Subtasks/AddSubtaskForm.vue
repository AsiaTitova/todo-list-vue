<template>
  <div v-if="params !== ''" class="task__add-form add-form">
    <form method="POST">
      <input class="add-form__input add-form__input--subtasks" type="text" id="add-task" v-model="text">
      <label class="add-form__label visually-hidden" for="add-task">Добавить задачу</label>
      <label class="add-form__label add-form__label--quickly" for="quickly">Срочно</label>
      <input class="add-form__checkbox" type="checkbox" id="quickly" v-model="checked">
      <button @click="addSubtasks(); onResetText()" class="add-form__button" type="button">Добавить</button>
      <button @click="onResetText()" class="add-form__button" type="button">Отмена</button>
    </form>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex';

  export default {
    name: 'AddSubtaskForm',
    data: () => ({
      text: '',
      checked: false
    }),
    props: {
      params: String
    },
    methods: {
      ...mapActions([
        'ADD_SUBTASKS'
      ]),
      onResetText() {
        document.querySelector('.add-form__input--subtasks').value = '';
      },
      addSubtasks() {
        this.$store.dispatch('ADD_SUBTASKS', {
          text: this.text,
          quickly: this.checked,
          listId: this.params,
          completed: this.checked,
          data: this.setDate()
        });
      },
      setDate() {
        let data = new Date();
        let day = data.getDate();
        let month = data.getMonth();
        let year = data.getFullYear();
        let hours = data.getHours();
        let minutes = data.getMinutes();
        let fullData = day + '.' + month + '.' + year + ' ' + hours + ':' + minutes;
        return fullData;
      }
    },
    computed: {
      ...mapGetters([
        'SUBTASKS',
        'TASKS'
      ])
    }
  }
</script>
