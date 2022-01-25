// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

import axios from 'axios'
Vue.prototype.$http = axios

import store from "@/store/store";

Vue.config.productionTip = false

import common from "@/api/common";
Vue.prototype.$common = common

import eIconPicker from 'e-icon-picker';
import "e-icon-picker/lib/symbol.js"; //基本彩色图标库
import 'e-icon-picker/lib/index.css'; // 基本样式，包含基本图标
import 'font-awesome/css/font-awesome.min.css'; //font-awesome 图标库
import 'element-ui/lib/theme-chalk/icon.css'; //element-ui 图标库

Vue.use(eIconPicker, {FontAwesome: true, ElementUI: true, eIcon: true, eIconSymbol: true});

import VueIntro from 'vue-introjs'
import 'intro.js/introjs.css'
Vue.use(VueIntro)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
