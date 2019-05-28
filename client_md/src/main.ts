import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import store from './Store'

import './style/index.styl'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false
Vue.use(Vuetify, {
  iconfont: 'mdi'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
