<template>
  <div class="hello">
   hahahah
   <!-- <he-world v-slot="{student}">
    {{student.name}}-{{student.age}}-{{student.sex}}
    <template v-slot:default="childProps">
      header~~~~{{childProps.msg}}
    </template>
    <template>
      main ~~~~~
    </template>
    <template v-slot:footer="dataProps">
      footer~~~~{{dataProps.namemsg}}
    </template>
   </he-world> -->
   <he-world>
     <template #header>
       我是脑袋大脑袋
    </template>
   </he-world>
  </div>
</template>

<script>
import HeWorld from './HeWorld'
export default {
  name: 'HelloWorld',
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    HeWorld
  }, 
  provide(){
    return {
      yeye:this
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
