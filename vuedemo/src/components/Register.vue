<template>
    <div>
        this is register page ~~~~
    </div>
</template>

<script>
export default {
    name:'register',
    beforeRouteEnter (to,from,next){
        console.log('this is beforeRouteEnter in register')
        next()
    },
    beforeRouteUpdate (to,from,next){//同一个页面，传过来的参数不同就会触发这个方法，比如说localhost：8080/home?id:123   => localhost：8080/home?id:456就会触发该方法
        console.log('this is beforeRouteUpdate  in register')
        next()
    },
    beforeRouteLeave (to, from, next){
        console.log('this is beforeRouteLeave in register')
        next()
    }
}
</script>

<style scoped>

</style>
