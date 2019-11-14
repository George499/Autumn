import Vue from 'vue';
import App from './App.vue'
import SimpleVueValidation from 'simple-vue-validator';
import router from '../admin/router/router';

import store from './store';
import axios from './requests';


Vue.use(SimpleVueValidation);

store.$axios = axios;

new Vue({
  el: "#app-root",
  router,
  store,
  render: h => h(App)
});