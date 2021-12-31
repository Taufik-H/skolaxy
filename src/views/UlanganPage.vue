<template>
<div class="flex mb-4 items-center">
    <router-link to="/kelas-page">
    <img src="/src/assets/svg/back.svg" alt="" class="p-3  bg-primary rounded-lg hover:bg-blue-400 ">
    </router-link>
    <span class="ml-10 text-xl font-bold">Ulangan Harian 1</span>
</div>
    <!-- <section>
        <div class="w-full p-4 bg-white shadow-md rounded-md ">
            <h3 class="font-bold text-lg text-dark">Penting!</h3>
            <p class="text-md">Halaman materi adalah halaman dimana kamu dapat belajar sesuai dengan materi yang telah diberikan oleh pengajar, selain itu dsetiap materi akan ada sebuah kuis yang harus kamu kerjakan setiap kuis akan mendapatkan nilai yang nantinya akan disimpan dan dikirimkan kepada pengajar, sekian semangat belajarnya ya..</p>
        </div>
 
    </section> -->
    <section>
        <div class="w-full p-4 bg-white  rounded-md mt-10 mb-5 shadow-md">
            <div class="w-7/12 h-auto  mx-auto mt-10 grid gap-4 ">
                <div class="grid grid-cols-2  justify-items-center h-14 bg-gray-100 items-center p-2 rounded-md">
                    <div class="justify-self-start text-md font-bold text dark">Pelajaran</div>
                    <div class="text-md font-bold text dark justify-self-end">Basis Data</div>
                </div>
                <div class="grid grid-cols-2 justify-items-center  h-14 bg-gray-100 items-center p-2 rounded-md">
                    <div class="justify-self-start text-md font-bold text-dark">Prlaksanaan</div>
                    <div class="text-md font-bold text-dark justify-self-end">10.00 - 11.00</div>
                </div>
                <div class="grid grid-cols-2  justify-items-center h-14 bg-gray-100 items-center p-2 rounded-md">
                    <div class="justify-self-start text-md font-bold text-dark">Total Soal</div>
                    <div class="text-md font-bold text-dark justify-self-end">3</div>
                </div>
                
            </div>
     
            <div class="flex mx-10 mb-10 justify-center gap-4 ">
                
                <button type="button"  @click="openModal" class="bg-pink-500 py-4 px-12 text-center   mt-5 text-md font-bold text-white rounded-full">Mulai Ulangan</button>
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
                Apakah kamu siap?
              </DialogTitle>
              <div class="mt-2 align-center text-center">
                  <img src="/src/assets/svg/kuismodal.svg" class="mx-auto" alt="">
                <span class="text-xl text-gray-800 " >
                  Kamu sudah siap untuk mengerjakan ulangan ini?
                  <p><span class="text-green-500">Klik Muiai Ulangan</span>  untuk melanjutkan</p>
                </span>
              </div>

              <div class="flex mt-4 justify-center gap-4">
                  <button
                  type="button"
                  class="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-gray-700 border border-transparent rounded-md hover:bg-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  @click="closeModal"
                >
                  Batal
                </button>
                <router-link to="/ulangan-page1"
                  
                  class="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-green-500 border border-transparent rounded-md hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  @click="closeModal"
                >
                  MUlai Ulangan!
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