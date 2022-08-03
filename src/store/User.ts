import { defineStore } from 'pinia'

import { Names } from './store-namespace'

 
export const useUserStore = defineStore( Names.User,{
    // id:"user",
    state:()=>{
        return {
            Login:false,
            token:"",
            Id:0,
            avatar:"http://43.138.77.133:81/media/avatars/default.jpg",
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