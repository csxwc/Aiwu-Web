<template>
  <div class="suggest">
    <img :src="src" alt="" width="100%" height="100%;">
    <br>
    <div><strong >{{title}}</strong></div>
    <Button type="primary" @click="change">{{text}}</Button>
    <div v-if="show">这是详细信息，很长的哦</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show:false,
      }
    },
    props: {
      'src': null,
      'title':null
    },
    methods:{
      change(){
        this.show = !this.show;
      }
    },
    computed:{
      text(){
        return this.show ? "隐藏详情":"显示详情";
      }
    }
  }
</script>

<style>
.suggest{
  text-align: left;
  margin: 20px;}
</style>
