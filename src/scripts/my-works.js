import Vue from 'vue';
import Flickity from 'vue-flickity';



new Vue({
    el: "#reviews__slider",    
    name: 'slider',   
    components: {
        Flickity,
    },
    data() {
        return {
            reviews: [],
            flickityOptions: {
                initialIndex: 3,
                prevNextButtons: false,
                pageDots: false,
                wrapAround: true
              }
        };
    },  
    methods: {
        next() {
          this.$refs.flickity.next();
        },
        
        previous() {
          this.$refs.flickity.previous();
        }
      }  
})