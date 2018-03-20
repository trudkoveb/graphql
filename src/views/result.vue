<template lang="pug">
    section(class="results-search")
        div(class="wrapper")
            p.title
                | 43 repository results
            div(class="results-search-wrapper")
                div(class="search")
                    p.subtitle
                        a(href="#") Getting Started
                    p.text
                        span
                        | By #[a(href="#") GraphQL]
                        | vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti #[a(href="#") GraphQL]
                        | corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, #[a(href="#") GraphQL]
                        | corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, #[a(href="#") GraphQL]
                        | corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, #[a(href="#") GraphQL]
                        | corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, #[a(href="#") GraphQL]
                        | corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, #[a(href="#") GraphQL]
                        | corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, #[a(href="#") GraphQL]
                        | corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, #[a(href="#") GraphQL]
                        | sunt iidem rerum facilis est et expedita distinctio. Nam libero temporm facilis est rerum facilis est et expedita distinctio. Nam libero temporm facilis est rerum facilis est et expedita distinctio. Nam libero temporm facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est
                div(class="search")
                    p.subtitle
                        a(href="#") Getting Started
                    p.text
                        span
                        | If you know #[a(href="#") GraphQL]
                        | vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti #[a(href="#") GraphQL]
                        | corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, #[a(href="#") GraphQL]
                        | sunt in culpa qui officia deffacilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est
</template>

<style lang="sass?indentedSyntax=true">
    @import '../../sass/common/_variables'

    .results-search
        padding: 80px 0
        @media (#{$max_tablets})
            padding-left: 10px
            padding-right: 10px
        p.title
            font-size: 2rem
            line-height: 2.4rem
            margin-bottom: 40px
        .results-search-wrapper
            border-top: 1px solid  rgba(0%, 0%, 0%, 0.1)
            .search
                padding: 40px 0
                border-bottom: 1px solid  rgba(0%, 0%, 0%, 0.1)
                p.subtitle
                    font-family: $font-bold
                    font-size: 1.5rem
                    line-height: 1.4rem
                    margin-bottom: 15px
                    a
                        color: $guides-color
                        border-bottom: 1px solid  transparent
                        display: inline-block
                        &:hover
                            border-bottom: 1px solid  #000
                p.text
                    font-size: 1rem
                    line-height: 2rem
                    color: $grey-color
                    position: relative
                    text-indent: 10px
                    height: 6rem
                    overflow: hidden
                    text-overflow: ellipsis
                    display: -webkit-box
                    -webkit-line-clamp: 3
                    -webkit-box-orient: vertical
                    &:before
                        content: ''
                        display: block
                        position: absolute
                        top: 19px
                        left: 0
                        width: 8px
                        height: 1px
                        border-bottom: 2px dotted  $grey-color
                span
                    padding-left: 10px
                a
                    color: $default-color

</style>