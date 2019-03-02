<template>
  <div>
    <Row>
      <Col span="12">
        <Row :gutter="10">
          <Col span="8">
            <!--给select标签添加transfer属性，防止被其他原件覆盖！！！！-->
            <Select @on-change="selectChange($event)"
                    placeholder="请选择房源地..."
                    size="large"
                    transfer
                    style="width:100%"
                    v-model="selected">
              <Option :key="item.value" :value="item.value" v-for="item in cityList">{{ item.label }}</Option>
            </Select>
          </Col>
          <Col span="2">
            <Button @click="sendLocation" icon="ios-search" size="large">Search</Button>
          </Col>
        </Row>
      </Col>
      <Col span="12">
        <Row :gutter="10" justify="end" type="flex">
          <Col span="2"><a href="">
            <Icon type="md-home"/>
            主页</a></Col>
          <Col span="2"><a href="">
            <Icon type="md-compass"/>
            帮助</a></Col>
          <Col span="2">
            <router-link to="/loginpage">
              <Icon type="md-contact"/>
              登录
            </router-link>
          </Col>
        </Row>
      </Col>
    </Row>
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
      }
    },
    methods: {
      selectChange(event) {
        console.log(event);
      },
      sendLocation() {
        if (this.selected === '') {
          this.$Message.warning('请选择一个城市！');
        } else {
          VueEvent.$emit('location', this.selected)
          this.$router.push('/map')
        }

      }
    }
  }
</script>

<style>

  a {
    float: right;
    color: white;
    font-size: 15px;
  }

</style>

