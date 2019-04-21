import { Module } from 'vuex'
import * as types from '../mutation-types'

interface AppState {
  sidebar: boolean
  theme: string
  layout: string
  contentWidth: string
  fixedHeader: boolean
  fixsidebar: boolean
  autoHideHeader: boolean
  color: any
  weak: boolean
  multiTab: boolean
}

const app: Module<AppState, any> = {
  state: {
    sidebar: true,
    theme: '',
    layout: '',
    contentWidth: '',
    fixedHeader: false,
    fixsidebar: false,
    autoHideHeader: false,
    color: null,
    weak: false,
    multiTab: true
  },
  mutations: {
    [types.TOGGLE_SIDEBAR]: state => {
      state.sidebar = !state.sidebar
    },
    [types.TOGGLE_THEME]: (state, theme) => {
      state.theme = theme
    },
    [types.TOGGLE_LAYOUT_MODE]: (state, layout) => {
      state.layout = layout
    },
    [types.TOGGLE_FIXED_HEADER]: (state, fixed) => {
      state.fixedHeader = fixed
    },
    [types.TOGGLE_FIXED_sidebar]: (state, fixed) => {
      state.fixsidebar = fixed
    },
    [types.TOGGLE_FIXED_HEADER_HIDDEN]: (state, show) => {
      state.autoHideHeader = show
    },
    [types.TOGGLE_CONTENT_WIDTH]: (state, type) => {
      state.contentWidth = type
    },
    [types.TOGGLE_COLOR]: (state, color) => {
      state.color = color
    },
    [types.TOGGLE_WEAK]: (state, flag) => {
      state.weak = flag
    },
    [types.TOGGLE_MULTI_TAB]: (state, bool) => {
      state.multiTab = bool
    }
  },
  actions: {
    ToggleSidebar({ commit }) {
      commit(types.TOGGLE_SIDEBAR)
    },
    ToggleTheme({ commit }, theme) {
      commit(types.TOGGLE_THEME, theme)
    },
    ToggleLayoutMode({ commit }, mode) {
      commit(types.TOGGLE_LAYOUT_MODE, mode)
    },
    ToggleFixedHeader({ commit }, fixedHeader) {
      if (!fixedHeader) {
        commit(types.TOGGLE_FIXED_HEADER_HIDDEN, false)
      }
      commit(types.TOGGLE_FIXED_HEADER, fixedHeader)
    },
    ToggleFixsidebar({ commit }, fixsidebar) {
      commit(types.TOGGLE_FIXED_sidebar, fixsidebar)
    },
    ToggleFixedHeaderHidden({ commit }, show) {
      commit(types.TOGGLE_FIXED_HEADER_HIDDEN, show)
    },
    ToggleContentWidth({ commit }, type) {
      commit(types.TOGGLE_CONTENT_WIDTH, type)
    },
    ToggleColor({ commit }, color) {
      commit(types.TOGGLE_COLOR, color)
    },
    ToggleWeak({ commit }, weakFlag) {
      commit(types.TOGGLE_WEAK, weakFlag)
    },
    ToggleMultiTab({ commit }, bool) {
      commit(types.TOGGLE_MULTI_TAB, bool)
    }
  },
  getters: {
    theme: state => state.theme,
    color: state => state.color,
    layout: state => state.layout,
    sidebar: state => state.sidebar,
    fixedHeader: state => state.fixedHeader,
    fixsidebar: state => state.fixsidebar
  }
}

export default app
