<template>
  <div class="login-container">
    <el-form :model="ruleForm2" :rules="rules2"
             status-icon
             ref="ruleForm2"
             label-position="left"
             label-width="0px"
             class="demo-ruleForm login-page">
      <h3 class="title">系统登录</h3>
      <el-form-item prop="username">
        <el-input type="text"
                  v-model="ruleForm2.username"
                  auto-complete="new-password"
                  placeholder="用户名"
                  @keypress.native.enter="handleSubmit"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password"
                  v-model="ruleForm2.password"
                  auto-complete="new-password"
                  placeholder="密码"
                  @keypress.native.enter="handleSubmit"
        ></el-input>
      </el-form-item>
      <el-checkbox
        v-model="checked"
        class="rememberme"
      >记住密码</el-checkbox>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click="handleSubmit" :loading="logining">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      logining: false,
      ruleForm2: {
        username: '',
        password: '',
      },
      rules2: {
        username: [
          {required: true, message: '请输入账号', trigger: 'blur'},
          {min:6, max:20,message: '6-20位数字+字母'},
          {pattern: /^[0-9a-zA-Z]{6,20}$/, message: '6-20位数字+字母'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min:6, max:20,message: '6-20位数字+字母'},
          {pattern: /^[0-9a-zA-Z]{6,20}$/, message: '6-20位数字+字母'}
        ]
      },
      checked: false
    }
  },
  created() {
    // let token = localStorage.getItem('token');
    // if(token!='null'&&token!=null&&token!=undefined&&token!='undefined'&&token.length>0) {
    //   this.$router.push({path: '/Home'});
    // }
  },
  mounted() {
    // 获取 messageBox DOM 后移除
    let el_message_box = document.querySelector('.el-message-box__wrapper')
    let v_modal = document.querySelector('.v-modal')
    if(el_message_box && v_modal){
      el_message_box.parentNode.removeChild(el_message_box)
      v_modal.parentNode.removeChild(v_modal)
    }

  },
  methods: {
    handleSubmit(event){
      let _this = this;

      _this.$router.push({path: '/Home'});
      return

      _this.$refs.ruleForm2.validate((valid) => {
        if(valid){
          _this.logining = true;
          _this.$http({
            method: 'post',
            url: _this.$common.api_url+"/login/empLogin",
            data: {
              account: _this.ruleForm2.username,
              password: _this.ruleForm2.password
            },
            headers: {
              'Content-Type':"application/json"
            }
          }).then((res)=>{
            _this.logining = false;
            if(res.data.success) {
              localStorage.setItem('token', res.data.data.token);
              localStorage.setItem('menu', JSON.stringify(res.data.data.menu));
              _this.$router.push({path: '/Home'});
            }else {
                _this.$alert(res.data.msg, '登录失败', {
                  confirmButtonText: 'ok'
                })
            }
          },(res)=>{
            _this.logining = false;
            _this.$message.error("服务开小差了")
            return false
          })
        }else{
          return false;
        }
      })
    }
  }
};
</script>

<style scoped>
.login-container {
  background: url("../../assets/img/login-bg.jpg");
  background-size: 100% 100%;

  width: 100%;
  height: 100vh;
  position: fixed;
}
.login-page {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
label.el-checkbox.rememberme {
  margin: 0px 0px 15px;
  text-align: left;
}
</style>
