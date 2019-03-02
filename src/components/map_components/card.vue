<template>
  <!--<Affix :offset-bottom="550">-->
  <Card style="width:350px;height:200px;margin-left: 70px">
    <p slot="title">
      <Icon type="ios-heart" />
      推荐条件
    </p>
    <a slot="extra" @click.prevent="changeLimit">
      <Icon type="md-color-wand" />
      清空
    </a>
    <Tag type="border" v-for="item in list" :key="item" :name="item" closable color="error" @on-close="handleClose2">{{item}}</Tag>
  </Card>
  <!--</Affix>-->
</template>
<script>
  export default {
    data () {
      return {
        list:this.$store.state.zhutilsit
      }
    },
    methods: {
      handleClose2 (event, name) {
        const index = this.list.indexOf(name);
        this.list.splice(index, 1);
      }
    }
  }
</script>
