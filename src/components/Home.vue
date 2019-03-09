<template>
    <div>
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
                      <Button @click="sendLocation" icon="ios-search" size="large">Search</Button>
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
                    <v-carousel >
                      <div style="font-size: 40px;">我是你爸爸</div>
                    </v-carousel>
                </div>
                <div style="width: 80%; text-align: center;margin:0 auto;">
                  <div style="font-size:40px;text-align: center;"><strong>精品推荐</strong></div>
                  <Row  type="flex" v-for="(row,row_index) in 2":key="row.id" :gutter="60" style="" align="bottom">
                    <Col span="8" push="0" v-for="(col,col_index) in 3":key="col.id"><v-sugCard
                      :src='infoList[row_index*3+col_index].src'
                      :title="infoList[row_index*3+col_index].title"></v-sugCard></Col>
                  </Row>
                </div>


        </Layout>
      <Drawer :closable="false" width="640" v-model="value1">
        <p :style="pStyle">User Profile</p>
        <p :style="pStyle">Personal</p>
        <div class="demo-drawer-profile">
        </div>
        <Divider />
        <p :style="pStyle">Company</p>
        <div class="demo-drawer-profile">

        </div>
        <Divider />
        <p :style="pStyle">Contacts</p>
        <div class="demo-drawer-profile">
        </div>
      </Drawer>
    </div>
</template>

<script>
import Header from './Header.vue'
import SuggestCard from  './home_components/SuggestCard.vue'
import Carousel from './home_components/Carousel.vue'
import VueEvent from '../model/VueEvent.js'

export default {
    data(){
        return{
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
          infoList:[
            {
              title:'最美景安城',
              src:'http://cyldurl.roogames.com/uploadfile/2015/0122/20150122083855718.jpg'
            },
            {
              title:'玄幻归墟界',
              src:'http://cyldurl.roogames.com/uploadfile/2014/1231/20141231085241927.jpg'
            },
            {
              title:'秀丽与青山',
              src:'http://cyldurl.roogames.com/uploadfile/2014/1231/20141231085408764.jpg'
            },
            {
              title:'浮空天晴之海',
              src:'http://cyldurl.roogames.com/uploadfile/2014/1231/20141231085318400.jpg'
            },
            {
              title:'悠哉碧溪村',
              src:'http://pal5q.roogames.com/pal5q/pal5q/zl/images/cj/cj_8d.jpg'
            },
            {
              title:'司云崖',
              src:'http://pal5q.roogames.com/pal5q/pal5q/zl/images/cj/cj_6d.jpg'
            }
          ],
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

    components:{
        'v-header':Header,
        'v-sugCard':SuggestCard,
        'v-carousel':Carousel,
    },
    methods:{
      selectChange(event) {
        // console.log(event);
      },
      sendLocation() {
        if (this.selected === '') {
          this.$Message.warning('请选择一个城市！');
        } else {
          // VueEvent.$emit('location', this.selected)
          this.$router.push('/map');
          this.$store.dispatch('changeCityFooter',this.selected);
        }

      },
      open(){
        this.value1 = true;
      }
    },
  mounted() {
      var logged_in = localStorage.getItem("logged-in");
      if(logged_in==="true"){
        // console.log("我登录了");

      }
      else{
        localStorage.setItem("logged-in", false);
        console.log("我还没登录");
      }
  },
  computed:{
    isLogged(){
      return localStorage.getItem("logged-in") === 'true';
    },
    redirect(){
      return localStorage.getItem("logged-in") === 'true' ? "/user/my_booked/"+localStorage.getItem("userid") : "/loginpage";
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

</style>




