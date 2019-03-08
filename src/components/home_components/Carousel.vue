<template>
  <Carousel
    id="lunbo"
    loop
    autoplay
    :autoplay-speed="3000"
    :trigger="'hover'"
    :arrow="'hover'">
    <CarouselItem>
      <div class="imgc"><img src="https://z1.muscache.cn/pictures/00b12c64-0851-40e7-83aa-6bba10221435.jpg" alt=""></div>
    </CarouselItem>
    <CarouselItem>
      <div class="imgc"><img src="https://z1.muscache.cn/pictures/9bd8f08c-2e78-4665-ab7b-e4952673dabd.jpg" alt=""></div>
    </CarouselItem>
    <CarouselItem>
      <div class="imgc"><img src="https://z1.muscache.cn/pictures/30c10f87-af4b-45e5-8b6d-1a95c88fd5dd.jpg" alt=""></div>
    </CarouselItem>
  </Carousel>
</template>
<script>
  export default {
    name:'v-carouse'

  }
</script>
<style>
  .imgc{
    height: 500px;
    width: 100%;
  }
  .imgc img{
    width: 100%;
  }
</style>
