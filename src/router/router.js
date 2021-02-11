import Vue from "vue";
import Router from "vue-router";
import Home from "../components/Home.vue";
import Todo from "../components/Todo.vue";
import TaskContainer from "../components/TaskContainer.vue";
import SubtaskContainer from "../components/SubtaskContainer.vue";

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
