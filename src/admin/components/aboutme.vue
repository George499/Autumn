<template lang="pug">
    div
        .admin-container
            .about-me-top
                h1.title Блок «Обо мне»
                .add-group 
                    .add-plus
                    h3.add-text Добавить группу
        aboutmeadd

</template>
<script>
import aboutmeadd from './aboutmeadd.vue';

export default {
  name: 'app',
  components: {
    aboutmeadd
    
  },
  data() {
    return {
      msg: ''
    }
  }
}
</script>

<style lang='pcss' scoped src='../styles/aboutme.pcss'>

</style>