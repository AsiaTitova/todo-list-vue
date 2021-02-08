import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    tasks:[],
    subtasks: []
  },
  mutations: {
    SET_TASKS: (state, tasks) => {
      state.tasks = tasks;
    },
    SET_SUBTASKS: (state, subtasks) => {
      state.subtasks = subtasks;
    }
  },
  actions: {
    GET_TASKS({commit}) {
      return axios('http://localhost:3001/tasks', {
        method: 'GET'
      }).then((tasks) => {
        commit('SET_TASKS', tasks.data);
        return tasks;
      }).catch((error) => {
        console.log(error);
      })
    },
    GET_SUBTASKS({commit}) {
      return axios('http://localhost:3001/subtasks', {
        method: 'GET'
      }).then((subtasks) => {
        commit('SET_SUBTASKS', subtasks.data);
        return subtasks;
      }).catch((error) => {
        console.log(error);
      })
    }
  },
  getters: {
    TASKS(state) {
      return state.tasks;
    },
    SUBTASKS(state) {
      return state.subtasks;
    }
  }
})

export default store;
