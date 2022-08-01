<template>
  <n-layout-header>
    <n-grid :cols="36">
      <n-gi></n-gi>
      <n-gi>
        <n-image preview-disabled width="64.2" src="index\neural 1.png" />
      </n-gi>
      <n-gi span="1"></n-gi>
      <n-gi :span="5">
        <div style="height: 5px"></div>
        <n-image
          @click="routerToIndex"
          preview-disabled
          width="257"
          src="index\top nav bar.png"
        />
      </n-gi>
      <n-gi span="2"> </n-gi>

      <n-gi :span="18"></n-gi>
      <n-gi></n-gi>
      <n-gi :span="2">
        <div style="height: 10px"></div>
        <div style="height: 10px"></div>
        <n-button
            type="info"
            v-if="!User.Login&&!login"
            @click="routerToLog"
            @mouseenter="enterButton('#logButton')"
            @mouseleave="leaveButton('#logButton')"
            color="#77C5EA"
            ghost
            style="border-radius: 5.48px; margin-top: 7px; position: absolute"
            id="logButton"
            class="buttontext LogButtonSelectGrad"
            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;登录&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</n-button
          >
        <n-button
          type="info"
          v-if="!User.Login && login"
          @click="routerToLog"
          color="#77C5EA"
          style="border-radius: 5.48px; margin-top: 7px"
          class="buttontextSelect"
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;登录&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</n-button
        >
      </n-gi>
      <n-gi></n-gi>
      <n-gi :span="2">
        <div style="height: 10px"></div>
        <div style="height: 10px"></div>
        <n-button
            @click="routerToSign"
            @mouseenter="enterButton('#signButton')"
            @mouseleave="leaveButton('#signButton')"
            v-if="!User.Login&&!register"
            type="info"
            ghost
            color="#77C5EA"
            style="border-radius: 5.48px; margin-top: 7px; position: absolute"
            id="signButton"
            class="buttontext LogButtonSelectGrad"
          >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注册&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</n-button
          >
        <n-button
          @click="routerToSign"
          v-if="!User.Login && register"
          type="info"
          color="#77C5EA"
          style="border-radius: 5.48px; margin-top: 7px"
          class="buttontextSelect"
        >
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注册&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</n-button
        >
      </n-gi>
    </n-grid>

    <!-- <HR align=center width=1400 color=black SIZE=3 /> -->
  </n-layout-header>
  <!-- <HR align=center width="2000px" color="black" SIZE=2 style="opacity:0.1" /> -->
</template>

<script setup lang="ts">
import { defineComponent, h, Component, reactive, ref, toRefs } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../../../store/User";
import { gsap } from "gsap";
const User = useUserStore();

type Props = {
  Login: Boolean;
  Register: Boolean;
};

const props = defineProps<Props>();
const login = toRefs(props).Login;
const register = toRefs(props).Register;

const enterButton = (id: string) => {
  let timeline = gsap.timeline({ paused: true });
  timeline.to(id, {
    duration: 0.1,
    ease: "linear",
    background: "linear-gradient(to top,transparent 0%, #77C5EA 0px)",
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
    background: "linear-gradient(to top,transparent 100%, #77C5EA 0px)",
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
  background: linear-gradient(to top, transparent 100%, #77c5ea 0px);
}
</style>