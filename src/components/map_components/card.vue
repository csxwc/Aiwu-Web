<template>
  <!--<Affix :offset-bottom="550">-->
  <Card style="width:350px;height:200px;margin-left: 70px">
    <p slot="title">
      <Icon type="ios-heart" />
      推荐条件
    </p>
    <Tag v-for="item in list" :key="item" :name="item" color="#FFA2D3">{{item}}</Tag>
  </Card>
  <!--</Affix>-->
</template>
<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
    },
    computed:{
      list:{
        get(){
          return this.$store.state.zhutilsit
        },
        set(){
          var obj = {};
          obj.listtemp = this.list;
          this.$store.dispatch('changeListFooter',obj)
        }
      }
    }
  }
</script>
