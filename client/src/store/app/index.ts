import { Module } from 'vuex'
// import * as AT from './actionTypes'
import * as MT from './mutationTypes'

interface AppState {
  theme: 'dark' | 'light'
  layout: 'topmenu' | 'sidemenu'
  color: string
}

const app: Module<AppState, any> = {
  state: {
    theme: 'light',
    layout: 'topmenu',
    color: ''
  },
  mutations: {
    [MT.SET_THEME](state, theme) {
      state.theme = theme
    },
    [MT.SET_LAYOUT](state, mode) {
      state.layout = mode
    },
    [MT.SET_COLOR](state, color) {
      state.color = color
    }
  },
  actions: {},
  getters: {
    theme: state => state.theme,
    color: state => state.color,
    layout: state => state.layout
  }
}

export default app
