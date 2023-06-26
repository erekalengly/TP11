import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: '',
            component: () => import('../views/HomePage.vue')
        },
        {
            path: '/adminpage',
            name: '',
            component: () => import('../views/AdminPage.vue')
        }
    ]
})

export default router