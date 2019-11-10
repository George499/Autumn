<template lang="pug">
    div
        .admin-container
            .comments-wrapper    
                .comments-top
                    h1.title Блок «Отзывы»
                .comments-edit
                        h1.comments-add-title Новый отзыв
                        .comments-add-form
                            .comments-add-form__left
                                .user-pic
                                .add-text Добавить фото
                            .comments-add-form__right    
                                .comments-input__form
                                    .comments-input__wrap
                                        .comments-input__title Имя автора
                                        input(
                                        type="text"
                                        placeholder="Ковальчук Дмитрий"
                                        autofocus
                                        ).comments-input
                                    .comments-input__wrap
                                        .comments-input__title Титул автора
                                        input(
                                        type="text"
                                        placeholder="Основатель LoftSchool"
                                        autofocus
                                        ).comments-input
                                .comments-input__form
                                    .comments-input__title.comments-input__title--textarea Отзыв
                                    textarea(
                                    type="text"
                                    placeholder="Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!"
                                    autofocus
                                    ).comments-textarea
                                .comments-input__buttons
                                    button.load-cancel Отмена
                                    button.load-image.load-image--save Сохранить 
        commentsadd
</template>

<script>
import commentsadd from './commentsadd.vue';

export default {
  name: 'app',
  components: {
    commentsadd
    
  },
  data() {
    return {
      msg: ''
    }
  }
}
</script>

<style lang='pcss' scoped src='../styles/comments.pcss'>

</style>