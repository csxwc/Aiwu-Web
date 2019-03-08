<template>
  <div>
    <Tabs value="name1">
      <TabPane icon="md-star" label="我的收藏" name="name1"><Table size="small" border :columns="columns_prefer" :data="data_prefer" stripe></Table></TabPane>
    </Tabs>

  </div>
</template>

<script>
  import GetInfo from "../../model/GetInfo";

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
            title: '价格(¥)',
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
            price: '8888'
          },
        ],
      }
    },
    methods: {
      remove(index) {
        //axios请求和本地数据变化同步进行，本地数据操作快，导致发送delete请求时本地数据已经消失，出现不能从本地获取数据，进而无法删除的问题
        this.$axios.get("http://localhost:8888/collection/"+GetInfo.getUserIDByLocalStorage())
          .then((resp)=>{
            for(var i = 0; i < resp.data.length;i++){
              if(parseInt(this.data_prefer[index].room_id) === parseInt(resp.data[i].room_id)){
                this.$axios.delete("http://localhost:8888/collection/delete/"+resp.data[i].id);
                this.data_prefer.splice(index, 1);
              }
            }

          })
          .catch(error=>{
            console.log(error)
          });
        this.$Message.success('取消收藏成功');
      }
    },
    mounted(){
      this.$axios.get('http://localhost:8888/collection/'+this.$route.params.userid)
        .then(response=>{
          // console.log(this.data_prefer)
          // console.log(response);
          this.data_prefer = response.data;
        })
        .catch(error=>{
          console.log(error);
        })
    },
  }
</script>

<style>

</style>
