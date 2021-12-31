<template>
  <div class="flex mb-4 items-center">
    <router-link to="/forum">
      <img
        src="/src/assets/svg/back.svg"
        alt=""
        class="p-3 bg-primary rounded-lg hover:bg-blue-400"
      />
    </router-link>
    <span class="ml-10 text-xl font-bold">On Meeting</span>
  </div>
  <div class="grid justify-center w-full bg-gray-900 rounded-lg">
    <div class="flex justify-center items-center mx-auto">
      <img class="mt-10 mb-5" src="@/assets/img/pp-meet.svg" />
    </div>
    <div class="text-xl font-bold text-white text-center">Alfin Pambudi</div>
    <!-- button -->
    <div class="mb-10 mt-5 mx-auto">
      <div class="grid grid-cols-3 justify-center items-center gap-3">
        <img
          class="cursor-pointer w-10 h-10"
          src="@/assets/svg/icon-telephone-call.svg"
        />
        <img
          class="cursor-pointer w-10 h-10"
          src="@/assets/svg/icon-telephone-vc.svg"
        />
        <img
          class="cursor-pointer w-10 h-10"
          src="@/assets/svg/icon-telephone-decline.svg"
        />
      </div>
      <!-- /buttons -->
    </div>
  </div>
  <!-- partisipan -->
  <div
    class="mb-10 grid grid-cols-2 md:grid-cols-4 w-full h-auto p-3 rounded-md bg-gray-700 mt-1 gap-2"
  >
    <!-- 1 -->
    <div
      class="flex items-center justify-center h-auto w-full bg-gray-900 rounded p-2"
    >
      <div class="justify-center items-center p-5">
        <img src="/src/assets/img/me1.png" class="h-20 w-20" alt="" />
        <p class="text-center text-white mt-2 text-md font-bold">Dwi</p>
      </div>
    </div>
    <!-- 2 -->
    <div class="hidden-md:block">
      <div
        class="flex items-center justify-center h-auto w-full bg-gray-900 rounded p-2"
      >
        <div class="justify-center items-center p-5">
          <img src="/src/assets/img/me2.png" class="h-20 w-20" alt="Muhaecal" />
          <p class="text-center text-white mt-2 text-md font-bold">Muhaecal</p>
        </div>
      </div>
    </div>

    <!-- 3 -->
    <div class="hidden md:block">
      <div
        class="flex items-center justify-center h-auto w-full bg-gray-900 rounded p-2"
      >
        <div class="justify-center items-center p-5">
          <img src="/src/assets/img/me3.png" class="h-20 w-20" alt="Taufik" />
          <p class="text-center text-white mt-2 text-md font-bold">Taufik</p>
        </div>
      </div>
    </div>

    <!-- 4 -->
    <div
      class="flex items-center justify-center h-auto w-full bg-gray-900 rounded p-2"
    >
      <div class="justify-center items-center p-5">
        <div
          class="flex items-center justify-center h-20 w-20 text-center mx-auto bg-primary rounded-full text-white font-bold text-xl"
        >
          <span class="">20+</span>
        </div>
        <p class="text-center text-white mt-2 text-md font-bold">Lainnya</p>
      </div>
    </div>
  </div>
</template>
