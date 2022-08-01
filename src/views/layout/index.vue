<template>

     <n-layout
      :naitive-sceoll="false">
          <div>
               <Header></Header>
               <n-layout id="layout"
                  :naitive-sceoll="false"
             >
                    <!-- <Menu></Menu> -->
                    <Content></Content>

               </n-layout>
          </div>
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