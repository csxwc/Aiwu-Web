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
            title: '开始时间',
            key: 'starttime'
          },
          {
            title:'结束时间',
            key: 'endtime'
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
                    this.detail()
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
                }, '取消预定'),

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
            title: '开始时间',
            key: 'starttime'
          },
          {
            title:'结束时间',
            key: 'endtime'
          },
        ],
        data_booking: [
          {
            title: '海景房',
            city: '成都',
            type: '公寓',
            starttime:'2000.2.2',
            endtime:'2002.2.2'
          },
        ],
        data_booked: [
          {
            title: '海景房',
            city: '成都',
            type: '公寓',
            starttime:'2000.2.2',
            endtime:'2002.2.2'
          },
        ]
      }
    },
    methods: {
      remove(index) {
        this.data_booking.splice(index, 1);
      },
      detail(index){
        this.$router.push("/home")
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
