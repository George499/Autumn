<template lang="pug">
  div
    adminheader
    navigation
    aboutme
    aboutmeadd    
    works
    worksadd    
    comments
    commentsadd
</template>

<script>
import adminheader from '../admin/components/adminheader';
import navigation from '../admin/components/navigation.vue';
import aboutme from '../admin/components/aboutme.vue';
import aboutmeadd from '../admin/components/aboutmeadd.vue';
import works from '../admin/components/works.vue';
import worksadd from '../admin/components/worksadd.vue';
import comments from '../admin/components/comments.vue';
import commentsadd from '../admin/components/commentsadd.vue';


export default {
  name: 'app',
  components: {
    adminheader,
    navigation,
    aboutme,
    aboutmeadd,
    works,
    worksadd,
    comments,
    commentsadd
  },
  data() {
    return {
      msg: ''
    }
  }
}
</script>

<style lang="pcss">

@import "normalize.css";
@import "../styles/mixins.pcss";
@import "../styles/layout/base.pcss";

html, body {
  height: 100%; 
}
body {
  font-family: 'Open Sans', Helvetica, sans-serif;
  font-size: 16px;
  line-height: 1.42;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgba(#fff, 0.8);
  margin: 0;
  background: #f9fafe;
}
.admin-container {
      display: flex;
      margin: 0 auto;
      max-width: 1480px;
      width: 95%;
      position: relative;  
      align-items: center;
      height: 100%;
  
  }
  h1 {
    color: #414c63;  
  }
ul {
margin: 0;
padding: 0;
  li {
  list-style: none;
}
}


</style>