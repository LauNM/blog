import { createRouter, createWebHistory } from 'vue-router'
import historyView from '../views/historyView.vue'
import themesView from "../views/themesView.vue";
import allArticlesView from "../views/allArticlesView.vue";
import articleView from "../views/articleView.vue";
import contactView from "../views/contactView.vue";
import notFound from "../views/notFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'history',
      component: historyView
    },
    {
      path: '/themes',
      name: 'themes',
      component: themesView
    },
    {
      path: '/articles',
      name: 'articles',
      component: allArticlesView
    },
    {
      path: '/article/:id',
      name: 'article',
      component: articleView
    },
    {
      path: '/contact',
      name: 'contact',
      component: contactView
    },
    { path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: notFound
    },
  ]
})

export default router
