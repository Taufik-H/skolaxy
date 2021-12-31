<template>
  <div class="xl:flex">
    <!-- sidebar -->
    <TheSidebarMenu />
    <!-- nav -->
    <TheNavbar paddingRight="xl:pr-10" />
  </div>
  <!-- content -->
  <section class="pt-20 px-4 xl:pl-72 xl:pr-10">
    <router-view />
  </section>
</template>

<script setup>
import TheSidebarMenu from '@/components/TheSidebarMenu.vue'
import TheNavbar from '@/components/TheNavbar.vue'
</script>
