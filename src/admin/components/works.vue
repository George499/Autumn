<template lang="pug">
    div
        .admin-container
            .works-wrapper
                .works-top
                    h1.title Блок «Работы»
                .works-edit
                    h1.works-add-title Редактирование работы
                    .works-add-form
                        .works-add-form__left
                            .works-add-form__window
                                .window-inner 
                                    h1.window-inner__text Перетащите или загрузите <br>
                                                          | для загрузки изображения
                                    button.load-image Загрузить

                        .works-add-form__right    
                            .works-input__form
                                .works-input__wrap
                                    .works-input__title Название
                                    input(
                                    type="text"
                                    placeholder="Дизайн сайта для авто салона Porsche"
                                    autofocus
                                    ).works-input
                                .works-input__wrap
                                    .works-input__title Ссылка
                                    input(
                                    type="text"
                                    placeholder="https://www.porsche-pulkovo.ru"
                                    autofocus
                                    ).works-input
                                .works-input__wrap
                                    .works-input__title Описание
                                    textarea(
                                    type="text"
                                    placeholder="Порше Центр Пулково - является официальным дилером марки Порше в Санкт-Петербурге и предоставляет полный цикл услуг по продаже и сервисному обслуживанию автомобилей"
                                    autofocus
                                    ).works-textarea
                                .works-input__wrap
                                    .works-input__title Добавление тэга
                                    input(
                                    type="text"
                                    placeholder="Jquery, Vue.js, HTML5"
                                    autofocus
                                    ).works-input
                                ul.works__tags
                                    li.works-tags-item 
                                        .tag-name 
                                            .tag HTML
                                            .tag-delete
                                    li.works-tags-item 
                                        .tag-name 
                                            .tag CSS
                                            .tag-delete
                                    li.works-tags-item 
                                        .tag-name 
                                            .tag Javascript
                                            .tag-delete
                                .works-input__buttons
                                    button.load-cancel Отмена
                                    button.load-image.load-image--save Сохранить
</template>
<style lang='pcss' scoped src='../styles/works.pcss'>

</style>