export default {
    install(Vue) {
        //全局过滤器
        Vue.filter('myslice', function (val) {
            return val.slice(0, 4);
        })


        //全局自定义指令
        Vue.directive('fbind', {
            // 指令与元素成功绑定时
            bind(element, binding) {
                element.value = binding.value
            },
            // 指令所在元素被插入页面时
            inserted(element) {
                element.focus()
            },
            // 指令所在模板被重新解析时
            update(element, binding) {
                element.value = binding.value
            }
        })

        //全局混入
        Vue.mixin({
            data() {
                return {
                    x: 100,
                    y: 200
                }
            },
        })


        //给Vue原型添加一个方法
        Vue.prototype.hello = () => { alert("RhysNi") }
    }
} 