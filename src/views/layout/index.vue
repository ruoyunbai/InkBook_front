<template>     
    <n-layout has-sider>
      <n-layout-sider content-style="padding: 24px;
      margin:0;
      backgroundColor:rgb(255,255,255)"
       :width="240">
     <div style="
     backgroundColor:rgb(0,122,122);
     textAlign:center">
     <n-space vertical>
      <n-image 
      width=100
      src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      />
     <br>
    卡片内容
    </n-space>
     </div>
       
      </n-layout-sider>
      <n-layout content-style="padding: 24px;

      backgroundColor:rgb(0,255,255)">
      <router-view></router-view>
      </n-layout>
  
      <!-- :naitive-sceoll="false"> -->
        
     </n-layout>
</template>

<script setup lang="ts">
import Header from './Header/index.vue'
// import Menu from './Menu/index.vue'
import Content from './Content/index.vue'
import axios from 'axios';
import {useUserStore} from '../../store/User'
import { onMounted } from '@vue/runtime-core';
import { gsap } from "gsap"
const User=useUserStore()

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
.n-layout{
     color: var(--n-text-color);
box-sizing: border-box;
position: relative;
z-index: auto;
flex: auto;
overflow: hidden;
transition: box-shadow .3s var(--n-bezier),
background-color .3s var(--n-bezier),
     color .3s var(--n-bezier);
     background-image: url('../../public/index/Artwork(1).svg');
      /*-webkit-mask-image: url('index/Rectangle 4.png');
    -webkit-mask-repeat: no-repeat;
     -webkit-mask-size: 100%;*/
background-repeat:no-repeat;
     
   background-size:100%;
     /* background-size:cover; */
     /* height:100%; */

}
</style>