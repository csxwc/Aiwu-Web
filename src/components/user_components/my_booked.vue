<template>
  <div>
    <Tabs>
      <TabPane icon="ios-checkbox-outline" label="已预订房源">
        <Table :columns="columns_booking" :data="data_booking" border size="small" stripe></Table>
      </TabPane>
      <TabPane icon="md-checkbox" label="预定过的房源">
        <Table :columns="columns_booked" :data="data_booked" border size="small" stripe></Table>
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
            key: 'housename',
            render: (h, params) => {
              return h('div', [
                h('strong', params.row.housename)
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
            title: '结束时间',
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
                      this.detail(params.index)
                    }
                  }
                }, '详情'),

              ]);
            }
          }
        ],
        columns_booked: [
          {
            title: '标题',
            key: 'housename',
            render: (h, params) => {
              return h('div', [
                h('strong', params.row.housename)
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
            title: '结束时间',
            key: 'endtime'
          },
        ],
        data_booking: [],
        data_booked: [],
        userid: '',
      }
    },
    methods: {
      remove(index) {
        // this.$axios.delete();
        this.data_booking.splice(index, 1);
      },
      detail(index) {
        // console.log(this.data_booking);
        // console.log(index)
        this.$router.push("/houseinfo/"+this.data_booking[index].houseid);
      },
    },
    mounted() {
      this.$axios
        .post('http://localhost:8888/rent/getnotused', {userid: parseInt(this.$route.params.userid)})
        .then(response => {
          console.log(response.data);
          this.data_booking = response.data
        })
        .catch(error => {
          console.log(error)
        });
      this.$axios
        .post('http://localhost:8888/rent/getused', {userid: parseInt(this.$route.params.userid)})
        .then(response => {
          // console.log(response.data);
          this.data_booked = response.data
        })
        .catch(error => {
          console.log(error)
        })
    },
  }
</script>

<style>
  h{}
</style>
