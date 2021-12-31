<template>
<!-- ulangan & penugasan-->
  <div class="grid md:grid-cols-2 justify-center items center gap-4">
    <!-- penugasan -->
    <div class="w-full h-auto rounded-xl bg-white shadow-md p-2  transition duration-300 ease-in-out">
    <div class="grid grid-cols-2">
      <div class="flex">
        <div class="w-auto p-3 md:p-0 md:w-52 md:h-20 rounded-full md:rounded-xl bg-primary flex items-center justify-center text-white ">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
          </svg>
        </div>
        <div class="text-lg font-bold text-dark p-2">Penugasan</div>
      </div>
      <router-link to="/penugasan-page" class="flex text-md w-full justify-end self-end"><span class=" h-auto px-3 py-2 hover:bg-white hover:text-primary border border-primary rounded-full text-white bg-primary text-md font-bold transition duration-300 ">Lihat Tugas</span></router-link>
    </div>
    </div>
    <!-- ulangan -->
  <div class="w-full h-auto rounded-xl bg-white shadow-md p-2  transition duration-300 ease-in-out">
    <div class="grid grid-cols-2">
      <div class="flex">
        <div class="w-auto md:w-28 p-4 md:h-20 rounded-full md:rounded-xl bg-red-400 flex items-center justify-center text-white ">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
        </div>
        <div class="text-lg font-bold text-dark p-2">Ulangan</div>
      </div>
      <router-link to="/test-page" class="flex text-md w-full justify-end self-end"><span class=" h-auto px-3 py-2 hover:bg-white hover:text-red-400 border border-red-400 rounded-full text-white bg-red-400 text-md font-bold transition duration-300 ">Lihat Ulangan</span></router-link>
    </div>
    </div>
  </div>
  <section>
    <div class="text-lg font-bold text-dark my-5 p-2">Daftar Kelas</div>
    <div class="grid md:grid-cols-4 gap-4 mt-5">
      <!-- list -->
      <!-- basis data -->
      <div class="w-full h-60 transition border border-gray-100  duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-white shadow-md rounded-md">
        <div class="grid grid-rows-2 justify-center">
          <div class="flex items-center justify-center w-20 h-20 rounded-full mt-5  mx-auto  bg-white border-2 border-primary">
            <div class="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 z-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            </div>
          </div>
          <div class="grid justify-center -mt-2">
            <div class=" mb-3 text-center">
              <div class="text-lg font-bold">Basis Data</div>
              <div class=" font-semibold">pengajar</div>
              <div class="text-md font-bold">Alfin Pambudi</div>
            </div>
            <router-link to="/kelas-page" class="flex items-center mx-auto justify-center text-white font-bold text-lg w-36 h-10 bg-primary rounded-full hover:bg-blue-600 duration-300 ">Masuk Kelas</router-link>
          </div>
        </div>
      </div>

      <!-- Kalkulus Dasar -->
      <div class="w-full h-60 border border-gray-100 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-white shadow-md rounded-md">
        <div class="grid grid-rows-2 justify-center">
          <div class="flex items-center justify-center w-20 h-20 rounded-full mt-5  mx-auto  bg-white border-2 border-primary">
            <div class="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 z-50 w-12 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
</svg>
            </div>
          </div>
          <div class="grid justify-center -mt-2">
            <div class=" mb-3 text-center">
              <div class="text-lg font-bold">Kalkulus Dasar</div>
              <div class=" font-semibold">pengajar</div>
              <div class="text-md font-bold">Muiz Abdillah</div>
            </div>
            <div class="flex items-center mx-auto justify-center text-white font-bold text-lg w-36 h-10 bg-gray-300 rounded-full  duration-300 ">Masuk Kelas</div>
          </div>
        </div>
      </div>

      <!-- PPKN -->
      <div class="w-full h-60 border border-gray-100 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-white shadow-md rounded-md">
        <div class="grid grid-rows-2 justify-center">
          <div class="flex items-center justify-center w-20 h-20 rounded-full mt-5  mx-auto  bg-white border-2 border-primary">
            <div class="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 z-50 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg>
            </div>
          </div>
          <div class="grid justify-center -mt-2">
            <div class=" mb-3 text-center">
              <div class="text-lg font-bold">PPKN</div>
              <div class=" font-semibold">pengajar</div>
              <div class="text-md font-bold">Arjuna Arya</div>
            </div>
            <div class="flex items-center mx-auto justify-center text-white font-bold text-lg w-36 h-10 bg-gray-300  rounded-full  duration-300 ">Masuk Kelas</div>
          </div>
        </div>
      </div>

      <!-- Technopreneur -->
      <div class="w-full h-60 border border-gray-100 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-white shadow-md rounded-md">
        <div class="grid grid-rows-2 justify-center">
          <div class="flex items-center justify-center w-20 h-20 rounded-full mt-5  mx-auto  bg-white border-2 border-primary">
            <div class="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 z-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
            </div>
          </div>
          <div class="grid justify-center -mt-2">
            <div class=" mb-3 text-center">
              <div class="text-lg font-bold">Technopreneur</div>
              <div class=" font-semibold">pengajar</div>
              <div class="text-md font-bold">Mikalea Gracia</div>
            </div>
            <div class="flex items-center mx-auto justify-center text-white font-bold text-lg w-36 h-10 bg-gray-300  rounded-full  duration-300 ">Masuk Kelas</div>
          </div>
        </div>
      </div>
      
      <!-- PAI -->
      <div class="w-full h-60 border border-gray-100 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-white shadow-md rounded-md">
        <div class="grid grid-rows-2 justify-center">
          <div class="flex items-center justify-center w-20 h-20 rounded-full mt-5  mx-auto  bg-white border-2 border-primary">
            <div class="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 z-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
</svg>
            </div>
          </div>
          <div class="grid justify-center -mt-2">
            <div class=" mb-3 text-center">
              <div class="text-lg font-bold">Pendidikan Agama</div>
              <div class=" font-semibold">pengajar</div>
              <div class="text-md font-bold">Arrasyid Abdullah</div>
            </div>
            <div class="flex items-center mx-auto justify-center text-white font-bold text-lg w-36 h-10 bg-gray-300  rounded-full  duration-300 ">Masuk Kelas</div>
          </div>
        </div>
      </div>

      <!-- Inggris -->
      <div class="w-full h-60 border border-gray-100 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-white shadow-md rounded-md">
        <div class="grid grid-rows-2 justify-center">
          <div class="flex items-center justify-center w-20 h-20 rounded-full mt-5  mx-auto  bg-white border-2 border-primary">
            <div class="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 z-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
            </div>
          </div>
          <div class="grid justify-center -mt-2">
            <div class=" mb-3 text-center">
              <div class="text-lg font-bold">Inggris</div>
              <div class=" font-semibold">pengajar</div>
              <div class="text-md font-bold">Gilang Ranggi</div>
            </div>
            <div class="flex items-center mx-auto justify-center text-white font-bold text-lg w-36 h-10 bg-gray-300  rounded-full  duration-300 ">Masuk Kelas</div>
          </div>
        </div>
      </div>

      <!-- pemdas -->
      <div class="w-full h-60 border border-gray-100 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-white shadow-md rounded-md">
        <div class="grid grid-rows-2 justify-center">
          <div class="flex items-center justify-center w-20 h-20 rounded-full mt-5  mx-auto  bg-white border-2 border-primary">
            <div class="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 z-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
</svg>
            </div>
          </div>
          <div class="grid justify-center -mt-2">
            <div class=" mb-3 text-center">
              <div class="text-lg font-bold">Pemrogramman Dasar</div>
              <div class=" font-semibold">pengajar</div>
              <div class="text-md font-bold">Jundi Hanif</div>
            </div>
            <div class="flex items-center justify-center mx-auto text-white font-bold text-lg w-36 h-10 bg-gray-300  rounded-full  duration-300 ">Masuk Kelas</div>
          </div>
        </div>
      </div>

      <!-- mm -->
      <div class="w-full h-60 border border-gray-100 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-white shadow-md rounded-md">
        <div class="grid grid-rows-2 justify-center">
          <div class="flex items-center justify-center w-20 h-20 rounded-full mt-5  mx-auto  bg-white border-2 border-primary">
            <div class="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 z-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
            </div>
          </div>
          <div class="grid justify-center -mt-2">
            <div class=" mb-3 text-center">
              <div class="text-lg font-bold">Multimedia</div>
              <div class=" font-semibold">pengajar</div>
              <div class="text-md font-bold">Bagas Arjun</div>
            </div>
            <div class="flex items-center mx-auto justify-center text-white font-bold text-lg w-36 h-10 bg-gray-300  rounded-full  duration-300 ">Masuk Kelas</div>
          </div>
        </div>
      </div>

      <!-- kesenian -->
      <div class="w-full h-60 border border-gray-100 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-white shadow-md rounded-md">
        <div class="grid grid-rows-2 justify-center">
          <div class="flex items-center justify-center w-20 h-20 rounded-full mt-5  mx-auto  bg-white border-2 border-primary">
            <div class="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 z-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
</svg>
            </div>
          </div>
          <div class="grid justify-center -mt-2">
            <div class=" mb-3 text-center">
              <div class="text-lg font-bold">Kesenian</div>
              <div class=" font-semibold">pengajar</div>
              <div class="text-md font-bold">Lee Yura</div>
            </div>
            <div class="flex items-center mx-auto justify-center text-white font-bold text-lg w-36 h-10 bg-gray-300 rounded-full duration-300 ">Masuk Kelas</div>
          </div>
        </div>
      </div>
     
    </div>
  </section>
</template>