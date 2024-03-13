import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    characters: [],
    series: [],
    comics: [],

  },
  getters: {
    getCharacters: state => state.characters,
    getComics: state => state.comics,
    getSeries: state => state.series,

  },
  mutations: {
    setCharacters: (state, characters) => (state.characters = characters),
    setSeries: (state, series) => (state.series = series),
    setComics: (state, comics) => (state.comics = comics)


  },
  actions: {
    async fetchCharacters({ commit }) {
      const response = await axios.get('https://gateway.marvel.com/v1/public/characters?apikey=a3213921a9a0059216feb75769a305bd')
      commit('setCharacters', response.data.data.results)
    },
    async fetchComics({ commit }) {
      const response = await axios.get('https://gateway.marvel.com/v1/public/comics?apikey=a3213921a9a0059216feb75769a305bd')
      commit('setComics', response.data.data.results)
    },async fetchSeries({ commit }) {
      const response = await axios.get('https://gateway.marvel.com/v1/public/series?apikey=a3213921a9a0059216feb75769a305bd')
      commit('setSeries', response.data.data.results)
    },
    
  },
  modules: {
  }
})
