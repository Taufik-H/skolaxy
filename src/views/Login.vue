<template>
  <section
    class="grid h-screen w-full bg-gradient-to-r from-green-400 to-blue-500"
  >
    <div
      class="flex m-auto w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl"
    >
      <div
        class="hidden bg-cover lg:block lg:w-1/2"
        :style="{ backgroundImage: `url(${bgLogin})` }"
      ></div>

      <div class="w-full px-6 py-8 md:px-8 lg:w-1/2">
        <h2
          class="text-2xl font-semibold text-center text-gray-700 dark:text-white"
        >
          Skolaxy
        </h2>

        <p class="text-xl text-center text-gray-600 dark:text-gray-200">
          Selamat Datang!
        </p>

        <div class="mt-4">
          <label
            class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
            for="LoggingEmailAddress"
            >Email Address</label
          >
          <input
            id="LoggingEmailAddress"
            class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            type="email"
          />
        </div>

        <div class="mt-4">
          <div class="flex justify-between">
            <label
              class="block mb-2 text-sm font-medium text-gray-600"
              dark:text-gray-200
              for="loggingPassword"
              >Password</label
            >
            <a
              href="#"
              class="text-xs text-blue-500 dark:text-gray-300 hover:underline"
              >Lupa Password?</a
            >
          </div>

          <input
            id="loggingPassword"
            class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            type="password"
          />
        </div>

        <div class="mt-8">
          <router-link
            to="/dashboard"
            class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-primary-2 rounded hover:bg-primary focus:outline-none focus:bg-gray-600"
          >
            Login
          </router-link>
        </div>

        <div class="flex items-center justify-between mt-4">
          <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
          Belum punya akun?
          <router-link
            to="/register"
            href="#"
            class="text-sm text-blue-500 dark:text-gray-400 hover:underline"
            >registrasi</router-link
          >

          <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import bgLogin from '@/assets/img/login.jpg'
</script>
