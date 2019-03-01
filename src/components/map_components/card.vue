<template>
  <Affix :offset-bottom="550">
  <Card style="width:350px;height:150px;margin-left: 70px">
    <p slot="title">
      <Icon type="ios-heart" />
      推荐条件
    </p>
    <a slot="extra" @click.prevent="changeLimit">
      <Icon type="md-color-wand" />
      清空
    </a>
    <Tag v-for="item in list" type="border" closable color="error">{{item}}</Tag>
  </Card>
  </Affix>
</template>
<script>
  export default {
    data () {
      return {
        list:[
          '1',
          '2',
          '3',
          '4'
        ]
      }
    },
    methods: {

    }
  }
</script>
