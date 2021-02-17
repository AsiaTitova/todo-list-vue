import axios from 'axios';

export default {
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
    DELETE_TASKS: (state, params) => {
      const index = state.tasks.map(item => item.id).indexOf(params);
      console.log(index);
      state.tasks.splice(index, 1);
    },
    COMPLETE_TASKS: (state, tasks) => {
      tasks.completed = !tasks.completed;
    },
  },
  actions: {
    GET_TASKS({commit}) {
      return axios(`http://localhost:3001/lists?_embed=subtasks`, {
        method: 'GET'
      }).then((tasks) => {
        commit('SET_TASKS', tasks.data);
        tasks.data.sort((a, b) => a.text.localeCompare(b.text));
        return tasks;
      }).catch((error) => {
        console.log(error);
      })
    },
    ADD_TASKS({commit}, context) {
      return axios.post(`http://localhost:3001/lists`, context).then((tasks) => {
        commit('ADD_TASKS', tasks.data);
        return tasks;
      }).catch((error) => {
        console.log(error);
      })
    },
    DELETE_TASKS({commit}, params) {
      return axios.delete(`http://localhost:3001/lists/` + params).then((tasks) => {
        commit('DELETE_TASKS', params);
      })
      .catch((error) => {
        console.log(error);
      })
    },
    COMPLETE_TASKS({commit}, context) {
      return axios.patch(`http://localhost:3001/lists/` + context.params, context.data).then((tasks) => {
        commit('COMPLETE_TASKS', tasks.data);
        return tasks;
      }).catch((error) => {
        console.log(error);
      });
    }
  },
  getters: {
    TASKS(state) {
      return state.tasks;
    }
  }
}
