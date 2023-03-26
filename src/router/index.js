import { createRouter, createWebHistory } from 'vue-router'
import history from '../views/history.vue'
import themes from "../views/themes.vue";
import AllPosts from "../views/allPosts.vue";
import post from "../views/post.vue";
import contact from "../views/contact.vue";
import notFound from "../views/notFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'history',
      component: history
    },
    {
      path: '/themes',
      name: 'themes',
      component: themes
    },
    {
      path: '/posts',
      name: 'posts',
      component: AllPosts
    },
    {
      path: '/post/:id',
      name: 'post',
      component: post
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    { path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: notFound
    },
  ]
})

export default router
