import Vue from 'vue'
//导入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
//npm router
import router from "./router";
//u-reset.css 清除默认样式
 import "u-reset.css";
//axios
import axios from 'axios';
//echarts

//vue 的原型 上加了一个属性 所有vue的实例上都会有这个属性
Vue.prototype.$http=axios;

Vue.config.productionTip = false;
//过滤器引入
import filter from "./filter";
// Vue.filter('formateTime',filter['formateTime']);
//Object.ketys 把一个对象的所有的键打包成一个数组
Object.keys(filter).forEach(ele=>{
  Vue.filter(ele,filter[ele]);
})
//时间过滤器 全局
// Vue.filter(  'formateTime',function(value){
//   let date = new Date(value*1000);
//   value = [date.getFullYear(),date.getMonth()+1,date.getDate()].join('-');
//   return value;
// })
Vue.use(ElementUI);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

//