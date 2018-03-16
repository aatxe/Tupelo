import Vue from 'vue'
import Router from 'vue-router'
import Client from '@/components/Client'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Client',
      component: Client
    },
    {
      path: '/Hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
