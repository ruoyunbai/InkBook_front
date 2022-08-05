import { defineStore } from 'pinia'

import { Names } from './store-namespace'

 
export const useProjectStore = defineStore("Detail",{
    state:()=>{
        return {
            "proj_id": 0,
            "prototype_name": [],
            "uml_name": [],
            "document_name": [],
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