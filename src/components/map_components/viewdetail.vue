<template>
  <div>
    <!--<Button @click="value4 = true" type="primary">View Profile</Button>-->
    <Drawer :closable="false" width="640" v-model="value4">
      <!--<p :style="pStyle">房源概要信息</p>-->
      <p :style="pStyle1">{{msg.name}}</p>
      <!--<div class="demo-drawer-profile">-->

      <!--</div>-->
      <Divider />
      <!--<p :style="pStyle">Company</p>-->
      <div class="demo-drawer-profile">
        <Carousel
          v-if="value4"
          id="lunbo"
          loop
          autoplay
          :autoplay-speed="3000"
          :trigger="'hover'"
          :arrow="'hover'">
          <CarouselItem v-for="item in pic" :key="item.id">
            <div style="height: 260px"><img style="width:608px; height: 260px" :src="item"></div>
          </CarouselItem>
        </Carousel>
      </div>
      <Divider />
      <div class="demo-drawer-profile">
        <div class="lef">
        <DatePicker type="date" multiple :options="options3" placeholder="查看可居住日期" style="width: 218px"></DatePicker>
        </div>
        <div class="rig">
          <ul>
            <li>
              <p :style="pStyle"><Icon type="md-body" />最多可住{{msg.guest}}人</p>
              <hr> <br>
              <p :style="pStyle"><Icon type="ios-home" />{{msg.room}}间卧室</p>
              <hr> <br>
              <p :style="pStyle"><Icon type="md-phone-landscape" />{{msg.bed}}张床</p>
              <hr> <br>
              <p :style="pStyle"><Icon type="ios-water" />{{msg.toilet}}间卫生间</p>
              <hr> <br>
              <p :style="pStyle"><Icon type="logo-yen" />¥{{msg.price}}/晚</p>
              <hr> <br>
              <router-link v-bind:to="'/houseinfo/'+this.msg.id">点击查看详细信息</router-link>
            </li>
          </ul>
        </div>
      </div>
    </Drawer>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        datestart:'',
        dateend:'',
        options3: {
          disabledDate :(function (date) {
            return date.valueOf() < this.datestart.valueOf() || date.valueOf() > this.dateend.valueOf();
          }).bind(this)
        },
        value4: false,
        position:{
          lng:0,
          lat:0
        },
        msg:{},
        pic:[],
        pStyle: {
          fontSize: '15px',
          color: 'rgba(0,0,0,0.85)',
          lineHeight: '24px',
          display: 'block',
          marginBottom: '10px'
        },
        pStyle1: {
          fontSize: '20px',
          color: 'rgba(0,0,0,0.85)',
          lineHeight: '24px',
          display: 'block',
          marginBottom: '16px'
        }
      }
    }
  }
</script>
<style>
  .demo-drawer-profile{
    font-size: 14px;
  }
  .demo-drawer-profile .ivu-col{
    margin-bottom: 12px;
  }
  .lef{
    float: left;
    width: 40%;
  }
  .rig{
    float: right;
    width: 60%;
  }
</style>
