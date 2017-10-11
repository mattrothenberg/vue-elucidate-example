import Vue from 'vue'
import App from './App'
import router from './router'
import 'tachyons'
import 'keen-ui/dist/keen-ui.css'
import 'keen-ui/src/bootstrap'
import '@/assets/darcula.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
