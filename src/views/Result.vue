<template>
<div class="w-full h-auto bg-white p-4 rounded-md shadow-md">
    <span class="font-bold text-lg">Baca terlebih dahulu!</span>
    <p class="text-md">Halaman materi adalah halaman dimana kamu dapat belajar sesuai dengan materi yang telah diberikan oleh pengajar, selain itu dsetiap materi akan ada sebuah kuis yang harus kamu kerjakan setiap kuis akan mendapatkan nilai yang nantinya akan disimpan dan dikirimkan kepada pengajar, sekian semangat belajarnya ya..</p>
</div> 


<div class="w-full h-auto p-5 bg-white shadow-md mt-5 rounded-md">
    <span class="flex justify-center md:justify-start mb-5 text-xl text-dark font-bold ">Result</span>
    <div class="grid w-full justify-items-center items-center">
    <div class="w-full md:w-4/12 h-auto bg-blue-200 p-5 rounded-md">
    <div class="grid grid-rows-5 gap-4 p-2 items-center">
        <div class="flex h-12 w-full  rounded-md justify-between items-center">
            <div class="text-center font-bold text-lg">Total Kuis</div>
            <div class="text-center w-16 font-bold text-lg">3</div>
        </div>
        <div class="flex h-12 w-full  rounded-md justify-between items-center">
            <div class="text-center font-bold text-lg">Terjawab</div>
            <div class="text-center w-16 font-bold text-lg">3</div>
        </div>
        <div class="flex h-12 w-full  rounded-md justify-between items-center">
            <div class="text-center font-bold text-lg">Benar</div>
            <div class="text-center w-16 font-bold text-lg">3</div>
        </div>
        <div class="flex h-12 w-full  rounded-md justify-between items-center">
            <div class="text-center font-bold text-lg">Salah</div>
            <div class="text-center w-16 font-bold text-lg">0</div>
        </div>
        <div class="flex h-12 w-full  rounded-md justify-between items-center">
            <div class="text-center font-bold text-lg">Nilai</div>
            <div class="text-center w-16 font-bold text-lg">100</div>
        </div>
    </div>
    </div>
    </div>

        <div class="flex justify-center mt-5">
        <router-link to="/kelas-materi" class="p-4 hover:bg-gray-400 w-32  text-md font-bold text-white text-center rounded-full bg-gray-500 mr-4">Baca lagi</router-link>
        <router-link to="/kelas-page" class="p-4 hover:bg-red-300 w-32  text-md font-bold text-white text-center rounded-full bg-red-500">Kembali</router-link>
        </div>
</div>
</template>
<script>
import { ref } from 'vue'
import {
  RadioGroup,
  RadioGroupLabel,
  RadioGroupDescription,
  RadioGroupOption,
} from '@headlessui/vue'

const plans = [
  {
    name: 'Network Database',
 
  },
  {
    name: 'Laravel.',
  
  },
  {
    name: 'Operating System.',

  },
]

export default {
  components: {
    RadioGroup,
    RadioGroupLabel,
    RadioGroupDescription,
    RadioGroupOption,
  },

  setup() {
    const selected = ref(plans[0])

    return { selected, plans }
  },
}
</script>
