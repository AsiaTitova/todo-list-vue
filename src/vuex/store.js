import Vue from 'vue'
import Vuex from 'vuex'
import tasks from './modules/tasks'
import subtasks from './modules/subtasks'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
      tasks,
      subtasks
  }
})
