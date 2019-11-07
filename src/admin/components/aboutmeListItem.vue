<template lang="pug">
    .aboutme-item
        .skill-name {{aboutme.name}}
        .item-skill__percent
            .percent 100
            .percent__amount %
        .item-skill__icons
            .skill-icon-pen
            .skill-icon-trash(
                @click="removeSkill"
            )
    
</template>
<script>
export default {
    props: {
        aboutme: Object
    },
    methods: {
        removeSkill() {
            this.$emit('removeSkill', this.aboutme.id);
        }
    }
}
</script>


<style lang='pcss' scoped src='../styles/aboutmelist.pcss'>

</style>