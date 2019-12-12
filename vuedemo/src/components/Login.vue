<template>
    <div>
        this is login page
        <p>{{count}}</p>
        <p>{{fullName}}</p>
        <p>{{textA}}</p>
        <p>{{editText}}</p>
        <p>{{textB}}</p>
        <p>{{textC}}</p>
        <button @click="handleClick()">你好</button>
    </div>
</template>

<script>
import { mapGetters, mapState, mapMutations, mapActions } from 'vuex'
export default {
    name:'login',
    mounted(){
        console.log(this.$store)
        var i = 0
        // this.$store.dispatch('updateCount',{
        this.updateCount({
            num:10,
            time:2000
        })
            
        // setInterval(() => {
        //     // this.$store.commit('addcount', i++)//调用commit方法修改store中的值
        //     this.addcount(i++)
        // }, 1000);
        this['a/updateText']('鸡爪~~')
        this['a/modifyText']('')
        this['a/globalText']('')
    },
    computed:{
        // count(){
        //     return this.$store.state.count
        // },
        ...mapState({
            count: (state) => state.count,
            textA: (state) => state.a.text,
            textB: state => state.b.text,
            textC: state => state.c.text
        }),//与上述的count（）方法实现的功能一样
        // fullName(){
        //     return this.$store.getters.fullName
        // }
        // ...mapGetters(['fullName']),
        ...mapGetters({          //当getters中的方法名与computed中的方法名不一致是可以用 ...mapGetters({})的方式  前面为computed中的方法名 后者为getters中的方法名
            fullName :'fullName',
            editText : 'a/editText'
        })
        // textA(){
        //     return this.$store.state.a.text
        // }
    },
    methods:{
        ...mapActions(['updateCount','a/modifyText','a/globalText']),
        ...mapMutations(['addcount','a/updateText'],),
        handleClick(){
            // this.$axios.get('/api/')
        }
    }
}
</script>

<style scoped>

</style>
