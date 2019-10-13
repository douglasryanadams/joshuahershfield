import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home'
import music from './views/music'
import acting from './views/acting'
import writing from './views/writing'
import news from './views/news'
import media from './views/media'
import live from './views/live'
import contact from './views/contact'
import construction from './views/construction'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'construction',
            component: construction
        },
        {
            path: '/site',
            name: 'home',
            component: home
        },
        {
            path: '/home',
            name: 'home',
            component: home
        },
        {
            path: '/music',
            name: 'music',
            component: music
        },
        {
            path: '/acting',
            name: 'acting',
            component: acting
        },
        {
            path: '/writing',
            name: 'writing',
            component: writing
        },
        {
            path: '/news',
            name: 'news',
            component: news
        },
        {
            path: '/media',
            name: 'media',
            component: media
        },
        {
            path: '/live',
            name: 'live',
            component: live
        },
        {
            path: '/contact',
            name: 'contact',
            component: contact
        }
    ]
})
