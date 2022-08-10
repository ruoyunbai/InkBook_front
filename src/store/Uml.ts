import { defineStore } from 'pinia'

import { Names } from './store-namespace'


export const useUmlStore = defineStore("UML", {
    state: () => {
        return {
            proj_id: 0,
            status: 0,
            uml_id: 0,
            uml_name: "string",
            uml_url: "string",

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