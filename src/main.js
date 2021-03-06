import Vue from 'vue'
import Buefy from 'buefy';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

library.add(fab, fas);
dom.watch();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.use(Buefy, {
  defaultIconPack: 'fab',
});
