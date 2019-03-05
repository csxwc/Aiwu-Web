<template>
  <Carousel
    id="lunbo"
    loop
    autoplay
    :autoplay-speed="3000"
    :trigger="'hover'"
    :arrow="'hover'">
    <CarouselItem>
      <div class="imgc"><img src="http://cyldurl.roogames.com/uploadfile/2015/0129/20150129083714643.jpg" alt=""></div>
    </CarouselItem>
    <CarouselItem>
      <div class="imgc"><img src="http://cyldurl.roogames.com/uploadfile/2015/0129/20150129083717796.jpg" alt=""></div>
    </CarouselItem>
    <CarouselItem>
      <div class="imgc"><img src="http://cyldurl.roogames.com/uploadfile/2015/0106/20150106085726706.jpg" alt=""></div>
    </CarouselItem>
    <CarouselItem>
      <div class="imgc"><img src="http://cyldurl.roogames.com/uploadfile/2015/0311/20150311082948747.jpg" alt=""></div>
    </CarouselItem>
  </Carousel>
</template>
<script>
  export default {

  }
</script>
<style>
  .imgc{
    height: 500px;
  }
</style>
