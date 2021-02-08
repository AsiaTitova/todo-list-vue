<template>
  <li class="subtask__item" @click="toggleComplated">
    <form class="subtask__checkbox checkbox">
      <input class="checkbox__input visually-hidden" type="checkbox" :id="index" :checked="completed">
      <label class="checkbox__label" :for="index">{{text}}</label>
      <icon-base
        class="checkbox__quickly"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        icon-name="quickly"
        iconColor="red"
        v-if="quickly"><icon-quickly /></icon-base>
      <button class="checkbox__delete" type="button" @click="removeTask(index)">
        <icon-base
        viewBox="0 0 40 40"
        icon-name="delete"><icon-delete /></icon-base>
      </button>
    </form>
  </li>
</template>

<script>
  import IconBase from "./IconBase.vue"
  import IconDelete from "../assets/img/icons/IconDelete.vue"
  import IconQuickly from "../assets/img/icons/IconQuickly"

  export default {
    name: "TaskItem",
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
      toggleComplated(index) {
        this.$emit("onToggleComplated", index);
      },
      removeTask(index) {
        this.$emit("onRemoveTask", index);
      }
    }
  }
</script>
