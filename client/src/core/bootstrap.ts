import store from '@/store/'
import config from '@/config/defaultSettings'
import * as types from '@/store/mutation-types'

export default function Initializer() {
  store.commit(types.TOGGLE_SIDEBAR, config.sidebar)
  store.commit(types.TOGGLE_THEME, config.navTheme)
  store.commit(types.TOGGLE_LAYOUT_MODE, config.layout)
  store.commit(types.TOGGLE_FIXED_HEADER, config.fixedHeader)
  store.commit(types.TOGGLE_FIXED_sidebar, config.fixsidebar)
  store.commit(types.TOGGLE_CONTENT_WIDTH, config.contentWidth)
  store.commit(types.TOGGLE_FIXED_HEADER_HIDDEN, config.autoHideHeader)
  store.commit(types.TOGGLE_WEAK, config.colorWeak)
  store.commit(types.TOGGLE_COLOR, config.primaryColor)
  store.commit(types.TOGGLE_MULTI_TAB, config.multiTab)
}
