import { defineStore } from 'pinia'

import { Names } from './store-namespace'

 
export const useUserStore = defineStore( Names.User,{
    // id:"user",
    state:()=>{
        return {  
            Name:"",
            Login:false,
            token:"",
            Id:0,
            avatar:"svg\\主页svg\\Avatar.svg",
            level:1,
            isadmin:false
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