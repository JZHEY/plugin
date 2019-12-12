
/**
 * 相当于组件内部的data
 * vue官方推荐所有打他中的数据最好都要在mutations中进行修改
 * 但是state中的数据也可以在外面直接修改  this.$store.state.count = 3
 */

export default {
    count:0,
    firstName:'jenny',
    lastName:'jiang'
}
