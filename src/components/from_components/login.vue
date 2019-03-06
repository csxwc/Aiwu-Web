<template>
  <Form ref="formInline" :model="formInline" :rules="ruleInline" >
    <FormItem prop="user">
      <Input type="text" v-model="formInline.user" placeholder="Username" clearable>
        <Icon type="ios-person-outline" slot="prepend"></Icon>
      </Input>
    </FormItem>
    <FormItem prop="password">
      <Input type="password" v-model="formInline.password" placeholder="Password" clearable>
        <Icon type="ios-lock-outline" slot="prepend"></Icon>
      </Input>
    </FormItem>
    <br>
    <FormItem>
      <Button type="primary" @click="handleSubmit('formInline')" style="width: 100%">Signin</Button>
    </FormItem>
  </Form>
</template>
<script>
  export default {
    data () {
      return {
        formInline: {
          user: '',
          password: ''
        },
        ruleInline: {
          user: [
            { required: true, message: 'Please fill in the user name', trigger: 'blur' }
          ],
          password: [
            { required: true, message: 'Please fill in the password.', trigger: 'blur' },
            { type: 'string', min: 6, message: '密码长度不可以低于6位', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      handleSubmit(name) {
        this.$axios.post('http://localhost:8888/user/check',{
          email:this.formInline.user,
          password:this.formInline.password
        })
          .then((response) => {
            console.log(response);
            if(response.data.status === "success"){
              localStorage.setItem("logged-in", true);
              localStorage.setItem("userid", response.data.msg);
              this.$router.push("/home");
            }
            else {
              localStorage.setItem("logged-in", false)
            }

          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  }
</script>
