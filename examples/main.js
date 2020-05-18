import Vue from 'vue'
import App from './App.vue'
import HrippleUI from '../packages'
Vue.config.productionTip = false
Vue.use(HrippleUI)

new Vue({
  render: h => h(App)
}).$mount('#app')
