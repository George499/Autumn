<template lang="pug">
    section.aboutme
        //- pre(style="color: black") {{aboutmes}}    
        .admin-container            
            ul.aboutme-groups__list
                li.aboutme-groups__item
                    aboutmeInput
                    aboutmeList(
                        v-if="aboutmes.length > 0"
                        :aboutmes="aboutmes"
                        @removeSkill="removeSkill"
                    )
                    aboutmeListFooter(
                    @addAboutme="addAboutme"
                    )
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
    data() {
        return {
            aboutmes: []
        }
    },
    components: {
        aboutmeInput,
        aboutmeList,
        aboutmeListFooter
    },
    methods: {
        addAboutme(aboutme) {
            this.aboutmes.push(aboutme)

        },
        removeSkill(aboutmeId) {
         this.aboutmes = this.aboutmes.filter(item => item.id != aboutmeId )
        }
    }
    
}
</script>
<style lang='pcss' scoped src='../styles/aboutmeadd.pcss'>

</style>