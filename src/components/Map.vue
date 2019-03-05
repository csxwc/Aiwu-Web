<template>
  <div>
    <v-header id="headmap"></v-header>
    <v-collapse class="clp"></v-collapse>
    <baidu-map class="map" :center="this.city" :zoom="15" :scroll-wheel-zoom="true">
      <v-card></v-card>
      <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list>
      <bml-heatmap :data="positions" :max="100" :radius="20">
      </bml-heatmap>
      <bml-marker-clusterer :averageCenter="true">
      <bm-marker v-for="item in positions" :key="item.id" :position="item" :dragging="false"
                 animation="BMAP_ANIMATION_BOUNCE" @click="showdetail(item)">

      </bm-marker>
      </bml-marker-clusterer>
      <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"
                      @locationSuccess="showpoint($event)"></bm-geolocation>
    </baidu-map>
    <v-showdetail ref="showdetail"></v-showdetail>
  </div>

</template>

<script>
  import header from './Header.vue'
  import viewdetail from './map_components/viewdetail.vue'
  import collapse from './map_components/collapse.vue'
  import card from './map_components/card.vue'
  import {BmlMarkerClusterer} from 'vue-baidu-map'
  import {BmlHeatmap} from 'vue-baidu-map'

  import VueEvent from '../model/VueEvent.js'

  export default {
    data() {
      return {
        points: [],
        center:{lng:104.06792346,lat:30.67994285},
        positions: [
          // {lng: 104.06792346, lat: 30.47994285, count: 50},
          // {lng: 104.16792346, lat: 30.37994285, count: 50},
          // {lng: 104.26792346, lat: 30.67994285, count: 500},
          // {lng: 104.36792346, lat: 30.77994285, count: 5},
          // {lng: 104.46792346, lat: 30.07994285, count: 100},
          // {lng: 104.56792346, lat: 30.17994285, count: 50},
          // {lng: 104.66792346, lat: 30.27994285, count: 50},
          // {lng: 104.76792346, lat: 30.47994285, count: 50},
          // {lng: 104.86792346, lat: 30.37994285, count: 50},
          // {lng: 104.96792346, lat: 30.67994285, count: 50}
        ]
        // citys:[
        //   '北京',
        //   '上海',
        //   '天津',
        //   '香港',
        //   '广州',
        //   '杭州',
        //   '重庆',
        //   '福州',
        //   '兰州',
        //   '贵阳',
        //   '长沙',
        //   '南京',
        //   '南昌',
        //   '沈阳',
        //   '太原',
        //   '成都',
        //   '拉萨',
        //   '乌鲁木齐',
        //   '昆明',
        //   '西安',
        //   '西宁',
        //   '银川',
        //   '哈尔滨',
        //   '长春',
        //   '武汉',
        //   '郑州',
        //   '石家庄',
        //   '海口',
        //   '澳门'
        // ],
        // cityPositions:[
        //   {lng:116.41667,lat:39.91667},
        //   {lng:121.43333,lat:34.50000},
        //   {lng:117.20000,lat:39.13333},
        //   {lng:114.10000,lat:22.20000},
        //   {lng:113.23333,lat:23.16667},
        //   {lng:120.20000,lat:30.26667},
        //   {lng:106.45000,lat:29.56667},
        //   {lng:119.30000,lat:26.08333},
        //   {lng:103.73333,lat:36.03333},
        //   {lng:106.71667,lat:26.56667},
        //   {lng:113.00000,lat:28.21667},
        //   {lng:118.78333,lat:32.05000},
        //   {lng:115.90000,lat:28.68333},
        //   {lng:123.38333,lat:41.80000},
        //   {lng:112.53333,lat:37.86667},
        //   {lng:104.06667,lat:30.66667},
        //   {lng:91.00000,lat:29.60000},
        //   {lng:87.68333,lat:43.76667},
        //   {lng:102.73333,lat:25.05000},
        //   {lng:108.95000,lat:34.26667},
        //   {lng:101.75000,lat:36.56667},
        //   {lng:106.26667,lat:38.46667},
        //   {lng:126.63333,lat:45.75000},
        //   {lng:125.35000,lat:43.88333},
        //   {lng:114.31667,lat:30.51667},
        //   {lng:113.65000,lat:34.76667},
        //   {lng:114.48333,lat:38.03333},
        //   {lng:110.35000,lat:20.01667},
        //   {lng:113.50000,lat:22.20000}
        // ]
      }
    },
    methods: {
      showpoint(e) {
        this.center.lng = e.point.lng
        this.center.lat = e.point.lat
        console.log(this.center)
      },
      showdetail(item) {
        this.$refs.showdetail.value4 = true;
        this.$refs.showdetail.position = item;
      }
    },
    mounted() {
    },
    computed:{
      city(){
        return this.$store.state.city
      }
    },
    components: {
      'v-header': header,
      'v-showdetail': viewdetail,
      'v-collapse': collapse,
      'v-card': card,
      BmlMarkerClusterer,
      BmlHeatmap
    }
  }
</script>
<style lang="scss">
  @import url('../assets/css/container.css');

  .map {
    height: 756px;
    width: 80%;
    float: right;
    position: relative;
  }

  .ivu-card-bordered {
    position: absolute;
    top: 60px;
    right: 60px;
  }

  .clp {
    height: 756px;
    width: 20%;
    float: left;
  }
</style>
