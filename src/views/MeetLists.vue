<template>
    <div class="text-xl text-dark font-bold">Meet</div>
<!-- item kiri -->
    <div class="grid gap-4 mt-10">
        <router-link to="/meet" class="h-auto p-5 w-full bg-white shadow-md rounded-lg hover:bg-indigo-50">
            <div class="grid grid-cols-2">
            <div class="grid ">
                <div class="flex p-5 items-centers">
                <img src="@/assets/img/meet-teach.png" alt="" width="">
                <div class=" ml-5">
                    <div class="text-md text-dark">Pengajar</div>
                    <div class="text-xs md:text-lg font-bold text-dark">Alfin Pambudi</div>
                    <!-- <div class="text-xl font-bold text-dark">Basis Data</div> -->

                </div>
                
                </div>
                <div class="text-lg font-bold text-dark p-2">Basis Data</div>
                <div class="flex justify-start items-center" >
                    <div class="z-0   -ml   text-center relative p-1     rounded-full w-10 h-10 bg-yellow-500 border-2 border-white  "> <span class="   text-lg font-bold text-white ">A</span> </div>
                    <div class="z-20  -ml-4 text-center relative p-1     rounded-full w-10 h-10 bg-gray-500 border-2 border-white  "> <span class="   text-lg font-bold text-white ">T</span> </div>
                    <div class="z-20  -ml-4 text-center relative p-1    rounded-full w-10 h-10 bg-green-500 border-2 border-white  ">  <span class="   text-lg font-bold text-white ">D</span> </div>
                    <div class="z-20  -ml-4 text-center relative p-1    rounded-full w-10 h-10 bg-blue-500 border-2 border-white  ">  <span class="   text-lg font-bold text-white ">W</span> </div>
                    <div class="z-20  -ml-4 text-center relative p-1   rounded-full w-10 h-10 bg-red-500 border-2 border-white   ">  <span class="   text-lg font-bold text-white ">20+</span> </div>
                    
                </div>
            </div>
            <div class="text-green-500 font-bold text-xs md:text-md p-5 justify-self-end animate-pulse">Sedang Dimulai</div>
            </div>
        </router-link>

        <div class="h-auto p-5 w-full bg-white shadow-md rounded-lg">
            <div class="grid grid-cols-2">
            <div class="grid ">
                <div class="flex p-5 items-centers">
                <img src="@/assets/img/meet-teach2.png" alt="" width="">
                <div class=" ml-5">
                    <div class="text-md text-dark">Pengajar</div>
                    <div class="text-xs md:text-lg font-bold text-dark">Aryo Prananta</div>
                    

                </div>
                
                </div>
                <div class="text-lg font-bold text-dark p-2">Technopreneurship</div>

            </div>
            <div class="text-gray-500 font-bold text-xs md:text-md p-5 justify-self-end">Belum Dimulai</div>
            </div>
        </div>

    </div>
</template>