import { createRouter, createWebHashHistory, RouterOptions, Router, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login/Login.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../views/login/Register.vue')
    },

    {
        path: "/",
        component: () => import('../views/Main.vue'),
        redirect: '/home',
        children: [

            {
                path: '/home',
                name: "home",
                component: () => import('../views/home/Home.vue')
            },
            {
                path: "/article",
                name: 'article',
                component: () => import('../views/article/Article.vue')
            },
            {
                path: "/new/:articleId",
                name: 'new',
                component: () => import('../views/article/New.vue')
            },
            {
                path: "/art",
                name: 'art',
                component: () => import('../views/art/Art.vue')
            },
            {
                path: '/about',
                name: 'about',
                component: () => import('../views/about/About.vue')
            }
        ]
    },

]

const options: RouterOptions = {
    history: createWebHashHistory(),
    routes
}

const router: Router = createRouter(options)

export default router