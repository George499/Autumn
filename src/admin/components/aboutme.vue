<template lang="pug">
    div
        .admin-container
            .about-me-top
                h1.title Блок «Обо мне»
                button.add-group 
                    .add-plus
                    h3.add-text Добавить группу
                form(@submit.prevent="addNewCategory")    
        aboutmeadd

</template>
<script>
import { mapActions } from "vuex";
import aboutmeadd from './aboutmeadd.vue';


export default {
  name: 'app',
  data: () => ({
    title: ""
  }),
  created() {
    this.fetchCategories();
  },
  computed: {
    ...mapState("categories", {
      categories: state => state.categories
    })
  },
  methods: {
    ...mapActions("categories", ["addCategory", "fetchCategories"]),
    async addNewCategory() {
      try {
      await this.addCategory(this.title)
    } catch (error) {
      alert(error.message)
    };
    }
  },
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