<template>
  <n-layout-header>
    <n-grid :cols="36" style="margin-top: 8px">
      <n-gi></n-gi>
      <n-gi>
        <n-image preview-disabled width="64.2" src="index/neural 1.png" />
      </n-gi>
      <n-gi span="1"></n-gi>
      <n-gi :span="5">
        <div style="height: 5px"></div>
        <n-image
          @click="routerToIndex"
          preview-disabled
          width="257"
          src="index/top nav bar.png"
        />
      </n-gi>
      <n-gi> </n-gi>
      <n-gi :span="13">
        <div style="height: 15px"></div>
        <n-space
          justify="space-around"
          size="large"
          style="position: relative"
          @mouseleave="CursorLost"
        >
          <div id="blockSelectBG" v-show="showBG" class="blockSelectBG"></div>
          <n-image
            v-show="showBar"
            class="blockBar"
            src="littleIcon/SelectRect.png"
            id="blockBar"
          >
          </n-image>
          <n-space vertical>
            <n-button
              text
              @click="watchBlock('class', 0)"
              @mouseenter="CursorBlock(0)"
            >
              <template #icon>
                <n-image
                  preview-disabled
                  v-show="Block.block == 'class'"
                  :src="blockInfo.class.header.image.active"
                ></n-image>
                <n-image
                  preview-disabled
                  v-show="Block.block != 'class'"
                  :src="blockInfo.class.header.image.unactive"
                ></n-image>
              </template>
              <span class="nav" id="blockButtonText0">课程推荐</span>
            </n-button>
          </n-space>
          <n-space vertical>
            <n-button
              text
              @click="watchBlock('around', 1)"
              @mouseenter="CursorBlock(1)"
            >
              <template #icon>
                <n-image
                  preview-disabled
                  v-if="Block.block == 'around'"
                  :src="blockInfo.around.header.image.active"
                ></n-image>
                <n-image
                  preview-disabled
                  v-if="Block.block != 'around'"
                  :src="blockInfo.around.header.image.unactive"
                ></n-image>
              </template>
              <span class="nav" id="blockButtonText1">校园周边</span>
            </n-button>
          </n-space>
          <n-space vertical>
            <n-button
              text
              @click="watchBlock('test', 2)"
              @mouseenter="CursorBlock(2)"
            >
              <template #icon>
                <n-image
                  preview-disabled
                  v-show="Block.block == 'test'"
                  :src="blockInfo.test.header.image.active"
                ></n-image>
                <n-image
                  preview-disabled
                  v-show="Block.block != 'test'"
                  :src="blockInfo.test.header.image.unactive"
                ></n-image>
              </template>
              <span class="nav" id="blockButtonText2">刷题板块</span>
            </n-button>
          </n-space>
          <n-space vertical>
            <n-button
              text
              @click="watchBlock('source', 3)"
              @mouseenter="CursorBlock(3)"
            >
              <template #icon>
                <n-image
                  preview-disabled
                  v-if="Block.block == 'source'"
                  :src="blockInfo.source.header.image.active"
                ></n-image>
                <n-image
                  preview-disabled
                  v-if="Block.block != 'source'"
                  :src="blockInfo.source.header.image.unactive"
                ></n-image>
              </template>
              <span class="nav" id="blockButtonText3">资源共享</span>
            </n-button>
          </n-space>
          <div style="height: 61px; width: 0px"></div>
        </n-space>
      </n-gi>
      <n-gi> </n-gi>
      <n-gi span="7">
        <div style="height: 10px"></div>
        <n-input-group>
          <n-dropdown @select="handleSelect" :options="options">
            <n-button
              @click="handleSearch"
              icon-placement="right"
              type="primary"
              size="large"
              style="border-radius: 10px"
              color="#D4F6F9"
              text-color="#979797"
              class="buttontext2"
            >
              {{ searchContext }}
              <template #icon>
                <n-image preview-disabled src="block/fangda.png"></n-image>
              </template>
            </n-button>
          </n-dropdown>

          <n-input
            :placeholder="'在' + searchContext + '搜索帖子'"
            round
            size="medium"
            style="
              border-radius: 8px;
              background: #e8e8e8;
              border: 1px solid #ebebeb;
            "
            v-model:value="searchText"
          >
            <template #prefix> </template>
          </n-input>
        </n-input-group>
      </n-gi>
      <n-gi></n-gi>
      <n-gi>
        <div style="height: 10px"></div>
        <n-button
          v-if="!User.Login"
          type="info"
          ghost
          color="#77C5EA"
          @click="routerToLogin"
          style="border-radius: 5.48px; margin-top: 3px"
          class="buttontext"
          >登录</n-button
        >
      </n-gi>
      <n-gi v-if="!User.Login"></n-gi>
      <n-gi v-if="!User.Login">
        <div style="height: 10px"></div>
        <n-button
          type="info"
          ghost
          color="#77C5EA"
          @click="routerToLogin"
          style="border-radius: 5.48px; margin-top: 3px"
          class="buttontext"
          >注册</n-button
        >
      </n-gi>
      <n-gi span="2" style="text-align: right" v-if="User.Login">
        <div style="height: 0px"></div>
        <n-avatar
          @click="routerToPersonalInfo"
          round
          :size="50"
          :src="User.avatar!=''?User.avatar:'http://43.138.77.133:81/media/avatars/default.jpg'"
        ></n-avatar>
      </n-gi>
      <n-gi v-if="User.Login">
        <div style="height: 10px"></div>
        <div class="avatarLevel">Lev{{lv}}</div>
      </n-gi>
    </n-grid>

    <!-- <HR align=center width=1400 color=black SIZE=3 /> -->
  </n-layout-header>
  <!-- <HR align=center :width="totalWidth" color="black" SIZE=2 style="opacity:0.1" /> -->
</template>

<script setup lang="ts">
import {
  defineComponent,
  h,
  Component,
  reactive,
  onMounted,
  ref,
  Ref,
} from "vue";
import { NIcon, useMessage, NImage } from "naive-ui";
import type { MenuOption } from "naive-ui";
import { RouterLink } from "vue-router";
import { useBlockStore } from "../../../store/Block";
import { useRouter, useRoute } from "vue-router";
import { gsap } from "gsap";
import axios from "axios"

import { useUserStore } from "../../../store/User";
import { messageConfig } from "element-plus";
const message = useMessage();
const route = useRoute();
const router = useRouter();
const searchText: Ref<string> = ref("");
const Block = useBlockStore();
const blocks = ["class", "around", "test", "source"];
const blockBarOffset = [65, 182, 299, 413];
const blockSelectionOffset = [61, 178, 295, 409];
const lv = ref<number>(0);
const options: any[] = reactive([
  {
    label: "全部帖子",
    key: "全部帖子",
    //   icon: renderIcon(UserIcon)
  },
  {
    label: "课程推荐",
    key: "课程推荐",
    //   icon: renderIcon(EditIcon)
  },
  {
    label: "校园周边",
    key: "校园周边",
    //   icon: renderIcon(LogoutIcon)
  },
  {
    label: "刷题板块",
    key: "刷题板块",
    //   icon: renderIcon(LogoutIcon)
  },

  {
    label: "资源共享",
    key: "资源共享",
    //   icon: renderIcon(LogoutIcon)
  },
]);
const searchContext: Ref<string> = ref("全部帖子");
const handleSelect = (key: string | number) => {
  searchContext.value = key + "";
};

const handleSearch = () => {
  // let reg=String.raw`[\s]+`
  if (searchText.value == "") {
    message.info("请输入搜索内容");
    return;
  }
  Block.block = "";
  Block.section = -1;
  HideBlockDeco();
  switch (searchContext.value) {
    case "全部帖子":
      Block.section = 1926;
      break;
    case "课程推荐":
      Block.section = 0;
      break;
    case "校园周边":
      Block.section = 1;
      break;
    case "刷题板块":
      Block.section = 2;
      break;
    case "资源共享":
      Block.section = 3;
      break;
  }
  Block.search = true;
  console.log(searchText.value);
  Block.searchText = searchText.value;
};
const searchPosts = () => {};
Block.$subscribe((mutation, state) => {
  // if(Block.section==1926)Block.block="all"
  // Block.block=blocks[Block.section]
});
const watchBlock = (block: string, section: number) => {
  Block.search = false;
  let i = 0;
  for (i = 0; i < 4; ++i) {
    gsap.to("#blockButtonText" + i, {
      duration: 0.1,
      color: "#252F3F",
    });
  }

  Block.block = block;
  Block.section = section;
  if (showBG.value == false) {
    gsap.set("#blockSelectBG", {
      left: blockSelectionOffset[section],
      autoAlpha: 0,
    });
    gsap.to("#blockSelectBG", {
      duration: 0.1,
      autoAlpha: 1,
    });
  } else {
    gsap.to("#blockSelectBG", {
      duration: 0.1,
      left: blockSelectionOffset[section],
    });
  }

  gsap.to("#blockButtonText" + section, {
    duration: 0.1,
    color: "#F48023",
  });
  if (route.path != "/block") {
    router.push("/block");
  }
};

const showBar = ref<Boolean>(true);
const showBG = ref<Boolean>(true);
const CursorBlock = (section: number) => {
  if (showBar.value == false) {
    showBar.value = true;
    gsap.set("#blockBar", {
      left: blockBarOffset[section],
      autoAlpha: 0,
    });
    gsap.to("#blockBar", {
      duration: 0.1,
      autoAlpha: 1,
    });
  } else {
    gsap.to("#blockBar", {
      duration: 0.1,
      left: blockBarOffset[section],
    });
  }
};

const CursorLost = () => {
  if (blocks.includes(Block.block)) {
    gsap.to("#blockBar", {
      duration: 0.1,
      left: blockBarOffset[Block.section],
    });
  } else {
    gsap.to("blockBar", {
      duration: 0.1,
      autoAlpha: 0,
    });
    showBar.value = false;
  }
};

const HideBlockDeco = () => {
  showBar.value = false;
  showBG.value = false;
  let i = 0;
  for (i = 0; i < 4; ++i) {
    gsap.to("#blockButtonText" + i, {
      duration: 0.1,
      color: "#252F3F",
    });
  }
};

const blockInfo: any = {
  test: {
    header: {
      image: {
        active: "svg/板块界面svg/fi-rr-credit-card.svg",
        unactive: "svg/板块界面svg/fi-rr-credit-card-1.svg",
      },
    },
  },
  class: {
    header: {
      image: {
        active: "svg/板块界面svg/fi-rr-chart-histogram-1.svg",
        unactive: "svg/板块界面svg/fi-rr-chart-histogram.svg",
      },
    },
  },
  around: {
    header: {
      image: {
        active: "svg/板块界面svg/fi-rr-upload-1.svg",
        unactive: "svg/板块界面svg/fi-rr-upload.svg",
      },
    },
  },
  source: {
    header: {
      image: {
        active: "svg/板块界面svg/fi-rr-credit-card.svg",
        unactive: "svg/板块界面svg/fi-rr-credit-card-1.svg",
      },
    },
  },
};
const User = useUserStore();
function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const routerToIndex = () => {
  router.push("/");
};
const routerToPersonalInfo = () => {
  router
    .push({
      path: "/level",
    })
    .then(() => {
      router.push({
        path: "/PersonalInfo",
        query: {
          user_id: localStorage.getItem("user_ID"),
        },
      });
    });
};
const routerToLogin = () => {
  router.push("/login");
};
const totalWidth = ref(0);
onMounted(() => {
  axios.post("/user/info",{user_id:localStorage.getItem("user_ID")})
  .then((response)=>{
    console.log(response);
    lv.value = response.data.data.level;
  })
  totalWidth.value = document.documentElement.clientWidth;
  window.onresize = () => {
    //屏幕尺寸变化就重新赋值
    totalWidth.value = document.documentElement.clientWidth;
    window.onresize = () => {
      //屏幕尺寸变化就重新赋值
      totalWidth.value = document.documentElement.clientWidth;
    };
  };
  if (blocks.includes(Block.block)) {
    showBar.value = true;
    gsap.set("#blockBar", {
      left: blockBarOffset[Block.section],
    });
    gsap.set("#blockSelectBG", {
      left: blockSelectionOffset[Block.section],
    });
    gsap.set("#blockButtonText" + Block.section, {
      color: "#F48023",
    });
  } else {
    showBar.value = false;
    showBG.value = false;
  }
});
</script>

<style>
.nav {
  color: #252f3f;
  font-family: nunito-sans, sans-serif;
  font-weight: bold;
  font-size: 16px;
  line-height: normal;
  letter-spacing: 0px;
  text-align: left;
}

.blockBar {
  position: absolute;
  bottom: 31px;
  width: 98px;
}

.blockSelectBG {
  position: absolute;
  width: 106px;
  height: 32px;
  border-radius: 8px;
  background: #fcf4ec;
}

.avatarLevel {
  border-radius: 0px 24px 24px 0px;
  background-image: url("../../../../public/index/Frame 39796(1).png");
  /*background: #c3f3f7;*/
  box-shadow: 10px 10px 80px 0px #3f276619;
  height: 40px;
  color: #f48023;
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
.buttontext2 {
  color: #979797;
  font-family: nunito-sans, sans-serif;
  font-weight: bold;
  font-size: 15px;
  line-height: normal;
  letter-spacing: 0px;
  text-align: left;
}
</style>
