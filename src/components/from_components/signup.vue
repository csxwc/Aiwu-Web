<template>
  <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
    <FormItem label="用户名" prop="name">
      <Input v-model="formValidate.name" placeholder="输入用户名" clearable></Input>
    </FormItem>
    <FormItem label="邮箱" prop="mail">
      <Input v-model="formValidate.mail" placeholder="输入邮箱" clearable></Input>
    </FormItem>
    <FormItem>
    <Button type="primary" :disabled="cantClick" style="width:200px;margin-top: 10px" @click="send">{{content}}</Button>
    </FormItem>
    <FormItem label="验证码" prop="code">
      <Input v-model="formValidate.code" placeholder="输入验证码"  clearable></Input>
    </FormItem>
    <FormItem label="Password" prop="passwd">
      <Input type="password" v-model="formValidate.passwd" clearable></Input>
    </FormItem>
    <FormItem label="Confirm" prop="passwdCheck">
      <Input type="password" v-model="formValidate.passwdCheck" clearable></Input>
    </FormItem>
    <FormItem label="出生日期">
      <Row>
        <Col span="11">
          <FormItem prop="date">
            <DatePicker type="date" placeholder="Select date" v-model="formValidate.date"></DatePicker>
          </FormItem>
        </Col>
      </Row>
    </FormItem>
    <FormItem label="性别" prop="gender">
      <RadioGroup v-model="formValidate.gender">
        <Radio label="m">男</Radio>
        <Radio label="f">女</Radio>
      </RadioGroup>
    </FormItem>
    <FormItem label="个人介绍" prop="desc">
      <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..." clearable></Input>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="handleSubmit('formValidate')">注册</Button>
      <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
    </FormItem>
  </Form>
</template>
<script>
  export default {
    data () {
      const validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please enter your password'));
        } else {
          if (this.formValidate.passwdCheck !== '') {
            // 对第二个密码框单独验证
            this.$refs.formValidate.validateField('passwdCheck');
          }
          callback();
        }
      };
      const validatePassCheck = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please enter your password again'));
        } else if (value !== this.formValidate.passwd) {
          callback(new Error('The two input passwords do not match!'));
        } else {
          callback();
        }
      };
      return {
        totalTime: 10,
        cantClick: false,
        content:'发送验证码',
        formValidate: {
          name: '',
          mail: '',
          code: '',
          passwd:'',
          passwdCheck:'',
          gender: '',
          date: '',
          desc: ''
        },
        ruleValidate: {
          name: [
            { required: true, message: 'The name cannot be empty', trigger: 'blur' }
          ],
          mail: [
            { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
            { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
          ],
          passwd: [
            { required: true, message: 'The password cannot be empty', trigger: 'blur' },
            { validator: validatePass, trigger: 'blur' }
          ],
          passwdCheck: [
            { validator: validatePassCheck, trigger: 'blur' },
          ],
          code: [
            { required: true, message: 'The code cannot be empty', trigger: 'change' }
          ],
          gender: [
            { required: true, message: 'Please select gender', trigger: 'change' }
          ],
          date: [
            { required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
          ],
          desc: [
            { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
            { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.submit()
          } else {
            this.$Message.error('Fail!');
          }
        })
      },
      handleReset (name) {
        this.$refs[name].resetFields();
      },
      submit(){
        this.$axios.post('http://118.113.9.118:8888/user/register', {
          email: this.formValidate.mail,
          password: this.formValidate.passwd,
          code: this.formValidate.code,
          username: this.formValidate.name,
          desc:this.formValidate.desc,
          date:this.formValidate.date,
          gender:this.formValidate.gender
        })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      send(){
        this.$axios.post('http://182.149.197.247:8888/user/register/mail',{
          email:this.formValidate.mail
        })
          .then((response) => {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        if (this.cantClick) return  //改动的是这两行代码
        this.cantClick = true
        this.content = this.totalTime + 's后重新发送'
        let clock = window.setInterval(() => {
          this.totalTime--
          this.content = this.totalTime + 's后重新发送'
          if (this.totalTime < 0) {
            window.clearInterval(clock)
            this.content = '重新发送验证码'
            this.totalTime = 10
            this.cantClick = false  //这里重新开启
          }
        },1000)
      }
    }
  }
</script>
