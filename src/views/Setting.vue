<template>
  <div class="grid grid-cols-12 gap-8 mb-10">
    <section
      class="col-span-12 md:col-span-7 bg-white p-5 rounded-xl shadow-base"
    >
      <div
        class="mb-5 w-full h-28 bg-cover bg-no-repeat bg-center p-4 rounded-lg"
        :style="{ backgroundImage: `url(${bgSetting})` }"
      >
        <img src="@/assets/img/pp-meet.svg" class="w-20 h-20" />
      </div>
      <form>
        <div class="mb-3">
          <label for="nama" class="block text-gray-800 text-lg mb-2 font-bold"
            >Nama</label
          >
          <input
            type="text"
            class="bg-background px-6 py-4 w-full rounded-lg"
            placeholder="Masukkan Nama"
            value="Muhaecal Dwi Khatami"
          />
        </div>
        <div class="mb-3">
          <label for="nope" class="block text-gray-800 text-lg mb-2 font-bold"
            >NIM</label
          >
          <input
            type="text"
            class="bg-gray-200 px-6 py-4 w-full rounded-lg"
            placeholder="Masukkan NIM"
            value="21SB1065"
            disabled
          />
        </div>
        <div class="mb-3">
          <label for="alamat" class="block text-gray-800 text-lg mb-2 font-bold"
            >Alamat</label
          >
          <input
            type="text"
            class="bg-background px-6 py-4 w-full rounded-lg"
            placeholder="Masukkan Alamat"
            value="Pajerukan"
          />
        </div>
        <div class="mb-3">
          <label for="nope" class="block text-gray-800 text-lg mb-2 font-bold"
            >No HP</label
          >
          <input
            type="text"
            class="bg-background px-6 py-4 w-full rounded-lg"
            placeholder="Masukkan No HP"
            value="0869696969"
          />
        </div>
        <div class="mt-10 flex justify-between items-center">
          <button
            class="px-8 py-3 bg-gray-400 rounded-full text-white font-bold"
          >
            Cancel
          </button>
          <button
            class="px-8 py-3 bg-green-400 rounded-full text-white font-bold"
          >
            Save Edit
          </button>
        </div>
      </form>
    </section>
    <section
      class="col-span-12 md:col-span-5 bg-white p-5 place-self-start rounded-xl shadow-base"
    >
      <h1 class="font-bold text-gray-800 mb-2">Edit Profile</h1>
      <p>
        Berikut adalah halaman edit profile ubah sesuai dengan data diri asli
        kalian
      </p>
    </section>
  </div>
</template>

<script setup>
import bgSetting from '@/assets/img/bg-setting.png'
</script>

<style></style>
