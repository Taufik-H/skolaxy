<template>
  <nav
    class="z-20 flex-grow fixed flex items-center justify-between w-full bg-white self-start py-4 px-3 xl:pl-72 mb-8"
    :class="props.paddingRight"
  >
    <!-- toggle icon -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 cursor-pointer xl:hidden"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      @click="store.commit('toggleSidebarMenu', true)"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h8m-8 6h16"
      />
    </svg>
    <div class="flex items-center space-x-2">
      <img src="@/assets/svg/search.svg" class="cursor-pointer" />
      <input type="text" placeholder="Cari kelas, pelajaran..." />
    </div>
    <div class="flex items-center space-x-3">
      <img src="@/assets/svg/message-circle.svg" class="cursor-pointer" />
      <img src="@/assets/svg/bell.svg" class="cursor-pointer" />
      <inline-svg
        :src="users"
        class="cursor-pointer xl:hidden"
        @click="store.commit('toggleSidebarSiswa', true)"
      />
    </div>
  </nav>
</template>

<script setup>
import { useStore } from 'vuex'
import users from '@/assets/svg/users.svg'

const props = defineProps({
  paddingRight: String,
})

const store = useStore()
</script>
