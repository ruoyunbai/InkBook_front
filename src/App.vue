<template>
  <n-message-provider>
  <!-- <router-view to="/" #default="{route,Component}">
    <transition :enter-active-class="`animate_animated ${route.meta.transition}`">    
     <Component :is="Component"></Component>
    </transition>
  </router-view> -->
                   <transition
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
   <router-view to="/">

   </router-view>
   </transition>
  </n-message-provider>
</template>

<script setup lang="ts">
import 'animate.css'
import {onMounted} from 'vue'
import {useUserStore} from './store/User'
const User=useUserStore()

onMounted(()=>{
    let t0=localStorage.getItem("login")
    User.Login=t0=='true';
    if(t0=='true'){
      // let t1=localStorage.getItem("name")
      // User.Name=t1;
      let t2=localStorage.getItem("id")
      User.Id=parseInt(t2!=null?t2:"-1")
    }
})
</script>


<style>
.fade-page-enter-active,
.fade-page-leave-active {
  transition: all 0.5s;
}
.fade-page-enter {
  opacity: 0;
  transform: translateX(-30px);
}
.fade-page-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}


</style>

<style>
* {
  margin: 0px;
  padding: 0px;
  outline: none;
  /*-webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;*/
  /*font-family:"Taipei Sans TC Beta";*/
  z-index: inherit;
  overflow: visible;
}
</style>