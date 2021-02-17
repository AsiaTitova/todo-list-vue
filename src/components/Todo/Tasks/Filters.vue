<template>
  <form class="tasks__filters filters">
    <select class="filters__select" v-model="selected">
      <option v-for="(option, index) in filter"
              :key="index"
              :value="option.value">
              {{option.text}}</option>
    </select>
    <button class="filters__button" type="button" @click="completeTasks()">Найти</button>
  </form>
</template>

<script>
  export default {
    name: 'Filters',
    data: () => ({
      selected: ''
    }),
    props: {
      tasks: Array,
      filter: Array
    },
    methods: {
      completeTasks() {
        this.$emit("getCompleteTasks", this.selected);
      }
    }
  }
</script>
