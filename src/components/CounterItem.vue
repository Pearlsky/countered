<script setup>
import { ref } from 'vue'
import useCounter from '../composables/useCounter'

const editValue = ref('')
const { getCount, increaseCount, decreaseCount, resetCount, setCount } = useCounter()
</script>

<template>
  <section>
    <span>{{ getCount }}</span>
    <div>
      <button @click="decreaseCount">-</button>
      <button @click="resetCount">Reset</button>
      <button @click="increaseCount">+</button>
    </div>
    <form action="">
      <input v-model="editValue" type="text" />
      <button
        type="button"
        @click="
          () => {
            setCount(editValue)
            editValue = ''
          }
        "
      >
        Set
      </button>
    </form>
  </section>
</template>
