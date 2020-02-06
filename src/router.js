import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/book-store'
    },
    {
      path: '/home',
      component: resolve => require(['@/views/home/index.vue'], resolve),
      children: [
        {
          path: '/article',
          component: resolve => require(['@/views/home/Article.vue'], resolve),
          meta: { key: 1 }
        },
        {
          path: '/music',
          component: resolve => require(['@/views/home/Music.vue'], resolve),
          meta: { key: 2 }
        },
        {
          path: '/picture',
          component: resolve => require(['@/views/home/Picture.vue'], resolve),
          meta: { key: 3 }
        },
        {
          path: '/movie',
          component: resolve => require(['@/views/home/Movie.vue'], resolve),
          meta: { key: 4 }
        },
      ]
    },
    {
      path: '/ebook',
      component: resolve => require(['@/views/ebook/index.vue'], resolve),
      children: [{
        path: ':fileName',
        component: resolve => require(['@/components/ebook/EbookReader.vue'], resolve)
      }]
    },
    {
      path: '/book-store',
      component: resolve => require(['@/views/store/index.vue'], resolve),
      redirect: '/book-store/shelf',
      children: [
        {
          path: '/book-store/shelf',
          component: resolve => require(['@/views/store/bookShelf.vue'], resolve),
          meta: { key: 1 }
        },
        {
          path: '/book-store/category',
          component: resolve => require(['@/views/store/bookCategory.vue'], resolve),
          meta: { key: 2 }
        },
        {
          path: '/book-store/home',
          component: resolve => require(['@/views/store/bookHome.vue'], resolve),
          meta: { key: 3 }
        },
        {
          path: '/book-store/list',
          component: resolve => require(['@/views/store/bookList.vue'], resolve),
          meta: { key: 4 }
        },
        {
          path: '/book-store/detail',
          component: resolve => require(['@/views/store/bookDetail.vue'], resolve),
          meta: { key: 5 }
        },
        {
          path: '/book-store/book-speaking',
          component: resolve => require(['@/views/store/bookSpeaking.vue'], resolve),
          meta: { key: 6 }
        }
      ]
    }
  ]
})
