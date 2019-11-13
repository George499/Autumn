<template lang="pug">
    .aboutme-input
        .aboutme-input-wrap
            input(
                type="text"
                v-model="title"
                placeholder="Название новой группы"
                autofocus
            ).input
            .buttons
                button.tick(type='button')
                button.cross(type='button')
</template>

<script>

let uniqId = 0;
export default {
    
    data() {
        return {
            aboutme: {
                id: 0,
                name: '',
                percent: '0'
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
<style lang="pcss" scoped src='../styles/aboutmeinput.pcss'>

</style>