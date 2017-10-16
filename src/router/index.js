import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Detail from '@/components/Detail'
import Elucidate from 'vue-elucidate'
import 'tachyons'
import 'keen-ui/dist/keen-ui.css'
import 'keen-ui/src/bootstrap'
import '@/assets/darcula.css'
import 'vue-elucidate/dist/style.css'
Vue.use(Router)
Vue.use(Elucidate)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/components/:name',
      name: 'Detail',
      component: Detail
    }
  ]
})
