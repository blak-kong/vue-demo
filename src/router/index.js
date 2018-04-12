import Vue from 'vue'
import Router from 'vue-router'
import Shopping from '../components/shopping/index.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'shopping',
    component: Shopping
  }]
})
