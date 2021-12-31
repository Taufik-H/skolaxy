<template>
<div class="w-full h-auto bg-white p-4 rounded-md shadow-md">
    <span class="font-bold text-lg">Baca terlebih dahulu!</span>
    <p class="text-md">Kerjakan soal semaksimal mungkin, utamakan kejujuran karena jujur adalah kunci kesuksesan. <span class="text-green-500">Semangat!</span></p>
</div> 


<div class="w-full h-auto p-5 bg-white shadow-md mt-5 rounded-md">
    <span class="flex justify-center md:justify-start mb-5 text-md text-dark font-bold "><span class="w-auto bg-blue-200  p-3 rounded-full text-blue-400 border-blue-400 border">Result Ulangan</span> </span>
    <div class="grid w-full justify-items-center items-center">
    <div class="w-full md:w-4/12 h-auto  p-5 rounded-md">
    <div class="grid grid-rows-5 gap-4 p-2 items-center border-2 rounded-md border-gray-200">
        <div class="flex h-12 w-full  rounded-md justify-between items-center bg-gray-200 p-4">
            <div class="text-center font-bold text-lg">Total Soal</div>
            <div class="text-center w-16 font-bold text-lg">3</div>
        </div>
        <div class="flex h-12 w-full  rounded-md justify-between items-center bg-gray-200 p-4">
            <div class="text-center font-bold text-lg">Terjawab</div>
            <div class="text-center w-16 font-bold text-lg">3</div>
        </div>
        <div class="flex h-12 w-full  rounded-md justify-between items-center bg-gray-200 p-4">
            <div class="text-center font-bold text-lg">Benar</div>
            <div class="text-center w-16 font-bold text-lg">3</div>
        </div>
        <div class="flex h-12 w-full  rounded-md justify-between items-center bg-gray-200 p-4">
            <div class="text-center font-bold text-lg">Salah</div>
            <div class="text-center w-16 font-bold text-lg">0</div>
        </div>
        <div class="flex h-12 w-full  rounded-md justify-between items-center bg-gray-200 p-4">
            <div class="text-center font-bold text-lg">Nilai</div>
            <div class="text-center w-16 font-bold text-lg">100</div>
        </div>
    </div>
    </div>
    </div>

        <div class="flex justify-center mt-5">
       
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
