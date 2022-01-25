//store.js
import Vue from 'vue'
import Vuex from 'vuex'

import appTag from '@/store/module/appTag'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    appTag
  }
})
