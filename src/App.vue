<script setup>
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue'
import BacklineItems from './components/BacklineItems.vue'
</script>

<template>
  <div class="w-full h-full bg-[#ededee]">
    <BacklineItems />
    <div class="h-full px-5 pt-5">
      <div class="relative">
        <div class="">
          <NavBar />
          <RouterView/>
        </div>
      </div>
    </div>
  </div>
</template>
