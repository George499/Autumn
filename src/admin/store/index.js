import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

import aboutmes from './modules/aboutmes'
export const store = new Vuex.Store({
    modules: {
        aboutmes
    }
})
