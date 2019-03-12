<template>
    <div>
      <BackTop></BackTop>
      <div v-if="pic===0" class="text">
        <strong style="font-size: 35px;">来九州看樱花<br>
          在大自然间畅快呼吸</strong>
        <p style="font-size: 20px">避开人潮看花泡温泉</p>
        <Button type="default" ghost size="large">立即前往</Button>
      </div>
      <div v-else-if="pic===1" class="text">
        <strong style="font-size: 35px;">五月武汉<br>
          自由自在、悠然赏樱</strong>
        <p style="font-size: 20px">抓住樱花季的尾巴，特色民宿任你选</p>
        <Button type="default" ghost size="large">立即前往</Button>
      </div>
      <div v-else class="text">
        <strong style="font-size: 35px;">悠闲一夏<br>
          趁花开、邂逅成都</strong>
        <p style="font-size: 20px">上百亩花田任你观赏</p>
        <Button type="default" ghost size="large">立即前往</Button>
      </div>
        <Layout>
            <!--<v-header></v-header>-->
                <div style="text-align: center">
                  <!--<v-header id="header"></v-header>-->
                  <!--<v-header id="head"></v-header>-->
                  <Menu mode="horizontal" :theme="'dark'" id="head">
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
                      <Button @click="sendLocation" icon="ios-search" ghost size="large">Search</Button>
                    </MenuItem>
                    <div style="float: right;">
                      <MenuItem style="padding-left: 0" to="/home" name="3">
                        <Icon type="md-home"/>
                        主页
                      </MenuItem >
                      <MenuItem style="padding-left: 0" name="4" >
                        <Icon type="md-compass" @click="value1 = true"/>
                        帮助
                      </MenuItem>
                      <MenuItem style="padding-left: 0" :to="this.redirect" name="5">
                        <div  v-if="isLogged">
                          <Icon type="md-contact" to="/user/my_booked/"/>
                          我的</div>
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
                <div style="width: 100%;" :style="{backgroundImage:'url('+require('../assets/images/2.jpg')+')'}">
                  <div style="width: 75%; text-align: center;margin:0 auto;">
                    <hr style="margin-top: 40px;">
                    <div style="margin-top: 40px; height: 50px">
                      <Icon type="ios-train" size='50' style="float: left"/>
                      <Select v-model="selected" filterable style="width: 63%;" placeholder="输入目的地、城市">
                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                      </Select>
                      <Icon type="ios-arrow-forward" size='50'/>
                      <Button type="error" ghost icon="md-pin" style="width: 25%;font-size: 23px;" @click="sendLocation">前往</Button>
                    </div>
                    <div style="font-size:23px;margin-top:20px;text-align: left"><strong>热门推荐</strong></div>


                    <div v-if="suggest_selector">
                      <Row :gutter="10" :key="row.id" align="top" style="" type="flex" v-for="(row,row_index) in Math.ceil(infoList.length/3)">
                        <Col :key="col.id" push="0" span="8" v-for="(col,col_index) in 3">
                          <router-link :to="'/houseinfo/'+infoList[row_index*3+col_index].houseid"><v-sugCard
                            :houseid='infoList[row_index*3+col_index].houseid'
                            :src="infoList[row_index*3+col_index].src"
                            :count="infoList[row_index*3+col_index].count"></v-sugCard></router-link>
                        </Col>
                      </Row>
                    </div>
                    <div v-else>

                    </div>



                  </div>
                  <div style="height: 1100px;width: 75%; text-align: center;margin: 0 auto;">
                    <div style="margin-top: 40px">
                    <h1 style="margin-bottom: 80px;font-size: 40px">我们的服务</h1>
                      <Row style="margin-top: 40px">
                        <Col span="8" style="padding-left: 60px;padding-right: 60px"><Icon type="md-globe" size='80'/><br><br>
                          <p style="font-size: 16px">全国各大旅游城市，上万套精品民宿房源，覆盖多种民宿风格，居住人数，旅游体验</p>
                        </Col>
                        <Col span="8" style="padding-left: 60px;padding-right: 60px"><Icon type="md-compass" size='80'/><br><br>
                          <p style="font-size: 16px">全国地图精准定位，房源位置信息一键查看，距离，热度，密集度可视化统计，旅游热力图绝佳显示方式</p>
                        </Col>
                        <Col span="8" style="padding-left: 60px;padding-right: 60px"><Icon type="logo-instagram" size='80'/><br><br>
                          <p style="font-size: 16px">千万级民宿文字描述，超过60万张高质量照片，全方位全角度展现民宿精美内饰</p>
                        </Col>
                      </Row>
                      <Row style="margin-top: 40px">
                        <Col span="8" style="padding-left: 60px;padding-right: 60px"><Icon type="ios-paper-plane" size='80'/><br><br>
                          <p style="font-size: 16px">提供浏览，预定，收藏，发布，删除，全套民宿预定服务，绝佳用户体验</p>
                        </Col>
                        <Col span="8" style="padding-left: 60px;padding-right: 60px"><Icon type="ios-school" size='80'/><br><br>
                          <p style="font-size: 16px">基于大数据的个性推荐算法，精准确定用户定位，提供符合用于浏览习惯的精品房源</p>
                        </Col>
                        <Col span="8" style="padding-left: 60px;padding-right: 60px"><Icon type="ios-stats" size='80'/><br><br>
                          <p style="font-size: 16px">从住宿，数量，热度，价格等多方面对民宿房源进行统计，通过数据揭示民宿房源现状</p>
                        </Col>
                      </Row>
                    </div>
                    <hr style="margin-top: 40px;margin-bottom: 40px">
                    <h1 style="margin-bottom: 80px;font-size: 40px">我们的团队成员</h1>
                    <div style="margin-top: 40px;border-radius:40px;box-shadow: 10px 10px 5px #888888;background-color: papayawhip;height: 300px">
                      <Row style="margin-top: 40px">
                        <Col span="4" style="padding-left: 30px;padding-right: 30px">
                          <Avatar :src="require('../assets/images/li.jpg')" size='large' style="margin-top: 50px"/><br><br>
                          <p style="font-size: 20px">李泽峰</p><br><p style="font-size: 14px">项目经理兼后端工程师</p>
                        </Col>
                        <Col span="4" style="padding-left: 30px;padding-right: 30px">
                          <Avatar :src="require('../assets/images/hong.jpg')" size='large' style="margin-top: 50px"/><br><br>
                          <p style="font-size: 20px">洪振杰</p><br><p style="font-size: 14px">后端工程师</p>
                        </Col>
                        <Col span="4" style="padding-left: 30px;padding-right: 30px">
                          <Avatar :src="require('../assets/images/wang.jpg')" size='large' style="margin-top: 50px"/><br><br>
                          <p style="font-size: 20px">王奉</p><br><p style="font-size: 14px">前端工程师</p>
                        </Col>
                        <Col span="4" style="padding-left: 30px;padding-right: 30px">
                          <Avatar :src="require('../assets/images/duan.jpg')" size='large' style="margin-top: 50px"/><br><br>
                          <p style="font-size: 20px">段景海</p><br><p style="font-size: 14px">前端工程师</p>
                        </Col>
                        <Col span="4" style="padding-left: 30px;padding-right: 30px">
                          <Avatar :src="require('../assets/images/chen.jpg')" size='large' style="margin-top: 50px"/><br><br>
                          <p style="font-size: 20px">陈小宇</p><br><p style="font-size: 14px">数据工程师</p>
                        </Col>
                        <Col span="4" style="padding-left: 30px;padding-right: 30px">
                          <Avatar :src="require('../assets/images/huang.jpg')" size='large' style="margin-top: 50px"/><br><br>
                          <p style="font-size: 20px">黄煜昊</p><br><p style="font-size: 14px">数据工程师</p>
                        </Col>
                      </Row>
                    </div>
                  </div>
                  <div style="width: 100%;background-color: white;height: 300px">
                    <div style="width: 75%;height:300px;margin: 0 auto;background-color: #2db7f5">
                      <Row>
                        <Col span="12">
                          <h1></h1>
                        </Col>
                        <Col span="12">

                        </Col>
                      </Row>
                    </div>
                  </div>
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
        <Divider />
        <p :style="pStyle">Contacts</p>
        <div class="demo-drawer-profile">
        </div>
      </Drawer>
      <v-footer></v-footer>
    </div>
</template>

<script>
  import Header from './Header.vue'
  import SuggestCard from './home_components/SuggestCard.vue'
  import Carousel from './home_components/Carousel.vue'
  import VueEvent from '../model/VueEvent.js'
  import Footer from './Footer.vue'
  import Check from "../model/Check";
  import GetInfo from "../model/GetInfo";
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
        suggest_selector: true,

      }
    },

    components:{
        'v-header':Header,
        'v-sugCard':SuggestCard,
        'v-carousel':Carousel,
        'v-footer':Footer
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
      if (Check.isLogged()) {
        // console.log("我登录了");
        this.$axios.post('http://localhost:8888/house/recommend',{uid:GetInfo.getUserIDByLocalStorage()})
          .then(resp=>{
            console.log(resp)
          })
          .catch(error=>{
            console.log(error)
          });
        if(this.suggest_houseid.length <= 6){
          this.suggest_selector = true;
        }
        else {
          this.suggest_selector =false;
          this.infoList = resp.data;

        }

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

<style >
@import url('../assets/css/container.css');
#head{
  position: absolute;
  width: 100vw;
  background: rgba(255,255,255,0);
}
.demo-drawer-profile{
  font-size: 14px;
}
.demo-drawer-profile .ivu-col{
  margin-bottom: 12px;
}
.ivu-select-single .ivu-select-selection{
  height: 50px;
}
.ivu-menu-item{
  font-size: 20px;
}
.ivu-select-input{
  height: 50px;
  font-size: 23px;
}
  .text{
    color:white;font-size: 40px;position: absolute;top: 160px;left: 200px;z-index: 999
  }
.ivu-avatar-large {
  width: 100px;
  height: 100px;
  line-height: 40px;
  border-radius: 20px;
}
</style>




