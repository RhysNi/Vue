import Vue from 'vue'
import App from './App.vue'

// 引入ElementUI组件库
// import ElementUI from 'element-ui';

// 引入ElementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css';

// 按需引入
import { Button, Row, DatePicker, } from 'element-ui';

Vue.config.productionTip = false


// 应用ElementUI
// Vue.use(ElementUI);

//组件名称（el-xxx）
// Vue.component(Button.name, Button);
// Vue.component(Row.name, Row);
// Vue.component(DatePicker.name, DatePicker);

//自定义组件名称
Vue.component('rhys-button', Button);
Vue.component('rhys-row', Row);
Vue.component('rhys-date-picker', DatePicker);

new Vue({
  el: '#app',
  render: h => h(App),
})