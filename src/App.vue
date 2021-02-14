<template>
  <div id="app" class="app">
    <Promo/>
    <router-view/>
  </div>
</template>

<script>
import Promo from "./components/Todo/Promo.vue";
import Home from "./components/Todo/Home.vue";
import Todo from "./components/Todo/Todo.vue";

import style from "./sass/style.scss"

export default {
  name: "App",
  components: {
    Promo,
    Home,
    Todo
  }
}

</script>
