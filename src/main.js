import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueScrollTo from './plugins/vue-scrollto'

import Amplify, * as AmplifyModules from 'aws-amplify' // 追記
import { AmplifyPlugin } from 'aws-amplify-vue' // 追記
import aws_exports from './aws-exports' // 追記
Amplify.configure(aws_exports) // 追記

Vue.use(AmplifyPlugin, AmplifyModules) // 追記


Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  VueScrollTo,
  render: h => h(App)
}).$mount('#app')
