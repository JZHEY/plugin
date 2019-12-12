// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import createStore from './store/store'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)

Vue.config.productionTip = false
Vue.use(Vuex)

const store = createStore()
store.registerModule('c',{//动态加载模块
  state:{
    text:'my name is c ~~~'
  }
})


router.beforeEach((to,from,next )=> {
  console.log('this is BeforeRouter in main js')
  next()
})

router.beforeResolve((to ,from ,next) => {
  console.log('this is beforeResolve in main js')
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


router.afterEach((to,from) => {
  console.log("this is AfterRouter in main js")
})