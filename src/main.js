import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false

Vue.use(VueAnalytics, {
  id: 'UA-149917676-1',
  router
})

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
