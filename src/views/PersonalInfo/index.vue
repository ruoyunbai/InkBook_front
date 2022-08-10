<template>
  <!-- <Header></Header> -->
  <n-layout style="background-color: #FFF8E8"
  >
    <div class="card">

      <div class="card_title">
        <span>
          <n-image src="svg\personal_svg\card.svg" />
        </span>
        <span class="card_word">个人信息</span>
      </div>
      <div class="card_body">
        <div class="body_left">
          <n-space vertical align="center">
            <n-avatar :size="90" :src="Ava" style="border-radius: 10px"></n-avatar>
            <span class="NAME">{{ Name }}</span>
            <n-button
                color="#F5B544"
                size="large"
                @click="UserExit"
                style="border-radius: 5px 5px 5px 20px; width: 120px;height: 40px;"
                v-show="isSelf"
            >
              <p class="buttonText3">退出登录</p>
            </n-button>
            <n-button
                color="#F5B544"
                size="large"
                @click="ha"
                style="border-radius: 5px 5px 5px 20px; width: 120px;height: 40px;"
            >
              <p class="buttonText3">编辑个人信息</p>
            </n-button>
          </n-space>
        </div>
        <div class="body_mid">
          <div class="user_info">
            <div class="info_icon">
              <n-image preview-disabled  class="info_img" src="svg\personal_svg\nickname.svg" />
            </div>
            <div class="info_word">
              <div class="info">昵称：{{nickName}}</div>
            </div>
          </div>
          <div class="user_info">
            <div class="info_icon">
              <n-image preview-disabled  class="info_img" src="svg\personal_svg\name.svg" />
            </div>
            <div class="info_word">
              <div class="info">姓名：{{realName}}</div>
            </div>
          </div>
          <div class="user_info">
            <div class="info_icon">
              <n-image  preview-disabled class="info_img" src="svg\personal_svg\email.svg" />
            </div>
            <div class="info_word">
              <div class="info">邮箱：{{email}}</div>
            </div>
          </div>
        </div>
        <div class="body_right">
          <n-image  preview-disabled src="svg\personal_svg\trophy.svg" />
        </div>
      </div>
      <div class="card_img">
        <n-image preview-disabled src="svg\personal_svg\rocket1.svg" />
        <n-image  preview-disabled src="svg\personal_svg\rocket2.svg" />
        <n-image  preview-disabled src="svg\personal_svg\stars.svg" />
      </div>
    </div>
  </n-layout>
</template>

<script setup lang="ts">
import {
  onUpdated,
  toRaw,
  reactive,
  onBeforeMount,
  ref,
  onMounted,
  StyleValue,
  Ref,
  getCurrentInstance,
  h,
} from "vue";
import { useDialog, NInput } from "naive-ui";
// import Vditor from 'vditor'
import axios from "axios";
import { InputInst, useMessage } from "naive-ui";
import { useRoute } from "vue-router"
import { useRouter} from 'vue-router'

import { useUserStore } from "../../store/User";
const User = useUserStore();
const message = useMessage();
const route = useRoute();
const nickName: any = ref("");
const realName: any = ref("");
const email: any = ref("");
onMounted(()=>{
    get_info();
    console.log( "!!route.params.user_id"+route.params.user_id);
})
const get_info = () =>{
  axios({
    url: axios.defaults.baseURL + "/user/info",
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Authorization": User.token
    },
    data: {
      user_id: +route.params.user_id
    },
    transformRequest: [
      function (data, headers) {
        let data1 = JSON.stringify(data);
        return data1;
      },
    ],
  }).then(function (response) {
    // 处理成功情况
    console.log(response.data);
    if (response.data?.success) {
      nickName.value = response.data.user.username,
      email.value=response.data.user.email,
      realName.value=response.data.user.real_name
      console.log( "!!nickName"+nickName.value);
      console.log( "!!email"+email);
      console.log( "!!realName"+realName);
    } else {
      message.error(response.data?.message);
    }
    console.log(response.data);
  });
}


</script>


<!-- <script setup lang="ts">
import { onMounted, Ref, reactive, onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";
import {
  FormInst,
  FormItemInst,
  FormItemRule,
  useMessage,
  FormRules,
} from "naive-ui";
// import Header from "../layout/header/index.vue";


import { useUserStore } from "../../store/User";
import { useBlockStore } from "../../store/Block";
import axios from "axios";
import { gsap } from "gsap";
import { AnyKindOfDictionary } from "lodash";
import { defineComponent, ref } from "vue";
import { ElMessageBox } from "element-plus";


const User = useUserStore();
const page = ref(2);
const posPage=ref(0)
const IfEdit: Ref<boolean> = ref(false);
const IfRead: Ref<boolean> = ref(true);
const checked: Ref<boolean> = ref(false);

const check2 = ref<boolean>(false);
const check3 = ref<boolean>(false);
const greenOut = ref<boolean>(false);

const router = useRouter();
const route = useRoute();
const isadmin = ref<boolean>(false);
const isSelf = ref<boolean>(false);
const isGreen = ref<boolean>(true);

let polist: any[] = reactive([]);
let sysmeslist: any[] = reactive([]);
let likelist: any[] = reactive([]);
let comlist: any[] = reactive([]);
let banlist: any[] = reactive([]);

const onpoList: any[] = reactive([]);
const onsysmesList: any[] = reactive([]);
const onlikeList: any[] = reactive([]);
const oncomList: any[] = reactive([]);
const onbanList: any[] = reactive([]);

const postPage = ref<number>(1);
const mesPage = ref<number>(1);
const banPage = ref<number>(1);
let sysPage = 1;
let likePage = 1;
let commentPage = 1;

const atTab = ref<string | number>("SystemNotif");

const Ava: any = ref("");
const Name: any = ref("");
const Age: any = ref("");
const Gender: any = ref("");
const Email: any = ref("");
const Level: any = ref();
const Exp: any = ref();
const percentage: any = ref(67);
let npost = ref<number>(0);
let nlike = ref<number>(0);
let ncomment = ref<number>(0);
let nsysmes = ref<number>(0);
let mesat = ref<number>(0);
let nban = ref<number>(0);

let countt = 0;
// const in_id:any=ref("");

const greenOutHandler = () => {
  greenOut.value = false;
  isGreen.value = false;
};

const switchTab = (value: string | number) => {
  atTab.value = value;
  switch (value) {
    case "SystemNotif": {
      mesat.value = nsysmes.value;
      mesPage.value = sysPage;
      break;
    }
    case "LoveNotif": {
      mesat.value = nlike.value;
      mesPage.value = likePage;
      break;
    }
    case "CommentNotif": {
      mesat.value = ncomment.value;
      mesPage.value = commentPage;
      break;
    }
  }
};

const mesPageHandler = (page: number) => {
  let i = (page - 1) * 5;
  switch (atTab.value) {
    case "SystemNotif": {
      onsysmesList.length = 0;
      for (; i < page * 5; ++i) {
        if (i >= sysmeslist.length) {
          break;
        }
        onsysmesList.push(sysmeslist[i]);
      }
      sysPage = page;
      break;
    }
    case "LoveNotif": {
      onlikeList.length = 0;
      for (; i < page * 5; ++i) {
        if (i >= likelist.length) {
          break;
        }
        onlikeList.push(likelist[i]);
      }
      likePage = page;
      break;
    }
    case "CommentNotif": {
      oncomList.length = 0;
      for (; i < page * 5; ++i) {
        if (i >= comlist.length) {
          break;
        }
        oncomList.push(comlist[i]);
      }
      commentPage = page;
      break;
    }
  }
  mesPage.value=page
};

const posPageHandler = (page: number) => {
  let i = (page - 1) * 3;
  onpoList.length = 0;
  for (; i < page * 3; ++i) {
    if (i >= polist.length) {
      break;
    }
    onpoList.push(polist[i]);
  }
};

onBeforeMount(() => {
  let block = useBlockStore();
  block.block = "";
  block.section = -1;
});
onMounted(() => {
  let in_id = route.query.user_id as string;
  localStorage.setItem("nowID", in_id);
  let t2 = localStorage.getItem("user_ID");
  if (t2 == "9982443") {
    isadmin.value = true;
  } else {
    isadmin.value = false;
  }



   axios({
        url: axios.defaults.baseURL + "/user/info",
        method: "post",
        headers: {
          "Content-Type": "application/json",
           "Authorization":User.token
        },
        data: {
          user_id:1,
        },
        transformRequest: [
          function (data, headers) {
            let data1 = JSON.stringify(data);

            return data1;
          },
        ],
      }).then(function (response) {
      console.log("response",response);
      if (response.data?.success) {
        console.log(response.data)
        let poster=response.data.poster
        Name.value = poster.Username;
        Age.value = poster.Age;
        Gender.value = poster.sex;
        Email.value =poster.email;

        // Ava.value = response.data.data.avatar_url;



      } else {
        message.error("查询失败...");
      }
      isSelf.value = true;
      console.log(isGreen.value);

    });

  expTween();
  console.log(isadmin);
  console.log(isSelf);
  // console.log("yes")
});
const formRef = ref<FormInst | null>(null);

const handleValidateButtonClick3 = (e: MouseEvent) => {
  e.preventDefault();
  let in_id = Number(localStorage.getItem("nowID"));
  console.log(in_id);
  //formRef.value?.validate((errors) => {
  // let t1=localStorage.getItem("user_ID")
  console.log("test");
  //if (!errors) {
  // console.log(t1.toString)

};

//  } else {
//    console.log(errors)
//     message.error('禁言失败')
//  }
//}
//)

const expTween = () => {
  let timeline = gsap.timeline();
  timeline.to("#exp51", {
    duration: 1,
    x: "+=2",
    scale: 1.5,
    repeat: Infinity,
    yoyo: true,
  });
  timeline.to(
    "#exp52",
    {
      duration: 1,
      x: "+=2",
      scale: 1.5,
      repeat: Infinity,
      yoyo: true,
    },
    "<0.3"
  );
  timeline.to(
    "#exp53",
    {
      duration: 1,
      x: "+=2",
      scale: 1.5,
      repeat: Infinity,
      yoyo: true,
    },
    "<0.3"
  );
};

const message = useMessage();
const UserExit = () => {
  message.success("退出成功");
  User.Login=false;
  localStorage.setItem("login", "false");
  localStorage.setItem("Login", "false");
  localStorage.setItem("user_ID", "null");
  router.push("/");
};
const routerToLevel = () => {
  router.push("/Level");
};
const routerToExperience = () => {
  router.push("/Experience");
};
const routerToChangeProfile = () => {
  router.push("/changeProfile");
};
const routerToChangePassword = () => {
  router.push("/changePassword");
};
const posttest = reactive({
  tags: ["go", "python"],
  title: "title",
  content: "content",
  watches: 5,
  comments: 6,
  ups: 7,
});
const notifTestlikepost = reactive({
  username: "Lyc",
  title: "titletest",
  time: "20220518T0925",
  type: 0,
  user_avatar: "http://43.138.77.133:81/media/avatars/default.jpg",
});
const notifTestlikecomment = reactive({
  username: "Lyc",
  title: "titletest",
  time: "20220518T0925",
  type: 1,
  user_avatar: "http://43.138.77.133:81/media/avatars/default.jpg",
});
const notifTestcomment = reactive({
  username: "Lyc",
  title: "titletest",
  time: "20220518T0925",
  type: 2,
  user_avatar: "http://43.138.77.133:81/media/avatars/default.jpg",
});
const ModifyGreenbird = () => {
  router.push({
    path: "/greenbird",
    query: {
      modifying: "true",
    },
  });
};
</script> -->

<style scoped>
/*.ban {*/
/*  border-radius: 10px;*/
/*  background: #5aa8d7;*/
/*}*/
.card {
  padding: 0;
  border-radius: 24px;
  background-color: #FFF8E8;
  height: 850px;
  /*box-shadow: 10px 10px 80px 0px #3f276619;*/
  overflow: hidden;
}

.card_title{
  margin-left: 123px;
  margin-top: 83px;
  width: 200px;
  height: 50px;
  position: relative;
}

.card_word{
  position: absolute;
  width: 128px;
  height: 24px;
  margin-left: 10px;
  margin-top: 8px;

  font-family: 'Inria Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 24px;
}

.card_body{
  width: 100%;
  height: 400px;
  position: relative;
}

.body_left{
  width: 120px;
  height: 120px;
  margin-left: 160px;
  margin-top: 100px;
  position: absolute;
}

.body_mid{
  width: 544px;
  height: 350px;
  margin-left: 456px;
  padding-top: 50px;
  position: absolute;
}

.user_info{
  width: 544px;
  height: 80px;
  margin-top: 20px;
  position: relative;
}

.info_icon{
  height: 50px;
  width: 50px;
  background-color: #F5B544;
  border-radius: 25px;
  position: absolute;
}

.info_img{
  height: 24px;
  width: 24px;
  margin-left: 13px;
  margin-top: 13px;
}

.info_word{
  margin-top: 12px;
  margin-left: 70px;
  position: absolute;
}

.body_right{
  position: absolute;
  margin-left: 93%;
  margin-top: 300px;
}

.card_img{
  width: 100%;
  height: 400px;
  position: relative;
}

.downDivider {
  padding-top: 0px;
}
.info {
  color: #242424;
  font-family: nunito-sans, sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: normal;
  letter-spacing: 0px;
  text-align: left;
  display: inline-block;
  height: 0%;
  vertical-align: middle;
}
.infoname {
  color: #242424;
  font-family: nunito-sans, sans-serif;

  font-size: 16px;
  line-height: normal;
  letter-spacing: 0px;
  text-align: left;
  /*display: inline-block;*/
  height: 0%;
  vertical-align: middle;
}
.level {
  color: #242424;
  font-family: nunito-sans, sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: normal;
  letter-spacing: 0px;
  text-align: center;
}
.buttonText {
  color: #f48023;
  font-family: nunito-sans, sans-serif;
  font-weight: bold;
  font-size: 14px;
  line-height: normal;
  letter-spacing: 2px;
  text-align: left;
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
.buttonText3 {
  color: white;
  font-family: nunito-sans, sans-serif;
  font-weight: bold;
  font-size: 14px;
  line-height: normal;
  letter-spacing: 2px;
  text-align: left;
}
.subtitle {
  position: relative;
  bottom: 11px;
  color: #242424;
  font-family: nunito-sans, sans-serif;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 0px;
  text-align: left;
}
.subtitle2 {
  position: relative;
  bottom: 7px;
  color: #242424;
  font-family: nunito-sans, sans-serif;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 0px;
  text-align: left;
}
.bartext {
  position: relative;
  bottom: 5px;
  font-family: Roboto, sans-serif;
  color: #594545;
  font-size: 14px;
  text-align: left;
}

.pageNum {
  color: #24273056;
  font-family: poppins, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;
  letter-spacing: 0px;
  text-align: center;
  /* //margin:0 auto; */
}
.bg {
  position: absolute;
  left: 660px;
  top: 50px;
  height: 500px;
  width: 200px;
}
.bg2 {
  position: absolute;
  left: 300px;
  top: 50px;
  height: 500px;
  width: 200px;
}
.NAME {
  color: #242424;
  font-family: nunito-sans, sans-serif;
  font-weight: bold;
  font-size: 32px;
  line-height: normal;
  letter-spacing: 0px;
  text-align: center;
}
.check {
  position: absolute;
  left: 247px;
}
.expText {
  position: absolute;
  color: #f48023;
  font-family: Nunito Sans;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
}
</style>
