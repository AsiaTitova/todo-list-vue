<template>
  <div id="app" class="app">
    <Promo/>
    <router-view/>
  </div>
</template>

<script>
import Promo from "./components/Promo.vue";
import Home from "./components/Home.vue";
import Todo from "./components/Todo.vue";

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
