import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 0
  },
  mutations: {
    incrementCounter(state) {
      state.counter++
    },

    decrementCounter(state) {
      if (state.counter > 0) {
        state.counter--
      }
    },

    resetCounter(state) {
      state.counter = 0
    },

    setCounterValue(state, value) {
      state.counter = Number(value)
    }
  },
  actions: {},

  getters: {
    retrieveCounter(state) {
      return state.counter
    }
  }
})
