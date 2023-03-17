<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section
    class="max-w-[1200px] mx-auto h-[calc(100vh-52px)] md:h-[calc(100vh-85px)] flex justify-center"
  >
    <div class="py-14 md:py-10">
      <div>
        <img src="../assets/cosmos.svg" alt="">
      </div>
      <div class="max-w-[600px] mx-auto md:my-28 text-[#424A68]">
        <h1 class="mt-12 md:mt-8 mb-4 md:mb-12 text-4xl md:text-[3rem] lg:text-[4rem] font-bold">Page Not Found</h1>
        <p class="text-lg md:text-xl lg:text-2xl">
          Oh no. We don't know how this happened, but we think you've hit rock-bottom somehow, can we
          <RouterLink class="text-blue-900 underline" to="/">take you home?</RouterLink>
        </p>
      </div>
    </div>
  </section>
</template>
