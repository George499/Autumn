<template lang="pug">
    div
        .admin-container
            ul.comments-list
                li.comments-item.comments-item--add
                    .comments-add-circle
                    .comments-add-text Добавить отзыв
                li.comments-item.comments-item--chosen
                    .comments-item-top
                        .rev-avatar
                            img.rev-avatar-img(src="../../images/content/user.jpg")
                        .rev-name
                            h1.name Владимир Сабанцев
                            h2.rev-desc Преподаватель
                    .comments-text
                        p Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
                    .comments-item__buttons
                            button.comments-item__button
                                .btn-edit-text Править
                                .btn-edit-img
                            button.comments-item__button
                                .btn-edit-text Удалить
                                .btn-edit-img.btn-edit-img--del
                li.comments-item.comments-item
                    .comments-item-top
                        .rev-avatar
                            img.rev-avatar-img(src="../../images/content/user.jpg")
                        .rev-name
                            h1.name Ковальчук Дмитрий
                            h2.rev-desc Основатель Loftschool
                    .comments-text
                        p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                    .comments-item__buttons
                            button.comments-item__button
                                .btn-edit-text Править
                                .btn-edit-img
                            button.comments-item__button
                                .btn-edit-text Удалить
                                .btn-edit-img.btn-edit-img--del
                li.comments-item.comments-item
                    .comments-item-top
                        .rev-avatar
                            img.rev-avatar-img(src="../../images/content/user.jpg")
                        .rev-name
                            h1.name Владимир Сабанцев
                            h2.rev-desc Преподаватель
                    .comments-text
                        p Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
                    .comments-item__buttons
                            button.comments-item__button
                                .btn-edit-text Править
                                .btn-edit-img
                            button.comments-item__button
                                .btn-edit-text Удалить
                                .btn-edit-img.btn-edit-img--del
                li.comments-item.comments-item
                    .comments-item-top
                        .rev-avatar
                            img.rev-avatar-img(src="../../images/content/user.jpg")
                        .rev-name
                            h1.name Ковальчук Дмитрий
                            h2.rev-desc Основатель Loftschool
                    .comments-text
                        p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                    .comments-item__buttons
                            button.comments-item__button
                                .btn-edit-text Править
                                .btn-edit-img
                            button.comments-item__button
                                .btn-edit-text Удалить
                                .btn-edit-img.btn-edit-img--del
</template>

<style lang='pcss' scoped src='../styles/commentsadd.pcss'>

</style>