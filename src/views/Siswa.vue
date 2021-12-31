<template>
  <h1 class="text-gray-800 font-bold text-lg mb-2">Table Data Siswa</h1>
  <div id="wrapper"></div>
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
