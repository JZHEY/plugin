/**
 * actions主要处理异步修改数据
 */
export default {
    updateCount(store,data){//第一个参数是整个store对象
        setTimeout(() => {
            store.state.count = data.num
        }, data.time);
    }
}