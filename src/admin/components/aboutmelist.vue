<template lang="pug">
    .aboutme-list
        .aboutme-list__content
            ul.aboutme-content__list
                li.aboutme-list__item
                    .skill-name Git
                    .item-skill__percent
                        .percent 100
                        .percent__amount %
                    .item-skill__icons
                        .skill-icon-pen
                        .skill-icon-trash

        .aboutme-list__footer
            .aboutme-list__footer__content
                .new-skill__input
                    input(
                    type="text"
                    placeholder="Новый навык"
                    autofocus
                    ).new-skill 
                .skill-percent__input
                    input(
                    type="text"
                    placeholder="100%"
                    autofocus
                    ).skill-percent 
                .add-plus
                    .add-plus__img

</template>

<style lang='pcss' scoped src='../styles/aboutmelist.pcss'>

</style>