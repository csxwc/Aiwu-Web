<template>
  <div>
    <Menu :theme="'dark'" mode="horizontal" style="background-color: white">
      <MenuItem name="1" style="width: 20%">
        <Select @on-change="selectChange($event)"
                placeholder="请选择房源地..."
                size="large"
                style="width:100%"
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
          <div style="color: black">
          <Icon type="md-home"/>
          主页
          </div>
        </MenuItem >
        <MenuItem name="4" style="padding-left: 0">
          <div style="color: black">
          <Icon type="md-compass"/>
          帮助
          </div>
        </MenuItem>
        <MenuItem name="5" style="padding-left: 0" :to="this.redirect">
          <div style="color: #000;" v-if="isLogged">
            <Icon type="md-contact"/>
            我的</div>
          <div style="color: black" v-else>
            <Icon type="md-contact"/>
            登录
          </div>
        </MenuItem>
      </div>

    </Menu>
  </div>
</template>

<script>


  import VueEvent from '../model/VueEvent.js'

  export default {
    data() {
      return {
        cityList: [
          {
            value: '北京',
            label: '北京'
          },
          {
            value: '西安',
            label: '西安'
          },
          {
            value: '上海',
            label: '上海'
          },
          {
            value: '成都',
            label: '成都'
          },
          {
            value: '三亚',
            label: '三亚'
          },
          {
            value: '青岛',
            label: '青岛'
          },
          {
            value: '杭州',
            label: '杭州'
          },
          {
            value: '广州',
            label: '广州'
          },
          {
            value: '重庆',
            label: '重庆'
          },
          {
            value: '厦门',
            label: '厦门'
          },
          {
            value: '昆明',
            label: '昆明'
          },
          {
            value: '兰州',
            label: '兰州'
          },
          {
            value: '南京',
            label: '南京'
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
            value: '深圳',
            label: '深圳'
          },
          {
            value: '长沙',
            label: '长沙'
          },
          {
            value: '日照',
            label: '日照'
          },
          {
            value: '洛阳',
            label: '洛阳'
          },
          {
            value: '晋中',
            label: '晋中'
          },
          {
            value: '太原',
            label: '太原'
          }
        ],
        selected: '',
      }
    },
    methods: {
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

<style>
  .ivu-menu-item{
    font-size: 20px;
  }
  .item {

  }

</style>

