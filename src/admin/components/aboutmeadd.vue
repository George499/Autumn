<template lang="pug">
    section.aboutme
        .admin-container
            ul.aboutme-groups__list
                li.aboutme-groups__item
                    aboutmeInput
                    aboutmeListFooter
                li.aboutme-groups__item
                    aboutmeInput
                    aboutmeList
                    aboutmeListFooter
                li.aboutme-groups__item
                    aboutmeInput
                    aboutmeList
                    aboutmeListFooter

</template>
<script>

import aboutmeInput from './aboutmeinput.vue'
import aboutmeList from './aboutmelist.vue'
import aboutmeListFooter from './aboutmelistfooter.vue'

export default {
    components: {
        aboutmeInput,
        aboutmeList,
        aboutmeListFooter
    }
    
}
</script>
<style lang='pcss' scoped src='../styles/aboutmeadd.pcss'>
@import "../styles/mixins.pcss";
</style>