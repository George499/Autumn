import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter);

import aboutme from './components/aboutme.vue';
import aboutmeadd from './components/aboutmeadd.vue';
import works from './components/works.vue';
import worksadd from './components/worksadd.vue';
import comments from './components/comments.vue';


const routes = [
    {
        path: '/',
        component: aboutme
        
    },
    {
        path: '/works',
        component: works
        
    },
    {
        path: '/comments',
        component: comments
        
    },
];

export default new VueRouter({ routes, mode: 'hash' });
