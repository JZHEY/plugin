export default {//相当于computed方法
    fullName(state){
        return `${state.firstName} + ${state.lastName}`
    }
}