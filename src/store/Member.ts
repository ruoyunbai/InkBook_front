import { defineStore } from 'pinia'

import { Names } from './store-namespace'

 
export const useMemberStore = defineStore("Member",{
    state:()=>{
        return {
            email: "string",
            real_name: "string",
            status: "string",
            user_id: 0,
            username: "string",
            operation:"",
        }
    },
    // getters:{
 
    // },
    // //可以操作异步 和 同步提交state
    // actions:{

    // },

    // persist: {
    //     enabled: true, // 启用

    //     // strategies: [
    //     //   // storage 可选localStorage或sessionStorage
    //     //   // paths 给指定数据持久化
    //     //   { 
    //     // key: 'User', 
    //     //   storage: sessionStorage, 
    //     //   paths: ['current', 'Login'] 
    //     // }
    //     // ]
    //   },
 
})