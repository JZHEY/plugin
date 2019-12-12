import Vuex from 'vuex'
import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'

export default () => {
    const store = new Vuex.Store({
        state:defaultState,
        mutations,
        getters,
        actions,
        modules:{
            a:{
                //如果不加namespaced:true，所有模块中mutations中的方法名不能重名，一旦加了namespaced:true，不同模块的mutations中可以重名
                //相当于a模块的mutations里面的方法是a模块私有，不会与其他模块发生冲突
                //加上namespaced:true 之后 调用该方法的相应组件需要进行相应的修改
                //...mapMutations(['addcount','a/updateText']),
                //this['a/updateText']()
        
                namespaced:true,
                state:{
                    text:'my name is a ~'
                },
                mutations:{
                    updateText(state,num){
                        state.text = num + '我是A'
                        return state.text
                    }
                },
                getters:{
                    editText(state,getters,rootState){//getters 所有的getters中的方法，rootState 全局的state
                        return `${state.text} 哈哈哈哈 + ${rootState.count} + ${rootState.b.text}`
                    }
                },
                actions:{
                    modifyText({state, commit, rootState}){
                        commit('updateText',rootState.count)
                    },
                    globalText({state,commit, rootState}){
                        commit('addcount',555555555,{root:true})
                    }
                }
            },
            b:{
                state:{
                    text:'my name is b ~'
                }
            }
        },
    })
    
    /**
     * 实现vuex的热更替
     */
    if(module.hot){
        module.hot.accept([
            './state/state',
            './mutations/mutations',
            './getters/getters',
            './actions/actions'
        ], () => {
            const newState = require('./state/state').default
            const newMutations = require('./mutations/mutations').default
            const newGetters = require('./getters/getters').default
            const newActions = require('./actions/actions').default

            store.hotUpdate({
                state:newState,
                mutations:newMutations,
                getters:newGetters,
                actions:newActions
            })
        })
    }
    return store
}

/**
 * 思路：安装vuex
 *      在store.js文件中创建一个store
 *      在main.js文件中导入store
 *      在组件中用this.$store 可以拿到这个store里面的数据
 *      可以用this.&store.commit() 修改store中的值
 */

 /**
  * 服务端渲染步骤：
  * 
  * 需要export default store
  * 在main.js中导入
  * import Vuex from 'vuex'
  * Vue.use(Vuex)
  * import createStore from './store/store'
  * const store = createStore()
  */