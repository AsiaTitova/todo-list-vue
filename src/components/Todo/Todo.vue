<template>
  <div class="task__wrap">
    <TaskContainer :tasks="TASKS"/>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import TaskContainer from "./Tasks/TaskContainer.vue";

export default {
  name: "Todo",
  components: {
    TaskContainer
  },
  methods: {
    ...mapActions([
      'GET_TASKS'
    ]),
  },
  computed: {
    ...mapGetters([
      'TASKS'
    ])
  },
  mounted() {
    this.GET_TASKS()
  }
}

</script>
