<template>
  <Layout>
    <v-header></v-header>
    <div>
      <Row style="height:615px">
        <Col :span="3">
          <Menu style="width:100%" :theme="'primary'"  active-name="1" @on-select="test($event)">
            <MenuGroup title="房源管理">
              <MenuItem name="1">
                <Icon type="md-document"/>
                我的预定
              </MenuItem>
              <MenuItem name="2">
                <Icon type="md-star"/>
                我的收藏
              </MenuItem>
              <MenuItem name="3">
                <Icon type="ios-send"/>
                我的发布
              </MenuItem>
            </MenuGroup>
            <MenuGroup title="账号管理">
              <MenuItem name="4">
                <Icon type="md-person"/>
                个人信息
              </MenuItem>
            </MenuGroup>
          </Menu>
          <Button type="error" long icon="md-backspace" @click="loggoff">退出登录</Button>
        </Col>
        <Col span="21">
          <router-view></router-view>
        </Col>
      </Row>
    </div>

  </Layout>
</template>

<script>
  import Header from './Header.vue'

  export default {
    methods: {
      loggoff(){
        localStorage.setItem("logged-in", false);
        localStorage.setItem("userid", null);
        this.$router.push("/home");
      },
      test(event){
        // console.log(event)
        switch (event) {
          case '1':
            this.$router.push('/user/my_booked/'+this.$route.params.userid);
            break;
          case '2':
            this.$router.push('/user/my_preference/'+this.$route.params.userid);
            break;
          case '3':
            this.$router.push('/user/my_release/'+this.$route.params.userid);
            break;
          case '4':
            this.$router.push('/user/my_info/'+this.$route.params.userid);
            break;
        }
      }
    },
    components: {
      'v-header': Header,
    },
    computed:{

    },
    mounted() {
      var status = localStorage.getItem("logged-in");
      if(status=='false'){
        this.$Message.warning('您没有登录，请登录');
        this.$router.push('/loginpage');
      }
      else{
        // console.log("user commands");
        this.$router.push('/user/my_booked/'+this.$route.params.userid);
      }
    }

  }
</script>

<style>
  @import url('../assets/css/container.css');
</style>
