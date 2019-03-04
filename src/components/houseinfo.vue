<template>
  <div>
    <v-header></v-header>
    <v-pics></v-pics>
  </div>
</template>

<script>
  import Header from './Header.vue'
  import PicContainer from './house_component/PicContainer'

  export default {
    name: "houseinfo",
    components: {
      'v-header': Header,
      'v-pics': PicContainer
    }
  }
</script>

<style scoped>

</style>
