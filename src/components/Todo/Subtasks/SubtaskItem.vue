<template>
  <li class="subtask__item" @click="getCurrentId()">
    <form class="subtask__checkbox checkbox">
      <input class="checkbox__input visually-hidden" type="checkbox" :id="index" :checked="completed" @click="toggleComplated()">
      <label class="checkbox__label" :for="index">{{text}}</label>
      <icon-base
        class="checkbox__quickly"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        icon-name="quickly"
        iconColor="red"
        v-if="quickly"><icon-quickly /></icon-base>
        <p class="checkbox__data">{{data}}</p>
      <button class="checkbox__delete" type="button" @click="deleteSubtask(index); onRemoveSubtasks()">
        <icon-base
        viewBox="0 0 40 40"
        icon-name="delete"><icon-delete /></icon-base>
      </button>
    </form>
  </li>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex';
  import IconBase from "../../Icon/IconBase.vue"
  import IconDelete from "../../../assets/img/icons/IconDelete.vue"
  import IconQuickly from "../../../assets/img/icons/IconQuickly"

  export default {
    name: "TaskItem",
    data: () => ({
      subId: ''
    }),
    props: {
      index: Number,
      id: String,
      data: String,
      text: String,
      completed: Boolean,
      quickly: Boolean,
      subtasks: Array,
      params: String
    },
    components: {
      IconBase,
      IconDelete,
      IconQuickly
    },
    methods: {
      ...mapActions([
        'DELETE_TASKS',
        'COMPLETE_SUBTASKS',
        'COMPLETE_TASKS'
      ]),
      toggleComplated() {
        this.completed = !this.completed;
        this.$store.dispatch('COMPLETE_SUBTASKS', {
          params: this.id,
          data: {
            completed: this.completed
          }
        });
        console.log(this.params, this.id);
        let com = this.subtasks.every(item => item.completed === true);
        console.log(this.subtasks, com)
        if (com === true) {
        this.$store.dispatch('COMPLETE_TASKS', {
          params: this.params,
          data: {
            completed: true
          }
        })
        } else {
          this.$store.dispatch('COMPLETE_TASKS', {
          params: this.params,
          data: {
            completed: false
          }
        })
        }
      },

      onRemoveSubtasks() {
        this.$store.dispatch('DELETE_SUBTASKS', this.id);
      },
      deleteSubtask(index) {
        this.$emit("onDeleteSubtask", index);
      },
      getCurrentId() {
        console.log(this.$props.id)
        this.subId = this.$props.id;
        return this.subId;
      }
    },
    computed: {
      ...mapGetters([
        'TASKS'
      ])
    }
  }
</script>
