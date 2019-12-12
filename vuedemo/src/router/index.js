import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      // path:'/login/：id',//如果不设置props：true 获取参数只能用this.$route取得参数，设置props：true 只要在相应的页面设置props：['id]来获取参数
      // props:true,//props不仅仅只能设置为true 还可以设置为对象{}或者方法 props: (route) => ({id:route.query.***}) 
      // 建议不要使用this.$route来获取参数，会导致组件复用性不强 建议使用props进行解耦
      path:'/login',
      name:'Login',
      component:() => import ('../components/Login'),//使用import方法不会一下子加载所有所有的js，而是会加载核心js和该页面需要的js文件
      beforeEnter:(to,from,next) => {
        console.log('this is beforeEnterRouter in index js')
        next()
      }
    },
    {
      path:'/register',
      name:'Register',
      component:() => import ('../components/Register')
      //如果一个页面中有一个以上的router-view  比如 一个是<router-view /> <router-view name="a" />
      /*components:{
          default:Login,
          a:Register       //适用于当切换不同页面时 如果有一块布局变化较大可以使用这个方法
      }*/
    }
  ],
  mode:'history',
  linkActiveClass:'link-active-class',//url路径部分匹配时，a标签上就会增加这个属性 比如说 /login包含于/login/student 则该router-link上出现该属性
  linkExactActiveClass:'link-exactActive-class',//url路径完全匹配时，a标签上这两个属性都会被增加， 比如说路由路径与页面路径都是/login/student，则该router-link上会出现link-exactActive-class和link-active-class属性
  scrollBehavior (to, from ,scrollBehavior){
    //to：目标路由 from ：起始路由 scrollBehavior 如果之前进入过这个路由页面，并且在这个页面中发生过滚动，那么下次在进入这个页面时，页面就会在滚动条的那个位置
    if(scrollBehavior){
      return scrollBehavior
    }else{
      return {x:0,y:0}
    }
  },
  fallback:true, //不是所有的浏览器都支持history模式，所以当有些浏览器不支持时，vue会自动帮忙转成hash模式

})
