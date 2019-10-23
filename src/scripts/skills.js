import Vue from 'vue';
import { swiper, swiperSlide } from "vue-awesome-swiper"

const skill = {
    template: "#skill",
    props: {
      skillName: String,
      skillPercent: Number
    },
    methods: {
      drawColoredCircle() {
        const circle = this.$refs["color-circle"];
        const dashArray = parseInt(
          getComputedStyle(circle).getPropertyValue("stroke-dasharray")
        );
        const percent = (dashArray / 100) * (100 - this.skillPercent);
  
        circle.style.strokeDashoffset = percent;
      }
    },
    mounted() {
      this.drawColoredCircle();
    }
  };
  
  const skillsRow = {
    template: "#skills-row",
    components: {
      skill
    },
    props: {
      skill: Object
    }
  };
  
  new Vue({
    el: "#skills-component",
    template: "#skills-list",
    components: {
      skillsRow
    },
    data() {
      return {
        skills: {}
      };
    },
    created() {
      const data = require("../data/skills.json");
      this.skills = data;
    }
  });


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
                navigation: {
                    nextEl: '.reviews__scroll--left',
                    prevEl: '.reviews__scroll--right',
                  },
                  loop: true,
                  slidesPerView: 2,
                  slidesPerGroup: 2
            }
        };
    },    
})