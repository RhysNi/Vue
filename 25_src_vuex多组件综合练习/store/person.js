// person.js 
import axios from "axios";

//人员相关配置
export default {
    namespaced: true,
    actions: {
        addPersonWang(context, value) {
            if (value.name.indexOf('王') === 0) {
                context.commit('AddPerson', value);
            } else {
                alert('只能添加姓王的人!')
            }
        },
        addQuotationsFromServer(context) {
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                (response) => {
                    context.commit('AddQuotations', response.data)
                },
                (error) => {
                    console.log('调用失败了', error.message);
                }
            )
        }
    },
    mutations: {
        AddPerson(state, value) {
            state.personList.unshift(value);
        },
        AddQuotations(state, value) {
            state.quotations = value
        }
    },
    state: {
        personList: [
            { id: '01', name: '张三' },
            { id: '02', name: '李四' },
            { id: '03', name: '王五' }
        ],
        quotations: ''

    },
    getters: {
        firstPersonName(state) {
            return state.personList[0].name
        }
    }
}