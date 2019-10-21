import Vue from 'vue';
import Swiper from 'swiper'
import { swiper, swiperSlide } from 'vue-awesome-swiper'



new Vue({
    el: "#reviews__slider",    
    name: 'slider',   
    components: {
        swiper,
        swiperSlide
      },
    data() {
        return {
            reviews: [],
            swiperOptions: {
                navigation : {
                    nextEl: '.reviews__scroll--left',
                    prevEl: '.reviews__scroll--right',
                },
                loop: true,
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 84,
                
              }
        };
    },
})

