import Vue from 'vue'
import Router from 'vue-router'
import Jobs from './views/Jobs.vue'
import AddJob from './views/AddJob.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'jobs',
      component: Jobs
    },
    {
      path: '/addjob',
      name: 'addjob',
      component: AddJob
    },

  ]
})
