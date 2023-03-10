<script setup>
import NavBar from './components/NavBar.vue';
import BacklineItems from './components/BacklineItems.vue';
import HomeView from './views/HomeView.vue';
</script>

<template>
  <div class="w-full h-full bg-[#ededee]">
    <BacklineItems/>
    <div class="h-full p-5">
      <NavBar/>
      <HomeView/>
    </div>
  </div>
</template>
