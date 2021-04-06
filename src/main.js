import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import vueResource from 'vue-resource'


Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.use(axios)

Vue.use(vueResource)

new Vue({
  render: h => h(App),
}).$mount('#app')
