<template>
    
    <section class="relative w-full">
   
    <img src="@/assets/img/bg-banner.png" class="my-4 w-full md:w-full h-32 rounded-lg md:px-8 flex items-start  bg-no-repeat bg-cover bg-center" alt="" >

    <img src="@/assets/svg/archery.svg" class="pr-3 py-6 absolute top-0 ml-2 md:ml-16" />
    <div class="text-white py-6 absolute top-0 ml-16 md:ml-28">
      <h1 class="text-xl xl:text-2xl font-bold">Basis Data</h1>
      <p class="xl:text-lg">semester 1</p>

    </div>
    <img
      src="@/assets/svg/kelas-laptop.svg"
      class="self-end h-40 w-72 absolute right-0 top-0 md:-mt-5 md:-ml-52 hidden sm:block"
    />
  </section>
      
         <div class="grid md:grid-cols-3 gap-4 w-full ">
               <!-- PROGRESS BAR -->
            <div class=" w-full h-full  flex justify-center">
                
                
                <div class="flex justify-center items-center w-80 md:min-w-auto h-96 bg-white rounded-md shadow-md md:p-5 ">
                  <apexchart class="" width="350" type="donut" :options="chart.options"  :series="chart.nilai" :show="chart.show" :labels="chart.show"></apexchart>
                </div>
            </div>
            <!-- PRESENSI -->
             
                <div class="md:col-span-2 w-full h-full ">
                    <div class=" w-full h-full bg-white rounded-md shadow-md p-5 mb-10">
               
                        <!-- MAPEL -->
                    <TabGroup :defaultIndex="0">
                    <TabList class="flex items-center font-bold text-lg text-dark  p-2 justify-items-stretch rounded-lg w-auto bg-blue-100 ">
                    <Tab class="text-dark text-sm md:text-md font-bold focus:text-primary hover:bg-blue-100 w-full h-10 rounded-md focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-200 mx-1 ring-white ring-opacity-60  focus:bg-white">Materi</Tab>
                    <Tab class="text-dark text-sm md:text-md font-bold focus:text-primary hover:bg-blue-100 w-full h-10 rounded-md focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-200 mx-1 ring-white ring-opacity-60  focus:bg-white">Tugas</Tab>
                    <Tab class="text-dark text-sm md:text-md font-bold focus:text-primary hover:bg-blue-100 w-full h-10 rounded-md focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-200 mx-1 ring-white ring-opacity-60  focus:bg-white">Ulangan</Tab>
                    </TabList>
                    <TabPanels>
                    <TabPanel>
                        <div class="p-4">
                            <router-link to="/kelas-materi" class="flex w-full border-b-2 border-gray-200 hover:bg-blue-100 p-2 rounded-lg items-center mt-2">
                                <img src="/src/assets/svg/dockkelas.svg" alt="">
                                <span class="text-sm md:text-lg font-bold ml-5">Algoritma & Logika</span>
                            </router-link>
                            <div class="flex w-full border-b-2 border-gray-200 hover:bg-blue-100 p-2 rounded-lg items-center mt-2">
                                <img src="/src/assets/svg/dockkelas.svg" alt="">
                                <span class="text-sm md:text-lg font-bold ml-5">Pembuatan DDL</span>
                            </div>
                            <div class="flex w-full border-b-2 border-gray-200 hover:bg-blue-100 p-2 rounded-lg items-center mt-2">
                                <img src="/src/assets/svg/dockkelas.svg" alt="">
                                <span class="text-sm md:text-lg font-bold ml-5">Query SQL</span>
                            </div>
                            <div class="flex w-full border-b-2 border-gray-200 hover:bg-blue-100 p-2 rounded-lg items-center mt-2">
                                <img src="/src/assets/svg/dockkelas.svg" alt="">
                                <span class="text-sm md:text-lg font-bold ml-5">DBMS</span>
                            </div>
                            
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <router-link  to="/upload-tugas" class="p-4">
                            <div class="flex w-full border-b-2 border-gray-200 hover:bg-blue-100 p-2 rounded-lg items-center mt-2">
                                <img src="/src/assets/svg/dockkelas.svg" alt="">
                                <span class="text-sm md:text-lg font-bold ml-5">Tugas Membuat Database</span>
                            </div>                           
                        </router-link>
                    </TabPanel>
                    <TabPanel>
                        <div class="p-4">
                            <router-link to="/ulangan-page" class="flex w-full border-b-2 border-gray-200 hover:bg-blue-100 p-2 rounded-lg items-center mt-2">
                                <img src="/src/assets/svg/dockkelas.svg" alt="">
                                <span class="text-sm md:text-lg font-bold ml-5">Ulangan Harian 1</span>
                            </router-link >                           
                        </div>
                    </TabPanel>                   
                    </TabPanels>
                </TabGroup>

                    
                    </div>
    
            </div>
        </div>

</template> 
<script setup>
    import { reactive } from 'vue';
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
    import apexchart from "vue3-apexcharts";    

    const chart = reactive({
        
        options: {
            plotOptions:{
                 expandOnClick: false,
                    pie:{
                        donut:{
                            labels:{
                            show: true,
                            total:{
                                show:true
                            }
                    }
                }
            }
        },
        legend: {
            position:'bottom'
        },
        labels: ['Ulangan','Penugasan','Kuis', 'Lain']
        },
    
        nilai: [50, 30, 8.5, 9],

        
     
    })

</script>