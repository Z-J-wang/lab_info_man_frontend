<template>
  <div class="login" @keydown.enter="handleSubmit('loginForm')">
    <div class="login-con">
      <Card :border="false">
        <span slot="title"> <Icon type="log-in"></Icon> 欢迎登录 </span>
        <div class="form-con">
          <Form ref="loginForm" :model="loginForm" :rules="loginRules">
            <FormItem prop="username">
              <Input v-model="loginForm.username" type="text" placeholder="输入用户名">
                <span slot="prepend">
                  <Icon type="person" size="16"></Icon>
                </span>
              </Input>
            </FormItem>
            <FormItem prop="password">
              <Input v-model="loginForm.password" type="password" placeholder="输入密码">
                <span slot="prepend">
                  <Icon type="locked" size="16"></Icon>
                </span>
              </Input>
            </FormItem>
            <FormItem>
              <Button type="primary" long @click="handleSubmit('loginForm')">登 录</Button>
            </FormItem>
          </Form>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{ required: true, message: ' ', trigger: 'blur' }],
        password: [{ required: true, message: ' ', trigger: 'blur' }]
      }
    };
  },
  methods: {
    handleSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$store
            .dispatch('login', this.loginForm)
            .then(resp => {
              this.$Notice.success({ title: '登录成功！' });
              this.$router.push({ name: 'new' });
            })
            .catch(error => {
              console.log(error);
              this.$Notice.error({ title: '登录失败！' });
            });
        }
      });
    }
  }
};
</script>

<style lang="less">
.login {
  position: relative;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  opacity: 0.8;
  background-image: url('https://file.iviewui.com/iview-admin/login_bg.jpg');

  &-con {
    position: absolute;
    top: 50%;
    right: 160px;
    z-index: 200;
    width: 300px;
    opacity: 1;
    transform: translateY(-60%);

    &-header {
      padding: 30px 0;
      font-size: 16px;
      font-weight: 300;
      text-align: center;
    }

    .form-con {
      padding: 10px 0 0;
    }

    .login-tip {
      font-size: 10px;
      text-align: center;
      color: #c3c3c3;
    }
  }
}

.ivu-card-head {
  font-weight: 700;
  text-align: center;
}
</style>
