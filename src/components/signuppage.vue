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
    <Row type="flex" justify="center" align="middle" class="code-row-bg1">
      <Col span="8" class="col-bg1">
        <div style="height: 450px">
          <h1 align="center">注册</h1>
          <div class="row1">
          <v-signup></v-signup>
          </div>
          <router-link to="/loginpage" class="aa"><Icon type="md-contact"/>已有账号，前往登陆...</router-link>
        </div>
      </Col>
    </Row>

  </div>
</template>
<script>
  import header from './Header.vue'
  import signup from './from_components/signup.vue'
  export default {
    data(){
      return{
      }
    },
    components:{
      'v-header':header,
      'v-signup':signup
    },
    methods:{
    }

  }
</script>
<style lang="scss">
  @import url('../assets/css/container.css');
  .code-row-bg1{
    margin-top:50px;
  }
  .col-bg1{
    border: 2px solid;
    border-radius: 5px;
  }
  .row1{
    width: 80%;
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
