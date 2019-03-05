<template>
  <div>
    <Tabs value="name1">
      <TabPane label="我的发布" icon="ios-send" name="name1"><Table size="small" border :columns="columns_rel" :data="data_rel" stripe></Table></TabPane>
    </Tabs>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        columns_rel: [
          {
            title: '城市',
            key: 'city'
          },
          {
            title: '标题',
            key: 'title',
            render: (h, params) => {
              return h('div', [
                h('strong', params.row.title)
              ]);
            }
          },
          {
            title: '被租次数',
            key: 'renttimes'
          },
          {
            title: '价格',
            key: 'price'
          },
          {
            title: '操作',
            key: 'action',
            width: 150,
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  on: {
                    click: () => {

                    }
                  }
                }, '详情'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.remove(params.index)
                    }
                  }
                }, '取消发布')
              ]);
            }
          }
        ],
        data_rel: [{
          city:'西安',
          title:'一个海景房',
          renttimes:4,
          price:'123456RMB'
        }]
      }
    },
    methods: {
      remove(index) {
        this.data_rel.splice(index, 1);
      }
    },
    mounted() {
    }
  }
</script>

<style>

</style>
