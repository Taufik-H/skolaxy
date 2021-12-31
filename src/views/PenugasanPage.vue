<template>
    <router-link to="/kelas" class="flex mb-4 items-center">
    <div>
    <img src="/src/assets/svg/back.svg" alt="" class="p-3  bg-primary rounded-lg hover:bg-blue-400 ">
    </div>
    <span class="ml-10 text-xl font-bold">Kembali</span>
</router-link>
<div class="mt-2">
    <div class="text-lg md:w-9/12 border-b mb-10 border-gray-400 mx-auto">Penugasan</div>
    <div class="grid gap-4 w-full md:w-9/12 mx-auto">
        <router-link to="upload-tugas" class="flex w-full h-16 bg-white hover:bg-blue-100 shadow-md rounded-md items-center p-5 ">
            <div class="w-10 h-10 bg-blue-500 p-2 rounded-full  ">
            <img src="/src/assets/svg/file.svg"  class="w-8 justify-start" alt="">
            </div>
            <div class="flex w-full justify-between items-center">
            <div class="md:text-lg font-bold text-primary ml-5">Membuat Database</div>
            <span class="float-right ">Tengat :  21 Des 2021</span>
            </div>
        </router-link>

    </div>
</div>
</template>