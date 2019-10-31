<template lang="pug">
    header.adminheader
        .admin-container            
            h1  Георгий Исаев
            h2 Панель администрирования

</template>

<style lang='pcss' scoped>
h1 {
  margin: 0;
  font-size: 18px;
  margin-right: 28px;
}
h2 {
    margin: 0;
    font-size: 14px;
    color: rgba(#fff, .5)
}
.adminheader {
    width: 100%;
    height: 80px;
    background: linear-gradient(90deg, #3e3e59 0%, #454573 100%);
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

</style>