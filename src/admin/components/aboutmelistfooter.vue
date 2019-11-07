<template lang="pug">
    .aboutme-list__footer
            .aboutme-list__footer__content
                .new-skill__input
                    input(
                    type="text"
                    placeholder="Новый навык"
                    autofocus
                    v-model="aboutme.name"
                    @keydown.enter="addAboutme"
                    ).new-skill 
                .skill-percent__input
                    input(
                    type="text"
                    placeholder="100%"
                    autofocus
                    v-model="aboutme.percent"
                    @keydown.enter="addAboutme"
                    ).skill-percent 
                .add-plus
                    .add-plus__img(@click="addAboutme")
</template>
<script>
let uniqId = 0;
export default {
    data() {
        return {
            aboutme: {
                id: 0,
                name: ''
            }
        }
    },
    methods: {
        addAboutme() {
            uniqId++;
            this.aboutme.id = uniqId;
            this.$emit("addAboutme", {...this.aboutme});
            this.aboutme.name = "";
        }
    }
}
</script>
<style lang='pcss' scoped src='../styles/aboutmelist.pcss'>

</style>