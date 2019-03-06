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
      <bm-marker v-for="(item,key) in positions" :key="item.id" :position="item" :dragging="false"
                 animation="BMAP_ANIMATION_BOUNCE" @click="showdetail(item,key)">

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
  import login from "./from_components/login";

  export default {
    data() {
      return {
        points: [],
        center:{lng:104.06792346,lat:30.67994285},
        positions: [
        ],
        messages:[]
      }
    },
    methods: {
      showpoint(e) {
        this.center.lng = e.point.lng;
        this.center.lat = e.point.lat;
        console.log(this.center)
      },
      showdetail(item,key) {
        this.$refs.showdetail.value4 = true;
        this.$refs.showdetail.position = item;
        this.$refs.showdetail.msg = this.messages[key];
        console.log(this.messages[key].id);
        this.$axios.post('http://localhost:8888/picture/getlittle', {
          houseid:this.messages[key].id
        })
          .then((response) => {
            console.log(response);
            this.$refs.showdetail.pic = [];
            for(var i=0;i<response.data.length;i++){
              this.$refs.showdetail.pic.push(response.data[i][0]);
            }
          })
          .catch((error) => {
            console.log(error);
          });
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
