<template>
    <n-drawer :show-mask="false" :on-after-leave="afterDClocsed" style="position: absolute;width: 394px;height: 983px;right: 0px;top: 41px;background: #FFFFFF;box-shadow: 0px 0px 32px rgba(10, 32, 66, 0.08);
border-radius: 30px 0px 0px 0px;" v-model:show="Dactive" :width="502" placement="right">
        <n-drawer-content :native-scrollbar="false" title="消息通知">
            <template #header>
                <n-image preview-disabled @click="Dactive = false" src="svg\主页svg\close.svg"></n-image>
                <div style="height:25px"></div>
                <n-image preview-disabled src="svg\主页svg\notification.svg"></n-image>

                <p class="notificationtitle">消息通知</p>
            </template>
             <transition-group
                name="msgs"
                tag="p"
                enter-active-class="animate__animated animate__backInLeft"
                appear-active-class="animate__animated animate__backInLeft"
                style="position:relative;"
            >
                <user-message v-for="msg in msgs" :key="msg.message_id" :M="msg"></user-message>       
                    <div style="height:600px"></div>
             </transition-group>
        </n-drawer-content>
    </n-drawer>
    <n-layout has-sider :native-scrollbar="false">
        <n-layout-sider content-style="padding: 24px;
      backgroundColor:rgb(255,255,255)" :width="240" bordered :collapsed-width="0" show-trigger="bar"
            @collapse="collapsed = true" @expand="collapsed = false">
            <div class="grouptitle">我的团队</div>
            <n-select class="choose" :loading="loading" v-model:value="groupValue" @update:value="handleUpdateGroup"
                :options="groupOptions" />
            <div style="height: 30px;"></div>
            <n-space justify="center">
                <n-image height="30" preview-disabled @mouseenter="reloadenter()" :src=cubeSrc></n-image>
                <p class="title">
                    InkBook
                </p>
            </n-space>

            <div style="height: 30px;"></div>
            <div class="user">
                <n-space vertical>
                    <div style="height:75px">
                      <p style="position:absolute; margin-top: 17px; margin-left: 113px; z-index: 5;"
                         @click="openDrawer"><n-image :src=lingSrc preview-disabled style=" height: 30px; width: 25px"/></p>
                        <transition @mouseenter="MouseOnUser" @mouseleave="MouseLeaveUser"
                            apear-active-class="animate__animated animate__swing"
                            enter-active-class="animate__animated animate__swing">

                            <n-image width=56 preview-disabled height="56" style="margin:32px 0px 0px 0px"
                                @click="() => { router.push('/personalInfo') }" :src=avatar />

                        </transition>
                    </div>
                    <p class="name" style="margin:10px 0px 0px 0px">{{ User.Name }}</p>
                    <p class="state">state</p>
                    <div style="height:15px"></div>

                </n-space>
            </div>

            <n-menu :collapsed="collapsed" :collapsed-width="64" :collapsed-icon-size="40" :options="menuOptions"
                :value="chosePage" @update:value="handleUpdateValue" :default-expanded-keys="defaultExpandedKeys"
                @update:expanded-keys="handleUpdateExpandedKeys" />

            <div style="height:100px"></div>
            <n-space justify="center">
                <n-image height="65" preview-disabled src="svg\主页svg\icon-1.5s-45px.gif"></n-image>
                <!-- <n-image
          preview-disabled
          src="svg\主页svg\Upgrade.svg"></n-image> -->
            </n-space>
        </n-layout-sider>
        <n-layout content-style="padding: 10px;
               backgroundColor:rgb(245, 181, 68, 0.1);
               height:2000px" :native-scrollbar="false">
            <!-- <router-view v-slot="{ Component }">
                <transition enter-active-class="animate__animated animate__fadeIn">
                    <component :is="Component" />
                </transition>
            </router-view> -->
            <!-- <transition>
                <router-view enter-active-class="animate__animated animate__fadeIn"></router-view>
            </transition> -->
            <router-view v-slot="{ Component }">
                <transition enter-active-class="animate__animated animate__bounceInLeft">
                    <component :is="Component" />
                </transition>
            </router-view>
        </n-layout>

        <!-- :naitive-sceoll="false"> -->

    </n-layout>
</template>
<script setup lang="ts">

import { useGroupStore } from '../../store/Group'
import { menuList, menuLists } from "./menuList"
import Header from './Header/index.vue'
// import Menu from './Menu/index.vue'
import Content from './Content/index.vue'
import axios from 'axios';
import { useUserStore } from '../../store/User'
import { onMounted, reactive } from '@vue/runtime-core';
import { defineComponent, h, ref, onBeforeMount, onBeforeUnmount } from 'vue'
import { NIcon, NImage, SelectOption, useMessage } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import { RouterLink } from 'vue-router'
import { useRouter } from 'vue-router'
import { SelectProps } from 'element-plus/es/components/select-v2/src/defaults';
import { SelectMixedOption } from 'naive-ui/lib/select/src/interface';
import userMessage from '../../components/message/index.vue'
import { useMsgStore } from "../../store/Msg";
import { ElLoadingService } from 'element-plus';
const Msg=useMsgStore()
const lingSrc=ref("svg\\主页svg\\notification.svg")
Msg.$subscribe(()=>{
    if(Msg.opt=="change"){
        Msg.opt=""
        getMsgs()
    }
})
onBeforeMount(() => {
    let l = localStorage.getItem("Login")
    if (l != "true") {
        router.push('/logIn')
    }
})
onBeforeUnmount(() => {
    // User.Login=true
})
const msgs:any=reactive([])
const Dactive = ref(false)
const Group = useGroupStore()
const loading = ref(true)
const router = useRouter()
const isOnUser = ref(false)
const cubeSrc = ref("svg\\主页svg\\icon-1.2s-47px.gif")
const collapsed = ref(false)
const defaultExpandedKeys = [2]
const message = useMessage()
const User = useUserStore()
const avatar = ref("svg\\主页svg\\Avatar.svg")
const menuOptions: MenuOption[] = reactive([
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
                previewDisabled: true, src: 'svg\\主页svg\\Group-1.svg'
            }
        )
    },
    {
        label: '执行项目',
        key: 2,
        icon: () => h(
            NImage,
            {
                previewDisabled: true, src: 'svg\\主页svg\\Group-2.svg'
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
                        previewDisabled: true, src: 'svg\\主页svg\\Group-3.svg'
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
                        previewDisabled: true, src: 'svg\\主页svg\\Group-4.svg'
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
                        previewDisabled: true, src: 'svg\\主页svg\\Group-5.svg'
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
                key: "6",
                icon: () => h(
                    NImage,
                    {
                        previewDisabled: true, src: 'svg\\主页svg\\Group-6.svg'
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
                    path: '/docCenter',
                    // params: {
                    //     lang: 'zh-CN'
                    // }
                }
            },
            "文档中心",
        ),
        key: 8,
        icon: () => h(
            NImage,
            {
                previewDisabled: true, src: 'svg\\主页svg\\Group-8.svg'
            }
        )
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
                previewDisabled: true, src: 'svg\\主页svg\\Group-7.svg'
            }
        )
    }
])
let last = -1
let cnt0 = 0
const group = ref(null)
const groupValue = ref("")

const groupOptions: SelectMixedOption[] = reactive([])
const MouseOnUser = () => {
    isOnUser.value = true;
    avatar.value = "svg\\主页svg\\Home.svg"
}
const openDrawer = () => {
    axios({
        url: axios.defaults.baseURL + "/user/read_all_messages",
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Authorization": User.token
        },
        data: {

        },
        transformRequest: [
            function (data, headers) {
                let data1 = JSON.stringify(data);
                return data1;
            },
        ],
    }).then(function (response) {
        // 处理成功情况
        console.log("response", response)
        console.log(response.data);

        if (response.data?.success) {
            let d = response.data?.groups
            for (let i = 0; i < response.data?.count; i++) {
                groupOptions.push({
                    label: d[i].group_name,
                    key: d[i].group_id,
                    value: d[i].group_id,
                    type: null

                })

                if (Group.id != -1 && Group.id != null) {

                    if (Group.id == d[i].group_id) {
                        groupValue.value = d[i].group_name
                        console.log("yyyyy")
                    }
                }

            }
            loading.value = false
            if (Group.id == -1 || Group.id == null) {
                groupValue.value = d[0].group_name
                Group.id = d[0].group_id
            }
        }
    })
    lingSrc.value="svg\\主页svg\\notification.svg"
    Dactive.value = true
    let x: HTMLElement = <HTMLElement>document.body.parentNode;
    if (x != null) {
        x.style.overflowY = "hidden";
    }
}
const afterDClocsed = () => {
    let x: HTMLElement = <HTMLElement>document.body.parentNode;
    if (x != null) {
        x.style.overflowY = "auto";
    }
}
const MouseLeaveUser = () => {
    isOnUser.value = false;
    avatar.value = "svg\\主页svg\\Avatar.svg"
}
const handleUpdateGroup = (value: string, option: SelectOption) => {
    Group.id = Number(option.key)
    // console.log("op")
    if (option.label != null)
        groupValue.value = String(option.label)
    console.log("value", option)

}
onBeforeMount(() => {

    axios({
        url: axios.defaults.baseURL + "/group/get_groups",
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Authorization": User.token
        },
        data: {

        },
        transformRequest: [
            function (data, headers) {
                let data1 = JSON.stringify(data);
                console.log(data1);
                return data1;
            },
        ],
    }).then(function (response) {
        // 处理成功情况
        console.log("response", response)
        console.log(response.data);

        if (response.data?.success) {
            let d = response.data?.groups
            for (let i = 0; i < response.data?.count; i++) {
                groupOptions.push({
                    label: d[i].group_name,
                    key: d[i].group_id,
                    value: d[i].group_id,
                    type: null

                })

                if (Group.id != -1 && Group.id != null) {

                    if (Group.id == d[i].group_id) {
                        groupValue.value = d[i].group_name
                        console.log("yyyyy")
                    }
                }

            }
            loading.value = false
            if (Group.id == -1 || Group.id == null) {
                groupValue.value = d[0].group_name
                Group.id = d[0].group_id
            }
        }
    })
  getMsgs()
})
const getMsgs=()=>{
       axios({
        url: axios.defaults.baseURL + "/user/get_messages",
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Authorization": User.token
        },
        data: {

        },
        transformRequest: [
            function (data, headers) {
                let data1 = JSON.stringify(data);
                return data1;
            },
        ],
    }).then(function (response) {
        // 处理成功情况
        console.log("responseMsg", response)
        console.log(response.data);
        while(msgs.length!=0)msgs.pop()
        if (response.data?.success) {
            if(response.data?.count!=0){
               
            }
            let d = response.data?.messages
            for (let i = 0; i < response.data?.count; i++) {
                msgs.push(d[i])
                if(d[i].status==0)lingSrc.value="svg\\主页svg\\notificationRed.svg"
            }


          
        }
    })
}
const reloadenter = () => {
    if (cnt0 == 0) {
        cubeSrc.value = "svg\\主页svg\\icon-1.3s-47px2.gif"
        cnt0 = 1
    } else {
        cubeSrc.value = "svg\\主页svg\\icon-1.3s-47px1.gif"
        cnt0 = 0
    }

}
const reloadout = () => {
    cubeSrc.value = "svg\\主页svg\\icon-1.3s-47px1.gif"
}
// const menuOptions: MenuOption[] = reactive(menuList)
const chosePage = ref("")
onMounted(() => {

    let p = localStorage.getItem("page")
    if (p != null && p != undefined) {
        chosePage.value = p
        handleUpdateValue(p, menuList[0])
    }


})
const handleUpdateValue = (key: string, item: MenuOption) => {
    console.log("key", key, "value", Number(chosePage.value))
    chosePage.value = key
    localStorage.setItem("page", key)
    menuOptions[0] =
        menuLists[7][0]
    menuOptions[1] =
        menuLists[7][1]
    menuOptions[2] =
        menuLists[5][2]
    menuOptions[3] =
        menuLists[5][3]
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
        case 7: menuOptions[3] =
            menuLists[8][3]
            break;
        case 8:
            menuOptions[2] =
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

<style scoped >
.msgs{
    transition: transform 1s;
}
.notificationtitle {
    position: relative;

    left: 25px;
    top: -22px;

    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;

    color: #242424;
}

.state {
    opacity: 0.4000000059604645;
    color: #091B3D;
    font-family: Sk-Modernist;
    font-weight: regular;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: center;

}

.name {
    color: #091B3D;
    font-family: Sk-Modernist;
    font-weight: bold;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0px;
    text-align: center;

}

.grouptitle {
    color: #000000;
    font-family: Inria Sans;
    font-weight: bold;
    font-size: 18px;
    line-height: 34px;
    letter-spacing: 0px;
    position: relative;
    left: 5px;
    /* text-align: center; */
    margin: 0px 0px 0 0;
}

.title {
    color: #000000;
    font-family: Inria Sans;
    font-weight: bold;
    font-size: 24px;
    line-height: 34px;
    letter-spacing: 0px;
    position: relative;
    left: -5px;
    /* text-align: center; */
    margin: 0px 0px 0 0;
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
<style lang="less" scoped>
.choose {
    border-width: 0px;

    :deep(.n-base-selection__border) {
        border-width: 0px;

    }

    :deep(.n-base-selection--selected) {
        border-width: 0px;
    }



    :deep(.n-base-selection-input__content) {
        font-family: 'Inria Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 34px;
        /* identical to box height, or 142% */
        color: rgba(9, 27, 61, 0.5);
    }
}

.frame1{
  width: 345px;
  height: 109px;
  border-radius: 26px;
  background-color: #FFF8E8;
  margin-bottom: 15px;
  padding-left: 30px;
  padding-top: 5px;
  position: relative;
}

.frame2{
  width: 345px;
  height: 77px;
  border-radius: 26px;
  background-color: #FFF8E8;
  margin-bottom: 15px;
  padding-left: 30px;
  padding-top: 5px;
  position: relative;
}

.noti_font{
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 140%;
  position: absolute;
  margin-top: 20px;
  margin-left: 45px;
}

.noti_img{
  position: absolute;
  margin-top: 10px;
}

.noti_img2{
  position: absolute;
  margin-top: 18px;
}

.btn_font{
  font-family: 'Inria Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  margin-left: 5px;
}

</style>
