<template>
  <div>
    <!--<Button @click="value4 = true" type="primary">View Profile</Button>-->
    <Drawer :closable="false" width="640" v-model="value4">
      <p :style="pStyle">User Profile</p>
      <p :style="pStyle">Personal</p>
      <div class="demo-drawer-profile">
        {{position.lng}}<br>
        {{position.lat}}
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
  export default {
    data () {
      return {
        value4: false,
        position:{
          lng:0,
          lat:0
        },
        pStyle: {
          fontSize: '16px',
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
