import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter);

import aboutme from './components/aboutme.vue';
import aboutmeadd from './components/aboutmeadd.vue';
import works from './components/works.vue';
import worksadd from './components/worksadd.vue';
import comments from './components/comments.vue';
import commentsadd from './components/commentsadd.vue';

const routes = [
    {
    path: '/',
    component: {    
    aboutme
    
    }
    },
    {
        path: '/works',
        components: {            
            works,
            worksadd,
        }
    },
    {
        path: '/comments',
        components: {           
            comments,
            commentsadd
        }  
    }
];

export default new VueRouter({ routes, mode: 'history' });
