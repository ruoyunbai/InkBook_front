<template>
     <n-layout has-sider>
          <n-layout-sider content-style="padding: 24px;
      backgroundColor:rgb(255,255,255)" 
      :width="240" bordered
       :collapsed-width="64"
               @collapse="collapsed = true"
                @expand="collapsed = false">
                <div style="height: 30px;"></div>
               <n-space justify="center">
                    <n-image 
                    preview-disabled
                    src="svg\主页svg\Icon-1.svg"></n-image>
                    <p class="title">
                         InkBook
                    </p>
               </n-space>
               <div style="height: 30px;"></div>
               <div class="user">
                    <n-space 
                    vertical>
                         <n-image width=56
                         preview-disabled
                         height="56"
                         style="margin:32px 0px 0px 0px"
                          src="svg\\主页svg\\Avatar.svg" />
                         <p class="name"  style="margin:10px 0px 0px 0px">Name</p>
                         <p class="state">state</p>
                         <div style="height:15px"></div>
                    </n-space>
               </div>
               <n-menu :collapsed="collapsed" 
               :collapsed-width="64"
               :collapsed-icon-size="40" 
               :options="menuOptions"
                    @update:value="handleUpdateValue" 
                    :default-expanded-keys="defaultExpandedKeys"
                    @update:expanded-keys="handleUpdateExpandedKeys" />
          </n-layout-sider>
          <n-layout content-style="padding: 24px;
               backgroundColor:rgb(245, 181, 68, 0.1)">
               <router-view></router-view>
          </n-layout>

          <!-- :naitive-sceoll="false"> -->

     </n-layout>
</template>

<script setup lang="ts">
import { menuList, menuLists } from "./menuList"
import Header from './Header/index.vue'
// import Menu from './Menu/index.vue'
import Content from './Content/index.vue'
import axios from 'axios';
import { useUserStore } from '../../store/User'
import { onMounted, reactive } from '@vue/runtime-core';
import { defineComponent, h, Component,ref } from 'vue'
import { NIcon, NImage, useMessage } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import { RouterLink } from 'vue-router'

const collapsed = ref(false)
const defaultExpandedKeys = [2]
const message = useMessage()
const User = useUserStore()
const menuOptions: MenuOption[] = reactive(menuLists[0])
let last = -1
// const menuOptions: MenuOption[] = reactive(menuList)
const handleUpdateValue = (key: string, item: MenuOption) => {

     menuOptions[0] =
          menuLists[7][0]
     menuOptions[1] =
          menuLists[7][1]
     menuOptions[2] =
          menuLists[5][2]
     let n = Number(key)
     switch (n) {
          case 1: menuOptions[0] =
               menuLists[1][0]
               break;
          case 2: menuOptions[1] =
               menuLists[2][1]
               break;
          case 3: menuOptions[1] =
               menuLists[3][1]
               break;
          case 4: menuOptions[1] =
               menuLists[4][1]
               break;
          case 5: menuOptions[1] =
               menuLists[5][1]
               break;
          case 6: menuOptions[1] =
               menuLists[6][1]
               break;
          case 7: menuOptions[2] =
               menuLists[7][2]
               break;

     }
     //      menuOptions[Number(key)-1]=
     // menuLists[Number(key)]
     // menuOptions[JSON.stringify(key)]=
     // menuLists[JSON.stringify(key)][JSON.stringify(key)]
     message.info('[onUpdate:value]: ' + JSON.stringify(key))
     message.info('[onUpdate:value]: ' + JSON.stringify(item))
}
const handleUpdateExpandedKeys = (keys: string[]) => {
     message.info('[onUpdate:expandedKeys]: ' + JSON.stringify(keys))
}
// axios.post('/935712/api/v1/user/info',{
//     user_id:3
//   })
//   .then(function (response) {
//     // 处理成功情况
//     console.log(response)
// })
/*const timeline = gsap.timeline();
onMounted(()=>{
     gsap.set("#layout",{
          background:"linear-gradient(217deg,rgba(153,215,214,0.8),rgba(220,194,113,0) 70%)"
     })
     gsap.to("#layout",{
          duration:1,
          background:"linear-gradient(217deg,rgba(255,0,0,1),#000 70%)"
     })
})*/
</script>

<style scoped>
.state{
     opacity: 0.4000000059604645;
color: #091B3D;
font-family: Sk-Modernist;
font-weight: regular;
font-size: 12px;
line-height: 16px;
letter-spacing: 0px;
text-align: center;

}
.name{
     color: #091B3D;
font-family: Sk-Modernist;
font-weight: bold;
font-size: 16px;
line-height: 26px;
letter-spacing: 0px;
text-align: center;

}
.title {
     color: #000000;
     font-family: Inria Sans;
     font-weight: bold;
     font-size: 24px;
     line-height: 34px;
     letter-spacing: 0px;
     position:relative;
     left:-5px;
     /* text-align: center; */
     margin: 0px 0px 0 0 ;
}

.user {
     /* opacity: 0.10000000149011612; */
     border-radius: 16px;
     background: rgb(245, 181, 68, 0.1);
     text-align: center;
}

/* .n-layout{
     color: var(--n-text-color);
box-sizing: border-box;
position: relative;
z-index: auto;
flex: auto;
overflow: hidden;
transition: box-shadow .3s var(--n-bezier),
background-color .3s var(--n-bezier),
     color .3s var(--n-bezier);
      /*-webkit-mask-image: url('index/Rectangle 4.png');
    -webkit-mask-repeat: no-repeat;
     -webkit-mask-size: 100%;*/
/* background-repeat:no-repeat; */

/* background-size:100%; */
/* background-size:cover; */
/* height:100%; */

/* } */
</style>