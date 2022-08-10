import { defineStore } from 'pinia'

import { Names } from './store-namespace'

 
export const useProjectStore = defineStore("Project",{
    state:()=>{
        return {
            group_id: 0,
            proj_id: -1,
            proj_info: "string",
            proj_name: "string",
            status: 0,
            user_id: 0,
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