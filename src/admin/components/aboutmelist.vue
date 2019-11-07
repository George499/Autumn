<template lang="pug">
    .aboutme-list
        .aboutme-list__content
            ul.aboutme-content__list
                li.aboutme-list__item(v-for="aboutme in aboutmes")
                    aboutmeListItem(
                        :aboutme="aboutme"
                        @removeSkill="removeSkill"
                    ) 
</template>

<script>
import aboutmeListItem from './aboutmeListItem.vue'
export default {
    props: {
        aboutmes: Array
    },
    components: {
    aboutmeListItem
    },
    methods: {
        removeSkill(aboutmeId) {
            this.$emit('removeSkill', aboutmeId)
        }
    }   
}
</script>
<style lang='pcss' scoped src='../styles/aboutmelist.pcss'>

</style>