<template>
  <Layout>
    <Header class="container">
      <v-header></v-header>
    </Header>

    <div>
      <Row style="height:615px">
        <Col :span="3">
          <Menu style="width:100%" :theme="'primary'" @on-select="link" active-name="1">
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
          <Button type="error" long icon="md-backspace" to="/home">退出登录</Button>
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
      link(key) {
        switch (key) {
          case '1':
            this.$router.push({path: '/user/my_booked'});
            break;
          case '2':
            this.$router.push({path: '/user/my_preference'});
            break;
          case '3':
            this.$router.push({path: '/user/my_release'});
            break;
          case '4':
            this.$router.push({path: '/user/my_info'});
            break;
          default:
            break;
        }
        //
      }
    },
    components: {
      'v-header': Header,
    }
  }
</script>

<style>
  @import url('../assets/css/container.css');
</style>
