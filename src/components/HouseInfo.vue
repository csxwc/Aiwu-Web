<template>
  <div>
    <v-header></v-header>
    <Carousel
    id="lunbo"
    loop
    autoplay
    :autoplay-speed="3000"
    :trigger="'hover'"
    :arrow="'hover'">
      <CarouselItem>
        <div class="imgc"><img :src=pic[0] alt=""></div>
      </CarouselItem>
      <CarouselItem>
        <div class="imgc"><img :src=pic[1] alt=""></div>
      </CarouselItem>
      <CarouselItem>
        <div class="imgc"><img :src=pic[2] alt=""></div>
      </CarouselItem>
      <CarouselItem>
        <div class="imgc"><img :src=pic[3] alt=""></div>
      </CarouselItem>
      <CarouselItem>
        <div class="imgc"><img :src=pic[4] alt=""></div>
      </CarouselItem>
      <CarouselItem>
        <div class="imgc"><img :src=pic[5] alt=""></div>
      </CarouselItem>
      <CarouselItem>
        <div class="imgc"><img :src=pic[6] alt=""></div>
      </CarouselItem>
      <CarouselItem>
        <div class="imgc"><img :src=pic[7] alt=""></div>
      </CarouselItem>
  </Carousel>
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
              <Button @click="cancel" icon="md-add" style="float: right;" type="primary" v-if="preferred">取消收藏</Button>
              <Button @click="prefer" icon="md-add" style="float: right;" type="primary" v-else>点击收藏</Button>
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
            <br>
            <!--<DatePicker type="daterange"-->
                        <!--placement="bottom-start"-->
                        <!--placeholder="Select date"-->
                        <!--style="width: 200px"-->
                        <!--open="true"-->
                        <!--size="large"-->
                        <!--editable="false">-->
            <!--</DatePicker>-->
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
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
                <DatePicker confirm placeholder="Select date"
                            placement="bottom-end"
                            style="width: 200px"
                            type="daterange"
                            v-model="selecteddate"
                            format="yyyy-MM-dd">

                </DatePicker>
                <br>
                <br>
                <p>人数:</p>
                <InputNumber :max="house.guest" :min="1" :step="1"></InputNumber>
                人
                <br>
                <br>
                <br>
                <Button :type="'primary'" style="width: 80%" v-if="rented">已被预定</Button>
                <Button :type="'primary'" style="width: 80%" v-else @click="book">预定</Button>
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
        pic:[],
        position: {
          lng: '',
          lat: ''
        },
        preferred: false,

        selecteddate: null,

        rented: false,
      }
    },
    components: {
      VCarouse,
      'v-header': Header
    },
    methods: {
      book() {
        if (Check.isLogged()) {
          this.$axios.post("http://localhost:8888/rent/torent",
            {
              houseid: parseInt(this.$route.params.houseid),
              userid: parseInt(GetInfo.getUserIDByLocalStorage()),
              startdate: this.selecteddate[0].getTime(),
              enddate: this.selecteddate[1].getTime()
            })
            .then(resp=>{
              console.log(resp);
            })
            .catch(error=>{
              console.log(error)
            });
          this.$Message.success('预订成功');
          this.$router.push("/user/my_booked/"+GetInfo.getUserIDByLocalStorage())
        } else {
          this.$Message.warning('您没有登录，请登录');
        }
      },

      cancel() {
        // console.log("是否收藏"+this.preferred);

        this.$axios.get("http://localhost:8888/collection/" + GetInfo.getUserIDByLocalStorage())
          .then(resp => {
            // console.log(length);
            for (var i = 0; i < resp.data.length; i++) {
              if (parseInt(this.$route.params.houseid) === parseInt(resp.data[i].room_id)) {
                this.$axios.delete("http://localhost:8888/collection/delete/" + resp.data[i].id);
              }
            }

          })
          .catch(error => {
            console.log(error)
          });

        this.preferred = false;
        this.$Message.success('取消收藏成功');

      },
      prefer() {
        if (Check.isLogged()) {
          this.$axios
            .post("http://localhost:8888/collection/add",
              {user_id: parseInt(GetInfo.getUserIDByLocalStorage()), house_id: parseInt(this.$route.params.houseid)})
            .then(resp => {
              // console.log(resp);
            })
            .catch(error => {
              console.log(error);
            });
          this.preferred = true;
          this.$Message.success('已添加收藏');
        } else {
          this.$Message.warning('您没有登录，请登录');
        }
      }

    }
    ,
    computed: {}
    ,
    mounted() {

      this.$axios.post("http://localhost:8888/rent/isrent",
        {houseid: parseInt(this.$route.params.houseid)})
        .then(resp=>{
          // console.log(resp);
          this.rented = resp.data;
        })
        .catch(error=>{
          console.log(error);
        });

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
      this.$axios.post('http://localhost:8888/picture/getlittle', {
        houseid:parseInt(this.$route.params.houseid)
      })
        .then((response) => {
          console.log(response);
          this.pic = [];
          for(var i=0;i<response.data.length;i++){
            this.pic.push(response.data[i][0]);
          }
        })
        .catch((error) => {
          console.log(error);
        });
      if (Check.isLogged()) {
        this.$axios
          .post("http://localhost:8888/collection/iscollected",
            {
              user_id: parseInt(localStorage.getItem('userid')),
              house_id: parseInt(this.$route.params.houseid)
            })
          .then(response => {
            // console.log(response.data);
            this.preferred = response.data;
          })
          .catch(error => {
            console.log(error)
          });
      } else
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
  .imgc{
    height: 500px;
  }
  .imgc img{
    height: 500px;
    width: 1440px;
  }
</style>
