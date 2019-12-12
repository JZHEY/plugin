<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="用户名">
        <el-input v-model="formInline.username" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formInline.password" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import api from '@/api/api'
export default {
  name: "Login",
  data() {
    return {
      formInline: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    onSubmit() {
    //   api.put_data('/api/login',{
    //       name:this.username,
    //       password:this.password
    //   }).then( res => {
    //       console.log(res)
    //   })
    this.$axios.put('/api/login',{
        name:this.formInline.username,
        password:this.formInline.password
    }).then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
    },

  }
};
</script>

<style>
</style>
