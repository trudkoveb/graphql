<template lang="pug">
    div(class="guides-page")
        div(class="guides-overlay")
        div(class="guides")
            div(class="wrapper")
                div(class="guides-wrapper")
                    aside
                        p.title
                            | Table of contents
                        div
                            span(class="subtitle", v-on:click="schema =!schema") Schema
                            ul(v-if="schema")
                                li
                                    a(href="#", class="active") Dynamic definition
                                li
                                    a(href="#") Generators
                                li
                                    a(href="#") Lazy Execution
                                li
                                    a(href="#") Limiting Visibility
                                li
                                    a(href="#") Root Types
                                li
                                    a(href="#") Handing Typecasting Errors
                                li
                                    a(href="#") Extending the DSL
                                li
                                    a(href="#") Testing
                        div
                            span(class="subtitle", v-on:click="queries =!queries") Queries
                            ul(v-if="queries")
                                li
                                    a(href="#") Instrumentation
                                li
                                    a(href="#") Error Handling
                                li
                                    a(href="#") Executing Queries
                                li
                                    a(href="#") Ahead-of-Time Analysis
                                li
                                    a(href="#") Phases of Execution
                                li
                                    a(href="#") Mutations
                                li
                                    a(href="#") Complexity & Depth
                                li
                                    a(href="#") Timeout
                    article
                        p.title
                            | Schema
                        p.desription
                            | On this page, you'll learn all you need to know about the GraphQL type system and how it describes what data can be queried. Since GraphQL can be used with any backend framework or programming language, we'll stay away from implementation-specific details and talk only about the concepts.
                        p.subtitle
                            | Dynamic definition
                        p
                            | Many examples show how to use .define and store the result in a Ruby constant:
                        code
                            p(class="italic") # Download the gem:
                            | gem
                            span(class="default-color")  install
                            |  graphql
                            p(class="italic") # Setup with Rails:
                            | rails generate graphql:install
                        p
                            | However, you can call .define anytime and store the result anywhere. For example, you can define a method which creates types:
                        code
                            p(class="italic") # app/graphql/types/profile_type.rb
                            p(class="green") Types
                                span(class="bold") ::
                                span ProfileType = GraphQL
                                span(class="bold") ::
                                span ObjectType.define
                                span(class="bold black")  do
                            p(class="blue indent") name
                                span(class="default-color")  "Profile"
                            p(class="grey indent") field
                                span(class="violet")  :id
                                span ,
                                span(class="bold")  !
                                span types
                                span(class="bold") .
                                span(class="green") ID
                            p(class="grey indent") field
                                span(class="violet")  :name
                                span ,
                                span(class="bold")  !
                                span types
                                span(class="bold") .
                                span(class="green") String
                            p(class="grey indent") field
                                span(class="violet")  :avatar
                                span ,
                                span  Types
                                span(class="bold") ::
                                span(class="green") PhotoType
                            p(class="bold") end
                        p
                            | You can also define fields for associated objects. You’ll need a way to access them programmatically.
                        code
                            p(class="italic") # app/graphql/types/profile_type.rb
                            p(class="green") Types
                                span(class="bold") ::
                                span ProfileType = GraphQL
                                span(class="bold") ::
                                span ObjectType.define
                                span(class="bold black")  do
                            p(class="blue indent") name
                                span(class="default-color")  "Profile"
                            p(class="grey indent") field
                                span(class="violet")  :id
                                span ,
                                span(class="bold")  !
                                span types
                                span(class="bold") .
                                span(class="green") ID
                            p(class="grey indent") field
                                span(class="violet")  :name
                                span ,
                                span(class="bold")  !
                                span types
                                span(class="bold") .
                                span(class="green") String
                            p(class="grey indent") field
                                span(class="violet")  :avatar
                                span ,
                                span  Types
                                span(class="bold") ::
                                span(class="green") PhotoType
                            p(class="bold") end
                        p
                            | There is one caveat to using .define. The block is called with instance_eval, so self is a definition proxy, not the outer self. For this reason, you may need to assign values to local variables, then use them in .define. (.define has access to the local scope, but not the outer self.)
                        p.subtitle
                            | What does a list look like?
                        p
                            | Curabitur blandit tempus porttitor. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis:
                        ul
                            li Nulla vitae elit libero, a pharetra augue.
                            li Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
                            li Sed posuere consectetur est at lobortis. Etiam porta sem malesuada magna mollis.
                                ul
                                    li Vestibulum id ligula porta felis euismod semper.
                                    li Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                        p
                            | Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        a(href="#", class="default-color") Wow, look at me. I am a link!
</template>

<script>
  module.exports = {
    data: function(){
      return{
        schema: false,
        queries: false
    }
  }
}
</script>

<style lang="sass?indentedSyntax=true">
    @import '../../sass/common/_variables'

    .guides-page
        position: relative
        .guides-overlay
            width: 50%
            height: 100%
            position: absolute
            top: 0
            right: 0
            z-index: 10
            background: $light-color
    .guides
        background: $grey-bg
        color: $guides-color
    .guides-wrapper
        display: flex
        @media (#{$max_tablets})
            flex-wrap: wrap
        aside
            width: 30%
            background: $grey-bg
            min-height: 100vh
            position: relative
            z-index: 100
            padding-top: 40px
            @media (#{$max_tablets})
                width: 100%
                min-height: auto
            p.title
                font-family: $font-bold
                font-size: 1.1rem
                line-height: 1.3rem
                margin-bottom: 40px
                text-transform: uppercase
            div
                span.subtitle
                    font-family: $font-medium
                    cursor: pointer
                    display: inline-block
                    margin-bottom: 15px
                ul
                    margin-left: 10px
                    margin-bottom: 30px
                    li
                        a
                            font-family: $font-reg
                            color: $guides-color
                            font-size: 0.88rem
                            line-height: 1.9rem
                            &.active
                                position: relative
                                &:after
                                    content: ''
                                    display: block
                                    width: 3px
                                    height: 10px
                                    position: absolute
                                    left: -10px
                                    top: 5px
                                    background-color: $default-color
        article
            width: 70%
            background-color: $light-color
            position: relative
            z-index: 100
            padding-top: 80px
            padding-left: 80px
            padding-bottom: 110px
            @media (#{$max_tablets})
                width: 100%
                padding-left: 10px
                padding-top: 40px
                padding-bottom: 40px
            p
                line-height: 1.9rem
            p.title
                font-size: 1.6rem
                margin-bottom: 20px
            p.desription
                font-size: 1.1rem
                margin-bottom: 50px
            p.subtitle
                font-family: $font-medium
                font-size: 1.1rem
            p
                font-size: 0.94rem
                margin-bottom: 30px
            code
                margin-bottom: 30px
                p
                    margin-bottom: 0
            ul
                margin-bottom: 30px
                padding-left: 25px
                li
                    font-size: 0.94rem
                    line-height: 1.9rem
                    position: relative
                    &:after
                        content: ''
                        display: block
                        width: 8px
                        height: 8px
                        position: absolute
                        top: 11px
                        left: -15px
                        background-image: url("../../img/icons/icon-circle-list.svg")
            a
                font-family: $font-medium
                font-size: 0.94rem
                line-height: 1.9rem
</style>