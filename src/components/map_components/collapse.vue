<template>
  <Collapse v-model="value1" simple>
    <h1 style="padding-left: 15px;padding-top: 10px;padding-bottom: 10px">条件筛选</h1>
    <p style="padding-left: 15px;padding-top: 10px;padding-bottom: 10px">打开开关作为筛选条件</p>
    <Panel name="1">
      房源类型
      <i-switch  size="small" class="choose" v-model="switch1" @on-change="change" />
      <p slot="content">
        <Select v-model="model1" style="width:200px">
        <Option v-for="item in cityList" :key="item.value" :value="item.value" >{{ item.label }}</Option>
        </Select>
      </p>
    </Panel>
    <Panel name="2">
      房客数
      <i-switch  size="small" class="choose" v-model="switch2" @on-change="change" />
      <p slot="content">
        <InputNumber :max="10" :min="1" v-model="people" style="width: 200px">人</InputNumber>
      </p>
    </Panel>
    <Panel name="3">
      卧室数
      <i-switch  size="small" class="choose" v-model="switch3" @on-change="change" />
      <p slot="content">
        <InputNumber :max="4" :min="0" v-model="room" style="width: 200px">间</InputNumber>
      </p>
    </Panel>
    <Panel name="4">
      床位数
      <i-switch  size="small" class="choose" v-model="switch4" @on-change="change" />
      <p slot="content">
        <InputNumber :max="4" :min="0" v-model="bed" style="width: 200px">张</InputNumber>
      </p>
    </Panel>
    <Panel name="5">
      卫生间数
      <i-switch  size="small" class="choose" v-model="switch5" @on-change="change" />
      <p slot="content">
        <InputNumber :max="4" :min="0" v-model="bathroom" style="width: 200px">间</InputNumber>
      </p>
    </Panel>
    <Panel name="6">
      价格区间
      <i-switch  size="small" class="choose" v-model="switch6" @on-change="change" />
      <p slot="content">
        <Slider v-model="money" range :min="0" :max="4000" :tip-format="format"></Slider>
        最低价：{{money[0]}}<br>
        最高价：{{money[1]}}
      </p>
    </Panel>
    <Button type="success" @click="choose" style="width: 200px;margin-left: 40px; margin-bottom: 10px">筛选</Button>
    <Button type="info" @click="smartshow" style="width: 200px;margin-left: 40px; margin-bottom: 10px">智能推荐</Button>
    <v-smartchoose ></v-smartchoose>
  </Collapse>
</template>
<script>
  import smartchoose from './smartchoose.vue'
  export default {
    data () {
      return {
        switch1:true,
        switch2:true,
        switch3:true,
        switch4:true,
        switch5:true,
        switch6:true,
        value1: [1,2,3,4,5,6],
        people:0,
        room:0,
        bed:0,
        bathroom:0,
        money:[0,4000],
        cityList: [
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
        model1: ''
      }
    },
    methods:{
      change(){

      },
      format (val) {
        return val;
      },
      choose(){
        this.$axios.post('http://localhost:8888/house/find', {
          city:"成都",
          type:this.model1,
          guest:this.people,
          bedroom:this.room,
          bed:this.bed,
          toilet:this.bathroom,
          minprice:this.money[0],
          maxprice:this.money[1]
        })
          .then((response) => {
            console.log(response);
            console.log(this.$parent.center)
          })
          .catch((error) => {
            console.log(error);
          });
      },
      smartshow(){
        this.$store.dispatch('changeShowFooter',true);
      }
    },
    components:{
      'v-smartchoose':smartchoose
    }
  }
</script>
<style>
  .choose{
    float: right;
    margin-top: 10px;
    margin-right: 8px;
  }
</style>
