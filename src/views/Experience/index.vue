<template>
  <Header></Header>
  <n-layout embedded content-style="padding: 15px 40px 15px 40px;"
    ><!--背景暗一些 突出上面的卡片-->
    <div class="card">
      <n-space vertical size="large"
        ><!--和layout has-sider组合使用-->
        <n-layout-header style="height: 0px; padding: 0px" nobordered>
        </n-layout-header>

        <n-layout has-sider>
          <n-layout-sider
            :width="350"
            content-style="padding-left: 600px;padding-top: 300px;"
          >
            <n-space vertical align="center">
              <n-image
                class="bg"
                src="/svg/经验值svg/build your business.svg"
                style="z-index: 2"
              />
              <n-image
                src="/svg/等级权限svg/Ellipse 23.svg"
                style="
                  position: absolute;
                  left: 130px;
                  top: 210px;
                  height: 250px;
                  width: 150px;
                  z-index: 0;
                "
              />
            </n-space>
          </n-layout-sider>

          <n-layout content-style="padding:46px;padding-top:60px;">
            <div class="levelTitle" style="text-align: center; z-index: 6">
              经验值获取方法
            </div>
            <n-image
              src="/svg/等级权限svg/Ellipse 24.svg"
              style="
                position: absolute;
                left: 450px;
                top: 6px;
                height: 150px;
                width: 150px;
                z-index: 3;
              "
            />
            <n-h4>
              <div
                class="bar3"
                style="text-align: justify; align: center; z-index: 6"
              >
                &emsp;任务名
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;任务内容&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                单次经验值&emsp;&emsp;&emsp;&emsp;每日上限
              </div>
              <div
                class="bar1"
                style="text-align: justify; align: center; z-index: 6"
              >
                &emsp;&emsp;签到
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;每日签到
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;5
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;5
              </div>
              <div class="bar2" style="text-align: justify; align: center">
                &emsp;&emsp;阅读帖子&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;在一个帖子页面停留时间超过2min
                &emsp;&emsp;&emsp;5
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;20
              </div>
              <div class="bar1" style="text-align: justify; align: center">
                &emsp;&emsp;发布评论&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;发布评论字数大于15字的评论
                &emsp;&emsp;&emsp;&emsp;&emsp;5
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;30
              </div>
              <div class="bar2" style="text-align: justify; align: center">
                &emsp;&emsp;发布帖子&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;发布主题帖
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                15 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 30
              </div>
              <div class="bar1" style="text-align: justify; align: center">
                &emsp;&emsp;收到点赞&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;你发布的帖子收到了一次点赞
              </div>
              <div class="bar2" style="text-align: justify; align: center">
                &emsp;&emsp;收到评论&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;你发布的帖子收到了一次评论
              </div>
              <div class="bar1" style="text-align: justify; align: center">
                &emsp;&emsp;浏览次数&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;帖子浏览量每到达一定值
              </div>
            </n-h4>
          </n-layout>
        </n-layout>
      </n-space>

      <n-image-group>
        <n-space justify="space-around" size="large">
          <n-image width="350" src="/svg/经验值svg/web develop (1).svg" />
          <n-image width="350" src="/svg/经验值svg/mobile develop (1).svg" />
          <n-image width="350" src="/svg/经验值svg/product design (1).svg" />
        </n-space>
      </n-image-group>

      <n-space justify="center">
        <n-button
          round
          size="large"
          color="#7C76BB"
          ghost
          @click="routerToPersonalInfo"
        >
          <p class="buttonText2">返回</p>
        </n-button>
      </n-space>
      <n-image-group>
        <n-space justify="space-around" size="large">
          <n-image
            preview-disabled
            width="30"
            src="/svg/等级权限svg/矩形.png"
          />
        </n-space>
      </n-image-group>
    </div>
  </n-layout>
</template>

<script setup lang="ts">
import { onMounted, Ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { useMessage } from "naive-ui";
import Header from "../../components/block/header/index.vue";

import { useUserStore } from "../../store/User";
const User = useUserStore();

const router = useRouter();
const routerToPersonalInfo = () => {
  router.push({
    path: "/PersonalInfo",
    query: { user_id: localStorage.getItem("user_ID") },
  });
};
</script>
<style scoped>
.levelTitle {
  margin: auto;
  color: #7c76bb;
  vertical-align: middle;
  font-family: nunito-sans, sans-serif;
  font-size: 32px;
  font-weight: bold;
}
.bar1 {
  width: 800px;
  height: 40px;
  padding: 0px; /*到下一行距离*/
  background: url("../../../public/svg/等级权限svg/Feature Row.svg") no-repeat;
  background-size: 730px;
  background-position: 0px 0px;
  margin: auto;
  vertical-align: middle;
  font-family: nunito-sans, sans-serif;
  font-size: 14px;
  z-index: 1;
  /*font-weight: bold;*/
}
.bar2 {
  width: 800px;
  height: 40px;
  padding: 0px; /*到下一行距离*/
  /*background: url("../../../public/svg/等级权限svg/Feature Row.svg") no-repeat;*/
  /*background-size:750px;*/
  /*background-position:0px 0px;*/
  margin: auto;
  vertical-align: middle;
  font-family: nunito-sans, sans-serif;
  font-size: 14px;
  z-index: 1;
  /*font-weight: bo
  /*font-weight: bold;*/
}
.bar3 {
  width: 800px;
  height: 40px;
  padding: 0px; /*到下一行距离*/
  /*background: url("../../../public/svg/等级权限svg/Feature Row.svg") no-repeat;*/
  /*background-size:750px;*/
  /*background-position:0px 0px;*/
  margin: auto;
  vertical-align: middle;
  font-family: nunito-sans, sans-serif;
  font-size: 17px;
  z-index: 1;
  font-weight: bold;
}
.card {
  padding: 0;
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 10px 10px 80px 0px #3f276619;
  overflow: hidden;
}
.qt1 {
  position: absolute;
  left: 70px;
  top: 60px;
  height: 25px;
  width: 150px;
}
.qt2 {
  position: absolute;
  left: 290px;
  top: 280px;
  height: 25px;
  width: 150px;
}
.bg {
  position: absolute;
  left: 60px;
  top: 110px;
  height: 300px;
  width: 150px;
}
.buttonText2 {
  color: #7c76bb;
  font-family: nunito-sans, sans-serif;
  font-weight: bold;
  font-size: 14px;
  line-height: normal;
  letter-spacing: 2px;
  text-align: left;
}
</style>