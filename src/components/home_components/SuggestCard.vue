<template>
  <div >
    <img :src="src" alt="" width="100%" height="100%" @click="showDetail">
    <br>
    <div><strong >{{title}}</strong></div>
    <div v-if="detail">详细信息</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        detail: false
      }
    },
    props: {
      'src': null,
      'title':null
    },
    methods:{
      showDetail(){
        this.detail = !this.detail;
      }
    }
  }
</script>

<style scoped>

</style>
