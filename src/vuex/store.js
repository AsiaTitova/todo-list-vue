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
    ADD_TASKS: (state, tasks) => {
      state.tasks.push(tasks);
    },
    DELETE_TASKS: (state, tasks) => {
      console.log(state.tasks);
      const index = state.tasks.map(item => item.id).indexOf(tasks.id);
      console.log(index);
      state.tasks.splice(index, 1);
    },
    SET_SUBTASKS: (state, subtasks) => {
      state.subtasks = subtasks;
    },
    ADD_SUBTASKS: (state, subtasks) => {
      state.subtasks.push(subtasks);
    },
  },
  actions: {
    GET_TASKS({commit}) {
      return axios('http://localhost:3001/lists?_embed=subtasks', {
        method: 'GET'
      }).then((tasks) => {
        commit('SET_TASKS', tasks.data);
        return tasks;
      }).catch((error) => {
        console.log(error);
      })
    },
    ADD_TASKS({commit}, context) {
      return axios.post('http://localhost:3001/lists', context).then((tasks) => {
        commit('ADD_TASKS', tasks.data);
        return tasks;
      }).catch((error) => {
        console.log(error);
      })
    },
    DELETE_TASKS({commit}, params) {
      return axios('http://localhost:3001/lists/' + params, {
        method: 'DELETE'
      }).then((tasks) => {
        commit('DELETE_TASKS', tasks.data);
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
    },
    ADD_SUBTASKS({commit}, context) {
      return axios.post('http://localhost:3001/subtasks', context).then((subtasks) => {
        commit('ADD_TASKS', subtasks.data);
        return subtasks;
      }).catch((error) => {
        console.log(error);
      })
    },
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
