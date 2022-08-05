<template>
     <n-layout has-sider>
          <n-layout-sider content-style="padding: 24px;
      backgroundColor:rgb(255,255,255)" 
      :width="240" bordered
       :collapsed-width="0"
        show-trigger="bar"
               @collapse="collapsed = true"
                @expand="collapsed = false">
                <div style="height: 30px;"></div>
               <n-space justify="center">
                    <n-image 
                    height="30"
                    preview-disabled
                    @mouseenter="reloadenter()"
                    :src=cubeSrc></n-image>
                    <p class="title">
                         InkBook
                    </p>
               </n-space>
               <div style="height: 30px;"></div>
               <div class="user">
                    <n-space 
                    vertical>
                        <transition enter-active-class="animate__animated animate__fadeIn">
                         <n-image width=56
                         preview-disabled
                         height="56"
                         style="margin:32px 0px 0px 0px"
                          @click="()=>{router.push('/personalInfo')}"
                          src="svg\\主页svg\\Avatar.svg" />
                          
                          </transition>
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
          
          <div style="height:100px"></div>
          <n-space justify="center"
          >
          <n-image
     height="65"
          preview-disabled
          src="svg\主页svg\icon-1.5s-45px.gif"></n-image>
          <!-- <n-image
          preview-disabled
          src="svg\主页svg\Upgrade.svg"></n-image> -->
          </n-space>
          </n-layout-sider>
          <n-layout content-style="padding: 10px;
               backgroundColor:rgb(245, 181, 68, 0.1)">
              <transition enter-active-class="animate__animated animate__fadeIn">
               <router-view></router-view>
                </transition>
                <!-- <router-view v-slot="{ Component }">
  <transition>
    <component :is="Component" />
  </transition>
</router-view> -->
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
import { defineComponent, h, Component,ref,onBeforeMount,onBeforeUnmount } from 'vue'
import { NIcon, NImage, useMessage } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import { RouterLink } from 'vue-router'
import { useRouter } from 'vue-router'
onBeforeMount(()=>{
    let l=localStorage.getItem("Login")
    if(l!="true"){
    router.push('/logIn')
  }
})
onBeforeUnmount(()=>{
    // User.Login=true
})
const router=useRouter()
const cubeSrc=ref("svg\\主页svg\\icon-1.2s-47px.gif")
const collapsed = ref(false)
const defaultExpandedKeys = [2]
const message = useMessage()
const User = useUserStore()
const menuOptions: MenuOption[]= reactive([
      {
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        path: '/group',
                        // params: {
                        //     lang: 'zh-CN'
                        // }
                    }
                },
                '管理团队'
            ),
        key: 1,
        icon: () => h(
            NImage,
            {
               previewDisabled:true,  src: 'svg\\主页svg\\Group-1.svg'
            }
        )
    },
{
    label: '执行项目',
        key: 2,
            icon: () => h(
                NImage,
                {
                    previewDisabled:true,  src: 'svg\\主页svg\\Group-2.svg'
                }
            ),
                children: [
                    {
                        label: () =>
                            h(
                                RouterLink,
                                {
                                    to: {
                                        path: '/project',
                                        // params: {
                                        //     lang: 'zh-CN'
                                        // }
                                    }
                                },
                                '管理项目'
                            ),
                        key: 3,
                        icon: () => h(
                            NImage,
                            {
                                previewDisabled:true,  src: 'svg\\主页svg\\Group-3.svg'
                            }
                        )

                    },
                    {
                        label: () =>
                            h(
                                RouterLink,
                                {
                                    to: {
                                        path: '/prototype',
                                        // params: {
                                        //     lang: 'zh-CN'
                                        // }
                                    }
                                },
                                '设计原型'
                            ),
                        key: 4,
                        icon: () => h(
                            NImage,
                            {
                                 previewDisabled:true,  src: 'svg\\主页svg\\Group-4.svg'
                            }
                        )

                    },
                    {
                        label: () =>
                            h(
                                RouterLink,
                                {
                                    to: {
                                        path: '/graph',
                                        // params: {
                                        //     lang: 'zh-CN'
                                        // }
                                    }
                                },
                                '绘制图'
                            ),
                        key: 5,
                        icon: () => h(
                            NImage,
                            {
                                previewDisabled:true,  src: 'svg\\主页svg\\Group-5.svg'
                            }
                        )

                    },

                    {
                        label: () => h(
                            RouterLink,
                            {
                                to: {
                                    path: '/document',
                                    // params: {
                                    //     lang: 'zh-CN'
                                    // }
                                }
                            },
                            "多人文档",
                        ),
                        key: 6,
                        icon: () => h(
                            NImage,
                            {
                                previewDisabled:true,  src: 'svg\\主页svg\\Group-6.svg'
                            }
                        )
                    }
                ]
},
{
    label: () => h(
        RouterLink,
        {
            to: {
                path: '/trash',
                // params: {
                //     lang: 'zh-CN'
                // }
            }
        },
        "回收站",
    ),
        key: 7,
            icon: () => h(
                NImage,
                {
                    previewDisabled:true,  src: 'svg\\主页svg\\Group-7.svg'
                }
            )
}
])
let last = -1
let cnt0=0
const reloadenter=()=>{
     if(cnt0==0){ cubeSrc.value="svg\\主页svg\\icon-1.3s-47px2.gif"
     cnt0=1}else{
           cubeSrc.value="svg\\主页svg\\icon-1.3s-47px1.gif"
     cnt0=0
     }
    
}
const reloadout=()=>{
     cubeSrc.value="svg\\主页svg\\icon-1.3s-47px1.gif"
}
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
    //  message.info('[onUpdate:value]: ' + JSON.stringify(key))
    //  message.info('[onUpdate:value]: ' + JSON.stringify(item))
}
const handleUpdateExpandedKeys = (keys: string[]) => {
    //  message.info('[onUpdate:expandedKeys]: ' + JSON.stringify(keys))
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