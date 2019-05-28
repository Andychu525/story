import { GetterTree, ActionTree, MutationTree, Module } from 'vuex'

import { TOGGLE_APP_DARK, TOGGLE_DRAWER_CLIPED } from '../actionTypes'

export interface DrawerState {
  clipped: boolean
}

interface AppState {
  dark: boolean
  drawer: DrawerState
}

const SET_THEME_DARK = 'SET_THEME_DARK'
const SET_Drawer_Cliped = 'SET_Drawer_Cliped'

const state: AppState = {
  dark: false,
  drawer: {
    clipped: true
  }
}

const getters: GetterTree<AppState, any> = {
  dark: state => state.dark,
  drawer: state => state.drawer
}

const mutations: MutationTree<AppState> = {
  [SET_THEME_DARK](state, dark: boolean) {
    state.dark = dark
  },
  [SET_Drawer_Cliped](state, clipped: boolean) {
    state.drawer.clipped = clipped
  }
}

const actions: ActionTree<AppState, any> = {
  [TOGGLE_APP_DARK]({ commit }, dark) {
    commit(SET_THEME_DARK, dark)
  },
  [TOGGLE_DRAWER_CLIPED]({ commit }, clipped) {
    commit(SET_Drawer_Cliped, clipped)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
