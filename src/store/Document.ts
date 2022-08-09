import { defineStore } from 'pinia'

import { Names } from './store-namespace'


export const useDocumentStore = defineStore("Document", {
    state: () => {
        return {
            content: "string",
            count: 0,
            
            document_id: 0,
            document_name: "string",
            document_url: "string",
            
            dir_id :0,
            is_dir: true,

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