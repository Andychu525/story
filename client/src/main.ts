import Vue from 'vue'
import App from './App.vue'
import router from './route'
import store from './store'
import SvgIcon from 'vue-svgicon'
import boot from './core/bootstrap'
import './style/index.less'
import './core/use'
import './mock'
import './components/svg'

Vue.config.productionTip = false
Vue.component('svg-icon', SvgIcon)

new Vue({
  router,
  store,
  beforeCreate() {
    boot()
  },
  render: h => h(App)
}).$mount('#app')
