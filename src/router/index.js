import { createRouter, createWebHistory } from 'vue-router'
import MasterLayout from '@/views/layouts/MasterLayout.vue'
import SidebarMenuLayout from '@/views/layouts/SidebarMenuLayout.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/',
    component: SidebarMenuLayout,
    children: [
      {
        path: '/kelas-page',
        name: 'Kelas | SBD',
        component: () => import('@/views/Kelas-page.vue'),
      },
      {
        path: '/kelas-materi',
        name: 'Materi | SBD',
        component: () => import('@/views/Kelas-Materi.vue'),
      },
      {
        path: '/materi2',
        name: 'Materi2 | SBD',
        component: () => import('@/views/Materi2.vue'),
      },

      {
        path: '/kuis',
        name: 'Kuis | SBD',
        component: () => import('@/views/Kuis.vue'),
      },
      {
        path: '/kuis2',
        name: 'Kuis2 | SBD',
        component: () => import('@/views/Kuis2.vue'),
      },
      {
        path: '/kuis3',
        name: 'Kuis3 | SBD',
        component: () => import('@/views/Kuis3.vue'),
      },
      {
        path: '/result',
        name: 'Result Kuis | SBD',
        component: () => import('@/views/Result.vue'),
      },
      {
        path: '/result-ulangan',
        name: 'Result Ulangan | SBD',
        component: () => import('@/views/Result copy.vue'),
      },
      {
        path: '/upload-tugas',
        name: 'Tugas | SBD',
        component: () => import('@/views/UploadTugas.vue'),
      },
      {
        path: '/ulangan-page',
        name: 'Ulangan | SBD',
        component: () => import('@/views/UlanganPage.vue'),
      },
      {
        path: '/ulangan-page1',
        name: 'Ulangan1 | SBD',
        component: () => import('@/views/UlanganPage1.vue'),
      },
      {
        path: '/ulangan-page2',
        name: 'Ulangan2 | SBD',
        component: () => import('@/views/UlanganPage2.vue'),
      },
      {
        path: '/ulangan-page3',
        name: 'Ulangan3 | SBD',
        component: () => import('@/views/UlangaPage3.vue'),
      },
      {
        path: '/penugasan-page',
        name: 'Penugasan',
        component: () => import('@/views/PenugasanPage.vue'),
      },
      {
        path: '/test-page',
        name: 'Ulangann',
        component: () => import('@/views/TestPage.vue'),
      },
      {
        path: '/pengaturan',
        name: 'Pengaturan',
        component: () => import('@/views/Setting.vue'),
      },
    ],
  },
  {
    path: '/',
    component: MasterLayout,
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard.vue'),
      },
      {
        path: '/siswa',
        name: 'Data Siswa',
        component: () => import('@/views/Siswa.vue'),
      },
      {
        path: '/presensi',
        name: 'Presensi',
        component: () => import('@/views/Presensi.vue'),
      },
      {
        path: '/kelas',
        name: 'Daftar Kelas',
        component: () => import('@/views/DaftarKelas.vue'),
      },
      {
        path: '/meet',
        name: 'Meet',
        component: () => import('@/views/Meet.vue'),
      },
      {
        path: '/forum',
        name: 'Meet-List',
        component: () => import('@/views/MeetLists.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.afterEach((to) => {
  document.title = to.name
})

export default router
