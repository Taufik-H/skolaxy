<template>
    <div class="flex mb-4 items-center">
    <router-link to="/kelas-page">
    <img src="/src/assets/svg/back.svg" alt="" class="p-3  bg-primary rounded-lg hover:bg-blue-400 ">
    </router-link>
    <span class="ml-10 text-xl font-bold">Kembali</span>
</div>
    <section
    class="my-4 w-full h-32 rounded-lg px-8 flex items-start relative bg-no-repeat bg-cover bg-center"
    style="background-image: url('/src/assets/img/bg-banner.png')">
    <img src="@/assets/svg/archery.svg" class="pr-3 py-6" />
    <div class="text-white py-6">
      <h1 class="xl:text-2xl font-bold">Tugas Basis Data</h1>
      <p class="xl:text-md ">Tengat : 21 Desember 2021</p>

    </div>
    <img
      src="@/assets/svg/kelas-laptop.svg"
      class="self-end h-40 w-72 absolute right-0 hidden sm:block"
    />
  </section>
      <div class="w-full bg-white shadow-md rounded-md">
          <div class="grid md:grid-cols-2 justify-center ">
              <div class="p-10">
                  <span class="text-lg font-bold text-dark">Tugas Membuat Database</span>
                  <div class="text-lg text-dark mt-10 w-10/12 mb-5">Buatlah gambaran atau skema database yang saling memiliki relasi antar tabelnya, dikerjakan di buku atau dibuat dengan online tool pada komputer.</div>
                  <span class="p-2 text-blue-600 font-bold text-lg mt-10 bg-blue-200 rounded-full md:hidden">Pilih File</span>
                  <div class="text-dark font-bold text-md mt-5 ">Chat Pribadi</div>
                  <div class="flex  items-center ">
                  <input type="text" class="form-control w-full md:w-1/2 text-md p-2 border-2 ring-gray-100 bg-gray-100 rounded-full mt-5 h-9">
                <button class="mt-4 w-auto h-auto items-center p-1 md:w-10 md:h-10 bg-gray-200 rounded-full ml-5"><img src="/src/assets/svg/send.svg" alt="" class="" style=""></button>
                  </div>
              </div>
              <div class="p-10 hidden md:block">
                  <div class="bg-indigo-100 w-full h-auto mt-16 rounded-md">
                  <div class="text-lg font-bold text-dark p-5">Upload File </div>
                  <div class="p-2 ">

                  <div class="flex items-center  justify-center mb-10 w-56 text-center h-12 mx-auto  bg-blue-500 rounded-full text-lg font-bold text-white "><span class="">Pilih File</span></div>
                  </div>
                  
                  </div>
              </div>
          </div>
      </div>
 

</template> 
