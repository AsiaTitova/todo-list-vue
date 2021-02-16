// import Vue from 'vue';
// import Vuex from 'vuex';
// import axios from 'axios';

// Vue.use(Vuex)

// let store = new Vuex.Store({
//   state: {
//     tasks:[]
//   },
//   mutations: {
//     SET_TASKS: (state, tasks) => {
//       state.tasks = tasks;
//     },
//     ADD_TASKS: (state, tasks) => {
//       state.tasks.push(tasks);
//     },
//     DELETE_TASKS: (state, params) => {
//       const index = state.tasks.map(item => item.id).indexOf(params);
//       console.log(index);
//       state.tasks.splice(index, 1);
//     },
//     SET_SUBTASKS: (state, subtasks) => {
//       state.subtasks = subtasks;
//     },
//     ADD_SUBTASKS: (state, subtasks) => {
//       const task = state.tasks.find(task => task.id === subtasks.listId);
//       task.subtasks.push(subtasks);
//     },
//     DELETE_SUBTASKS: (state, subtasks) => {
//       const task = state.tasks.find(task => task.id === subtasks.listId);
//       console.log(task);
//       const index = task.map(item => item.id).indexOf(subtasks.id);
//       console.log(index);
//       task.subtasks.splice(index, 1);
//     },
//     COMPLETE_SUBTASKS: (state, subtasks) => {
//       subtasks.completed = !subtasks.completed;
//     },
//   },
//   actions: {
//     GET_TASKS({commit}) {
//       return axios(`http://localhost:3001/lists?_embed=subtasks`, {
//         method: 'GET'
//       }).then((tasks) => {
//         commit('SET_TASKS', tasks.data);
//         return tasks;
//       }).catch((error) => {
//         console.log(error);
//       })
//     },
//     ADD_TASKS({commit}, context) {
//       return axios.post(`http://localhost:3001/lists`, context).then((tasks) => {
//         commit('ADD_TASKS', tasks.data);
//         return tasks;
//       }).catch((error) => {
//         console.log(error);
//       })
//     },
//     DELETE_TASKS({commit}, params) {
//       return axios.delete(`http://localhost:3001/lists/` + params).then((tasks) => {
//         commit('DELETE_TASKS', params);
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//     },
//     GET_SUBTASKS({commit}) {
//       return axios(`http://localhost:3001/subtasks`, {
//         method: 'GET'
//       }).then((subtasks) => {
//         commit('SET_SUBTASKS', subtasks.data);
//         return subtasks;
//       }).catch((error) => {
//         console.log(error);
//       })
//     },
//     ADD_SUBTASKS({commit}, context) {
//       return axios.post(`http://localhost:3001/subtasks`, context).then((subtasks) => {
//         commit('ADD_SUBTASKS', subtasks.data);
//         return subtasks;
//       }).catch((error) => {
//         console.log(error);
//       })
//     },
//     DELETE_SUBTASKS({commit}, params) {
//       return axios(`http://localhost:3001/subtasks/` + params, {
//         method: 'DELETE'
//       }).then((subtasks) => {
//         commit('DELETE_SUBTASKS', subtasks.data);
//         return subtasks;
//       }).catch((error) => {
//         console.log(error);
//       })
//     },
//     COMPLETE_SUBTASKS({commit}, context) {
//       return axios.patch(`http://localhost:3001/subtasks/` + context.params, context.data).then((subtasks) => {
//         commit('COMPLETE_SUBTASKS', subtasks.data);
//         return subtasks;
//       }).catch((error) => {
//         console.log(error);
//       });
//     }
//   },
//   getters: {
//     TASKS(state) {
//       return state.tasks;
//     },
//     SUBTASKS:(state) => (taskId) => {
//       if (!state.tasks.length) return []

//       try {
//         return state.tasks.find(task => task.id == taskId.toString()).subtasks
//       } catch (e) {
//         console.log(e)
//         return []
//       }
//     }
//   }
// })

// export default store;

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
