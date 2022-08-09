import { createApp,toRaw } from 'vue'
import App from './App.vue'
import naive from 'naive-ui'
import router from './router/index'
import {createPinia,PiniaPluginContext} from 'pinia'
import axios from 'axios'

// @ts-ignore
import VueDragResize from 'vue-drag-resize'


import animated from 'animate.css';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'
// import pinia from './store'
// import { createPersistedState } from 'pinia-persistedstate-plugin'
import VMdEditor from '@kangc/v-md-editor';

import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
import hljs from 'highlight.js';
import createEmojiPlugin from '@kangc/v-md-editor/lib/plugins/emoji/index';
import 'vue-fabric/dist/vue-fabric.min.css';
import { Fabric } from 'vue-fabric';
// import ElementUI from 'element-ui';
// import { ElementTiptapPlugin } from 'element-tiptap';
// import 'element-ui/lib/theme-chalk/index.css';
// import 'element-tiptap/lib/index.css';
VMdEditor.use(githubTheme, {
  Hljs: hljs,
});
VMdEditor.use(createEmojiPlugin());


const store=createPinia()

type Options={
  key?:string
}
const __piniaKey__:string='sebbs'
const setStorage=(key:string,value:any)=>{
  localStorage.setItem(key,JSON.stringify(value))
}
const getStorage=(key:string)=>{
  return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as string):{}
}
const piniaPlugin=(options:Options)=>{
  return (context:PiniaPluginContext)=>{

  //   console.log(context)
    const {store}=context
    const data=getStorage(`${options?.key ??__piniaKey__}-${store.$id}`)
    console.log("Pinia data:")
    console.log(data)
    store.$subscribe(()=>{
    console.log("changeUserState")
    setStorage(`${options?.key ??__piniaKey__}-${store.$id}`,toRaw(store.$state))
     })
    return{
      ...data
    }
}
}
store.use(piniaPlugin({
  key:"sebbs"
}))

axios.defaults.baseURL = 'https://inkbook.mina.moe/api/v1';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.post['Content-Type']="application/json"
// axios.defaults.transformRequest = [function (data) {
//   let ret = ''
//   for (let it in data) {
//     ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
//   }
//   return ret
// }]
axios.defaults.transformRequest=[
  function (data, headers) {
    let data1 = JSON.stringify(data);
    console.log(data1);
    return data1;
  },
]

// store.use(piniaPlugin)
// store.use(piniaPluginPersist)
createApp(App).use(naive).use(Fabric).use(store).use(ElementPlus)
.use(VueDragResize).use(router).mount('#app')
