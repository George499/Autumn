<template lang="pug">
    div
        .admin-nav
            .admin-container
                ul.admin-nav-list
                    li.admin-nav-list__item Обо мне
                        router-link(tag="button" to="/" exact-active-class="admin-nav-list__item--active").nav__link
                    li.admin-nav-list__item Работы
                        router-link(tag="button" to="/works" exact-active-class="admin-nav-list__item--active").nav__link
                    li.admin-nav-list__item Отзывы
                        router-link(tag="button" to="/comments" exact-active-class="admin-nav-list__item--active").nav__link
    
</template>
<style lang='pcss' scoped src='../styles/navigation.pcss'>

</style>