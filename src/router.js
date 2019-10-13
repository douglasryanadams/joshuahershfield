import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/main.vue'
import Construction from './views/construction'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'construction',
            component: Construction
        },
        {
            path: '/site',
            name: 'Main',
            component: Main
        }
    ]
})
