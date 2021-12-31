<template>
<div class="flex mb-4 items-center">
    <router-link to="/kelas-page">
    <img src="/src/assets/svg/back.svg" alt="" class="p-3  bg-primary rounded-lg hover:bg-blue-400 ">
    </router-link>
    <span class="ml-10 text-xl font-bold">Materi - Algoritma & Logika</span>
</div>
    <section>
        <div class="w-full p-4 bg-white  shadow-md rounded-md ">
            <h3 class="font-bold text-lg text-dark">Penting!</h3>
            <p class="text-md">Halaman materi adalah halaman dimana kamu dapat belajar sesuai dengan materi yang telah diberikan oleh pengajar, selain itu dsetiap materi akan ada sebuah kuis yang harus kamu kerjakan setiap kuis akan mendapatkan nilai yang nantinya akan disimpan dan dikirimkan kepada pengajar, sekian semangat belajarnya ya..</p>
        </div>
 
    </section>
    <section>
        <div class="w-full p-4 bg-white  rounded-md mt-10 mb-5 shadow-md">
            <h3 class="font-bold text-xl text-dark mb-5">Pengertian DBMS</h3>
            <p class="text-md  ">DBMS adalah singkatan dari Database Management System. Sebelum membahas lebih dalam tentang apa itu DBMS, ada baiknya kamu memahami juga apa itu database. <br><br>

                Database atau basis data merupakan sekumpulan informasi yang disimpan dalam sebuah perangkat komputer.<br> Seluruh informasi dalam sebuah database memiliki sebuah struktur agar dapat dikelola dengan menggunakan command atau perintah tertentu. <br><br>

                Database Management System (DBMS) adalah sebuah software yang dirancang khusus untuk menghubungkan database dengan pengguna agar proses pengelolaan data dapat berjalan dengan baik. <br><br>

                Sebuah DBMS pada dasarnya bertugas untuk mengelola data, database engine, dan schema database agar proses manajemen dan pengorganisasian data dapat berjalan dengan lancar. <br><br>

                Dengan kata lain, DBMS adalah sebuah perantara visual yang dapat membantu pengguna untuk membaca, memperbarui, mengorganisir, dan menghapus data yang tersimpan di dalam database dengan lebih mudah.

                Untuk berkomunikasi dengan sebuah DBMS, user perlu menggunakan bahasa komputer tertentu sesuai dengan sistem yang digunakan.<br>

                Terdapat dua jenis bahasa komputer yang dapat digunakan untuk berkomunikasi dengan DBMS: <br><br>

                Data Definition Language (DDL): Bahasa ini digunakan untuk membuat dan mengubah struktur dari sebuah obyek dalam database seperti views, schema, tabel, index, dsb. <br>
                Data Manipulation Language (DML): Bahasa ini digunakan untuk memberikan perintah untuk memanipulasi sebuah data di dalam database. Perintah tersebut meliputi pengambilan data, menambahkan data, mengubah data, dan menghapus data.
                Salah satu bahasa pemrograman yang paling umum oleh sebuah sistem pengelolaan basis dataadalah SQL</p>
  <div class="flex mx-10 mb-10 justify-end ">
    <router-link to="/materi2" class="bg-primary py-4 px-5 text-center   mt-5 text-md font-bold text-white rounded-full">Selanjutnya</router-link>
  </div>
        </div>
 
  </section>

</template> 
