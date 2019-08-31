<template>
  <div class="login">

    <el-card class="card">
        <div class="card-img">
            <img src="../../assets/img/logo_index.png" alt="">
        </div>
        <!-- 表单组件 容器-->
        <el-form style = 'margin-top:20px'>
            <!-- 表单项 -->
            <el-form-item>
                <!-- 放置组件内容 -->
                <el-input ></el-input>
            </el-form-item>
        </el-form>
        <!-- 表单组件 容器-->
        <el-form style = 'margin-top:20px '>
            <!-- 表单项 -->
            <el-form-item>
                <!-- 放置组件内容 -->
                <el-input style="width:220px"></el-input>
                 <el-button  style="float:right">发送验证码</el-button>
            </el-form-item>
        </el-form>
        <!-- 表单组件 容器-->
        <el-form style = 'margin-top:20px'>
            <!-- 表单项 -->
            <el-form-item>
                <!-- 放置组件内容 -->
                <el-checkbox>我已阅读并同意协议和隐私条款</el-checkbox>
            </el-form-item>
            <!-- 确定按钮 -->
            <el-from-item>
                <el-button type="primary" style="width:100%">登录</el-button>
            </el-from-item>
        </el-form>
    </el-card>

  </div>
</template>

<script>
export default {

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
