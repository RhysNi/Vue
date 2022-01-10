//index.js
// 该文件用于创建Vuex中最核心的store
// 引入Vuex
import Vue from 'vue'

// 引入Vuex
import Vuex from 'vuex'

import personOptions from './person'
import countOptions from './count'

//使用VueX
Vue.use(Vuex);

//创建并暴露store
export default new Vuex.Store({
    modules: {
        countAbout: countOptions,
        personAbout: personOptions
    }
})