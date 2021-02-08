<template>
  <div id="app" class="app">
    <Promo/>
    <TaskContainer/>
    <SubtaskContainer/>
  </div>
</template>

<script>
import Promo from "./components/Promo.vue";
import TaskContainer from "./components/TaskContainer.vue";
import SubtaskContainer from "./components/SubtaskContainer.vue";

import style from "./sass/style.scss";

export default {
  name: "App",
  components: {
    Promo,
    TaskContainer,
    SubtaskContainer
  }
}

</script>
