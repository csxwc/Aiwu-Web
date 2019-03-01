<template>
    <div>
    <Header class="container"><v-header></v-header></Header>
    <Row type="flex" justify="center" align="middle" class="code-row-bg">
        <Col span="8" class="col-bg">
            <div style="height: 200px">
              <h1 align="center">登陆</h1>
              <div class="row">账号：<Input v-model="userID" placeholder="输入邮箱账号..." clearable style="width: 200px" /></div>
              <div class="row">密码：<Input type="password" v-model="password" placeholder="输入密码..." clearable style="width: 200px" /></div>
              <div align="center"><Button type="primary" style="width: 250px" @click="submit">登陆</Button></div>
              <router-link to="/signup" class="aa"><Icon type="md-contact"/>没有账号，前往注册...</router-link>
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
                userID:'',
                password:''
            }
        },
        components:{
            'v-header':header
        },
        methods:{
          submit(){
            this.$router.push('./user')
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
.aa{
  float: right;
  color: #2d8cf0;
}
</style>
