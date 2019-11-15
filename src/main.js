import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Style fallback import
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

library.add(faSearch)

Vue.component('font-awesome-icon', FontAwesomeIcon)

// global snippet function
Vue.filter('snippet', val => {
  if (!val || typeof (val) !== 'string') return ''
  val = val.slice(0, 50)
  val += '...'
  return val
})

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
