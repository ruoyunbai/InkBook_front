import {createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw} from 'vue-router'
import Index from '../views/layout/index.vue'
declare module 'vue-router'{
    interface RouteMeta{
        title:string,
        transition:string
    }
}
const routes:Array<RouteRecordRaw>=[
    {
        name:'Index',
        path:"/",
        component:Index,
        meta:{
            title:"首页",
            transition:"animate__bounceIn"
        }
    },
    {
        name:'PersonalInfo',
        path:"/PersonalInfo",
        component:()=>import('../views/PersonalInfo/index.vue'),
        meta:{
            title:"首页",
            transition:"animate__bounceIn"
        }
    },
    {
        name:'ChangeProfile',
        path:"/changeProfile",
        component:()=>import('../views/PersonalInfo/changeProfile.vue'),
        meta:{
            title:"首页",
            transition:"animate__bounceIn"
        }
    },
    {
        name:'ChangePassword',
        path:"/changePassword",
        component:()=>import('../views/PersonalInfo/changePassword.vue'),
        meta:{
            title:"首页",
            transition:"animate__bounceIn"
        }
    },
    {
        name:'SignUp',
        path:"/signUp",
        component:()=>import('../views/signUp/index.vue'),
        meta:{
            title:"首页",
            transition:"animate__bounceIn"
        }
    },
    {
        name:'LogIn',
        path:"/logIn",
        component:()=>import('../views/logIn/index.vue'),
        meta:{
            title:"首页",
            transition:"animate__bounceIn"
        }
    },

]
const router=createRouter({
    history:createWebHashHistory(),
    routes
})

export default  router
