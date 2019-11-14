import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'

// Style fallback import
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Variables
Vue.config.productionTip = false

// Use
Vue.use(BootstrapVue)

// Router
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
