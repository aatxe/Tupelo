import Vue from 'vue'
import Router from 'vue-router'
import ChannelView from '@/components/ChannelView'
import ServerView from '@/components/ServerView'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/chan/#pdgn' },
    { path: '/chan/:chan', component: ChannelView, props: { showUserList: true } },
    { path: '/server/:server', component: ServerView }
  ]
})
