<template>
  <Modal
    v-model='visible'
    title="智能筛选推荐"
    @on-ok="ok"
    @on-cancel="cancel">
    <Icon type="md-pin" />
    <h1 style="font-size: small">租房主题筛选</h1><br>
    <Select v-model="model10" multiple style="width:260px;margin-bottom: 18px">
      <Option v-for="item in List" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
    <br>
    <Icon type="md-pulse" />
    <h1 style="font-size: small">条件比重筛选</h1><br>
    价格：<Slider v-model="price"></Slider>
    热度：<Slider v-model="hot"></Slider>
    房间大小：<Slider v-model="room"></Slider>
    舒适：<Slider v-model="comfort"></Slider>
  </Modal>
</template>
<script>
  export default {
    data () {
      return {
        price: 50,
        hot: 50,
        room: 50,
        comfort: 50,
        model10: [],
        modal1: false,
        List:
          [
          {
            value: '极致性价比',
            label: '极致性价比'
          },
          {
            value: '方便出行',
            label: '方便出行'
          },
          {
            value: '舒适生活',
            label: '舒适生活'
          },
          {
            value: '热门景点',
            label: '热门景点'
          },
          {
            value: '畅享美食',
            label: '畅享美食'
          }
        ]
      }
    },
    methods: {
      ok () {
        this.$Message.info('Clicked ok');
        var obj = {};
        obj.list = this.model10;
        obj.price = this.price;
        obj.hot = this.hot;
        obj.room = this.room;
        obj.comfort = this.comfort;
        this.$store.dispatch('changeAllFooter',obj)
        this.$axios.post('http://182.149.196.149:8888/house/insel', {
          city:this.$store.state.city,
          price:this.price,
          hot:this.hot,
          room:this.room,
          comfort:this.comfort,
          theme:this.model10
        })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(this.$store.state.city)
            console.log(error);
          });
      },
      cancel () {
        this.$Message.info('Clicked cancel');
      }
    },
    computed: {
      visible:{
        get(){
        return this.$store.state.show
      },
        set(){
          this.$store.dispatch('changeShowFooter',false);
        }
      }
    }
  }
</script>
