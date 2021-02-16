import axios from 'axios';
import tasks from './tasks'

export default {
  state: {
    subtasks: []
  },
  mutations: {
    SET_SUBTASKS: (state, subtasks) => {
      state.subtasks = subtasks;
    },
    ADD_SUBTASKS: (state, subtasks) => {
      const task = tasks.state.tasks.find(task => task.id === subtasks.listId);
      console.log(task)
      task.subtasks.push(subtasks);
    },
    COMPLETE_SUBTASKS: (state, subtasks) => {
      subtasks.completed = !subtasks.completed;
    },
  },
  actions: {
    GET_SUBTASKS({commit}) {
      return axios(`http://localhost:3001/subtasks`, {
        method: 'GET'
      }).then((subtasks) => {
        commit('SET_SUBTASKS', subtasks.data);
        return subtasks;
      }).catch((error) => {
        console.log(error);
      })
    },
    ADD_SUBTASKS({commit}, context) {
      return axios.post(`http://localhost:3001/subtasks`, context).then((subtasks) => {
        commit('ADD_SUBTASKS', subtasks.data);
        return subtasks;
      }).catch((error) => {
        console.log(error);
      })
    },
    DELETE_SUBTASKS({commit}, params) {
      return axios(`http://localhost:3001/subtasks/` + params, {
        method: 'DELETE'
      }).then((subtasks) => {
        return subtasks;
      }).catch((error) => {
        console.log(error);
      })
    },
    COMPLETE_SUBTASKS({commit}, context) {
      return axios.patch(`http://localhost:3001/subtasks/` + context.params, context.data).then((subtasks) => {
        commit('COMPLETE_SUBTASKS', subtasks.data);
        return subtasks;
      }).catch((error) => {
        console.log(error);
      });
    }
  },
  getters: {
    SUBTASKS:(state) => (taskId) => {
      if (!state.tasks.length) return []

      try {
        return state.tasks.find(task => task.id == taskId.toString()).subtasks
      } catch (e) {
        console.log(e)
        return []
      }
    }
  }
}
