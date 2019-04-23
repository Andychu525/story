import store from '@/store';
import config from '@/config/defaultSettings'
import * as types from '@/store/app/mutationTypes'

export default function Initializer() {
  store.commit(types.SET_COLOR, config.primaryColor)
  store.commit(types.SET_LAYOUT, config.layout)
  store.commit(types.SET_THEME, config.navTheme)
}
