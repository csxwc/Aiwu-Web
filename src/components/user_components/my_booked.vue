<template>
  <div>
    <Tabs>
      <TabPane  label="已预订房源" icon="ios-checkbox-outline">
        <Table size="small" border :columns="columns_booking" :data="data_booking" stripe></Table>
      </TabPane>
      <TabPane label="预定过的房源" icon="md-checkbox">
        <Table size="small" border :columns="columns_booked" :data="data_booked" stripe></Table>
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        columns_booking: [
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
                }, '取消预定')
              ]);
            }
          }
        ],
        columns_booked: [
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
            title: '时间',
            key: 'time'
          }

        ],
        data_booking: [
          {
            title: '海景房',
            city: '成都',
            type: '公寓',
            price: '8888RMB'
          },
        ],
        data_booked: [
          {
            title: '海景房',
            city: '成都',
            type: '公寓',
            price: '8888RMB',
            time:'2000.2.2-2008.2.2'
          },
        ]
      }
    },
    methods: {
      remove(index) {
        this.data_booking.splice(index, 1);
      }
    },
    mounted(){
      this.$axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response=>{
          console.log(response)
        })
        .catch(error=>{
          console.log(error)
        })
    },
  }
</script>

<style>
</style>
