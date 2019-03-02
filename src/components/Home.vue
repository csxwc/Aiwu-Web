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
                <div style="width: 100%">
                  <Row><Col style="font-size:50px;text-align: center"><strong>精品推荐</strong></Col></Row>
                  <Row>

                    <br>
                    <Col span="6" v-for="item in 3":key="item.id" :gutter="30" push="3">
                      <v-sugCard :src="'http://cyldurl.roogames.com/uploadfile/2015/0122/20150122083855718.jpg'"></v-sugCard>
                    </Col>
                  </Row>
                  <Row>
                    <Col span="6" v-for="item in 3":key="item.id" :gutter="30" push="3">
                      <v-sugCard :src="'http://cyldurl.roogames.com/uploadfile/2015/0122/20150122083855718.jpg'"></v-sugCard>
                    </Col>
                  </Row>
                </div>

            </Content>

        </Layout>
    </div>
</template>

<script>
import Header from './Header.vue'
import SuggestCard from  './home_components/SuggestCard.vue'

export default {
    data(){
        return{

        }
    },

    components:{
        'v-header':Header,
        'v-sugCard':SuggestCard
    }
}
</script>

<style >
@import url('../assets/css/container.css');
</style>




