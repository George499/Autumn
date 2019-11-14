<template lang="pug">
    .aboutme-input
        .aboutme-input-wrap
            input(
                type="text"
                placeholder="Название новой группы"
                autofocus
               v-model="title"
            ).input
            .buttons
                button.tick(type='button' @submit.prevent="addNewCategory")
                button.cross(type='button')
            
</template>

<script>
import { mapActions } from "vuex";

let uniqId = 0;
export default {
    
    data ()  {
        title: "";
        return {
            aboutme: {
                id: 0,
                name: '',
                percent: '0'
            }
        }
    },
    methods: {
        ...mapActions("categories", ["addCategory"]),
        addNewCategory() {
            this.addCategory(this.title)
            },
        addAboutme() {
            
            uniqId++;
            this.aboutme.id = uniqId;
            this.$emit("addAboutme", {...this.aboutme});
            this.aboutme.name = "";
        }
    }
}
</script>
<style lang="pcss" scoped src='../styles/aboutmeinput.pcss'>

</style>