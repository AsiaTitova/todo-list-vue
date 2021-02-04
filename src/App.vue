<template>
  <div id="app" class="app">
    <Promo/>
    <TaskList/>
  </div>
</template>

<script>
import Promo from "./components/Promo.vue";
import TaskList from "./components/TaskList.vue";
import TaskItem from "./components/TaskItem.vue";

import style from "./sass/style.scss";

export default {
  name: "App",
  components: {
    Promo,
    TaskList,
    TaskItem
  }
}

</script>
