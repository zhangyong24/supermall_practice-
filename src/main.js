import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import toast from './components/common/toast'
import fastclick from 'fastclick'
import vueLazyLoad from 'vue-lazyload'


Vue.config.productionTip = false
Vue.use(Vant)
Vue.prototype.$bus = new Vue()
Vue.use(toast)
fastclick.attach(document.body)
Vue.use(vueLazyLoad,{
  loading:require("./assets/img/common/placeholder.jpg")
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
