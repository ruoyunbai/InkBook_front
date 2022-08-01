<template>
 <el-dialog
           v-model="visitorGo"
                width="33%"
                center
                
            >
                <span id="notice">当前未登录不可发帖，是否登录？</span>
                <template #footer>
                <span >
                    <n-button 
                    type="info" 
                    round 
                    size="medium" 
                    @click="visitorGo = false" 
                    style="border-radius:10px;margin-right:30px;" 
                    color="#5AA8D7">
                        <span class="buttonText">取消</span>
                    </n-button>
                    <!-- <el-button @click="cancelProfileChanging = false">取消</el-button> -->
                    <n-button  @click="router.push('/login')" 
                    type="warning" round size="medium" color="#F48023" 
                    style="border-radius:10px;margin-left:30px;">
                    <span class="buttonText">登录</span>
                    </n-button>
                    <!-- <el-button type="primary" @click="routerToPersonalInfo"
                    >退出</el-button
                    > -->
                </span>
                </template>
            </el-dialog>
  <hr style="border: none; border-top: 4px solid #fafafa" />
  <n-layout has-sider :native-scrollbar="false">
    <n-layout-sider
      content-style="padding-top:30px;padding-right:12px;"
      :native-scrollbar="false"
      width="290"
      bordered
    >
      <n-image-group style="margin-left: 9px">
        <n-space
          class="pointer"
          @mouseenter="rotateArrow"
          @mouseleave="returnArrow"
        >
          <n-image
            preview-disabled
            width="70"
            src="block\logo.png"
            id="arrow"
          ></n-image>
          <n-space vertical>
            <div style="height: 2px"></div>
            <!-- <n-image preview-disabled width="150" src="block\doQustion.png"></n-image> -->
            <div class="subTitle">{{ subTitles[Block.section] }}</div>
          </n-space>
        </n-space>
      </n-image-group>

      <n-input
        v-model:value="tagInput"
        ref="inputInstRef"
        placeholder="搜索标签"
        clearable
        round
        size="large"
        style="margin-left: 9px"
      >
        <template #prefix>
          <n-image src="block\fangda.png"></n-image>
        </template>
      </n-input>
      <div style="height: 15px"></div>
      <n-space style="padding-left: 20px">
        <!-- <transition-group name="list" tag="p"> -->
           <n-tag     v-for="tag in tags2choose" 
               :key="tag.name"
             @click="handleChoose2(tag.name)" type="warning" :bordered="false" round >
            <template #avatar>
              <div style="width:10px"></div>
              <n-icon>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 4.5H15.75" stroke="#F48023" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M6 9H15.75" stroke="#F48023" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M6 13.5H15.75" stroke="#F48023" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M2.25 4.5H2.2575" stroke="#F48023" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M2.25 9H2.2575" stroke="#F48023" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M2.25 13.5H2.2575" stroke="#F48023" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>

              </n-icon>

            </template>
            {{ tag.name }}
          </n-tag>
   
        <!-- </transition-group> -->
      </n-space>
      <div style="height: 15px"></div>
      <n-space vertical style="padding-left: 26px">
        <p class="navicateHeader">个性导航</p>
        <div style="height: 5px"></div>
        <n-space @click="clickPublish" class="pointer leftPriButton">
          <n-image preview-disabled src="littleIcon/help-circle.png"></n-image>
          <p class="publishTiezi" id="publishPost">发帖</p>
        </n-space>
        <n-space @click="clickRead" class="pointer leftPriButton">
          <n-image
            preview-disabled
            src="littleIcon/message-circle.png"
          ></n-image>
          <p class="publishTiezi" id="publishedPost">已发的帖子</p>
        </n-space>

        <!-- <div style="height: 70px">
          <n-row :gutter="12">
            <n-col :span="1">
              <div />
            </n-col>
            <n-col :span="6">
              <div />
            </n-col>
            <n-col :span="6">
              <div style="width: 160px; float: right">
                <n-anchor
                    affix="true"
                    :trigger-top="54"
                    :top="188"
                    style="z-index: 1"
                    ignore-gap
                    type="rail"
                >
                  <n-button   strong secondary :type="typeFa" @click="show('fa')">
                    <template #icon>
                      <n-image preview-disabled src="littleIcon/help-circle.png">
                      </n-image>
                    </template>
                    <div
                        style="
                        font-family: Roboto;
                        font-weight: bold;
                        font-size: 14px;
                        line-height: normal;" >
                      &emsp;&emsp;发帖&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    </div>
                  </n-button>
                  <n-button  strong secondary :type="typeYifa" @click="show('yifa')" style="text-color: #f48023">
                    <template #icon>
                      <n-image preview-disabled src="littleIcon/message-circle.png">
                      </n-image>
                    </template>
                    <div style="
                        font-family: Roboto;
                        font-weight: bold;
                        font-size: 14px;
                        line-height: normal;">
                      &emsp;&emsp;已发的帖子&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    </div>

                  </n-button> -->

        <!--                  <n-button   @click="clickPublish" style="text-color: #f48023">-->
        <!--                    <template #icon>-->
        <!--                      <n-image preview-disabled src="littleIcon/help-circle.png">-->
        <!--                      </n-image>-->
        <!--                    </template>-->
        <!--                    <div style="color: #f48023;-->
        <!--                        font-family: Roboto;-->
        <!--                        font-weight: bold;-->
        <!--                        font-size: 14px;-->
        <!--                        line-height: normal;" >-->
        <!--                      &emsp;&emsp;发帖&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;-->
        <!--                    </div>-->
        <!--                  </n-button>-->
        <!--                  <n-button   @click="clickRead" style="text-color: #f48023">-->
        <!--                    <template #icon>-->
        <!--                      <n-image preview-disabled src="littleIcon/message-circle.png">-->
        <!--                      </n-image>-->
        <!--                    </template>-->
        <!--                    <div style="color: #f48023;-->
        <!--                        font-family: Roboto;-->
        <!--                        font-weight: bold;-->
        <!--                        font-size: 14px;-->
        <!--                        line-height: normal;">-->
        <!--                      &emsp;&emsp;已发的帖子&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;-->
        <!--                    </div>-->

        <!--                  </n-button>-->

        <!--                  <n-anchor-link   >-->
        <!--                    <n-space @click="clickPublish" style="color: #f48023">-->
        <!--                      <n-image preview-disabled src="littleIcon/help-circle.png"></n-image>-->
        <!--                      <p class="publishTiezi">发帖</p>-->
        <!--                    </n-space>-->
        <!--                  </n-anchor-link   >-->

        <!--                  <n-anchor-link  />-->
        <!--                  <n-space @click="clickRead" class="pointer leftPriButton">-->
        <!--                    <p class="publishTiezi"> </p>-->
        <!--                    <n-image preview-disabled src="littleIcon/message-circle.png"></n-image>-->
        <!--                    <p class="publishTiezi">已发的帖子</p>-->
        <!--                  </n-space>-->
        <!-- </n-anchor>
              </div>
            </n-col>

          </n-row>
        </div> -->
        <!-- <n-menu
          v-model:value="activeKey"
          :root-indent="36"
          :indent="12"
          :options="menuOptions"
        /> -->
      </n-space>
      <div style="height: 10px"></div>
      <hr
        style="
          border: none;
          border-top: 2px solid #00000019;
          margin-left: 12px;
          margin-right: 12px;
        "
      />

      <div style="height: 17px"></div>
      <n-space style="margin-left: 33px">
        <n-image
          preview-disabled
          src="littleIcon/Vector-1.png"
          style="vertical-align: middle"
        ></n-image>

        <p :style="{ display: 'inline' }" class="publishTiezi">标签</p>
      </n-space>
      <div style="height: 8px"></div>
      <n-scrollbar style="max-height: 300px">
        <div
          class="list-item"
          v-for="(item, index) in tagList"
          :key="item.name"
          @click="handleChoose(index)"
          @mouseenter="enterTag(index)"
          @mouseleave="leaveTag(index)"
        >
          <div :id="'tagDeco' + index" class="tagDeco"></div>
          <div :id="'selectTagDeco' + index" class="selectTagDeco"></div>
          <div :id="'tag' + index" class="tag">
            <n-image
              preview-disabled
              :src="item.src"
              style="vertical-align: middle"
            />
            <span class="tagText" :id="'tagText' + index">{{ item.name }}</span>
            <!-- {{item.name}} -->
          </div>
        </div>
      </n-scrollbar>
    </n-layout-sider>

    <n-layout
      ref="layoutRef"
      :native-scrollbar="false"
      :on-scroll="handleScroll"
      style="height: 666px"
    >
      <n-grid cols="30">
        <n-gi span="20">
          <div style="height: 21px"></div>
          <transition enter-active-class="animate__animated animate__fadeIn">
            <n-space v-show="IfRead" style="margin-left: 40px">
              <div></div>
              <n-button
                round
                strong
                secondary
                :type="typeNew"
                @click="show('new')"
              >
                <template #icon>
                  <n-image preview-disabled src="svg/板块界面svg/Group-1.svg">
                  </n-image>
                </template>
                New
              </n-button>
              <n-button
                round
                strong
                secondary
                :type="typeTop"
                @click="show('top')"
              >
                <template #icon>
                  <n-image
                    preview-disabled
                    src="svg/板块界面svg/arrow-up-right.svg"
                  >
                  </n-image>
                </template>
                Top
              </n-button>
              <n-button
                round
                strong
                secondary
                :type="typeHot"
                @click="show('hot')"
              >
                <template #icon>
                  <n-image preview-disabled src="svg/板块界面svg/whh_hot.svg">
                  </n-image>
                </template>
                Hot
              </n-button>
            </n-space>
          </transition>

          <div style="height: 25px" v-show="IfRead"></div>

          <transition
            appear-active-class="animate__animated animate__backInLeft"
            enter-active-class="animate__animated animate__fadeIn"
          >
            <n-space v-if="IfInner">
              <div style="width: 40px"></div>
              <n-button strong secondary round @click="clickRead">
                返回</n-button
              >
            </n-space>
          </transition>
          <div v-if="IfInner" style="height: 29px"></div>
          <transition
            appear-active-class="animate__animated animate__backInLeft"
            enter-active-class="animate__animated animate__fadeIn"
          >
            <n-dialog-provider>
              <InnerPost
                :onePost="posts[index]"
                :gShow="IfInner"
                v-if="IfInner"
              ></InnerPost>
            </n-dialog-provider>
          </transition>
          <transition enter-active-class="animate__animated animate__fadeIn">
            <Edit v-if="IfEdit"> </Edit>
          </transition>

          <!-- <div v-for="post in posts" >
                <transition enter-active-class="animate__animated animate__backInLeft">
                    <Post key="post.post_id" @click="readInnerPost" v-show="IfRead" :onePost="post"></Post>
                </transition>
            </div> -->

          <el-dialog v-model="checkDelete" width="33%" center>
          <span id="notice"
            >确定要删除帖子吗？请注意，您的当前行为无法恢复，请谨慎决定</span
          >
          <template #footer>
            <span>
              <n-button
                type="info"
                round
                size="medium"
                @click="cancelDelete"
                style="border-radius: 10px; margin-right: 30px"
                color="#5AA8D7"
              >
                <span class="buttonText">再考虑一下</span>
              </n-button>
              <n-button
                @click="concernDelete"
                type="warning"
                round
                size="medium"
                color="#F48023"
                style="border-radius: 10px; margin-left: 30px"
              >
                <span class="buttonText">删除</span>
              </n-button>
              <!-- <el-button type="primary" @click="routerToPersonalInfo"
                    >退出</el-button
                    > -->
            </span>
          </template>
        </el-dialog>

          <transition-group
            name="posts"
            tag="p"
            enter-active-class="animate__animated animate__backInLeft"
            appear-active-class="animate__animated animate__backInLeft"
            v-if="IfRead"
            style="position:relative;"
          >
            <Post
              class="posts-item"
              v-for="(post, index) in posts"
              :key="post.post_id"
              @click="readInnerPost(index)"
              @delPost="delPost"
              :onePost="post"
            ></Post>
          </transition-group>
          <div ref="footerRef" style="height: 180px"></div>
        </n-gi>
        <n-gi span="3"></n-gi>
        <n-gi span="2">
          <n-carousel autoplay class="carou" v-show="IfRead">
            <img
              class="carouImage"
              src="/svg/右侧滚动图片竖版/final/Rectangle9.svg"
            />
            <img
              class="carouImage"
              src="/svg/右侧滚动图片竖版/final/Rectangle7.svg"
            />
            <img
              class="carouImage"
              src="/svg/右侧滚动图片竖版/final/Rectangle10.svg"
            />
            <img
              class="carouImage"
              src="/svg/右侧滚动图片竖版/final/gallery1.svg"
            />
            <!--<img
                    class="carouImage"
                    src="svg/右侧滚动图片竖版/插画风格/18 1.svg"
                >
                <img
                    class="carouImage"
                    src="svg/右侧滚动图片竖版/插画风格/19 1.svg"
                >
                <img
                    class="carouImage"
                    src="svg/右侧滚动图片竖版/插画风格/22 1.svg"
                >
                <img
                    class="carouImage"
                    src="svg/右侧滚动图片竖版/插画风格/25 1.svg"
                >-->
          </n-carousel>

          <div class="contactUsBlock" v-show="IfRead">
            <div class="contactText">Contact Us</div>
            <div class="subContactText">tell us your <br />opinion&nbsp;！</div>
            <n-button round :bordered="false" class="contactButton" disabled
              >Contact Now</n-button
            >
            <img
              class="contactRocket"
              src="/svg/右侧滚动图片竖版/rocket-dynamic-color.svg"
            />
          </div>
        </n-gi>

        <!-- <n-gi span="2"></n-gi> -->
      </n-grid>
    </n-layout>
  </n-layout>

</template>
<script setup lang="ts">
import {
  ref,
  onMounted,
  onBeforeMount,
  Ref,
  reactive,
  watch,
  onUnmounted,
} from "vue";
import { defineComponent, h, Component } from "vue";
import { NIcon } from "naive-ui";
import type { MenuOption } from "naive-ui";
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon,
} from "@vicons/ionicons5";
// function renderIcon(icon: Component) {
//   return () => h(NIcon, null, { default: () => h(icon) });
// }
// function renderIcon(icon: Component) {
//     return () => h(NIcon, null, { default: () => h(icon) })
// }
import pinia from "pinia";
// import {Type} from 'naive-ui'
import Post from "../post/OuterPost/index.vue";
import InnerPost from "../post/InnerPost/index.vue";
import Edit from "../PostMessage/index.vue";
import axios from "axios";
import { useBlockStore } from "../../../store/Block";
import { useUserStore } from "../../../store/User";
import { Type } from "naive-ui/lib/button/src/interface";
import { useMessage, NSpace } from "naive-ui";
import { gsap } from "gsap";
import { LayoutInst, LayoutSiderInst } from "naive-ui";
import { ElMessageBox } from 'element-plus'
import router from "../../../router";
let tagList: any[] = reactive([]);
const tagInput: Ref<string> = ref("");
const footerRef: any = ref(null);
const layoutRef: Ref<LayoutInst | null> = ref<LayoutInst | null>(null);
const Block = useBlockStore();
const User = useUserStore();
const message = useMessage();
const subTitles = ["课程推荐", "校园周边", "刷题板块", "资源分享", "搜索"];
const visitorGo:Ref<boolean>=ref(false)
const clickPublish = () => {
  if(!User.Login){
    visitorGo.value=true
    return
  }
  layoutRef.value?.scrollTo({ top: 0, behavior: "smooth" });
  IfEdit.value = true;
  IfRead.value = false;
  IfInner.value = false;
  gsap.set("#publishPost",{
    color:"#DDAA83"
  })
  gsap.set("#publishedPost",{
    color:"#969494"
  })
};
const clickRead = () => {
  layoutRef.value?.scrollTo({ top: 0, behavior: "smooth" });
  IfEdit.value = false;
  IfRead.value = true;
  IfInner.value = false;
  gsap.set("#publishedPost",{
    color:"#DDAA83"
  })
  gsap.set("#publishPost",{
    color:"#969494"
  })
};
const readInnerPost = (index1: any) => {
  layoutRef.value?.scrollTo({ top: 0, behavior: "smooth" });

  IfEdit.value = false;
  IfRead.value = false;
  IfInner.value = true;
  index.value = index1;
  axiosUserRead()
};
const index: Ref<number> = ref(0);
const IfEdit: Ref<boolean> = ref(false);
const IfRead: Ref<boolean> = ref(true);
const IfInner: Ref<boolean> = ref(false);

const checked: Ref<boolean> = ref(false);
const section: Ref<number> = ref(0);
// const newType:Ref<Type >=ref("Info")
// const oldType:Ref<string>=ref("tertiary")
// const hotType:Ref<string>=ref("tertiary")

const posttest = reactive({
  tags: ["go", "python"],
  title: "title",
  content: "content",
  watches: 5,
  comments: 6,
  ups: 7,
  name: "20373000",
  time: 0,
});
let posts: any[] = reactive([]);

let order: string = "new";
let count: number = 0;
let offset: number = 0;
const typeNew: Ref<Type | undefined> = ref("info");
const typeTop: Ref<Type | undefined> = ref("default");
const typeHot: Ref<Type | undefined> = ref("default");

const spinShow: Ref<boolean> = ref(false);
let showBottom = false;
let loading = false;

const tags2choose: any[] = reactive([]);

watch(tagInput, (newVal, oldVal) => {
  let i = 0;
  //  while (tagList.length != 0) {
  //   tagList.pop();
  // }
  while (tags2choose.length != 0) {
    tags2choose.pop();
  }
  //  if (newVal == ""){
  //    for(i=0;i<tagsAll.length;i++){
  //      tags2choose.push(tagsAll[i])
  //    }
  //    return
  //  }

  if (newVal != "")
    for (let i = 0; i < tagsAll.length; i += 1) {
      if (tagsAll[i]?.name.indexOf(newVal) != -1) tags2choose.push(tagsAll[i]);
    }
});
const handleChoose2 = (name: string) => {
  let i = 0;
  for (i = 0; i < tagList.length; i++) {
    console.log(name + " " + tagList[i]);
    if (name == tagList[i].name) {
      let index = i;
      if (tagList[index]!.choose) {
        // tagList[index]!.secondary = true;
        // tagList[index]!.choose = false;
        // tagList[index]!.src = "svg/板块界面svg/list-1.svg";
        // gsap.set("#tagText" + (tagList.length-1), {
        //   color: "#9FA6B2",
        // });
        // gsap.set("#tagDeco" + index, {
        //   backgroundColor: "#9FA6B2",
        // });
        // gsap.to("#selectTagDeco" + index, {
        //   duration: 0.2,
        //   width: "0",
        // });
        // let t: any = tagList[index];
        // tagList.splice(index, 1);
        // tagList.splice(tagList.length, 0, t);
      } else {
        // tagList[index]!.secondary = false;
        tagList[index]!.choose = true;
        tagList[index]!.src = "svg/板块界面svg/list.svg";
        let t: any = tagList[index];
        tagList.splice(index, 1);
        tagList.splice(0, 0, t);
        gsap.set("#tagText" + index, {
          color: "#F48023",
        });
        gsap.set("#tagDeco" + index, {
          backgroundColor: "#F48023",
        });
        gsap.to("#selectTagDeco" + index, {
          duration: 0.2,
          width: "285px",
        });
      }
      layoutRef.value?.scrollTo({ top: 0, behavior: "smooth" });
      showBottom = false;
      offset = 0;
      getPosts();
    }
  }
  tagInput.value = "";
};
const handleChoose = (index: number) => {
  if (tagList[index]!.choose) {
    // tagList[index]!.secondary = true;
    tagList[index]!.choose = false;
    tagList[index]!.src = "svg/板块界面svg/list-1.svg";
    // let t: any = tagList[index];
    // tagList.splice(index, 1);
    // tagList.splice(tagList.length, 0, t);
    gsap.set("#tagText" + index, {
      color: "#9FA6B2",
    });
    gsap.set("#tagDeco" + index, {
      backgroundColor: "#9FA6B2",
    });
    gsap.to("#selectTagDeco" + index, {
      duration: 0.3,
      width: "0",
    });
  } else {
    // tagList[index]!.secondary = false;
    tagList[index]!.choose = true;
    tagList[index]!.src = "svg/板块界面svg/list.svg";
    // let t: any = tagList[index];
    // tagList.splice(index, 1);
    // tagList.splice(0, 0, t);
    gsap.set("#tagText" + index, {
      color: "#F48023",
    });
    gsap.set("#tagDeco" + index, {
      backgroundColor: "#F48023",
    });
    gsap.to("#selectTagDeco" + index, {
      duration: 0.3,
      width: "285px",
    });
  }
  layoutRef.value?.scrollTo({ top: 0, behavior: "smooth" });
  showBottom = false;
  offset = 0;
  getPosts();
};

const enterTag = (index: number) => {
  gsap.to("#tagDeco" + index, {
    duration: 0.15,
    width: "8px",
  });
  gsap.to("#tag" + index, {
    duration: 0.15,
    left: "8px",
  });
  gsap.to("#selectTagDeco" + index, {
    duration: 0.15,
    left: "8px",
  });
};

const leaveTag = (index: number) => {
  gsap.to("#tagDeco" + index, {
    duration: 0.15,
    width: "5px",
  });
  gsap.to("#tag" + index, {
    duration: 0.15,
    left: "5px",
  });
  gsap.to("#selectTagDeco" + index, {
    duration: 0.15,
    left: "5px",
  });
};

const handleScroll = () => {
  // console.log(footerRef.value?.offsetTop)
  // console.log(e)
  // console.log(footerRef.value?.getBoundingClientRect().bottom)
  //    console.log(layoutRef.value)
  //    console.log(e)
  // console.log(layoutRef.value?.position())
  // console.log(footerRef.value?.style.height)
  if (IfRead.value == false) return;
  //变量scrollTop是滚动条滚动时，距离顶部的距离
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  //变量windowHeight是可视区的高度
  var windowHeight =
    document.documentElement.clientHeight || document.body.clientHeight;
  //变量scrollHeight是滚动条的总高度
  var scrollHeight =
    document.documentElement.scrollHeight || document.body.scrollHeight;
  //滚动条到底部的条件
  // console.log(footerRef.value?.getBoundingClientRect().bottom)
  if (footerRef.value?.getBoundingClientRect().bottom < 800) {
    // console.log(1)
    if (loading) return;
    // console.log(2)
    if (offset + 10 < count) {
      //    console.log(3)
      loading = true;
      offset += 10;
      getPosts(false);
    } else {
      //    console.log(4)
      if (count != 0) {
        //    console.log(5)
        if (!showBottom) {
          console.log(6);
          message.success("已经加载完啦");
          showBottom = true;
        }
      }
    }
    // console.log("距顶部" + scrollTop + "可视区高度" + windowHeight + "滚动条总高度" + scrollHeight);
    // alert('已经滚到底部了了！');
  }
};
onUnmounted(() => {
  window.onscroll = null;
});
onBeforeMount(() => {
  window.onscroll = function () {
    handleScroll();
  };
  IfRead.value = false;
  getPosts();
});
onMounted(() => {
  subTitles[1926] = "搜索";
  getTags();
  gsap.set("#publishedPost", {
    color: "#DDAA83",
  });
});
let tagsAll: any[] = [];
const  axiosUserRead=()=>{
  axios.post('/post/read', {
        user_id:User.Id
      })
        .then(function (response) {
          // 处理成功情况
          console.log(response.data)
          if(response.data?.success){
                message.success("经验增加")
          }else{
             message.error(response.data.message)
          }
          console.log(response.data)
        }
      )

}
const getTags = (clear: boolean = false) => {
  axios
    .get("/post/get_section_tags", {
      params: {
        section: Block.section,
      },
    })
    .then(function (response) {
      // 处理成功情况
      if (clear) {
        while (tagList.length != 0) tagList.pop();
        while (tagsAll.length != 0) tagsAll.pop();
      }
      if (response.data?.success) {
        // message.success(response.data.message)
        console.log(response.data.data);
        let i = 0;
        if (response.data.data != null)
          for (i = 0; i < response.data.data.length; i++) {
            let t = {
              name: response.data.data[i].name,
              type: "default",
              secondary: true,
              choose: false,
              src: "svg/板块界面svg/list-1.svg",
            };
            tagList.push(t);
            tagsAll.push(t);
          }
        // User.Login=true;
        // localStorage.setItem("login","true")
        // router.push("/")
      } else {
        //  message.error(response.data.message)
      }
      // console.log(response.data)
    });
};
const show = (order1: string) => {
  order = order1;
  offset = 0;
  // getPosts();
  if (order1 == "top") {
    getPosts();
    typeNew.value = "default";
    typeTop.value = "info";
    typeHot.value = "default";
  }
  if (order1 == "new") {
    getPosts();
    typeNew.value = "info";
    typeTop.value = "default";
    typeHot.value = "default";
  }
  if (order1 == "hot") {
    getPosts();
    typeNew.value = "default";
    typeTop.value = "default";
    typeHot.value = "info";
  }
};

Block.$subscribe((mutation, state) => {
  // import { MutationType } from 'pinia'
  //   mutation.type // 'direct' | 'patch object' | 'patch function'
  // 与 cartStore.$id 相同
  //   mutation.storeId // 'cart'
  // 仅适用于 mutation.type === 'patch object'
  //   mutation.payload // 补丁对象传递给 to cartStore.$patch()
  showBottom = false;
  offset = 0;
  clickRead();
  getPosts();
  if (!Block.search) getTags(true);
  else {
    while (tagList.length != 0) tagList.pop();
  }

  // 每当它发生变化时，将整个状态持久化到本地存储
  //   localStorage.setItem('cart', JSON.stringify(state))
});

var myDate = new Date();
const getPosts = (clear: boolean = true) => {
  let countt = 0;
  let tags = [];
  let i = 0;
  for (i = 0; i < tagList.length; i++) {
    if (tagList[i]!.choose) {
      let t = {
        name: tagList[i]!.name,
      };
      tags.push(t);
    }
  }
  let url = "get";
  if (Block.search) url = "search";
  //   section.value=parseInt(localStorage.getItem("section")+"")
  let ttag = tags;
  if (Block.search) ttag = [];
  console.log(Block.searchText);
  axios({
    url: axios.defaults.baseURL + "/post/" + url,
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      offset: offset,
      length: 10,
      section: Block.section,
      order: order,
      tags: ttag,
      fliters: Block.searchText.trim().split(/\s+/),
      user_id: User.Id,
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
    console.log(response.data);
    if (clear) while (posts.length != 0) posts.pop();
    console.log(response.data);
    IfRead.value = true;
    if (response.data?.success) {
      count = response.data?.count;

      let i = 0;

      if (response.data.data != null) countt = response.data.data.length;
      console.log(countt);
      if (countt == 0) {
        message.success("没有帖子了");
      }
      if (response.data.data != null)
        for (i = 0; i < response.data.data.length; i++) {
          let temp = reactive({
            tags: response.data.data[i].tags.map((tag: any) => {
              return tag.name;
            }),
            title: response.data.data[i].post.title,
            watches: response.data.data[i].post.views,
            // comments: response.data[i].post.,
            comments: response.data.data[i].post.comment,
            ups: response.data.data[i].post.like,
            time:
              myDate.toLocaleString() + response.data.data[i].post.create_time,
            content: response.data.data[i].post.content,
            name: response.data.data[i].post.username,
            post_id: response.data.data[i].post.post_id,
            time_weeks: response.data.data[i].create_time_weeks,
            time_days: response.data.data[i].create_time_days,
            time_hours: response.data.data[i].create_time_hours,
            time_mins: response.data.data[i].create_time_mins,
            // user
            // create_time: "2022-06-03T11:23:11+08:00"
            // // dislike: 0
            // last_comment_time: "2022-06-03T11:23:11+08:00"

            // section: response.data.data[i].post.section,
            user_id: response.data.data[i].post.user_id,
            like_status: response.data.data[i].like_status,
            src: response.data.data[i].user.avatar_url,
          });
          // axios({
          //   url: axios.defaults.baseURL + "/user/info",
          //   method: "post",
          //   // headers: {
          //   //   "Content-Type": "application/json",
          //   // },
          //   data: {
          //     user_id: response.data.data[i].post.user_id
          //   },
          //   // transformRequest: [
          //   //   function (data, headers) {
          //   //     let data1 = JSON.stringify(data);
          //   //     console.log(data1);
          //   //     return data1;
          //   //   },
          //   // ],
          // }).then(function (response) {
          //   console.log(response.data)
          //   if (response.data.status) {
          //     if (response.data.data.avatar_url != "")
          //       temp.src = response.data.data.avatar_url
          //   }

          // })
          // if (response.data.data[i].image) {
          //   temp.src = response.data.data[i].image;
          // }
          if(response.data.data[i].user.avatar_url=="")temp.src="http://43.138.77.133:81/media/avatars/default.jpg"
          posts.push(temp);
        }

      console.log(posts);
      loading = false;
      // User.Name=modelRef.value.name,
      // User.Id=response.data.data.user_id,
    } else {
    }
  });
};

const checkDelete = ref<Boolean>(false);
let deleteId = 0;
const cancelDelete = ()=>{
  checkDelete.value = false;
}

const concernDelete = ()=>{
  let i = 0;
  for(i=0;i<posts.length;++i)
  {
    if(posts[i].post_id == deleteId)
    {
      axios.post("/post/delete",{
        user_id:posts[i].user_id,
        post_id:posts[i].post_id
      })
      posts.splice(i,1);
      break;
    }
  }
  checkDelete.value = false;
}

const delPost = (id: number)=>{
  deleteId = id
  checkDelete.value = true; 
}

//#region 动效
const rotateArrow = () => {
  gsap.to("#arrow", {
    duration: 0.1,
    rotation: 180,
  });
};

const returnArrow = () => {
  gsap.to("#arrow", {
    duration: 0.1,
    rotation: 0,
  });
};
//#endregion
import { RouterLink } from "vue-router";
// const menuOptions: MenuOption[] = [
//   {
//     label: () =>
//         clickPublish,
//     key: 'hear-the-wind-sing',
//     icon: renderIcon(BookIcon)
//   }]
</script>

<style scoped>
.posts-move {
  transition: transform 1s;
}

.list-item {
  position: relative;
  margin-top: 0;
  margin-bottom: 0;
  height: 41px;
  background-color: #fff;
  cursor: pointer;
}

.list-enter,
.list-leave-to

/* .list-complete-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

.list-leave-active {
  position: absolute;
}

.tagDeco {
  display: inline-block;
  height: 41px;
  width: 5px;
  background-color: #9fa6b2;
}

.selectTagDeco {
  display: inline-block;
  position: absolute;
  width: 0;
  height: 41px;
  background-color: #fcf4ec;
  left: 5px;
}

.selectTagDeco:hover {
  background-color: #ffefde;
}

.tag {
  position: absolute;
  left: 5px;
  display: inline-block;
  padding-left: 50px;
  padding-top: 9px;
  padding-bottom: 9px;
  vertical-align: middle;
  margin: 0;
}

.list-item:hover {
  background-color: #f4f8ff;
}

.tagText {
  color: #9fa6b2;
  font-family: Roboto;
  font-weight: bold;
  font-size: 13px;
  line-height: normal;
  letter-spacing: 2px;
  text-align: left;
  margin-left: 12px;
}

.subTitle {
  color: #4f4f4f;
  font-family: Poppins;
  font-weight: bold;
  font-size: 26px;
  line-height: normal;
  letter-spacing: 0px;
  text-align: left;
}

.buttonChange:active {
  animation: rubberBand;
  animation-duration: 1s;
}

.navicateHeader {
  color: #808080;
  font-family: Roboto;
  font-weight: bold;
  font-size: 17px;
  line-height: normal;
  letter-spacing: 2px;
  text-align: left;
}

.leftPriButton {
  padding-top: 7px;
  padding-bottom: 2px;
  padding-left: 7px;
}
.leftPriButton:hover {
  background-color: #f8f5f3;
}

.publishTiezi {
  color: #969494;
  font-family: Roboto;
  font-weight: bolder;
  font-size: 14px;
  line-height: normal;
  letter-spacing: 5px;
  text-align: left;
  vertical-align: middle;
}

.n-layout {
  /* color: var(--n-text-color); */
  /* background-color: var(--n-color); */
  box-sizing: border-box;
  position: relative;
  z-index: auto;
  flex: auto;
  overflow: hidden;
  background-color: #fafafa;
  background-image: url("../../../../public/index/Cover.svg");
  /* background-image:url("http://43.138.77.133:81/media/images/admin/Cover.svg"); */
  background-repeat: no-repeat;
  background-size: 100%;
  /* background-size:cover; */
  /* height:100%; */
}

.carou {
  position: fixed;
  /* left: 1250px; */
  top: 125px;
}

.carouImage {
  width: 240px;
  object-fit: cover;
}

.contactUsBlock {
  position: fixed;
  width: 215px;
  height: 135px;
  /* left: 1250px; */
  top: 483px;
  padding: 16px;
  border-radius: 24px;
  background: #bdeaff;
  overflow: visible;
}

.contactText {
  color: #ffffff;
  font-family: Poppins;
  font-weight: bold;
  font-size: 16px;
  line-height: 1.4;
  letter-spacing: 0px;
  text-align: left;
}

.subContactText {
  color: #959ba5;
  font-family: Poppins;
  font-weight: medium;
  font-size: 14px;
  line-height: 1.4;
  letter-spacing: 0px;
  text-align: left;
  margin-top: 4px;
}

.contactButton {
  color: #ffffff;
  background: linear-gradient(120deg, #fcafdd 0%, #ffca94f4 100%);
  margin-top: 12px;
}

.contactRocket {
  position: absolute;
  left: 168px;
  top: 37px;
  width: 40%;
}

.pointer {
  cursor: pointer;
}
.ensureButtonText{
  color: #ffffff;
  font-family: nunito-sans, sans-serif;
  font-weight: bold;
  font-size: 14px;
  line-height: normal;
  letter-spacing: 2px;
  text-align: left;
}
</style>
