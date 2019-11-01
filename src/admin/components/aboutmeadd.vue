<template lang="pug">
    section.aboutme
        .admin-container            
            ul.aboutme-groups__list
                li.aboutme-groups__item
                    aboutmeInput
                    aboutmeList
                li.aboutme-groups__item
                li.aboutme-groups__item

</template>
<script>
import aboutmeInput from './aboutmeinput.vue'
import aboutmeList from './aboutmelist.vue'
export default {
    components: {
        aboutmeInput,
        aboutmeList
    }
    
}
</script>
<style lang='pcss' scoped src='../styles/aboutmeadd.pcss'>

</style>