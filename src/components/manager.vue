<template>
  <div>
    <v-header></v-header>
    <vue-particles
      color="#17233d"
      :particleOpacity="1"
      :particlesNumber="100"
      shapeType="circle"
      :particleSize="4"
      linesColor="#ed4014"
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
        <h1 align="center">管理员登陆</h1>
        <div class="row">
          <v-login></v-login>
        </div>
        <router-link to="/loginpage" class="aaa"><Icon type="md-contact"/>用户登陆</router-link>
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
  .aaa{
    color: #ed4014;
  }
  #particles-js{
    position: absolute;
    width: 100vw;
    z-index: -999;
  }
</style>
