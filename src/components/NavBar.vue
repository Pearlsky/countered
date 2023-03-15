<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const navIsOpen = ref('hidden')
const showNav = () => {
  navIsOpen.value = 'block'
}
const hideNav = () => {
  navIsOpen.value = 'hidden'
}
</script>

<template>
  <section class="flex items-center justify-between md:px-6">
    <div>
      <a href="/"><img src="../assets/logo.svg" alt="" /></a>
    </div>
    <div class="md:basis-[65%] lg:basis-[58%]">
      <nav class="w-full">
        <button @click="showNav" class="md:hidden">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 8H20" stroke="#141B34" stroke-width="2" stroke-linecap="round" />
            <path d="M4 16H20" stroke="#141B34" stroke-width="2" stroke-linecap="round" />
          </svg>
        </button>
        <div
          class="w-full h-full p-5 md:p-1 fixed top-0 left-0 md:static md:flex md:justify-between md:items-center md:w-full bg-[#ededee] md:bg-transparent"
          :class="navIsOpen"
        >
          <div class="flex justify-between md:hidden">
            <article>
              <a href="/"><img src="../assets/logo.svg" alt="" /></a>
            </article>
            <button @click="hideNav">
              <svg
                width="24"
                height="18"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 1.44287L0.5 14.4429"
                  stroke="#141B34"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M0.5 1.44287L13.5 14.4429"
                  stroke="#141B34"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <ul
            class="mt-12 md:mt-0 md:flex md:justify-between md:basis-1/2 lg:basis-2/5 xl:basis-[30%] text-base text-center md:text-left font-semibold"
          >
            <li class="mb-6 md:mb-0">
              <RouterLink
                @click="hideNav"
                to="/counter"
                class="block relative hover:before:content-highlight hover:before:absolute hover:before:top-[-2.5px] hover:before:left-[calc(50%-70px)] md:hover:before:left-[-70%]"
                >Counter</RouterLink
              >
            </li>
            <li class="mb-6 md:mb-0">
              <RouterLink
                to="/alarm"
                class="block relative hover:before:content-highlight hover:before:absolute hover:before:top-[-2.5px] hover:before:left-[calc(50%-70px)] md:hover:before:left-[-115%]"
                >Alarm</RouterLink
              >
            </li>
            <li class="mb-6 md:mb-0">
              <RouterLink
                to="/stopwatch"
                class="block relative hover:before:content-highlight hover:before:absolute hover:before:top-[-2.5px] hover:before:left-[calc(50%-70px)] md:hover:before:left-[-45%]"
                >Stopwatch</RouterLink
              >
            </li>
          </ul>
          <div class="flex justify-center md:block">
            <a
              class="w-fit px-4 py-3 md:py-4 md:px-6 flex items-center text-base font-bold text-white bg-navybody border-0 rounded-full cursor-pointer"
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
