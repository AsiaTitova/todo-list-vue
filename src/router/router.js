import Vue from "vue";
import Router from "vue-router";
import Home from "../components/Todo/Home.vue";
import Todo from "../components//Todo/Todo.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/todo/:id",
      component: Todo,
      name: 'Todo'
    },
    {
      path: "/todo",
      component: Todo
    }
  ]
})
