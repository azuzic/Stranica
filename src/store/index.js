import { createStore } from 'vuex'

export default createStore({
  state: {
    isUploading: false,
    multiple: false,
    titles: [],
    mangaTotal: 0,
    mangaShow: [{"img": [], "title": 'title', "id": 'id', "state": 'ongoing'}],
    mangaDatalist: [],
    mangaOpen: false,
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
