<template>
  <li class="task__item"
    @click="setActiveClass; getCurrentTask(index); getCurrentId(index)">
      <h2 class="task__name">{{text}}</h2>
      <button class="task__delete" type="button" @click="onRemoveTasks">
        <icon-base
        viewBox="0 0 40 40"
        icon-name="delete"><icon-delete /></icon-base>
      </button>
  </li>
</template>

<script>
  import IconBase from "./IconBase.vue"
  import IconDelete from "../assets/img/icons/IconDelete.vue"
  import IconQuickly from "../assets/img/icons/IconQuickly";
  import {mapActions, mapGetters} from 'vuex';

  export default {
    name: "TaskItem",
    data: () => ({
      isActive: false
    }),
    props: {
      index: Number,
      id: String,
      text: String,
      completed: Boolean,
      quickly: Boolean
    },
    components: {
      IconBase,
      IconDelete,
      IconQuickly
    },
    methods: {
      ...mapActions([
        'DELETE_TASKS'
      ]),
      setActiveClass(evt) {
        let items = document.querySelectorAll(".task__item");
        items.forEach(function(item) {
          item.classList.remove("task__item--active");
          evt.currentTarget.classList.add("task__item--active");
        });
      },
      toggleComplated(index) {
        this.$emit("onToggleComplated", index);
      },
      onRemoveTasks() {
        this.$store.dispatch('DELETE_TASKS', this.id);
      },
      getCurrentTask(index) {
        this.$emit("getCurrentTask", index);
      },
      getCurrentId(index) {
        this.$emit("getCurrentId", index);
      }
    },
    computed: {
      ...mapGetters([
        'TASKS'
      ])
    }
  }
</script>
