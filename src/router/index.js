import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home'
import item from '@/page/item'
import score from '@/page/score'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'home',
      component:home,
    },
    {
      path:'/item',
      name:'item',
      component:item
    },
    {
      path:'/score',
      name:'score',
      component:score
    }
  ]
})
