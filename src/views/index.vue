<template lang="pug">
    main
        section(class="greetings")
            div(class="wrapper")
                h1
                    | GraphQL-Ruby
                p(class="subtitle")
                    | Awesome implementation, docs and specs.
                a(href="#", class="button")
                    | Get started!
        section(class="instruction")
            div(class="wrapper")
                h2
                    | How to start going?
                div(class="step-wrapper")
                    p.title
                        | Install the Gem
                    p
                        | #[a(href="#", class="default-color link") Get going fast]
                        |  with the #[a(href="#", class="default-color link") graphql]
                        |  gem, battle-tested and trusted by #[a(href="#", class="default-color link") GitHub]
                        |  and #[a(href="#", class="default-color link") Shopify].
                    code
                        p(class="italic") # Download the gem:
                        | gem
                        span(class="default-color")  install
                        |  graphql
                        p(class="italic") # Setup with Rails:
                        | rails generate graphql:install
                div(class="step-wrapper")
                    p.title
                        | Define Your Schema
                    p
                        | Describe your application with the #[a(href="#", class="default-color link") GraphQL type system]
                        |  to create a self-documenting, strongly-typed API.
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
                div(class="step-wrapper")
                    p.title
                        | Run Queries
                    p
                        | #[a(href="#", class="default-color link") Serve queries]
                        |  to build a great UI or webservice.
                    code
                        p(class="italic") # app/controllers/graphql_controller.rb
                        p
                            span result
                            span(class="bold")  =
                            span(class="green")  MySchema
                            | .
                            span(class="default-color") execute
                            | (
                        p(class="grey indent") params[
                            span(class="violet") :query
                            | ],
                        p
                            span(class="violet indent") variables:
                            span(class="grey")  params[
                            span(class="violet") :variables
                            span(class="grey") ],
                        p
                            span(class="violet indent") context:
                            span(class="grey")  {
                            span(class="violet")  current_user:
                            span(class="grey")  current_user  },
                        p(class="grey") )
                        p(class="grey") render
                            span(class="violet")  json:
                            span(class="grey")  result
        section(class="partners")
            div(class="wrapper")
                h2
                    | Everybody loves GraphQL-Ruby!
                img(src="../../img/img/partners.svg", alt="Partners")
        section(class="documentation")
            div(class="wrapper")
                h2(class="white")
                    | Browse the documentation
                a(href="#", class="button")
                    | Let’s get there!
        section(class="benefits")
            div(class="wrapper")
                h2
                    | Benefits
                div(class="benefits-wrapper")
                    div
                        img(src="../../img/icons/clock.svg", alt="Easy and Quick")
                        p.title
                            | Easy and Quick
                        p
                            | Getting started with Graphene is incredibly easy. You will enjoy creating new APIs. But I need more text here.
                    div
                        img(src="../../img/icons/document.svg", alt="Declarative")
                        p.title
                            | Declarative
                        p
                            | Query responses are decided by the client rather than the server. A GraphQL query returns exactly what a client asks for and no more.
                    div
                        img(src="../../img/icons/ruby.svg", alt="Ruby")
                        p.title
                            | Ruby
                        p
                            | Graphene will work out of box with your current stack. We have integrations with Django, SQLAlchemy, Flask, and Google App Engine.
        section(class="applicability")
            div(class="wrapper")
                p
                    | Works well with #[a(href="#", class="default-color link")  Apollo] and #[a(href="#", class="default-color link")  React Modern]
        section(class="plea")
            div(class="wrapper")
                p
                    | Add #[a(href="#", class="link") GraphQL] to your Ruby app. #[a(href="#", class="link") Get Started!]
</template>

<style lang="sass?indentedSyntax=true">
    @import '../../sass/common/_variables'

    section.greetings
        background-image: url("../../img/bg/group.svg")
        background-color: $default-color
        background-position: top;
        background-repeat: no-repeat;
        text-align: center
        color: $light-color
        padding-top: 190px
        padding-bottom: 260px
        @media (#{$max_ipad})
            background-image: none
            padding-top: 20px
            padding-bottom: 40px
        p
            margin-bottom: 80px
            font-size: 1.5rem
            line-height: 1.8rem


    section.instruction
        padding-top: 100px
        @media (#{$max_ipad})
            padding-top: 50px
        h2
            text-align: left
            padding-bottom: 65px
            @media (#{$max_ipad})
                padding-bottom: 100px
                text-align: center
        .step-wrapper
            padding-left: 160px
            position: relative
            padding-bottom: 80px
            @media (#{$max_ipad})
                padding-left: 0
                padding-bottom: 100px
            &:after
                content: ''
                display: block
                width: 80px
                height: 80px
                position: absolute
                top: 0
                left: 0
                @media (#{$max_ipad})
                    right: 0
                    bottom: 0
                    top: -90px
                    margin: 0 auto
            &:nth-of-type(1):after
                background-image: url("../../img/icons/icon-cloud.svg")
            &:nth-of-type(2):after
                background-image: url("../../img/icons/icon-shema.svg")
            &:nth-of-type(3):after
                background-image: url("../../img/icons/icon-gear.svg")
            &:not(:last-child):before
                content: ''
                display: block
                position: absolute
                top: 0
                left: 40px
                width: 1px
                height: 100%
                background-color: rgba(0%, 0%, 0%, 0.1)
                @media (#{$max_ipad})
                    display: none
            p.title
                font-family: $font-bold
                font-size: 1.5rem
                line-height: 1.8rem
                color: $dark-color
                padding-bottom: 35px
                @media (#{$max_ipad})
                    text-align: center
                + p
                    font-size: 1.5rem
                    line-height: 3rem
                    color: $grey-color
                    margin-bottom: 50px


    section.partners
        padding-top: 100px
        padding-bottom: 170px
        background-color: $grey-bg
        text-align: center
        @media (#{$max_ipad})
            padding-top: 50px
        h2
            margin-bottom: 80px
        img
            @media (#{$max_ipad})
                width: 80%

    section.documentation
        background: $default-color
        padding: 110px 0
        text-align: center
        @media (#{$max_ipad})
            padding-top: 50px
        h2
            margin-bottom: 50px

    section.benefits
        padding-top: 95px
        padding-bottom: 110px
        @media (#{$max_ipad})
            padding-top: 50px
        h2
            margin-bottom: 95px
        .benefits-wrapper
            display: flex
            align-items: center
            justify-content: space-between
            @media (#{$max_ipad})
                flex-wrap: wrap
            div
                text-align: center
                width: 28%
                @media (#{$max_ipad})
                    width: 100%
                    &:not(:last-child)
                        margin-bottom: 30px
                p.title
                    font-size: 1.5rem
                    line-height: 1.8rem
                    margin: 25px 0
                    + p
                        font-size: 1rem
                        line-height: 2rem
                        color: $grey-color

    section.applicability
        background: $grey-bg
        padding: 85px 0
        p
            text-align: center
            font-size: 1.5rem
            line-height: 3rem

    section.plea
        background: $dark-color
        padding: 35px 0
        p
            color: $light-color
            font-size: 1rem
            line-height: 1.2rem
            text-align: center
            a
                color: $light-color
                border-color: $light-color
                line-height: 1rem
</style>