export default {
    //this.$store.commit()只能接收两个参数，当传过来的参数大于1个时，commit('addcount',{num: 1,num2:'hah'})
    //addcount(state,{ num,num2 })
    addcount(state,num){//num 为调用addcount的一个参数
        state.count = num
    }
}

/**
 * mutations是专门用来修改data里面的数据(同步修改)
 */