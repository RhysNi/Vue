// 该文件用于创建Vuex中最核心的store
// 引入Vuex
import Vue from 'vue'

// 引入Vuex
import Vuex from 'vuex'

//使用VueX
Vue.use(Vuex);

//用于响应组件中的动作
const actions = {
    // increment(context, value) {
    //     context.commit('Increment', value);
    // },
    // decrement(context, value) {
    //     context.commit('Decrement', value);
    // },
    incrementOdd(context, value) {
        if (context.state.sum % 2) {
            context.commit('Increment', value);
        }
    },
    incrementWait(context, value) {
        setTimeout(() => {
            context.commit('Increment', value);
        }, 500);
    },

}

//用于操作数据（state）
const mutations = {
    Increment(state, value) {
        state.sum += value;
    },
    Decrement(state, value) {
        state.sum -= value;
    },
    AddPerson(state, value) {
        state.personList.unshift(value);
    },
}

//用于存储数据
const state = {
    sum: 0,
    subject: 'Vue',
    dayTime: 5,
    personList: [
        { id: '01', name: '张三' },
        { id: '02', name: '李四' },
        { id: '03', name: '王五' }
    ]
}

const getters = {
    largeSum(state) {
        return state.sum * 10
    }
}

//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})