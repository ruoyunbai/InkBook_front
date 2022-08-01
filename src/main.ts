import { createApp,toRaw } from 'vue'
import App from './App.vue'
import naive from 'naive-ui'
import router from './router/index'
import {createPinia,PiniaPluginContext} from 'pinia'
import axios from 'axios'

import  'animate.css';
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
    // console.log(data)
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

axios.defaults.baseURL = 'http://43.138.77.133:8889/api/v1';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axios.defaults.transformRequest = [function (data) {
  let ret = ''
  for (let it in data) {
    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
  }
  return ret
}]

// store.use(piniaPlugin)
// store.use(piniaPluginPersist)
createApp(App).use(naive).use(store).use(ElementPlus).use(VMdEditor).use(router).mount('#app')
