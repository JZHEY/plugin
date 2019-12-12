<template>
    <div>
        {{msg}}
        <!-- <slot :student="student"></slot>
        <header>
            <slot name="header" :msg="msg">
                
            </slot>
        </header>
        <main>
            <slot></slot>
        </main>
        <footer>
            <slot name="footer" :namemsg="namemsg"></slot>
        </footer> -->
        <header>
            <slot name="header"></slot>
        </header>
        <main></main>
        <footer></footer>
        <h-world></h-world>
    </div>
</template>

<script>
import HWorld from './HWorld'
export default {
    name:'HeWorld',
    data(){
        return {
            msg:'hello everyBody ~~~~~~~~~~',
            namemsg:'footer my name is footer 脚 体胖',
            student:{
                name:'bob',
                age:18,
                sex:'nan'
            }
        }
    },
    components:{
        HWorld
    },
    mounted(){
        console.log(this.$parent.$options.name)
    }
}
</script>

<style scoped>

</style>
