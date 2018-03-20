import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '@/components/NotFound'

import ChannelView from '@/components/ChannelView'
import QueryView from '@/components/QueryView'
import ServerView from '@/components/ServerView'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/chan/#pdgn' },
    { path: '/chan/:chan', component: ChannelView, props: { showUserList: true } },
    { path: '/server/:server', component: ServerView },
    { path: '/query/:user', component: QueryView },
    { path: '*', component: NotFound }
  ]
})
