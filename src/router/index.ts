import {createRouter, createWebHistory} from 'vue-router'

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/pages/HomePage.vue')

        },
        {
            path: '/friends',
            name: 'friends',
            component: () => import('@/pages/FriendsPage.vue')
        },
        {
            path: '/airdrops',
            name: 'airdrops',
            component: () => import('@/pages/FriendsPage.vue')
        },
        {
            path: '/shop',
            name: 'shop',
            component: () => import('@/pages/FriendsPage.vue')
        },
        {
            path: '/loading',
            name: 'loading',
            component: () => import('@/pages/LoadingPage.vue')
        },
        {
            path: '/mining',
            name: 'mining',
            component: () => import('@/pages/MinigersPage.vue')
        },
        {
            path: '/upgrade',
            name: 'upgrade',
            component: () => import('@/pages/SpaceshipUpgradeScreen.vue')
        },
        {
            path: '/leveling',
            name: 'leveling',
            component: () => import('@/pages/LevelingPage.vue')
        },
        {
            path: '/week-calendar',
            name: 'week-calendar',
            component: () => import('@/pages/WeeklySuprisesPage.vue')
        }
    ]
})
