import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Notification, Message} from 'element-ui';

Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
Vue.config.productionTip = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
