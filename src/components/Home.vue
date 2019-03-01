<template>
    <div>
        <Layout>
            <Header class="container"><v-header></v-header></Header>
            <Content>
                <div style="text-align: center">
                    <Carousel
                        loop
                        autoplay
                        :autoplay-speed="3000"
                        :trigger="'hover'"
                        :arrow="'hover'">
                        <CarouselItem>
                            <img src="http://cyldurl.roogames.com/uploadfile/2015/0129/20150129083714643.jpg" alt="">
                        </CarouselItem>
                        <CarouselItem>
                            <img src="http://cyldurl.roogames.com/uploadfile/2015/0129/20150129083717796.jpg" alt="">
                        </CarouselItem>
                        <CarouselItem>
                            <img src="http://cyldurl.roogames.com/uploadfile/2015/0106/20150106085726706.jpg" alt="">
                        </CarouselItem>
                        <CarouselItem>
                            <img src="http://cyldurl.roogames.com/uploadfile/2015/0311/20150311082948747.jpg" alt="">
                        </CarouselItem>
                    </Carousel>
                </div>
                
            </Content>
            
        </Layout>
    </div>
</template>

<script>
import Header from './Header.vue'

export default {
    data(){
        return{

        }
    },

    components:{
        'v-header':Header
    }
}
</script>

<style >
@import url('../assets/css/container.css');
</style>




