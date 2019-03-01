<template>
  <Modal
    v-model="show"
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
    价格：<Slider v-model="price" :tip-format="format"></Slider>
    距离：<Slider v-model="dist" :tip-format="format"></Slider>
    房间大小：<Slider v-model="room" :tip-format="format"></Slider>
    出行：<Slider v-model="travel" :tip-format="format"></Slider>
    距离景点：<Slider v-model="seen" :tip-format="format"></Slider>
  </Modal>
</template>
<script>
  export default {
    data () {
      return {
        price:'50',
        dist:'50',
        room:'50',
        travel:'50',
        seen:'50',
        modal1: false,
        List: [
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
        ],
        model10: []
      }
    },
    methods: {
      ok () {
        this.$Message.info('Clicked ok');
        this.showclose()
      },
      cancel () {
        this.$Message.info('Clicked cancel');
        this.showclose()
      }
    },
    props:['show','showclose']
  }
</script>
