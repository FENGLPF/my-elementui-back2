<template>
  <div class="head-div">
    <div class="head-left">
      <div class="left-title">
        <h4>ElementUI管理平台</h4>
      </div>
      <div style="display: inline-block" @click="foldOrOpen">
<!--        <a class="el-icon-s-fold"></a>-->
        <el-button v-if="!foldAside" size="mini" class="fa fa-indent"></el-button>
        <el-button v-else size="mini" class="fa fa-outdent"></el-button>
      </div>
    </div>
    <div class="me">
      <span @click="notice_visible = true">
        <el-badge :value="notice_count" :max="99" class="item">
        <i class="el-icon-message-solid" ></i>
      </el-badge>
      </span>

      <el-dialog
        :visible.sync="notice_visible"
        :show-close="false"
        :modal-append-to-body="false"
        width="30%">
        <el-tabs :stretch="true" style="margin-top: -40px;height: 400px">
          <el-tab-pane>
            <span slot="label"><i class="el-icon-date"></i> 服务通知</span>
            服务通知
          </el-tab-pane>
          <el-tab-pane label="消息中心">消息中心</el-tab-pane>
          <el-tab-pane label="系统通知">系统通知</el-tab-pane>
          <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
        </el-tabs>
        <span slot="footer" class="dialog-footer">
<!--        <el-button @click="notice_visible = false">取 消</el-button>-->
<!--        <el-button type="primary" @click="notice_visible = false">确 定</el-button>-->
        </span>
      </el-dialog>

      <el-dropdown trigger="click" @command="handleCommand">
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
      hd_url: '',
      notice_count: 100,
      notice_visible: false
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
    },
    foldOrOpen() {
      this.foldAside = !this.foldAside

      this.$store.commit('appTag/foldOrOpenAside', this.foldAside)
    },
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
  text-align: center;
  color: #f1f4f5;
  display: inline-block;
}
.head-left {
  height: 100%;
  float: left;
  text-align: center;
}
.item {
  margin-bottom: 20px;
  margin-right: 40px;
}
</style>
