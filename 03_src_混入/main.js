import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  el:'#app',
  //第一种解决办法
  render: h => h(App),

  // render:q=>q('h1','RhysNi')

  //一下写法会报错：
  //You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build
  // template:`<APP></APP>`,
  // components:{
  //   App
  // }
})


