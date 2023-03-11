<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="flex items-center justify-between md:px-6">
    <div>
      <RouterLink to="/"><img src="../assets/logo.svg" alt="" /></RouterLink>
    </div>
    <div class="md:basis-[65%] lg:basis-[58%]">
      <nav class="w-full">
        <button class="md:hidden">X</button>
        <div class="hidden md:flex md:justify-between md:items-center md:w-full">
          <ul
            class="md:flex md:justify-between md:basis-1/2 lg:basis-2/5 xl:basis-[30%] text-base font-semibold"
          >
            <li><RouterLink to="/counter">Counter</RouterLink></li>
            <li><RouterLink to="/alarm">Alarm</RouterLink></li>
            <li><RouterLink to="/stopwatch">Stopwatch</RouterLink></li>
          </ul>
          <div>
            <a
              class="px-4 py-1.5 md:py-4 md:px-6 flex items-center text-base font-bold text-white bg-navybody border-0 rounded-full cursor-pointer"
              href=""
              ><span class="mr-2">Get started</span>
              <span
                ><svg
                  width="20"
                  height="20"
                  viewBox="0 0 50 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M40.422 23.2828C33.0401 23.2559 26.3518 23.3166 19.6816 23.1845C14.5791 23.0856 9.47627 22.7603 4.37129 22.5157C2.36731 22.4154 0.533123 21.946 0.6806 19.4077C0.797874 17.4762 3.31767 15.9409 5.50955 16.3957C15.6841 18.5211 26.0041 17.4988 36.9117 17.6878C34.7379 13.7194 32.693 10.2734 30.9712 6.66448C30.3266 5.31391 29.9446 3.46671 30.3592 2.10341C30.635 1.18192 32.4512 0.29678 33.6648 0.134615C35.7363 -0.137174 36.8257 1.36201 37.6803 3.17676C39.6778 7.41145 41.7309 11.629 44.0193 15.6982C44.7363 16.9683 46.192 17.9036 47.4736 18.7388C50.8768 20.9451 50.6527 23.666 47.421 25.9965C45.33 27.5067 43.9228 30.0093 42.318 32.1458C40.2004 34.9693 38.2032 37.8887 36.1109 40.7304C35.0706 42.1463 30.9496 42.8587 29.6668 41.8078C27.7727 40.2553 29.091 38.7537 30.0618 37.4455C32.4583 34.2398 35.0114 31.1491 37.4283 27.9558C38.3716 26.7101 39.1127 25.3189 40.4074 23.2655L40.422 23.2828Z"
                    fill="white"
                  /></svg></span
            ></a>
          </div>
        </div>
      </nav>
    </div>
  </section>
</template>
