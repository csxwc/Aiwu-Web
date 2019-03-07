<template>
  <div>
    <v-header></v-header>
    <v-carouse></v-carouse>
    <br>
    <div style="width: 80%; margin: 0 auto">
      <Row :gutter="20">
        <Col span="2">
          <Anchor :offset-top=20 show-ink style="font-size: 13px">
            <AnchorLink href="#detail" title="详情"/>
            <AnchorLink href="#date" title="可定日期"/>
            <AnchorLink href="#position" title="位置"/>
          </Anchor>
        </Col>
        <Col span="16">
          <div id="detail">
            {{this.house.city}}·{{this.house.type}}
            <div>
              <strong style="font-size: 25px;">{{this.house.name}}</strong>
              <Button icon="md-add" style="float: right;" @click="cancel"  type="primary" v-if="preferred">取消收藏</Button>
              <Button icon="md-add" style="float: right;"  type="primary" v-else>点击收藏</Button>
            </div>
            <hr>
            <ul class="info">
              <li>
                <Icon type="ios-home"/>
                {{this.house.room}}间卧室
              </li>
              <li>
                <Icon type="md-beaker"/>
                {{this.house.bed}}张床
              </li>
              <li>
                <Icon type="md-pint"/>
                {{this.house.toilet}}间厕所
              </li>
              <li>
                <Icon type="md-contacts"/>
                最多容纳{{this.house.guest}}个人
              </li>
            </ul>
            <br>
            <!--<Input :rows="20" readonly style="font-size: 18px;" type="textarea" v-model="this.house.introduction"/>-->
            <div style="white-space: pre-wrap; font-size: 18px">
              {{this.house.introduction}}
            </div>
          </div>

          <br>
          <br>

          <div id="date">
            <div><strong style="font-size: 25px;">可订日期</strong></div>
            <hr>
            <br><br><br><br><br><br><br>
          </div>
          <div id="position">
            <div><strong style="font-size: 25px;">位置信息</strong></div>
            <hr>
            <br>
            <baidu-map :center="position"
                       :scroll-wheel-zoom="true"
                       :zoom="15" class="map"
                       style="height: 300px;">
              <bm-marker :dragging="false" :position="position" animation="BMAP_ANIMATION_BOUNCE">

              </bm-marker>
            </baidu-map>
          </div>

          <br>
          <br>
        </Col>

        <Col span="6">
          <Affix :offset-top="20">
            <div style="border:1px solid gray">
              <Card :bordered="false" style="width: 100%">
                <p slot="title">¥{{this.house.price}}每晚</p>
                <p>日期:</p>
                <DatePicker confirm placeholder="Select date" placement="bottom-end" style="width: 200px"
                            type="daterange"></DatePicker>
                <br>
                <br>
                <p>人数:</p>
                <InputNumber :max="house.guest" :min="1" :step="1"></InputNumber>
                人
                <br>
                <br>
                <br>
                <Button :type="'primary'" style="width: 80%">预定</Button>
              </Card>
            </div>

            <BackTop></BackTop>

          </Affix>
        </Col>
      </Row>
    </div>

  </div>
</template>

<script>
  import Header from '../components/Header'
  import VCarouse from "./home_components/Carousel";
  import Check from "../model/Check";
  import GetInfo from '../model/GetInfo'

  export default {
    name: "HouseInfo",
    data() {
      return {
        house: {},
        position: {
          lng: '',
          lat: ''
        },
        preferred: false,
      }
    },
    components: {
      VCarouse,
      'v-header': Header
    },
    methods: {
      cancel(){
        // console.log("是否收藏"+this.preferred);

        this.$axios.get("http://localhost:8888/collection/"+GetInfo.getUserIDByLocalStorage())
          .then(resp=> {
            // console.log(length);
            for(var i = 0; i < resp.data.length;i++){
              if(parseInt(this.$route.params.houseid) === parseInt(resp.data[i].room_id)){
                this.$axios.delete("http://localhost:8888/collection/delete/"+resp.data[i].id);
              }
            }

          })
          .catch(error=>{
            console.log(error)
          });

        this.preferred=false;
      }

    },
    computed: {

    },
    mounted() {
      this.$axios
        .post('http://localhost:8888/house/getallinfo',
          {houseid: parseInt(this.$route.params.houseid)})
        .then(response => {
          // console.log(response);
          this.house = response.data;
          this.position.lat = response.data.jingdu;
          this.position.lng = response.data.weidu;
        })
        .catch(error => {
          console.log(error)
        });

      if(Check.isLogged()){
        this.$axios
          .post("http://localhost:8888/collection/iscollected",
            {user_id:parseInt(localStorage.getItem('userid')),
              house_id:parseInt(this.$route.params.houseid)})
          .then(response=>{
            // console.log(response.data);
            this.preferred = response.data;
          })
          .catch(error=>{
            console.log(error)
          })
      }
      else
        this.preferred = false;
    }
  }
</script>

<style scoped>
  .info li {
    font-size: 15px;
    float: left;
    list-style: none;
    margin-right: 10px;
  }
</style>
