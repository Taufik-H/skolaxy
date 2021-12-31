<template>
  <div class="xl:flex">
    <!-- sidebar -->
    <TheSidebarMenu />
    <!-- nav -->
    <TheNavbar paddingRight="xl:pr-80" />
    <!-- siswa online -->
    <TheSidebarSiswa />
  </div>
  <!-- content -->
  <section class="pt-20 px-4 xl:pl-72 xl:pr-80">
    <router-view />
  </section>
</template>

<script setup>
import TheSidebarMenu from '@/components/TheSidebarMenu.vue'
import TheNavbar from '@/components/TheNavbar.vue'
import TheSidebarSiswa from '@/components/TheSidebarSiswa.vue'
</script>
