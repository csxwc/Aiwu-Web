<template>
  <div>
    <Table size="small" border :columns="columns_prefer" :data="data_prefer" stripe></Table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        columns_prefer: [
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
                }, '取消收藏')
              ]);
            }
          }
        ],
        data_prefer: [
          {
            title: '海景房',
            city: '成都',
            type: '公寓',
            price: '8888RMB'
          },
        ],
      }
    },
    methods: {
      remove(index) {
        this.data6.splice(index, 1);
      }
    }
  }
</script>

<style>

</style>
