<template>
  <div>
    <div style="color:white;font-size: 40px;position: absolute;top: 220px;left: 250px;z-index: 999" v-if="pic===0">
      我是你爸爸
    </div>
    <div style="color:white;font-size: 40px;position: absolute;top: 220px;left: 250px;z-index: 999" v-else-if="pic===1">
      我是你爷爷
    </div>
    <div style="color:white;font-size: 40px;position: absolute;top: 220px;left: 250px;z-index: 999" v-else>我是你儿子</div>
    <Layout>
      <!--<v-header></v-header>-->
      <div style="text-align: center">
        <!--<v-header id="header"></v-header>-->
        <!--<v-header id="head"></v-header>-->
        <Menu :theme="'dark'" id="head" mode="horizontal">
          <MenuItem name="1" style="width: 30%;">
            <Select @on-change="selectChange($event)"
                    placeholder="请选择房源地..."
                    size="large"
                    style="width:100%;"
                    transfer
                    v-model="selected">
              <Option :key="item.value" :value="item.value" v-for="item in cityList">{{ item.label }}</Option>
            </Select>
          </MenuItem>
          <MenuItem name="2" style="width: 10%;padding-left:0px ">
            <Button @click="sendLocation" icon="ios-search" size="large">Search</Button>
          </MenuItem>
          <div style="float: right;">
            <MenuItem name="3" style="padding-left: 0" to="/home">
              <Icon type="md-home"/>
              主页
            </MenuItem>
            <MenuItem name="4" style="padding-left: 0">
              <Icon @click="value1 = true" type="md-compass"/>
              帮助
            </MenuItem>
            <MenuItem :to="this.redirect" name="5" style="padding-left: 0">
              <div v-if="isLogged">
                <Icon to="/user/my_booked/" type="md-contact"/>
                我的
              </div>
              <div v-else>
                <Icon type="md-contact"/>
                登录
              </div>
            </MenuItem>
          </div>

        </Menu>
        <v-carousel @textChange="textChange($event)">
        </v-carousel>
      </div>
      <div style="width: 75%; text-align: center;margin:0 auto;">
        <div style="margin-top: 50px; height: 50px">
          <Select filterable placeholder="输入目的地或城市" style="width: 60%;float: left;" v-model="selected">
            <Option :key="item.value" :value="item.value" v-for="item in cityList">{{ item.label }}</Option>
          </Select>
          <Button ghost icon="md-pin" shape="circle" style="width: 20%;font-size: 23px;" type="error">前往</Button>
        </div>
        <div style="font-size:23px;margin-top:20px;text-align: left"><strong>热门推荐</strong></div>
        <Row :gutter="10" :key="row.id" align="top" style="" type="flex" v-for="(row,row_index) in 2">
          <Col :key="col.id" push="0" span="8" v-for="(col,col_index) in 3">
            <v-sugCard
              :houseid='infoList[row_index*3+col_index].houseid'
            :src="infoList[row_index*3+col_index].src"
            :count="infoList[row_index*3+col_index].count"></v-sugCard>
          </Col>
        </Row>
      </div>


    </Layout>
    <Drawer :closable="false" v-model="value1" width="640">
      <p :style="pStyle">User Profile</p>
      <p :style="pStyle">Personal</p>
      <div class="demo-drawer-profile">
      </div>
      <Divider/>
      <p :style="pStyle">Company</p>
      <div class="demo-drawer-profile">

      </div>
      <Divider/>
      <p :style="pStyle">Contacts</p>
      <div class="demo-drawer-profile">
      </div>
    </Drawer>
  </div>
</template>

<script>
  import Header from './Header.vue'
  import SuggestCard from './home_components/SuggestCard.vue'
  import Carousel from './home_components/Carousel.vue'
  import VueEvent from '../model/VueEvent.js'

  export default {
    data() {
      return {
        pic: 0,
        cityList: [
          {
            value: '北京',
            label: '北京'
          },
          {
            value: '上海',
            label: '上海'
          },
          {
            value: '天津',
            label: '天津'
          },
          {
            value: '重庆',
            label: '重庆'
          },
          {
            value: '澳门',
            label: '澳门'
          },
          {
            value: '香港',
            label: '香港'
          },
          {
            value: '石家庄',
            label: '石家庄'
          },
          {
            value: '太原',
            label: '太原'
          },
          {
            value: '沈阳',
            label: '沈阳'
          },
          {
            value: '长春',
            label: '长春'
          },
          {
            value: '哈尔滨',
            label: '哈尔滨'
          },
          {
            value: '济南',
            label: '济南'
          },
          {
            value: '南京',
            label: '南京'
          },
          {
            value: '杭州',
            label: '杭州'
          },
          {
            value: '合肥',
            label: '合肥'
          },
          {
            value: '福州',
            label: '福州'
          },
          {
            value: '台北',
            label: '台北'
          },
          {
            value: '南昌',
            label: '南昌'
          },
          {
            value: '郑州',
            label: '郑州'
          },
          {
            value: '武汉',
            label: '武汉'
          },
          {
            value: '长沙',
            label: '长沙'
          },
          {
            value: '广州',
            label: '广州'
          },
          {
            value: '海口',
            label: '海口'
          },
          {
            value: '成都',
            label: '成都'
          },
          {
            value: '贵阳',
            label: '贵阳'
          },
          {
            value: '昆明',
            label: '昆明'
          },
          {
            value: '西安',
            label: '西安'
          },
          {
            value: '兰州',
            label: '兰州'
          },
          {
            value: '西宁',
            label: '西宁'
          },
          {
            value: '南宁',
            label: '南宁'
          },
          {
            value: '呼和浩特',
            label: '呼和浩特'
          },
          {
            value: '拉萨',
            label: '拉萨'
          },
          {
            value: '银川',
            label: '银川'
          },
          {
            value: '乌鲁木齐',
            label: '乌鲁木齐'
          },
        ],
        selected: '',
        infoList: [
          {houseid: 1643534, src: 'https://z1.muscache.cn/im/pictures/40ad5b5a-9592-42fb-b6a2-3d68c637af12.jpg', count: 5},
          {houseid: 1933639, src: 'https://z1.muscache.cn/im/pictures/3eda431a-8455-48b7-8764-0759d67fdcab.jpg', count: 4.5},
          {houseid: 1991056, src: 'https://z1.muscache.cn/im/pictures/f755e3c3-70be-47da-8f35-c5cb1fb15617.jpg', count: 4.5},
          {houseid: 2433033, src: 'https://z1.muscache.cn/im/pictures/84bf382e-c3d5-4dc0-8e59-7326874ef1ef.jpg', count: 5},
          {houseid: 2877048, src: 'https://z1.muscache.cn/im/pictures/a5c26305-21a9-46c5-a5d1-c6222db507f3.jpg', count: 4},
          {houseid: 3371149, src: 'https://z1.muscache.cn/4ea/air/v2/pictures/c0e566ea-93d4-404d-9cce-b780f67cda88.jpg', count: 4.5}],
        value1: false,
        pStyle: {
          fontSize: '16px',
          color: 'rgba(0,0,0,0.85)',
          lineHeight: '24px',
          display: 'block',
          marginBottom: '16px'
        },

      }
    },

    components: {
      'v-header': Header,
      'v-sugCard': SuggestCard,
      'v-carousel': Carousel,
    },
    methods: {
      textChange(event) {
        this.pic = event;
      },

      selectChange(event) {
        // console.log(event);
      },
      sendLocation() {
        if (this.selected === '') {
          this.$Message.warning('请选择一个城市！');
        } else {
          // VueEvent.$emit('location', this.selected)
          this.$router.push('/map');
          this.$store.dispatch('changeCityFooter', this.selected);
        }

      },
      open() {
        this.value1 = true;
      }
    },
    mounted() {
      var logged_in = localStorage.getItem("logged-in");
      if (logged_in === "true") {
        // console.log("我登录了");

      } else {
        localStorage.setItem("logged-in", false);
        console.log("我还没登录");
      }
    },
    computed: {
      // picNumber(){
      //    return this.$refs.zoumadeng.change();
      // },

      isLogged() {
        return localStorage.getItem("logged-in") === 'true';
      },
      redirect() {
        return localStorage.getItem("logged-in") === 'true' ? "/user/my_booked/" + localStorage.getItem("userid") : "/loginpage";
      }
    }
  }
</script>

<style>
  @import url('../assets/css/container.css');

  #head {
    position: absolute;
    width: 100vw;
    background: rgba(255, 255, 255, 0);
  }

  .demo-drawer-profile {
    font-size: 14px;
  }

  .demo-drawer-profile .ivu-col {
    margin-bottom: 12px;
  }

  .ivu-select-single .ivu-select-selection {
    height: 50px;
  }

  .ivu-select-input {
    height: 50px;
    font-size: 23px;
  }
</style>




