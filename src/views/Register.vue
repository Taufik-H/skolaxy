<template>
  <section class="grid h-screen w-full bg-gradient-to-r from-green-400 to-blue-500">

    <section class="max-w-4xl p-6 py-2 m-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Registrasi</h2>
        
        <form>
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 mt-5">
                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="username">Nama</label>
                    <input id="username" placeholder="Masukan nama" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                </div>

                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="emailAddress">NIM</label>
                    <input id="emailAddress" type="" placeholder="NIM" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                </div>

                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="emailAddress">Email</label>
                    <input id="emailAddress" placeholder="Masukan Email" type="" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                </div>

                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="emailAddress">No Hp (Aktif)</label>
                    <input id="emailAddress" placeholder="+62xxxxxxxxxxx" type="" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                </div>
             
              <div class="">
                <label class="text-gray-700 dark:text-gray-200" for="emailAddress">Program Study</label>
                <div class="flex mt-4">
                <div class="mb-3 xl:w-96">
                  <select class="form-select appearance-none
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding bg-no-repeat
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                      <option selected>Pilih Program Study</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                  </select>
                </div>
              </div>
              </div>

              <div>
                  <div class="flex">
                    <div class=" w-96">
                      <label for="formFile" class="form-label inline-block mb-2 text-gray-700">Import Image</label>
                      <input class="form-control block w-full px-2 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="file" id="formFile">
                    </div>
                  </div>
              </div>

              <div>
                <label for="alamat" class="text-gray-700 dark:text-gray-200">Alamat</label>
                <textarea name="" id="alamat" cols="5" rows="2" placeholder="Alamat" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
              </div>

                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="password">Password</label>
                    <input id="password" type="password" placeholder="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                </div>

             
            </div>

            <div class="flex justify-end mt-6">
                <router-link to="/dashboard" class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-400 text-md font-bold rounded-md hover:bg-primary-2 focus:outline-none focus:bg-primary">Registrasi</router-link>
            </div>
        </form>
         <div class="flex items-center md:justify-between mt-4">
          <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
          Sudah punya akun?
          <router-link to="/login"
    
            class="text-sm text-blue-500 dark:text-gray-400 "
            >Login</router-link
          >

          <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
        </div>
    </section>
  </section>
</template>