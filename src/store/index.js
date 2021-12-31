import { createStore } from 'vuex'

export default createStore({
  state: {
    name: 'haecal',
    sidebarMenu: false,
    sidebarSiswa: false,

  },
  mutations: {
    toggleSidebarMenu(state, value) {
      state.sidebarMenu = value
    },
    toggleSidebarSiswa(state, value) {
      state.sidebarSiswa = value
    },

  },
  actions: {},
  getters: {},
})
