<template>
  <div>
    <Header class="container">
      <v-header></v-header>
    </Header>
    <v-collapse class="clp"></v-collapse>
    <baidu-map class="map" :center="{lng: 104.06792346, lat: 30.67994285}" :zoom="15" :scroll-wheel-zoom="true">
      <v-card></v-card>
      <bm-marker v-for="item in positions" :position="item" :dragging="false"
                 animation="BMAP_ANIMATION_BOUNCE" @click="showdetail">

      </bm-marker>
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

  import VueEvent from '../model/VueEvent.js'

  export default {
    data() {
      return {
        points: [],
        center:{lng:'',lat:''},
        positions: [
          {lng: 104.06792346, lat: 30.47994285},
          {lng: 104.16792346, lat: 30.37994285},
          {lng: 104.26792346, lat: 30.67994285},
          {lng: 104.36792346, lat: 30.77994285},
          {lng: 104.46792346, lat: 30.07994285},
          {lng: 104.56792346, lat: 30.17994285},
          {lng: 104.66792346, lat: 30.27994285},
          {lng: 104.76792346, lat: 30.47994285},
          {lng: 104.86792346, lat: 30.37994285},
          {lng: 104.96792346, lat: 30.67994285}
        ]
      }
    },
    methods: {
      showpoint(e) {
        this.center.lng = e.point.lng
        this.center.lat = e.point.lat
        console.log(this.center)
      },
      showdetail() {
        this.$refs.showdetail.value4 = true
      }
    },
    mounted() {
      VueEvent.$on('location',function (data) {
        console.log(data)
      })
    },
    components: {
      'v-header': header,
      'v-showdetail': viewdetail,
      'v-collapse': collapse,
      'v-card': card
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
  }

  .clp {
    height: 756px;
    width: 20%;
    float: left;
  }
</style>
