<template>
  <div>
    <img :src="src" alt="" width="300px" height="200px" @click="showDetail">
    <br>
    <strong>最美景安城</strong>
    <br>
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
      'src': null
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
