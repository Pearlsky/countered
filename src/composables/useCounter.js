import { useStore } from 'vuex'
import { computed } from 'vue'

const useCounter = () => {
  const store = useStore()

  const getCount = computed(() => {
    return store.getters.retrieveCounter
  })
  const increaseCount = () => {
    store.commit('incrementCounter')
  }
  const decreaseCount = () => {
    store.commit('decrementCounter')
  }
  const resetCount = () => {
    store.commit('resetCounter')
  }
  const setCount = (payload) => {
    if (payload !== undefined) {
      store.commit('setCounterValue', payload)
    }
  }

  return { getCount, increaseCount, decreaseCount, resetCount, setCount }
}

export default useCounter
