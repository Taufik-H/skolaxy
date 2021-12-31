<template>
<div class="flex mb-4 items-center">
    <router-link to="/kelas-page">
    <img src="/src/assets/svg/back.svg" alt="" class="p-3  bg-primary rounded-lg hover:bg-blue-400 ">
    </router-link>
    <span class="ml-10 text-xl font-bold">Materi - Algoritma & Logika</span>
</div>
    <section>
        <div class="w-full p-4 bg-white shadow-md rounded-md ">
            <h3 class="font-bold text-lg text-dark">Penting!</h3>
            <p class="text-md">Halaman materi adalah halaman dimana kamu dapat belajar sesuai dengan materi yang telah diberikan oleh pengajar, selain itu dsetiap materi akan ada sebuah kuis yang harus kamu kerjakan setiap kuis akan mendapatkan nilai yang nantinya akan disimpan dan dikirimkan kepada pengajar, sekian semangat belajarnya ya..</p>
        </div>
 
    </section>
    <section>
        <div class="w-full p-4 bg-white  rounded-md mt-10 mb-5 shadow-md">
            <h3 class="font-bold text-xl text-dark mb-5">Fungsi dari DBMS</h3>
            <span class="text-md">
               <h5 class="text-md font-bold">1. Mendefinisikan data beserta kaitannya</h5> 
                    Sebuah database memiliki cakupan informasi yang sangat besar yang tersimpan dalam bentuk dokumen atau tabel. DBMS membantu mendefinisikan di mana sebuah informasi terletak beserta kaitannya dengan informasi di tabel atau dokumen lain.

                   <h5 class="text-md font-bold">2. Memanipulasi data</h5> 
                    Salah satu fungsi mendasar DBMS adalah untuk menyimpan, memperbarui, atau menghapus data dengan lebih mudah. Hal ini dapat terjadi karena adanya interface visual yang dapat membantu user untuk memanipulasi data tanpa perlu mengakses sumber informasinya.

                 <h5 class="text-md font-bold">3. Meningkatkan integritas data</h5>   
                    Dalam sebuah DBMS, terdapat beberapa basis data yang dapat diakses oleh banyak user. Maka dari itu, akurasi dan konsistensi data dalam database adalah sesuatu yang mutlak. Sistem pengelolaan basis data membantu memastikan bahwa seluruh data tetap akurat dan tersusun secara konsisten.

                  <h5 class="text-md font-bold">4. Backup dan recovery data</h5>  
                    DBMS memiliki fitur backup dan recovery data otomatis yang tentunya sangat berguna untuk mencegah hilangnya informasi penting. Para user tidak perlu lagi menjalankan pencadangan berkala karena sudah ditangani oleh sistem.

                    Selain itu, sistem pengelolaan data juga secara otomatis mengembalikan database ke versi stabil ketika terjadi system crash atau failure untuk mencegah hal tersebut terjadi lagi.

                   <h5 class="text-md font-bold">5. Mempercepat akses data</h5> 
                    Sistem pengelolaan basis data membantu user dalam memperoleh hasil dari query mereka dengan cepat dan akurat. Dengan kata lain, sistem pengelolaan basis data juga berperan dalam meningkatkan produktivitas pekerja yang berkaitan dengan data.

                   <h5 class="text-md font-bold"> 6. Mengurangin inkonsistensi data</h5>
                    Sebuah inkonsistensi data terjadi ketika terdapat beberapa versi dari sebuah file di beberapa tempat sekaligus. Salah satu peran penting sistem pengelolaan basis data adalah memastikan data yang tersimpan adalah versi terbaru, sehingga tidak ada kesenjangan versi data di antara seluruh user.

                   <h5 class="text-md font-bold"> 7. Keamanan data</h5>
                    Keamanan data merupakan harga mati dalam sebuah basis data, sehingga pengaturan otorisasi user merupakan hal yang sangat penting. Sistem pengelolaan basis data dapat memfasilitasi hal tersebut dengan adanya fitur otorisasi akses menggunakan username dan password.
            </span>
     
  <div class="flex mx-10 mb-10 justify-center gap-4 ">
    <router-link to="/kelas-materi" class="bg-gray-500 py-4 px-5 text-center  mt-5 text-md font-bold text-white rounded-full">Sebelumnya</router-link>
    <button type="button"  @click="openModal" class="bg-pink-500 py-4 px-12 text-center   mt-5 text-md font-bold text-white rounded-full">Kuis</button>
  </div>
        </div>
 
  </section>
   


  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal">
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="min-h-screen px-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay class="fixed inset-0" />
          </TransitionChild>

          <span class="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>

          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <div
              class="inline-block w-auto md:w-6/12  p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900"
              >
                Apakah kamu yakin?
              </DialogTitle>
              <div class="mt-2 align-center text-center">
                  <img src="/src/assets/svg/kuismodal.svg" class="mx-auto" alt="">
                <span class="text-xl text-gray-800 " >
                  Kamu yakin ingin mengerjakan kuis, apakah kamu sudah paham dengan materi yang diberikan?
                </span>
              </div>

              <div class="flex mt-4 justify-center gap-4">
                  <button
                  type="button"
                  class="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-gray-700 border border-transparent rounded-md hover:bg-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  @click="closeModal"
                >
                  Belum yakin
                </button>
                <router-link to="/kuis"
                  
                  class="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-700 border border-transparent rounded-md hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  @click="closeModal"
                >
                  Ya, Yakin!
                </router-link>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot> 
</template> 
<script>
import { ref } from 'vue'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
  DialogTitle,
} from '@headlessui/vue'

export default {
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    DialogTitle,
  },

  setup() {
    const isOpen = ref(false)

    return {
      isOpen,
      closeModal() {
        isOpen.value = false
      },
      openModal() {
        isOpen.value = true
      },
    }
  },
}
</script>