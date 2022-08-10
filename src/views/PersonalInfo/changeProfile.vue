<template>
  <n-layout style="background-color: #FFF8E8"
  >
    <div class="card">

      <div class="card_title">
        <span>
          <n-image preview-disabled src="svg\personal_svg\card.svg" />
        </span>
        <span class="card_word">修改个人信息</span>
      </div>
      <div class="card_body">
        <div class="body_left">
          <n-space vertical align="center">
            <n-avatar :size="90" :src="User.avatar" style="border-radius: 10px"></n-avatar>
            <span class="NAME">{{ User.Name }}</span>
<!--            <n-button-->
<!--                color="#F5B544"-->
<!--                size="large"-->
<!--                @click="UserExit"-->
<!--                style="border-radius: 5px 5px 5px 20px; width: 120px;height: 40px;"-->
<!--                v-show="isSelf"-->
<!--            >-->
<!--              <p class="buttonText3">退出登录</p>-->
<!--            </n-button>-->
  <el-upload ref="upload"
            action="https://inkbook.mina.moe/api/v1/user/upload_avatar"
            :data="{
                    'user_id': t2,
            }"
            :headers="{
              Authorization: User.token
            }"
            name='avatar'
            :show-file-list="true"
            :on-success="
            changeAvatar
            "
        >
              <n-button type="info" round size="medium" color="#F5B544"
                      style="border-radius: 5px 5px 5px 20px; width: 120px;height: 40px;"  >
                <n-icon size="22" color="white">
                    <svg
                    width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.03536 1.88135C4.26 1.88135 2.01013 3.98689 2.01013 6.58422V15.99C2.01013 18.5873 4.26 20.6928 7.03536 20.6928H17.0858C19.8612 20.6928 22.111 18.5873 22.111 15.99V11.2871C22.111 10.7676 21.6611 10.3465 21.106 10.3465C20.5509 10.3465 20.101 10.7676 20.101 11.2871V15.99C20.101 17.5483 18.751 18.8117 17.0858 18.8117H7.03536C5.37015 18.8117 4.02022 17.5483 4.02022 15.99V6.58422C4.02022 5.02582 5.37015 3.7625 7.03536 3.7625H12.0606C12.6157 3.7625 13.0656 3.34139 13.0656 2.82192C13.0656 2.30246 12.6157 1.88135 12.0606 1.88135H7.03536Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3091 3.56791C19.084 2.4214 17.0977 2.42139 15.8726 3.56791L8.72849 10.2538C8.34207 10.6154 8.06794 11.0685 7.9354 11.5647L7.06539 14.8215C6.97977 15.142 7.08012 15.4811 7.32975 15.7147C7.57939 15.9483 7.94169 16.0422 8.28419 15.9621L11.7642 15.1479C12.2944 15.0238 12.7786 14.7673 13.165 14.4057L20.3091 7.7198C21.5342 6.57329 21.5342 4.71442 20.3091 3.56791ZM17.294 4.89808C17.7341 4.4862 18.4477 4.4862 18.8878 4.89808C19.3279 5.30996 19.3279 5.97775 18.8878 6.38963L11.7436 13.0755C11.6148 13.196 11.4534 13.2816 11.2767 13.3229L9.42173 13.7569L9.88548 12.0209C9.92965 11.8555 10.021 11.7045 10.1498 11.5839L17.294 4.89808Z" fill="white"/>
                    </svg>
                </n-icon>
                <span class="buttonText3">&nbsp;上传头像</span>
            </n-button>
                        
        </el-upload>
            
          </n-space>
        </div>
        <div class="body_mid">
          <n-from
            label-width="100px"
            size="small"
            label-placement="left"
            require-mark-placement="right-hanging"
          >
            <n-form-item>
              <n-input v-model:value="newName" placeholder="请输入新的用户名" />
            </n-form-item>
            <n-form-item>
              <n-input  v-model:value="newSex" placeholder="请输入新的性别" />
            </n-form-item>
            <n-form-item>
              <n-input v-model:value="newReal"  placeholder="请输入新的真实姓名" />
            </n-form-item>
            <n-form-item>
              <n-input v-model:value="newMail" placeholder="请输入新的邮箱" />
            </n-form-item>
            <n-button type="info" round size="medium" color="#F5B544" @click="modify_info()"
                      style="border-radius: 5px 5px 5px 20px; width: 120px;height: 40px; margin-left: 78%"  >
              <span class="buttonText3">确认修改</span>
            </n-button>
          </n-from>

        </div>
        <div class="body_right">
          <n-image preview-disabled src="svg\personal_svg\trophy.svg" />
        </div>
      </div>
      <div class="card_img">
        <n-image preview-disabled src="svg\personal_svg\rocket1.svg" />
        <n-image preview-disabled src="svg\personal_svg\rocket2.svg" />
        <n-image preview-disabled src="svg\personal_svg\stars.svg" />
      </div>
    </div>
  </n-layout>
</template>

<script setup lang="ts">
import { onMounted,Ref,reactive } from 'vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { ElMessageBox,ElMessage  } from 'element-plus'
import {
  FormInst,
  FormItemInst,
  FormItemRule,
  useMessage,
  FormRules
} from 'naive-ui'
import { Plus } from '@element-plus/icons-vue'

import type { UploadProps } from 'element-plus'
// import Header from "../../components/block/header/index.vue";
import Main from "../../components/block/main/index.vue";
import axios from 'axios'
import { useUserStore } from "../../store/User";
const User=useUserStore();

const isSelf=ref(true)
let t2 =  localStorage.getItem("user_ID");
const message = useMessage()
const router = useRouter()
const cancelProfileChanging=ref(false)

const Ava: any = ref("")
const newName= ref("")
const newReal= ref("")
const newSex= ref("")
const newMail= ref("")
const changeAvatar=(res:any)=>{
              // console.log(res)
              User.avatar='https://inkbook.mina.moe/media/avatars/'+res.avatar_url
      }
const modify_info = ()=>{

    axios({
    url: axios.defaults.baseURL + "/user/modify_info",
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Authorization": User.token
    },
    data: {
      age: 0,
      real_name: newReal.value,
      email: newMail.value,
      sex: newSex.value,
      username: newName.value
    },
    transformRequest: [
      function (data, headers) {
        let data1 = JSON.stringify(data);
        return data1;
      },
    ],
  }).then(function (response) {
    User.Name=newName.value;
    console.log(":!!!"+newReal.value);
    console.log(":!!!"+newMail.value);
    console.log(":!!!"+newSex.value);
    console.log(":!!!"+newName.value);
    // 处理成功情况
    console.log(response.data);
    if (response.data?.success) {
      console.log(response);
    } else {
      message.error(response.data?.message);
    }
    console.log(response.data);
  });
}


</script>

<style scoped>
#notice{
    color: #303972;
    font-family: nunito-sans, sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: normal;
    letter-spacing: 0px;
    text-align: center;
}
.el-dialog__body {
      display: flex;
      justify-content: center;
      align-content: center;
}
.inputline{
    margin-bottom: 45px;
}
.Avatar{
    margin-bottom: 40px;
}
.test{
    padding:50px;
}
.textline{
    padding:10px;
}
.headertext{
    color: #242424;
    font-family: nunito-sans, sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: normal;
    letter-spacing: 0px;
    text-align: left;
    /* display: inline-block;
    height: 0%; */
    vertical-align: middle;
}
.buttonText{
    color: #FFFFFF;
    font-family: nunito-sans, sans-serif;
    font-weight: bold;
    font-size: 14px;
    line-height: normal;
    letter-spacing: 2px;
    text-align: left;
}
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
  width: 168px;
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
