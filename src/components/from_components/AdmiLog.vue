<template>
  <div>
    <div class="inputbox">
      <Input type="text" clearable placeholder="Administrator" v-model="admi">
        <Icon type="ios-person-outline" slot="prepend"></Icon>
      </Input>
    </div>
    <div class="inputbox">
      <Input type="password" placeholder="Password" clearable v-model="password">
        <Icon type="ios-lock-outline" slot="prepend"></Icon>
      </Input>
    </div>

    <Button type="primary" @click="" style="width: 100%">Signin</Button>
  </div>
</template>

<script>
    export default {
        name: "AdmiLog",
      data(){
          return{
            admi:'',
            password:''
          }
      }
    }
</script>

<style >
.inputbox{
  margin-bottom: 24px;
}
</style>
