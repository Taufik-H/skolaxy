<template>
  <aside
    :class="{ '-translate-x-60': !sidebarMenu }"
    class="flex-none fixed transform xl:translate-x-0 duration-300 z-40 bg-white w-60 h-screen pt-4"
  >
  <div class="flex flex-row items-center">
  <div class="relative ">
     <h1 class="relative pl-16 mb-12 z-50 text-lg font-bold ">Skolaxy</h1>
      <svg
              class="absolute h-8  z-40  -top-1 left-14 "
              viewBox="0 0 79 79"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.2574 2.24264C37.6005 -0.100501 41.3995 -0.100505 43.7426 2.24264L76.7574 35.2574C79.1005 37.6005 79.1005 41.3995 76.7574 43.7426L43.7426 76.7574C41.3995 79.1005 37.6005 79.1005 35.2574 76.7574L2.24264 43.7426C-0.100501 41.3995 -0.100505 37.6005 2.24264 35.2574L35.2574 2.24264Z"
                fill="#65DAFF"
              />
            </svg>
   
  </div>
  </div>
    <ul>
      <li>
        <router-link to="/dashboard" class="pl-16 py-3 flex space-x-2">
          <inline-svg :src="home" />
          <span> Home </span>
        </router-link>
      </li>
      <li>
        <router-link to="/siswa" class="pl-16 py-3 flex space-x-2">
          <inline-svg :src="users" />
          <span> Siswa </span>
        </router-link>
      </li>
      <li>
        <router-link to="/kelas" class="pl-16 py-3 flex space-x-2">
          <inline-svg :src="airplay" />
          <span> Kelas </span>
        </router-link>
      </li>
      <li>
        <router-link to="/forum" class="pl-16 py-3 flex space-x-2">
          <inline-svg :src="target" />
          <span> Meet </span>
        </router-link>
      </li>
      <li>
        <router-link to="/presensi" class="pl-16 py-3 flex space-x-2">
          <inline-svg :src="trello" />
          <span> Presensi </span>
        </router-link>
      </li>
      <li>
        <router-link to="/pengaturan" class="pl-16 py-3 flex space-x-2">
          <inline-svg :src="settings" />
          <span> Pengaturan </span>
        </router-link>
      </li>
      <li>
        <router-link to="/" class="pl-16 py-3 flex space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
</svg>
          <span> Logout </span>
        </router-link>
      </li>
    </ul>
  </aside>
  <div
    v-if="sidebarMenu"
    @click="store.commit('toggleSidebarMenu', false)"
    class="bg-gray-400 w-screen xl:w-0 fixed h-screen xl:h-0 z-30 top-0 bg-opacity-50 transform duration-300"
  ></div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import home from '@/assets/svg/home.svg'
import users from '@/assets/svg/users.svg'
import airplay from '@/assets/svg/airplay.svg'
import target from '@/assets/svg/target.svg'
import trello from '@/assets/svg/trello.svg'
import settings from '@/assets/svg/settings.svg'

const store = useStore()

const sidebarMenu = computed(() => store.state.sidebarMenu)
</script>
