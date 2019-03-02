<template>
  <Modal
    v-model='show'
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
    距离：<Slider v-model="dist"></Slider>
    房间大小：<Slider v-model="room"></Slider>
    出行：<Slider v-model="travel"></Slider>
    距离景点：<Slider v-model="seen"></Slider>
  </Modal>
</template>
<script>
  export default {
    data () {
      return {
        price:50,
        dist:50,
        room:50,
        travel:50,
        seen:50,
        modal1: false,
        show:this.$store.state.show,
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
            value: '阖家出行',
            label: '阖家出行'
          },
          {
            value: '潇洒独游',
            label: '潇洒独游'
          }
        ]
        ,
        model10: []
      }
    },
    methods: {
      ok () {
        this.$Message.info('Clicked ok');
        // this.$store.state.zhutilsit = this.model10
        // this.$store.dispatch('changeAllFooter',this.model10,this.price,this.dist,this.room,this.travel,this.seen)
        this.showclose()
      },
      cancel () {
        this.$Message.info('Clicked cancel');
        this.showclose()
      }
    },
    props:['showclose']
  }
</script>
