var Vue = require('vue')


import Vue from 'vue'
import VueRouter from 'vue-router'



// pages
var index = require('./views/index.vue')
var guides = require('./views/guides.vue')
var result = require('./views/result.vue')

// components

Vue.use(VueRouter)

var router = new VueRouter({
   mode: 'history',
   routes: [
   { path: '/', component: index },
   { path: '/guides', component: guides },
   { path: '/result', component: result }
   ]
})

new Vue({
   el: '#app',
   router: router
})

