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
          id="lunbo"
          loop
          autoplay
          :autoplay-speed="3000"
          :trigger="'hover'"
          :arrow="'hover'">
          <CarouselItem v-for="item in pic" :key="item.id">
            <div style="height: 300px"><img style="width:608px; height: 300px" :src="item"></div>
          </CarouselItem>
        </Carousel>
      </div>
      <Divider />
      <p :style="pStyle">最多可住{{msg.guest}}人    {{msg.room}}间卧室    {{msg.bed}}张床    {{msg.toilet}}间卫生间      ¥{{msg.price}}/晚</p>
      <div class="demo-drawer-profile">
      </div>
    </Drawer>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        value4: false,
        position:{
          lng:0,
          lat:0
        },
        msg:{},
        pic:[],
        pStyle: {
          fontSize: '16px',
          color: 'rgba(0,0,0,0.85)',
          lineHeight: '24px',
          display: 'block',
          marginBottom: '16px'
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
</style>
