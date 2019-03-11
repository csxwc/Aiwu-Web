<template>
  <div class="suggest">
    <img :src="src" alt=""
         style="width: 100%; height: 180px;">
    <br>
    <div>{{houseInfo.bed}}张床.{{houseInfo.toilet}}间厕所</div>
    <div style="font-size: 14px"><strong>{{houseInfo.name}}</strong></div>
    <div>{{houseInfo.price}}元/晚</div>
    <div style="font-size: 11px">
      <Rate show-text allow-half v-model="count" :disabled="true"></Rate>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false,
        houseInfo: {
          bed: '', booktime: '', city: '', guest: '',
          id: '', introduction: '', jingdu: '', name: '',
          picture: '', price: '', province: '', room: '',
          toilet: '', type: '', weidu: '',
        },
      }
    },
    props: {
      'houseid': Number,
      'src':String,
      'count':Number,
    },
    methods: {
      change() {
        this.show = !this.show;
      }
    },
    computed: {
      text() {
        return this.show ? "隐藏详情" : "显示详情";
      }
    },
    mounted() {
      this.$axios
        .post("http://localhost:8888/house/getallinfo",
          {houseid: this.houseid})
        .then(resp => {
          this.houseInfo = resp.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
</script>

<style>
  .suggest {
    text-align: left;
    margin: 20px;
  }
  .ivu-rate-star-full:before, .ivu-rate-star-half .ivu-rate-star-content:before {
    color: #f54023;
  }
  .ivu-rate-star {
    display: inline-block;
    margin: 0;
    padding: 0;
    margin-right: 0;
    position: relative;
    font-family: Ionicons;
    transition: all .3s ease;
  }
</style>
