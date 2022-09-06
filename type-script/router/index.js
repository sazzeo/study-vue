import {createRouter, createWebHistory} from "vue-router"

const router = createRouter({
    scrollBehavior: () => {
        return {top: 0};
    },
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/a",
            component: () => import("/src/components/layout/GrandParents.vue"),
        },

    ]

})

export default router;