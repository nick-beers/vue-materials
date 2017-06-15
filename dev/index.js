import "babel-polyfill";
import Vue from 'vue'
import App from './App.vue'

import MVueComponents from '../src'
//import MVueComponents from '../dist/vue-materials.min'
Vue.use(MVueComponents);

new Vue({
  el: '#app',
  render: h => h(App)
})
