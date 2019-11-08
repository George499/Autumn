<template lang="pug">
    .aboutme-list__footer
            .aboutme-list__footer__content                
                .new-skill__input 
                    input(
                    type="text"
                    placeholder="Новый навык"
                    autofocus
                    v-model="aboutme.name"
                    :class="{'valid-error' : validation.hasError('aboutme.name')}"
                    @keydown.enter="addAboutme"
                    ).new-skill
                    div.error {{validation.firstError('aboutme.name')}}
                .skill-percent__input
                    input(
                    type="text"
                    placeholder="100%"
                    autofocus
                    v-model="aboutme.percent"
                    :class="{'valid-error' : validation.hasError('aboutme.percent')}"
                    @keydown.enter="addAboutme"
                    ).skill-percent 
                    div.error {{validation.firstError('aboutme.percent')}}
                .add-plus
                    .add-plus__img(@click="addAboutme")
</template>
<script>
import { Validator } from "simple-vue-validator"
let uniqId = 0;
export default {
    mixins: [require('simple-vue-validator').mixin],
    validators: {
        'aboutme.name'(value){
            return Validator.value(value).required('Поле не может быть пустым');
        },
        'aboutme.percent'(value){
           return Validator.value(value).required('Поле не может быть пустым').digit('В поле может быть только цифра'); 
        }
    },
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
            this.$validate().then(success => {
                if(!success) return;
                uniqId++;
                this.aboutme.id = uniqId;
                this.$emit("addAboutme", {...this.aboutme});
                this.aboutme.name = "";
                this.validation.reset()

            })
            
        }
    }
}
</script>
<style lang='pcss' scoped src='../styles/aboutmelist.pcss'>

</style>