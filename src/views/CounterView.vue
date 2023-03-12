<script setup>
import CounterItem from '../components/CounterItem.vue'
</script>

<template>
  <section class="max-w-[1200px] mx-auto md:mt-8 h-[calc(100vh-50px)] md:h-[calc(100vh-78px)]">
    <div class="h-full w-full flex flex-col items-center justify-center">
      <div class="mb-8 md:mb-16 w-full max-w-[550px] mx-auto self-start">
        <h1 class="text-4xl md:text-5xl text-[#424A68] font-bold">Use Counter.</h1>
      </div>
      <CounterItem />
    </div>
  </section>
</template>
