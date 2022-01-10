//count.js 
//求和相关配置
export default {
    namespaced: true,
    actions: {
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
    },
    mutations: {
        Increment(state, value) {
            state.sum += value;
        },
        Decrement(state, value) {
            state.sum -= value;
        },
    },
    state: {
        sum: 0,
        subject: 'Vue',
        dayTime: 5,
    },
    getters: {
        largeSum(state) {
            return state.sum * 10
        }
    }
}