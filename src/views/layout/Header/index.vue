<template>
  <n-layout-header>
    <n-grid :cols="36" style="margin-top: 14px">
      <n-gi></n-gi>
      <n-gi>
        <n-image preview-disabled width="80" src="index\neural 1.png" />
      </n-gi>
      <n-gi span="1"></n-gi>
      <n-gi :span="5">
        <div style="height: 5px"></div>
        <n-image preview-disabled height="55" src="index\top nav bar.png" />
      </n-gi>
      <n-gi span="3"> </n-gi>
      <n-gi span="12">
        <div style="height: 10px"></div>
        <n-input
          placeholder="在整个论坛搜索帖子内容"
          round
          size="large"
          style="
            border-radius: 8px;
            background: #e8e8e8;
            border: 1px solid #ebebeb;
          "
        >
          <template #prefix>
            <n-icon :component="Search" />
          </template>
        </n-input>
      </n-gi>
      <n-gi span="5"> </n-gi>
      <n-gi>
        <div style="height: 10px"></div>
        <div>
          <n-button
            type="info"
            v-if="!User.Login"
            @click="routerToLogin"
            @mouseenter="enterButton('#logButton')"
            @mouseleave="leaveButton('#logButton')"
            color="#77C5EA"
            ghost
            style="border-radius: 5.48px; margin-top: 7px; position: absolute"
            id="logButton"
            class="buttontext LogButtonSelectGrad"
            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;登录&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</n-button
          >
        </div>
      </n-gi>
      <n-gi span="2"></n-gi>
      <n-gi>
        <!-- <n-avatar v-if="User.Login"
                  @click="router.push('/PersonalInfo')"
      round
      :size="48"
      src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
    /> -->
        <div style="height: 10px"></div>
        <div>
          <n-button
            @click="routerToSignUp"
            @mouseenter="enterButton('#signButton')"
            @mouseleave="leaveButton('#signButton')"
            v-if="!User.Login"
            type="info"
            ghost
            color="#77C5EA"
            style="border-radius: 5.48px; margin-top: 7px; position: absolute"
            id="signButton"
            class="buttontext LogButtonSelectGrad"
          >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注册&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</n-button
          >
        </div>
      </n-gi>
      <n-gi span="2" style="text-align: right">
        <div style="height: 10px"></div>
        <n-avatar
          v-if="User.Login"
          @click="routerToPersonalInfo"
          round
          :size="60"
          :src="User.avatar!=''?User.avatar:'http://43.138.77.133:81/media/avatars/default.jpg'"
        ></n-avatar>
      </n-gi>
      <n-gi>
        <div style="height: 20px"></div>
        <div v-if="User.Login" class="avatarLevel">Lev2</div>
      </n-gi>
    </n-grid>

    <!-- <HR align=center width=1400 color=black SIZE=3 /> -->
  </n-layout-header>
</template>

<script setup lang="ts">
import { FlashOutline, Search, Person, HeartOutline } from "@vicons/ionicons5";
import { defineComponent, toRefs, ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../../../store/User";
import { gsap } from "gsap";
const User = useUserStore();

const login = ref<Boolean>(false);
const register = ref<Boolean>(false);

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
const routerToPersonalInfo = () => {
  router.push({
     path: "/PersonalInfo",
     query:{
       user_id: localStorage.getItem("user_ID")
     }
  });
};
const routerToLogin = () => {
  router.push("/logIn");
};
const routerToSignUp = () => {
  router.push("/signUp");
};
</script>

<style scoped>
.n-layout-header {
  transition: color 0.3s var(--n-bezier), background-color 0.3s var(--n-bezier),
    box-shadow 0.3s var(--n-bezier), border-color 0.3s var(--n-bezier);
  box-sizing: border-box;
  width: 100%;
  background-color: var(--n-color);
  color: var(--n-text-color);
  background-color: transparent;
}
.avatarLevel {
  border-radius: 0px 24px 24px 0px;
  background-image: url('../../../public/index/Frame 39796(1).png');
  /*background: #C3F3F7;*/
  box-shadow: 10px 10px 80px 0px #3f276619;
  height: 40px;
  color: #f48023af;
  font-family: poppins, sans-serif;
  font-weight: bold;
  font-size: 14px;
  line-height: 40px;
  letter-spacing: 0px;
  text-align: center;
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
.LogButtonSelectGrad {
  background: linear-gradient(to top, transparent 100%, #77c5ea 0px);
}
</style>
