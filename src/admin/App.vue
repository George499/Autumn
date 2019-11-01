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


import adminheader from './components/adminheader.vue';
import navigation from './components/navigation.vue';
import aboutme from './components/aboutme.vue';
import aboutmeadd from './components/aboutmeadd.vue';
import works from './components/works.vue';
import worksadd from './components/worksadd.vue';
import comments from './components/comments.vue';
import commentsadd from './components/commentsadd.vue';


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
ul {
margin: 0;
padding: 0;
  li {
  list-style: none;
}
}


</style>