import { createRouter, createWebHistory } from 'vue-router'
import history from '../pages/history.vue'
import theme from "../views/theme.vue";
import allPosts from "../views/allPosts.vue";
import post from "../views/post.vue";
import contact from "../pages/contact.vue";
import notFound from "../pages/notFound.vue";
import themes from "@/pages/themes.vue";

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
      component: allPosts
    },
    {
      path: '/posts/:id',
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
