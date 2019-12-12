<template>
  <div>
    <router-link :to="{path:'login'}">
      <el-button>登录</el-button>
    </router-link>
    <el-table :data="userList" style="width: 100%">
      <el-table-column prop="userName" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="userEmail" label="邮箱" width="180">
      </el-table-column>
      <el-table-column prop="userType" label="类别">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import api from '@/api/api'
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
     userList:[]
    }
  },
  methods:{
    getUserList(){
      api.post_data('/api/user').then(res => {
        console.log(res)
        this.userList = res.Users
        console.log(this.userList)
      })
      // this.$axios.post('/api/user').then(res => {
      //   console.log(res)
      // }).catch(error => {
      //   console.log(error)
      // })
    }
  },
  mounted(){
    this.getUserList()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
