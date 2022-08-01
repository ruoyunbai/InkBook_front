import { defineStore } from 'pinia'

import { Names } from './store-namespace'

 
export const useBlockStore = defineStore( Names.Block,{
    // id:"user",
    state:()=>{
        return {
            current:1,
            Login:false,
            block:"source",
            section:0,
            search:false,
            searchText:"",
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