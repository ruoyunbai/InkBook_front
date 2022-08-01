<template>
     <n-layout has-sider>
          <n-layout-sider content-style="padding: 24px;
      backgroundColor:rgb(255,255,255)" 
      :width="240"
       bordered
 
        >

                <n-h2 class="title">
                    InkBook
               </n-h2>

               <div class="user">
                    <n-space vertical>
                         <n-image width=100 src="svg\\主页svg\\Avatar.svg" />
                         <br>
                         卡片内容
                    </n-space>
               </div>
               <n-menu 
               :collapsed="collapsed"
          :collapsed-width="64"
          :collapsed-icon-size="20"
               :options="menuOptions" @update:value="handleUpdateValue"
                    :default-expanded-keys="defaultExpandedKeys" @update:expanded-keys="handleUpdateExpandedKeys" />
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
import { defineComponent, h, Component } from 'vue'
import { NIcon, NImage, useMessage } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import { RouterLink } from 'vue-router'
import {
     BookOutline as BookIcon,
     PersonOutline as PersonIcon,
     WineOutline as WineIcon,
     HomeOutline as HomeIcon
} from '@vicons/ionicons5'
function renderIcon(icon: Component) {
     return () => h(NIcon, null, { default: () => h(icon) })
}
const defaultExpandedKeys = [2]
const message = useMessage()
const User = useUserStore()
const menuOptions: MenuOption[] = reactive(menuLists[0])
let last=-1
// const menuOptions: MenuOption[] = reactive(menuList)
const handleUpdateValue = (key: string, item: MenuOption) => {
     
     menuOptions[0] =
               menuLists[7][0]
     menuOptions[1] =
               menuLists[7][1]
     menuOptions[2] =
     menuLists[5][2]
     let n=Number(key)
     switch (n) {
          case 1: menuOptions[0] =
               menuLists[1][0]
               break;
          case 2: menuOptions[1] =
               menuLists[2][1]
               break;
          case 3: menuOptions[1]=
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
.title {
     color: #000000;
     font-family: Inria Sans;
     font-weight: bold;
     font-size: 24px;
     line-height: 34px;
     letter-spacing: 0px;
     /* text-align: center; */
     margin: 44px
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