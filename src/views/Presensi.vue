<template>
  <!-- PENTING BANNER -->
  <div class="w-full h-full mb-8">
    <div class="bg-white p-4 rounded-md shadow-sm">
      <h5 class="font-bold text-lg">Penting!</h5>
      <p class="font-semibold">
        Ini adalah halaman absensi, absesnsi tidak akan bisa di klik jika
        pengajar belum memberi ijin absensi setelah absensi muncul di list, maka
        segeralah melakukan absensi dengan cara menekan tombol sesuai keterangan
        (Hadir, Ijin, Sakit).
      </p>
    </div>
  </div>

  <!-- GRID  -->
  <div class="grid md:grid-cols-3 gap-4 w-full">
    <!-- PROGRESS BAR -->
    <div class="w-full h-full flex justify-center">
      <div class="min-w-full h-96 bg-white rounded-md shadow-md p-5">
        <span class="font-bold text-lg mb-5">Keterangan</span>
        <div class="mb-5 text-md font-bold mt-5">Hadir</div>
        <div class="w-full h-2 bg-gray-200 rounded-md mt-5">
          <div class="w-11/12 h-full bg-yellow-400 rounded-md"></div>
        </div>
        <div class="mb-5 text-md font-bold mt-5">Ijin</div>
        <div class="w-full h-2 bg-gray-200 rounded-md mt-5">
          <div class="w-6 h-full bg-yellow-400 rounded-md"></div>
        </div>
        <div class="mb-5 text-md font-bold mt-5">Sakit</div>
        <div class="w-full h-2 bg-gray-200 rounded-md mt-5">
          <div class="w-2 h-full bg-yellow-400 rounded-md"></div>
        </div>
        <div class="mb-5 text-md font-bold mt-5">Alpha</div>
        <div class="w-full h-2 bg-gray-200 rounded-md mt-5"></div>
      </div>
    </div>
    <!-- PRESENSI -->

    <div class="md:col-span-2 w-full h-full">
      <div class="w-full h-full bg-white rounded-md shadow-md p-5 mb-10">
        <span class="font-bold text-lg">Presensi Kehadiran</span>
        <!-- MAPEL -->
        <div
          class="px-4 items-center mt-5 w-full h-auto border-2 border-gray-200 rounded-md"
        >
          <div class="sm:flex items-center justify-between my-5">
            <h1 class="font-bold text-md">Basis Data</h1>
            <div>
              <label for="1">
                <input type="radio" name="1" id="1" /><span class="mx-2"
                  >Hadir</span
                >
              </label>
              <label for="2">
                <input type="radio" name="1" id="2" /><span class="mx-2"
                  >Sakit</span
                >
              </label>
              <label for="3">
                <input @click="openModal" id="3" type="radio" name="1" /><span
                  class="mx-2"
                  >Ijin</span
                >
              </label>
              <button
                class="px-4 py-2 bg-primary rounded-md text-white font-bold focus:bg-blue-800"
              >
                Kirim
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <TransitionRoot appear :show="isOpen" as="template" class="">
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

          <span
            class="inline-block h-screen align-middle ml-16"
            aria-hidden="true"
          >
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
              class="inline-block w-full border-2 max-w-md p-6 ml-0 md:ml-60 -mt-80 md:mt-0 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900"
              >
                Keterangan & bukti
              </DialogTitle>
              <div class="w-full" id="show" style="">
                <form
                  action=""
                  class="grid md:grid-cols-3 gap-4 items-center justify-around"
                >
                  <input
                    type="text"
                    name=""
                    id=""
                    class="form-control h-10 bg-gray-100 rounded-md mt-4 text-lg"
                  />
                  <input type="file" name="" id="" class="form-control mt-5" />
                  <button
                    @click="closeModal"
                    type="submit"
                    class="bg-primary font-semibold text-md text-white px-3 py-2 rounded-lg border-0 w-16 mt-5 justify-self-end"
                  >
                    Kirim
                  </button>
                </form>
              </div>

              <div class="mt-4"></div>
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
