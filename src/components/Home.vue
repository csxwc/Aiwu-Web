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
                  <div style="font-size:40px;text-align: center"><strong>精品推荐</strong></div>
                  <Row v-for="(row,row_index) in 2":key="row.id" :gutter="60" style="text-align: center">
                    <Col span="8" push="0" v-for="(col,col_index) in 3":key="col.id"><v-sugCard
                      :src='infoList[row_index*3+col_index].src'
                      :title="infoList[row_index*3+col_index].title"></v-sugCard></Col>
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
          infoList:[
            {
              title:'最美景安城',
              src:'http://cyldurl.roogames.com/uploadfile/2015/0122/20150122083855718.jpg'
            },
            {
              title:'玄幻归墟界',
              src:'http://cyldurl.roogames.com/uploadfile/2014/1231/20141231085241927.jpg'
            },
            {
              title:'秀丽与青山',
              src:'http://cyldurl.roogames.com/uploadfile/2014/1231/20141231085408764.jpg'
            },
            {
              title:'浮空天晴之海',
              src:'http://cyldurl.roogames.com/uploadfile/2014/1231/20141231085318400.jpg'
            },
            {
              title:'悠哉碧溪村',
              src:'http://pal5q.roogames.com/pal5q/pal5q/zl/images/cj/cj_8d.jpg'
            },
            {
              title:'司云崖',
              src:'http://pal5q.roogames.com/pal5q/pal5q/zl/images/cj/cj_6d.jpg'
            }
          ]

        }
    },

    components:{
        'v-header':Header,
        'v-sugCard':SuggestCard
    },
    methods:{

    }
}
</script>

<style >
@import url('../assets/css/container.css');
</style>




