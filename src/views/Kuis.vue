<template>
<div class="w-full h-auto bg-white p-4 rounded-md shadow-md">
    <span class="font-bold text-lg">Baca terlebih dahulu!</span>
    <p class="text-md">Halaman materi adalah halaman dimana kamu dapat belajar sesuai dengan materi yang telah diberikan oleh pengajar, selain itu dsetiap materi akan ada sebuah kuis yang harus kamu kerjakan setiap kuis akan mendapatkan nilai yang nantinya akan disimpan dan dikirimkan kepada pengajar, sekian semangat belajarnya ya..</p>
</div> 


<div class="w-full h-auto p-5 bg-white shadow-md mt-5 rounded-md">
    <span class="text-lg text-dark font-bold">Kuis</span>
    <div class=" p-5">
            <div class="text-md text-dark font-semibold">DBMS adalah singkatan dari ...</div>

            <!-- Jawaban -->
            <div class="w-full max-w-sm  px-4 py-5">
        <div class="">
        <RadioGroup v-model="selected">
            <RadioGroupLabel class="sr-only">Server size</RadioGroupLabel>
            <div class="space-y-2">
            <RadioGroupOption
                as="template"
                v-for="plan in plans"
                :key="plan.name"
                :value="plan"
                v-slot="{ active, checked }"
            >
                <div
                :class="[
                    active
                    ? ''
                    : '',
                    checked ? 'bg-blue-700 bg-opacity-75 text-dark ' : 'bg-blue-100 ',
                ]"
                class="relative flex px-5 py-4 rounded-lg shadow cursor-pointer focus:outline-none"
                >
                <div class="flex items-center justify-between w-full">
                    <div class="flex items-center">
                    <div class="text-sm">
                        <RadioGroupLabel
                        as="p"
                        :class="checked ? 'text-white' : 'text-gray-900'"
                        class="font-medium"
                        >
                        {{ plan.name }}
                        </RadioGroupLabel>
                
                    </div>
                    </div>
                    <div v-show="checked" class="flex-shrink-0 text-white">
                    <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none">
                        <circle
                        cx="12"
                        cy="12"
                        r="12"
                        fill="#fff"
                        fill-opacity="0.2"
                        />
                        <path
                        d="M7 13l3 3 7-7"
                        stroke="#fff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        />
                    </svg>
                    </div>
                </div>
                </div>
            </RadioGroupOption>
            </div>
        </RadioGroup>
        </div>
            </div>
    </div>
<div class="grid grid-cols-1 md:grid-cols-2 justify-center md:justify-between p-6 items-center">
        <div class="flex mx-auto md:mx-0 my-4">
            <div class="p-2 md:p-4 rounded-full bg-gray-500 mx-2"></div>
            <div class="p-2 md:p-4 rounded-full bg-gray-500 mx-2"></div>
            <div class="p-2 md:p-4 rounded-full bg-gray-500 mx-2"></div>
        </div>
        <div class="flex mx-auto md:mx-0 md:justify-end">

        
        <router-link to="/kuis2" class="p-4 hover:bg-primary-2 w-32  text-md font-bold text-white text-center rounded-full bg-primary">Selanjutnya</router-link>
        </div>
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
    name: 'Database Management Solve.',
 
  },
  {
    name: 'Database Migration System.',
  
  },
  {
    name: 'Database Management System.',

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
