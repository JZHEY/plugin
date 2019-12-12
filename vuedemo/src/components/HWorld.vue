<template>
    <div>
        {{msg}}
    </div>
</template>

<script>

export default {
    name:'HWorld',
    data(){
        return {
            msg:'hello xixixi~'
        }
    },
    inject:['yeye'],//孙子组件获取爷爷组件的值，孙子组件的值改变，爷爷组件的值不会改变
    mounted(){
        console.log(this.yeye.$options.name)
    }
}
</script>

<style scoped>

</style>
