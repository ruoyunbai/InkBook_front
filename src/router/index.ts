import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'
import Index from '../views/layout/index.vue'
declare module 'vue-router' {
    interface RouteMeta {
        title: string,
        transition: string
    }
}
const routes: Array<RouteRecordRaw> = [
    {
        name:'share',
        path:"/share",
        component:()=>import('../views/prototype/share.vue'),
        meta:{
            title:"新建团队",
            transition:"animate__bounceIn"
        }
    },
    {
        name: 'Index',
        path: "/",
        component: Index,
        meta: {
            title: "首页",
            transition: "animate__bounceIn"
        },
        children: [
            {
                name: 'project',
                path: "/project",
                component: () => import('../views/project/index.vue'),
                meta: {
                    title: "首页",
                    transition: "animate__bounceIn"
                },
                // children:[

                // ]
            },
            {
                name: 'group',
                path: "/group",
                component: () => import('../views/group/index.vue'),
                meta: {
                    title: "首页",
                    transition: "animate__bounceIn"
                },
            },
            {
                name: 'prototype',
                path: "prototype",
                component: () => import('../views/prototype/index.vue'),
                meta: {
                    title: "首页",
                    transition: "animate__bounceIn"
                },
            },
            {
                name: 'dnd',
                path: "dnd",
                component: () => import('../views/prototype/vue3dnd.vue'),
                meta: {
                    title: "首页",
                    transition: "animate__bounceIn"
                },
            },
            {
                name: 'test',
                path: "test1",
                component: () => import('../test.vue'),
                meta: {
                    title: "首页",
                    transition: "animate__bounceIn"
                },
            },
            {
                name: 'graph',
                path: "graph",
                component: () => import('../views/graph/index.vue'),
                meta: {
                    title: "首页",
                    transition: "animate__bounceIn"
                },
            },
            {
                name: 'document',
                path: "document",
                component: () => import('../views/document/index.vue'),
                meta: {
                    title: "首页",
                    transition: "animate__bounceIn"
                },
                children: [{
                    name: 'docContent',
                    path: "",
                    component: () => import('../views/docContent/index.vue'),
                    meta: {
                        title: "首页",
                        transition: "animate__bounceIn"
                    },

                },{
                    name: 'docContent0',
                    path: "content",
                    component: () => import('../views/docContent/index0.vue'),
                    meta: {
                        title: "首页",
                        transition: "animate__bounceIn"
                    },
                }
                ]
            },
            {
                name: 'trash',
                path: "/trash",
                component: () => import('../views/trash/index.vue'),
                meta: {
                    title: "首页",
                    transition: "animate__bounceIn"
                },
            },
            {
                name: 'docCenter',
                path: "/docCenter",
                component: () => import('../views/docCenter/index.vue'),
                meta: {
                    title: "首页",
                    transition: "animate__bounceIn"
                },
                children: [{
                    name: 'docCContent',
                    path: "",
                    component: () => import('../views/docContent/index.vue'),
                    meta: {
                        title: "首页",
                        transition: "animate__bounceIn"
                    },
                    
                },{
                    name: 'docCContent0',
                    path: "content",
                    component: () => import('../views/docContent/index0.vue'),
                    meta: {
                        title: "首页",
                        transition: "animate__bounceIn"
                    },
                }
                ]
            },
            {
                name: 'projectDetail',
                path: "/projectDetail/:proj_id",
                component: () => import('../views/projectDetail/projectDetail.vue'),
                meta: {
                    title: "项目详情",
                    transition: "animate__bounceIn"
                },
            },
            {
                name: 'PersonalInfo',
                path: "/PersonalInfo",
                component: () => import('../views/PersonalInfo/index.vue'),
                meta: {
                    title: "首页",
                    transition: "animate__bounceIn"
                }
            },
            {
                name:'NewGroup',
                path:"/NewGroup",
                component:()=>import('../views/Group/new.vue'),
                meta:{
                    title:"新建团队",
                    transition:"animate__bounceIn"
                }
            },
           
            {
                name: 'ChangeProfile',
                path: "/changeProfile",
                component: () => import('../views/PersonalInfo/changeProfile.vue'),
                meta: {
                    title: "首页",
                    transition: "animate__bounceIn"
                }
            },
        ]
    },
    {
        name:'homePage',
        path:"/homePage",
        component:()=>import('../views/HomePage/index.vue'),
        meta:{
            title:"首页",
            transition:"animate__bounceIn"
        }
    },


    {
        name: 'ChangePassword',
        path: "/changePassword",
        component: () => import('../views/PersonalInfo/changePassword.vue'),
        meta: {
            title: "首页",
            transition: "animate__bounceIn"
        }
    },
    {
        name: 'SignUp',
        path: "/signUp",
        component: () => import('../views/signUp/index.vue'),
        meta: {
            title: "首页",
            transition: "animate__bounceIn"
        }
    },
    {
        name: 'LogIn',
        path: "/logIn",
        component: () => import('../views/logIn/index.vue'),
        meta: {
            title: "首页",
            transition: "animate__bounceIn"
        }
    },


]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
