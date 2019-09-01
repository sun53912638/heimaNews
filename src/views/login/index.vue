<template>
  <div class="login">

    <el-card class="card">
        <div class="card-img">
            <img src="../../assets/img/logo_index.png" alt="">
        </div>
        <!-- 表单组件 容器-->
        <!-- 记得给容器绑定:model,:rules,这是规定 -->
        <el-form ref="loginFrom" :model="loginFrom" style = 'margin-top:20px' :rules="loginRules">
            <!-- 表单项 -->
            <el-form-item prop="mobile" >
                <!-- 放置组件内容 -->
                <el-input v-model="loginFrom.mobile" placeholder="请输入正确的手机号"></el-input>
            </el-form-item>

            <!-- 表单项 -->
            <el-form-item prop="code">
                <!-- 放置组件内容 -->
                <el-input v-model="loginFrom.code" placeholder="请输入验证码" style="width:220px"></el-input>
                 <el-button  style="float:right">发送验证码</el-button>
            </el-form-item>

            <!-- 表单项 -->
            <el-form-item prop="check">
                <!-- 放置组件内容 -->
                <el-checkbox v-model="loginFrom.check">我已阅读并同意协议和隐私条款</el-checkbox>
            </el-form-item>
            <!-- 确定按钮 -->
            <el-form-item>
                <el-button @click="add" type="primary" style="width:100%">登录</el-button>
            </el-form-item>
        </el-form>
    </el-card>

  </div>
</template>

<script>
export default {
  data () {
    let validator = function (rule, value, callBack) {
      if (value) {
        callBack()// 执行回调函数
      } else {
        callBack(new Error('您必须同意'))// 抛出错误
      }
    }
    return {
      loginFrom: {
        mobile: '',
        code: '',
        check: true
      }, // 制定表单校验规则
      loginRules: {
        mobile: [{
          required: true,
          message: '手机号不能为空'
        }, {
          pattern: /^1[3456789]\d{9}$/,
          message: '手机号不正确'
        }],
        code: [{
          required: true,
          message: '验证不能为空'
        }, {
          pattern: /^\d{6}$/,
          message: '验证不能为空'
        }],
        check: [{// 要用自定义校验函数,可以写在return前面,就写前面了
          validator
        }]
      }
    }
  },
  methods: {
    add () {
      this.$refs.loginFrom.validate((isOK, obj) => {
        if (isOK) {
          this.$http({// data携带请求体body参数
            url: '/authorizations',
            method: 'post',
            data: this.loginFrom

          }).then(res => {
            console.log(res.data)
            window.localStorage.setItem('user-token', res.data.data.token)
          }).catch(err => {
            this.$message({ message: '手机号或密码错误', type: 'warning' })
            console.log(err)
          })
        } else {

        }
      })
    }
  }

}
</script>

<style scoped lang="less">
.login {
    background: url('../../assets/img/login_bg.jpg');
    height: 100vh;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    .card {
        width: 400px;
        height: 340px;

        .card-img {
            text-align: center;
            img {
                height: 40px;
            }
        }
    }
}
</style>
