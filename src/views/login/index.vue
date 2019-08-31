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
            <el-form-item prop="tell" >
                <!-- 放置组件内容 -->
                <el-input v-model="loginFrom.tell" placeholder="请输入正确的手机号"></el-input>
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
        callBack()
      } else {
        callBack(new Error('您必须同意'))
      }
    }
    return {
      loginFrom: {
        tell: '',
        code: '',
        check: true
      }, // 制定表单校验规则
      loginRules: {
        tell: [{
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
        check: [{// 要用自定义校验函数
          validator
        }]
      }
    }
  },
  methods: {
    add () {
      this.$refs.loginFrom.validate((isOK, obj) => {
        if (isOK) {
          this.$message({ type: 'sucsess', message: '成功' })
        } else {
          this.$message({ type: 'warning', message: '失败' })
        }
      })
    }
  },
  mounted () {

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
