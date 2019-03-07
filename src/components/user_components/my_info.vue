<template>
  <div>


    <Tabs>
      <TabPane label="我的信息" name="name1">
        <Card>
          <p slot="title">基本信息</p>
          <br>姓名：{{user_info.username}}
          <br>性别：{{user_info.sex}}
          <br>电话号码：{{user_info.phone}}
          <br>自我介绍：{{user_info.description}}
          <br>email:{{user_info.email}}
        </Card>
        <Card>
          <p slot="title">详细信息</p>
          <br>身份证号：{{user_info.identification}}
          <br>注册时间：{{user_info.register_time}}
          <br>出生日期：{{user_info.birthday}}
        </Card>
      </TabPane>
    </Tabs>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        user_info:{
        }
      }
    },
    methods:{

    },
    mounted() {
      this.$axios.post("http://localhost:8888/user/getuserinfo",{userid:parseInt(this.$route.params.userid)})
        .then(response=>{
          console.log(response);
          this.user_info = response.data;
        })
        .catch(error=>{
          console.log(error);
        })
    }
  }
</script>

<style>
strong{
  font-size: 15px;
}
</style>
