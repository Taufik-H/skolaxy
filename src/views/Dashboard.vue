<template>
  <section
    class="my-4 w-full rounded-lg px-8 flex items-start relative bg-no-repeat bg-cover sm:bg-center"
    :style="{ backgroundImage: `url(${bgBanner})` }"
  >
    <img src="@/assets/svg/archery.svg" class="pr-3 py-6" />
    <div class="text-white py-6">
      <h1 class="text-xl xl:text-2xl font-bold">Apa kabar hari ini?</h1>
      <p class="xl:text-lg">Tetap semangat belajar dan selalu jaga kesehatan</p>
      <p class="xl:text-sm">#belajardirumah</p>
    </div>
    <img
      src="@/assets/svg/undraw-graduation.svg"
      class="self-end h-40 absolute right-0 hidden sm:block"
    />
  </section>
  <section class="mb-3 grid grid-cols-12 gap-6">
    <div class="col-span-12 md:col-span-5">
      <ul
        class="mb-2 bg-white rounded grid grid-cols-4 text-center font-bold text-gray-400"
      >
        <li class="cursor-pointer p-2 border-b-4 border-primary text-gray-800">
          Hari Ini
        </li>
        <li class="cursor-pointer p-2">Dimulai</li>
        <li class="cursor-pointer p-2">Selesai</li>
        <li class="cursor-pointer p-2">Semua</li>
      </ul>
      <div
        class="mb-2 bg-primary-gradient shadow-base pt-2.5 pb-px px-3 flex space-x-3 items-center rounded-lg text-white"
      >
        <img src="@/assets/img/emot-1.png" class="h-20" />
        <div class="">
          <h1 class="text-lg font-bold leading-none">Kalkulus Dasar</h1>
          <p class="text-gray-200">Hari ini - 08.00 WIB</p>
        </div>
      </div>
      <div
        class="mb-2 bg-white shadow-base pt-2.5 pb-px px-3 flex space-x-5 items-center rounded-lg"
      >
        <img src="@/assets/img/emot-2.png" class="h-20" />
        <div class="">
          <h1 class="text-lg text-gray-800 font-bold leading-none">
            Basis Data
          </h1>
          <p class="">Hari ini - 10.00 WIB</p>
        </div>
      </div>
      <div
        class="mb-2 bg-white shadow-base pt-2.5 pb-px px-3 flex space-x-5 items-center rounded-lg"
      >
        <img src="@/assets/img/emot-3.png" class="h-20" />
        <div class="">
          <h1 class="text-lg text-gray-800 font-bold leading-none">PPKN</h1>
          <p class="">Hari ini - 13.00 WIB</p>
        </div>
      </div>
    </div>
    <section class="bg-white rounded-xl p-4 col-span-12 md:col-span-7">
      <object
        class="h-40 bg-no-repeat bg-cover bg-center rounded-2xl w-full"
        :style="{ backgroundImage: `url(${bgProfile})` }"
      ></object>
      <div class="px-6">
        <div class="-mt-24 lg:-mt-12 mb-1 grid grid-cols-12 lg:gap-4 items-end">
          <div
            class="p-2 w-36 lg:w-full bg-white rounded-lg col-span-12 lg:col-span-4"
          >
            <img src="@/assets/img/photo-profile.png" class="mx-auto " />
          </div>
          <div class="col-span-10 lg:col-span-6 ">
            <h1 class="font-bold text-lg text-gray-800">Muhaecal Dwi</h1>
            <div class="grid grid-cols-2 gap-1">
              <div class="flex space-x-1 items-center">
                <inline-svg :src="link"></inline-svg>
                <p>21SB1065</p>
              </div>
              <div class="flex space-x-1 items-center">
                <inline-svg :src="mapPin"></inline-svg>
                <p>Purwokerto</p>
              </div>
              <div class="flex space-x-1 items-center">
                <inline-svg :src="inbox"></inline-svg>
                <p>20 SKS</p>
              </div>
              <div class="flex space-x-1 items-center">
                <inline-svg :src="airplay" style="color: #7c92cb"></inline-svg>
                <p>Informatika</p>
              </div>
            </div>
          </div>
          <div class="col-span-2 pb-10 place-self-end cursor-pointer">
            <inline-svg :src="settings"></inline-svg>
          </div>
        </div>
        <div class="lg:grid grid-cols-12 hidden">
          <h1 class="col-span-4 text-center font-bold text-gray-800">
            Profile Siswa
          </h1>
          <div class="col-span-8 place-self-end flex items-center space-x-1">
            <p class="text-green-300 font-bold">Online</p>
            <span class="relative flex h-2.5 w-2.5">
              <span
                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
              ></span>
              <span
                class="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-300"
              ></span>
            </span>
          </div>
        </div>
      </div>
    </section>
  </section>
  <div class="mb-8 grid grid-cols-12 gap-5">
    <!-- detail materi -->
    <section class="col-span-12 sm:col-span-5">
      <h1 class="mb-3 font-bold">Detail Materi</h1>
      <div class="bg-white p-3 rounded-lg">
        <h1 class="mb-2 font-bold text-primary">Kalkulus Dasar</h1>
        <div class="mb-3 flex items-center space-x-3">
          <img src="@/assets/img/pp-meet.svg" class="w-12 h-12 rounded-full" />
          <div class="font-bold">
            <p class="text-xs">PEMATERI</p>
            <p class="text-gray-800">Lucia Novia</p>
          </div>
        </div>
        <p class="font-bold mb-2">Materi :</p>
        <div class="grid grid-cols-2 gap-3">
          <div id="centang">
            <div class="mb-2 flex items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p class="font-bold">Online Meet</p>
            </div>
            <div class="mb-2 flex items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p class="font-bold">Penugasan & Quis</p>
            </div>
          </div>
          <div id="silang">
            <div class="mb-2 flex items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p class="font-bold">Offline</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="col-span-12 sm:col-span-7">
      <h1 class="mb-3 font-bold">Info Kehadiran</h1>
      <div class="bg-white p-3 rounded-lg">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <!-- progress bar Kehadiran -->
          <section>
            <div class="mb-2 flex items-center">
              <h3 class="font-bold w-16 text-gray-800">Hadir</h3>
              <div class="w-full h-2 bg-gray-200 rounded-full">
                <div class="w-8/12 h-full bg-primary rounded-full"></div>
              </div>
            </div>
            <div class="mb-2 flex items-center">
              <h3 class="font-bold w-16 text-gray-800">Ijin</h3>
              <div class="w-full h-2 bg-gray-200 rounded-full">
                <div class="w-3/12 h-full bg-primary rounded-full"></div>
              </div>
            </div>
            <div class="mb-2 flex items-center">
              <h3 class="font-bold w-16 text-gray-800">Sakit</h3>
              <div class="w-full h-2 bg-gray-200 rounded-full">
                <div class="w-2/12 h-full bg-primary rounded-full"></div>
              </div>
            </div>
            <div class="mb-2 flex items-center">
              <h3 class="font-bold w-16 text-gray-800">Alpha</h3>
              <div class="w-full h-2 bg-gray-200 rounded-full">
                <div class="w-6/12 h-full bg-primary rounded-full"></div>
              </div>
            </div>
          </section>
          <!-- presentase chart kehadiran -->
          <section class="grid grid-cols-2">
            <div>
              <h1 class="text-gray-800 font-bold mb-px">Presentase</h1>
              <p class="mb-2 text-xs">
                Diharapkan siswa dapat aktif mengikuti kegiatan pembelajaran
              </p>
              <router-link
                to="/presensi"
                class="bg-primary rounded-full px-4 py-1 text-white font-bold"
              >
                Absensi
              </router-link>
            </div>
            <div>
              <apexcharts
                width="100%"
                type="donut"
                :options="charts.options"
                :series="charts.series"
              />
            </div>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

import bgBanner from '@/assets/img/bg-banner.png'
import bgProfile from '@/assets/img/bg-profile.png'
import link from '@/assets/svg/link.svg'
import mapPin from '@/assets/svg/map-pin.svg'
import inbox from '@/assets/svg/inbox.svg'
import airplay from '@/assets/svg/airplay.svg'
import settings from '@/assets/svg/settings.svg'

import apexcharts from 'vue3-apexcharts'

const charts = reactive({
  options: {
    dataLabels: { enabled: false },
    legend: { show: false },
    labels: ['Hadir', 'Ijin', 'Sakit', 'Alpha'],
    colors: ['#6977F3', '#83c2fd', '#f3a974', '#f55555'],
    grid: {
      padding: {
        left: 0,
        right: 0,
      },
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          labels: {
            show: true,
            name: { fontSize: '10px', offsetY: -4 },
            value: { fontSize: '10px', offsetY: -4 },
            total: { show: true, fontSize: '10px' },
          },
        },
      },
    },
  },
  series: [25, 6, 4, 5],
})
</script>
