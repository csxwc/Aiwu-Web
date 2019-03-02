<template>
  <div>
    <Card>
      <p slot="title">基本信息</p>
      <br>姓名：{{user_info.username}}
      <br>性别：{{user_info.sex}}
      <br>电话号码：{{user_info.phoneNumber}}
      <br>自我介绍：{{user_info.introduction}}
      <br>email:{{user_info.email}}
    </Card>
    <Card>
      <p slot="title">详细信息</p>
      <br>身份证号：{{user_info.id}}
      <br>注册时间：{{user_info.regTime}}
      <br>出生日期：{{user_info.birthday}}
    </Card>
    <Button type="primary">修改信息</Button>


  </div>
</template>

<script>
  export default {
    data() {
      return {
        user_info:{
          username:'DJ海',
          sex:'男',
          phoneNumber: '1234567890',
          introduction:'Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。\n' +
            '\n' +
            '如果你想在深入学习 Vue 之前对它有更多了解，我们制作了一个视频，带您了解其核心概念和一个示例工程。',
          birthday:'0000-0-00',
          email:'666666@djh.com',
          id: '123456789987654321',
          regTime: '0000-00-00',
        }
      }
    }
  }
</script>

<style>

</style>
