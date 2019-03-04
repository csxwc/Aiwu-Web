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
