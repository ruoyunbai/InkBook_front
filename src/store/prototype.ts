import { defineStore } from 'pinia'

import { Names } from './store-namespace'


export const usePrototypeStore = defineStore("Prototype", {
    state: () => {
        return {
            ppage_data: "string",
            ppage_id: 0,
            ppage_name: "string",
            ppage_url: "string",
            
            proj_id: 0,
            status: 0,
            
            operation: "",
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