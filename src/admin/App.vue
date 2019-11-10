<template lang="pug">
  div
    adminheader
    navigation
    router-view
</template>

<script>

import adminheader from './components/adminheader';
import navigation from './components/navigation.vue';



export default {
  name: 'app',
  components: {
    adminheader,
    navigation,
    
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
