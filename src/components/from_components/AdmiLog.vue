<template>
  <div>
    <div class="inputbox">
      <Input type="text" clearable placeholder="Administrator" v-model="admin">
        <Icon type="ios-person-outline" slot="prepend"></Icon>
      </Input>
    </div>
    <div class="inputbox">
      <Input type="password" placeholder="Password" clearable v-model="password">
        <Icon type="ios-lock-outline" slot="prepend"></Icon>
      </Input>
    </div>

    <Button type="primary" @click="check" style="width: 100%">Signin</Button>
  </div>
</template>

<script>
    export default {
        name: "AdmiLog",
      data(){
          return{
            admin:'',
            password:''
          }
      },
      methods:{
          check(){
            if((this.admin === 'csxwc') && (this.password === 'wccsx')){
              localStorage.setItem("check", 'true');
              this.$router.push({path:'/count'});
              // this.$store.dispatch('changeCheckFooter',true);
            }else{
              alert("账号或密码错误，请重新输入！")
              localStorage.setItem("check", 'false');
            }
          }
      }
    }
</script>

<style >
.inputbox{
  margin-bottom: 24px;
}
</style>
