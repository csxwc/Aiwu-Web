<template>
  <div>
    <strong style="font-size: 20px">我的发布</strong>
    <br>
    <br>
    <Table size="small" border :columns="columns_rel" :data="data_rel" stripe></Table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        columns_rel: [
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
            title: '城市',
            key: 'city'
          },
          {
            title: '房源类型',
            key: 'type'
          },
          {
            title: '价格',
            key: 'price'
          },
          {
            title: 'Action',
            key: 'action',
            width: 150,
            align: 'center',
            render: (h, params) => {
              return h('div', [
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
                }, '撤回')
              ]);
            }
          }
        ],
        data_rel: [
          {
            title: '海景房',
            city: '成都',
            type: '公寓',
            price: '8888RMB'
          },
        ]
      }
    },
    methods: {
      remove(index) {
        this.data_rel.splice(index, 1);
      }
    }
  }
</script>

<style>

</style>
