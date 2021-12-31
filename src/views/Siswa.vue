<template>
  <h1 class="text-gray-800 font-bold text-lg mb-2">Table Data Siswa</h1>
  <!-- <div id="wrapper"></div> -->
  <!-- component -->
<section class="antialiased bg-gray-100 text-gray-600  ">
    <div class="flex flex-col justify-center h-full">
        <!-- Table -->
        <div class="w-full max-w-full mx-auto bg-white shadow-lg  border border-gray-200 rounded-md">
            <header class="px-5 py-4 border-b border-gray-100">
                
                <!-- component -->
<!-- This is an example component -->
     <div class="pt-2 relative mx-auto text-gray-600">
        <input class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search" name="search" placeholder="Search">
        <button type="submit" class="absolute right-0 top-0 mt-5 mr-10 md:mr-4">
          <svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
            viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve"
            width="512px" height="512px">
            <path
              d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
          </svg>
        </button>
      </div>
            </header>
            <div class="p-3">
                <div class="overflow-x-auto">
                    <table class="table-auto w-full">
                        <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Nama</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">NIM</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-center">Gender</div>
                                </th>
                            
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-center">Alamat</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="text-sm divide-y divide-gray-100">
                            <tr>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg" width="40" height="40" alt="Alex Shatov"></div>
                                        <div class="font-medium text-gray-800">Alex Shatov</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left">21SA1010</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-center font-medium text-green-500">P</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-md text-center">Purwokerto</div>
                                </td>
                            </tr>
                            <tr>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-06.jpg" width="40" height="40" alt="Philip Harbach"></div>
                                        <div class="font-medium text-gray-800">Philip Harbach</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left">21SB1065</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-center font-medium text-green-500">L</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-md text-center">Purwokerto</div>
                                </td>
                            </tr>
                            <tr>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-07.jpg" width="40" height="40" alt="Mirko Fisuk"></div>
                                        <div class="font-medium text-gray-800">Mirko Fisuk</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left">21SB1066</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-center font-medium text-green-500">L</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-md text-center">Purwokerto</div>
                                </td>
                            </tr>
                            <tr>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-08.jpg" width="40" height="40" alt="Olga Semklo"></div>
                                        <div class="font-medium text-gray-800">Olga Semklo</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left">21SA1080</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-center font-medium text-green-500">P</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-md text-center">Purwokerto</div>
                                </td>
                            </tr>
                            <tr>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-09.jpg" width="40" height="40" alt="Burak Long"></div>
                                        <div class="font-medium text-gray-800">Burak Long</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left">21SA1929</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-center font-medium text-green-500">P</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-md text-center">Purwokerto</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <!-- component -->
              <div class="flex justify-center md:float-right mt-10 p-5">
                  <button class="md:border border-teal-500 text-teal-500  rounded-full font-bold md:py-3 md:px-5  text-sm mr-2 flex items-center hover:bg-teal-500 ">
                      <svg class="h-5 w-5 mr-2 fill-current" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-49 141 512 512" style="enable-background:new -49 141 512 512;" xml:space="preserve">
                          <path id="XMLID_10_" d="M438,372H36.355l72.822-72.822c9.763-9.763,9.763-25.592,0-35.355c-9.763-9.764-25.593-9.762-35.355,0 l-115.5,115.5C-46.366,384.01-49,390.369-49,397s2.634,12.989,7.322,17.678l115.5,115.5c9.763,9.762,25.593,9.763,35.355,0 c9.763-9.763,9.763-25.592,0-35.355L36.355,422H438c13.808,0,25-11.193,25-25S451.808,372,438,372z"></path>
                      </svg>
                      Previous 
                  </button>
                  <button class="md:border border-teal-500 md:bg-primary text-primary md:text-white  rounded-full font-bold md:py-3 md:px-5 ml-2 flex items-center">
                      Next
                      <svg class="h-5 w-5 ml-2 fill-current" clasversion="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                          viewBox="-49 141 512 512" style="enable-background:new -49 141 512 512;" xml:space="preserve">
                      <path id="XMLID_11_" d="M-24,422h401.645l-72.822,72.822c-9.763,9.763-9.763,25.592,0,35.355c9.763,9.764,25.593,9.762,35.355,0
                          l115.5-115.5C460.366,409.989,463,403.63,463,397s-2.634-12.989-7.322-17.678l-115.5-115.5c-9.763-9.762-25.593-9.763-35.355,0
                          c-9.763,9.763-9.763,25.592,0,35.355l72.822,72.822H-24c-13.808,0-25,11.193-25,25S-37.808,422-24,422z"/>
                      </svg>
                  </button>
              </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import { Grid } from 'gridjs'

const gridjs = new Grid()

onMounted(() => {
  gridjs.updateConfig({
    columns: ['No', 'NIM', 'Nama', 'No. HP', 'Jenis Kelamin', 'Alamat'],
    data: [
      ['1', '21SB1065', 'Muhaecal Dwi', '0869696969', 'L', 'Pajerukan'],
      ['2', '21SB1066', 'Taufik Hidayatulloh', '0832525232', 'L', 'Pasalakan'],
      ['3', '21SB1067', 'Bintang Kejora', '0835453463', 'L', 'Padukuhan'],
      ['4', '21SB1065', 'Cristiano Messi', '0869696969', 'P', 'Pamelonan'],
      ['5', '21SB1065', 'Lionel Ronaldo', '0869696969', 'L', 'Parambutan'],
    ],
    search: true,
    sort: true,
    pagination: {
      limit: 5,
      summary: false,
    },
    language: {
      search: {
        placeholder: 'Cari siswa...',
      },
      pagination: {
        previous: '<',
        next: '>',
        results: () => 'entries',
      },
    },
    className: {
      paginationButtonNext: 'gridjs-pageNext',
      paginationButtonPrev: 'gridjs-pagePrev',
    },
  })
  gridjs.render(document.getElementById('wrapper'))
})
</script>

<style>
.gridjs-table {
  overflow-x: auto;
}
.gridjs-container {
  background: white;
  border-radius: 15px;
  border: 2px solid #ccc;
}
.gridjs-head {
  padding: 30px;
}
.gridjs-search-input {
  width: 230px;
  padding: 8px 25px;
  border-radius: 40px;
  background: #efecec;
}
.gridjs-wrapper {
  border-radius: 5px;
}
.gridjs-sort {
  display: none;
}
.gridjs-footer {
  box-shadow: none;
  border-bottom-width: 0px;
}
th.gridjs-th {
  position: static;
  background-color: #f4f4f4;
  border: none;
  padding: 15px;
  color: #9e9e9e;
}
td.gridjs-td {
  border: none;
  background-color: transparent;
  font-size: 15px;
  text-align: center;
  padding: 10px 5px;
}
.gridjs-pagination .gridjs-pages button {
  border: none;
}
.gridjs-pagination .gridjs-pages button:last-child {
  border-right: none;
}
.gridjs-pages {
  display: flex;
  justify-content: flex-end;
  padding: 25px;
}
.gridjs-pagination .gridjs-pages button {
  padding: 6px 10px;
}
.gridjs-pagination .gridjs-pages button.gridjs-currentPage {
  border: 1px solid #bbb;
}
.gridjs-pageNext,
.gridjs-pagePrev {
  background: #6977f3;
  color: white;
  font-weight: bold;
  font-size: 16px;
  border: none;
}
.gridjs-pageNext {
  border-radius: 0px 6px 6px 0px;
}
.gridjs-pagePrev {
  border-radius: 6px 0px 0px 6px;
}
</style>
