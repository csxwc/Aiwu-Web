<template>
  <div>
    <Tabs value="name1">
      <TabPane label="我的发布" icon="ios-send" name="name1">
        <Table size="small" border :columns="columns_rel" :data="data_rel" stripe></Table>
        <Button type="primary" size="small" @click="showDrawer=true" style="float: right; margin-right: 25px;">发布房间</Button>
      </TabPane>
    </Tabs>
    <Drawer
      title="发布房源信息"
      v-model="showDrawer"
      width="720"
      :mask-closable="false">

      <Row :gutter="20"><Col span="24">房源标题:<Input v-model="houseInfo.title"></Input></Col></Row>
      <br>
      <Row :gutter="20">
        <Col span="12">房源地:
          <Select placeholder="请选择房源地..."
                                  style="width:100%"
                                  transfer
                                  v-model="houseInfo.city">
          <Option :key="item.value" :value="item.value" v-for="item in cityList">{{ item.label }}</Option>
        </Select>
        </Col>
      </Row>
      <br>
      <Row :gutter="20">
        <Col span="12">类型:
          <Select placeholder="请选择房源类型..."
                  style="width:100%"
                  transfer
                  v-model="houseInfo.type">
            <Option :key="item.value" :value="item.value" v-for="item in typeList">{{ item.label }}</Option>
          </Select>
        </Col>
        <Col span="12">价格:<InputNumber :min="1" v-model="houseInfo.price" style="width: 100%;"></InputNumber></Col>
      </Row>
      <br>
      <Row :gutter="20">
        <Col span="6">最多容纳人数:<InputNumber :max="10" :min="1" v-model="houseInfo.guest"></InputNumber></Col>
        <Col span="6">卧室数:<InputNumber :max="10" :min="1" v-model="houseInfo.bedroom"></InputNumber></Col>
        <Col span="6">厕所数:<InputNumber :max="10" :min="1" v-model="houseInfo.toilet"></InputNumber></Col>
        <Col span="6">床位数:<InputNumber :max="10" :min="1" v-model="houseInfo.bed"></InputNumber></Col>
      </Row>
      <br>
      选择位置:
      <baidu-map class="map" :center="houseInfo.city" :zoom="15" @click="setPosition($event)" style="height: 200px; " scroll-wheel-zoom>
        <bm-marker :position="{lng:houseInfo.lng, lat:houseInfo.lat}" :dragging="false" animation="BMAP_ANIMATION_BOUNCE">
        </bm-marker>
      </baidu-map>
      <br>
      <Row :gutter="20">
        <Col span="24">房源介绍:<Input type="textarea" :rows="6" v-model="houseInfo.instroduction"></Input></Col>
      </Row>
      <br>
      <Button type="primary" style="float: right;margin-left: 20px" @click="submit">提交</Button>
      <Button type="primary" style="float: right" @click="cancel">取消</Button>

    </Drawer>
  </div>
</template>

<script>
  import GetInfo from "../../model/GetInfo";

  export default {
    data() {
      return {
        columns_rel: [
          {
            title: '城市',
            key: 'city'
          },
          {
            title: '标题',
            key: 'title',
            render: (h, params) => {
              return h('div', [
                h('strong', params.row.title)
              ]);
            }
          },
          {
            title: '被租次数',
            key: 'booktime'
          },
          {
            title: '价格',
            key: 'price'
          },
        ],
        data_rel: [],

        showDrawer: false,
        cityList:[{
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
          },],
        houseInfo:{
          userid:null,
          title:'',
          city:'',
          type:'',
          province:'',
          price:0,
          guest:1,
          bed:1,
          bedroom: 1,
          toilet: 1,
          lng: 0,
          lat: 0,
          instroduction:'',
        },
        typeList:[
          {
            value: '普通公寓',
            label: '普通公寓'
          },
          {
            value: '整套公寓',
            label: '整套公寓'
          },
          {
            value: '整间阁楼',
            label: '整间阁楼'
          }
        ],

      }
    },
    methods: {
      remove(index) {
        this.data_rel.splice(index, 1);
      },
      setPosition(event){
        // console.log(event.point);
        this.houseInfo.lng = event.point.lng;
        this.houseInfo.lat = event.point.lat;
      },
      submit(){
        console.log(this.houseInfo);
        this.$axios.post("http://localhost:8888/lend/addhouse",
          {
            jingdu:this.houseInfo.lat.toString(),
            weidu:this.houseInfo.lng.toString(),
            name:this.houseInfo.title,
            province:'',
            city:this.houseInfo.city,
            type:this.houseInfo.type,
            guest:parseInt(this.houseInfo.guest),
            room:parseInt(this.houseInfo.bedroom),
            bed:parseInt(this.houseInfo.bed),
            toilet:parseInt(this.houseInfo.toilet),
            introduction:this.houseInfo.instroduction,
            price:parseInt(this.houseInfo.price),
            personid:this.houseInfo.userid
          })
          .then(resp=>{
            console.log(resp)
          })
          .catch(error=>{console.log(error)});
        this.$Message.success("发布成功");
        this.showDrawer=false;
      },
      cancel(){
        this.showDrawer=false;
      }
    },
    mounted() {
      this.houseInfo.userid = parseInt(GetInfo.getUserIDByLocalStorage());
      this.$axios.post("http://localhost:8888/lend/getlend",{userid:this.houseInfo.userid})
        .then(resp=>{
          console.log(resp);
          this.data_rel=resp.data;
        })
        .catch(error=>{console.log(error)})
    }
  }
</script>

<style>

</style>
