<template>
  <div class="flex mb-4 items-center">
    <div>

    <router-link  to="/kelas" class="flex items-center">
            <img src="/src/assets/svg/back.svg" alt="" class="p-3  bg-primary rounded-lg hover:bg-blue-400 ">
    <span class="ml-10 text-xl font-bold">Kembali</span>
    </router-link>
    </div>

</div>

  <div class="p-10">
    <div
      class="text-lg w-full md:w-9/12 border-b mb-10 border-gray-400 mx-auto"
    >
      Ulangan

    </div>
    <div class="grid w-full mx-auto justify-center">
      <div class="text-xl font-bold text-dark text-center mt-5 mb-5">
        Semua ulangan telah dikerjakan
      </div>
      <img src="@/assets/svg/none-ulangan.svg" alt="" />
    </div>
  </div>
</template>
