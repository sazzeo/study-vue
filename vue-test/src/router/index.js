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
            children: [{
                path: "b",
                component: () => import("/src/components/layout/Parents.vue"),
                children: [{
                    path: "c",
                    component: () => import("/src/components/layout/Child.vue"),  //라우터 3중첩
                }]
            }
            ]
        },

    ]

})

export default router;