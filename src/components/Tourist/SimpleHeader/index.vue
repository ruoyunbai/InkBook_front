<template>
  <n-layout-header>
    <n-grid :cols="36">
      <n-gi></n-gi>
      <n-gi :span="5">
        <div style="height: 25px"></div>
        <n-space justify="center" @click="routerToIndex">
          <n-image height="30" preview-disabled @mouseenter="reloadenter()" :src=cubeSrc></n-image>
          <p class="title">
            InkBook
          </p>
        </n-space>
      </n-gi>
      <n-gi span="4"> </n-gi>

      <n-gi :span="18"></n-gi>
      <n-gi></n-gi>
      <n-gi :span="2">
        <div style="height: 10px"></div>
        <div style="height: 10px"></div>
        <n-button type="info" v-if="!User.Login && !login" @click="routerToLog" @mouseenter="enterButton('#logButton')"
          @mouseleave="leaveButton('#logButton')" color="#F5B544" ghost
          style="border-radius: 5.48px; margin-top: 7px; position: absolute" id="logButton"
          class="buttontext LogButtonSelectGrad">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;登录&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</n-button>
        <n-button type="info" v-if="!User.Login && login" @click="routerToLog" color="#F5B544"
          style="border-radius: 5.48px; margin-top: 7px" class="buttontextSelect">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;登录&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</n-button>
      </n-gi>
      <n-gi></n-gi>
      <n-gi :span="2">
        <div style="height: 10px"></div>
        <div style="height: 10px"></div>
        <n-button @click="routerToSign" @mouseenter="enterButton('#signButton')"
          @mouseleave="leaveButton('#signButton')" v-if="!User.Login && !register" type="info" ghost color="#F5B544"
          style="border-radius: 5.48px; margin-top: 7px; position: absolute" id="signButton"
          class="buttontext LogButtonSelectGrad">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注册&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</n-button>
        <n-button @click="routerToSign" v-if="!User.Login && register" type="info" color="#F5B544"
          style="border-radius: 5.48px; margin-top: 7px" class="buttontextSelect">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注册&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</n-button>
      
     </n-gi>
    </n-grid>
    <div style="height: 20px"></div>

    <!-- <HR align=center width=1400 color=black SIZE=3 /> -->
  </n-layout-header>
  <!-- <HR align=center width="2000px" color="black" SIZE=2 style="opacity:0.1" /> -->
</template>

<script setup lang="ts">
import { defineComponent, h, Component, reactive, ref, toRefs, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../../../store/User";
import { gsap } from "gsap";
const User = useUserStore();
const cubeSrc=ref("svg\\主页svg\\icon-1.2s-47px.gif")
type Props = {
  Login: Boolean;
  Register: Boolean;
};
let cnt0=0
const reloadenter=()=>{
     if(cnt0==0){ cubeSrc.value="svg\\主页svg\\icon-1.3s-47px2.gif"
     cnt0=1}else{
           cubeSrc.value="svg\\主页svg\\icon-1.3s-47px1.gif"
     cnt0=0
     }
    
}

const props = defineProps<Props>();
const login = toRefs(props).Login;
const register = toRefs(props).Register;

const enterButton = (id: string) => {
  let timeline = gsap.timeline({ paused: true });
  timeline.to(id, {
    duration: 0.1,
    ease: "linear",
    background: "linear-gradient(to top,transparent 0%, #F5B544 0px)",
  });
  timeline.to(
    id,
    {
      duration: 0.1,
      ease: "power4",
      color: "#FFF",
    },
    "<"
  );
  timeline.play();
};

const leaveButton = (id: string) => {
  let timeline = gsap.timeline({ paused: true });
  timeline.to(id, {
    duration: 0.1,
    ease: "linear",
    background: "linear-gradient(to top,transparent 100%, #F5B544 0px)",
  });
  timeline.to(
    id,
    {
      duration: 0.1,
      ease: "power1",
      color: "#4F4F4F",
    },
    "<"
  );
  timeline.play();
};

const router = useRouter();
const routerToIndex = () => {
  router.push("/");
};
const routerToLog = () => {
  router.push("/logIn");
};
const routerToSign = () => {
  router.push("/signUp");
};
</script>

<style>
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
.buttontext {
  color: #4f4f4f;
  font-family: nunito-sans, sans-serif;
  font-weight: bold;
  font-size: 15px;
  line-height: normal;
  letter-spacing: 0px;
  text-align: left;
}

.buttontextSelect {
  color: #fff;
  font-family: nunito-sans, sans-serif;
  font-weight: bold;
  font-size: 15px;
  line-height: normal;
  letter-spacing: 0px;
  text-align: left;
}

.LogButtonSelectGrad {
  background: linear-gradient(to top, transparent 100%, #F5B544 0px);
}
</style>
