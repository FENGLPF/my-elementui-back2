<template>
  <div class="head-div">
    <div class="left-title">
      <h4 style="text-align: center;color: #f1f4f5">ElementUI管理平台</h4>
    </div>
    <el-dropdown class="me" trigger="click" @command="handleCommand">
      <span class="el-dropdown-link">
        <el-avatar icon="el-icon-user-solid"></el-avatar>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="person">个人中心</el-dropdown-item>
        <el-dropdown-item command="modify-pw">修改密码</el-dropdown-item>
        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>

</template>

<script>
export default {
name: "Header",
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      // 是否展开侧边栏
      foldAside: true,
      hd_url: ''
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleCommand(command) {
      switch (command) {
        case 'person':
          break;
        case 'modify-pw':
          break;
        case 'logout':
          this.logout()
          break;
      }
    },
    logout() {
      localStorage.clear()
      this.$router.push({name: "Login"})
      window.location.reload()
    }
  }
}
</script>

<style scoped>
.head-div {
  height: 100%;
}
.me {
  color: #fff;
  float: right;
  padding: 10px 0;
  margin-right: 30px;
  cursor:pointer;
}
.left-title {
  width: 200px;
  height: 100%;
  float: left;
  text-align: center;
}
</style>
