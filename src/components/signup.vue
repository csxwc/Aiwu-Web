<template>
  <div>
    <Header class="container"><v-header></v-header></Header>
    <Row type="flex" justify="center" align="middle" class="code-row-bg">
      <Col span="8" class="col-bg">
        <div style="height: 450px">
          <h1 align="center">注册</h1>
          <div class="row">邮箱：<br>
              <Input v-model="email" placeholder="输入邮箱账号..." clearable style="width: 200px;float:left;" /><br>
              <Button type="primary" :disabled="cantClick" style="width:200px;margin-top: 10px" @click="send">{{content}}</Button>
          </div>
          <div class="row">验证码：<br>
            <Input v-model="code" placeholder="输入验证码..." clearable style="width: 200px;float:left;" /><br>
          </div>
          <div class="row">用户名：<br>
            <Input v-model="username" placeholder="输入用户名..." clearable style="width: 200px;float:left;;" /><br>
          </div>
          <div class="row">密码：<br>
            <Input type="password" v-model="password" placeholder="输入密码..." clearable style="width: 200px;float:left;;" /><br>
          </div>
          <div class="row">确认密码：<br>
            <Input type="password" v-model="confirmpw" placeholder="输入密码..." clearable style="width: 200px;float:left;" /><br>
          </div>
          <div align="center"><Button type="primary" style="width: 250px;margin-top: 20px" @click="submit">注册</Button></div>
        </div>
      </Col>
    </Row>
  </div>
</template>
<script>
  import header from './Header.vue'
  export default {
    data(){
      return{
        content:'发送验证码',
        email:'',
        password:'',
        confirmpw:'',
        code:'',
        username:'',
        totalTime: 10,
        cantClick: false
      }
    },
    components:{
      'v-header':header
    },
    methods:{
      submit(){
          this.$axios.post('http://118.113.9.118:8888/user/register', {
            email: this.email,
            password: this.password,
            code: this.code,
            username: this.username
          })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
      },
      send(){
        this.$axios.post('http://118.113.9.118:8888/user/register/mail',{
          email:this.email
        })
          .then((response) => {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        if (this.cantClick) return  //改动的是这两行代码
        this.cantClick = true
        this.content = this.totalTime + 's后重新发送'
        let clock = window.setInterval(() => {
          this.totalTime--
          this.content = this.totalTime + 's后重新发送'
          if (this.totalTime < 0) {
            window.clearInterval(clock)
            this.content = '重新发送验证码'
            this.totalTime = 10
            this.cantClick = false  //这里重新开启
          }
        },1000)
      }
    }

  }
</script>
<style lang="scss">
  @import url('../assets/css/container.css');
  .code-row-bg{
    margin-top:150px;
  }
  .col-bg{
    border: 2px solid;
    border-radius: 5px;
  }
  .row{
    width: 42%;
    margin-right: auto;
    margin-left: auto;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  h1{
    margin-top: 10px;
    margin-bottom: 10px;
  }
</style>
