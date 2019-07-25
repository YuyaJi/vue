<template>
  <div class="page">
    <div>
      <h2>Log In</h2>
      <userLogin ref="userLogin"></userLogin>
      <el-button type="success" @click="submit">Access</el-button>
    </div>
  </div>
</template>

<script>

import userLogin from './UserLogin.vue'

export default {
  name: '',
  components: {
    userLogin
  },
  data () {
    return {}
  },
  methods: {
    submit () {
      this.userInfo = this.$refs.userLogin.getUserInfo()
      if (this.userInfo.username !== '' && this.userInfo.password !== '') {
        this.$message({
          message: '登录成功',
          type: 'success'
        })
      } else {
        this.$message({
          message: '账号密码不能为空',
          type: 'warning'
        })
        return false
      }
      this.$router.push('/home')
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
