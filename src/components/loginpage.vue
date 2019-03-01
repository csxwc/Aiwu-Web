<template>
    <div>
    <Header class="container"><v-header></v-header></Header>
      <vue-particles
        color="#2db7f5"
        :particleOpacity="1"
        :particlesNumber="100"
        shapeType="circle"
        :particleSize="4"
        linesColor="#2db7f5"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="1"
        :linesDistance="150"
        :moveSpeed="2"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        class="lizi"
      ></vue-particles>
    <Row type="flex" justify="center" align="middle" class="code-row-bg">
        <Col span="8" class="col-bg">
          <h1 align="center">登陆</h1>
          <div class="row">
          <v-login></v-login>
          </div>
          <router-link to="/signuppage" class="aa"><Icon type="md-contact"/>没有账号，前往注册...</router-link>
        </Col>
    </Row>
    </div>
</template>
<script>
    import header from './Header.vue'
    import login from './from_components/login.vue'
    export default {
        data(){
            return{
                userID:'',
                password:''
            }
        },
        components:{
            'v-header':header,
            'v-login':login
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
  width: 60%;
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
#particles-js{
  position: absolute;
  width: 100vw;
  z-index: -999;
}
</style>
