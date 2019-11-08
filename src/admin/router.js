import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter);

import adminheader from './components/adminheader';
import navigation from './components/navigation.vue';
import aboutme from './components/aboutme.vue';
import aboutmeadd from './components/aboutmeadd.vue';
import works from './components/works.vue';
import worksadd from './components/worksadd.vue';
import comments from './components/comments.vue';
import commentsadd from './components/commentsadd.vue';

const routes = [
    {
    path: '/',
    components: {
    adminheader,
    navigation,
    aboutme,
    aboutmeadd,
    }
    },
    {
        path: '/works',
        components: {
            adminheader,
            navigation,
            works,
            worksadd,
        }
    },
    {
        path: '/comments',
        components: {  
            adminheader,
            navigation,          
            comments,
            commentsadd
        }  
    }
];

export default new VueRouter({ routes, mode: 'history' });
