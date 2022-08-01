<template>
  <Header></Header>
  <n-layout embedded content-style="padding: 15px 40px 15px 40px;"
    ><!--背景暗一些 突出上面的卡片-->
    <n-card
      style="
        border-radius: 24px;
        background: #ffffff;
        box-shadow: 10px 10px 80px 0px #3f276619;
      ">
      <n-layout content-style="padding: 28px;"></n-layout>
      <n-space vertical align="center" class="Avatar">
          <n-avatar
                round
                :size="100"
                :src="Ava"
              ></n-avatar>
        <el-upload ref="upload"
            action="http://43.138.77.133:8889/api/v1/user/upload_avatar"
            :data="{
                    'user_id': t2,
                }"
            name='avatar'
            :show-file-list="true"
            :on-success="
            routerToPersonalInfo
            "
        >
            <n-button type="info" round size="medium" color="#5AA8D7AD" style="border-radius:10px;"  >
                                <n-icon size="22" color="white">
                                    <svg 
                                    width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.03536 1.88135C4.26 1.88135 2.01013 3.98689 2.01013 6.58422V15.99C2.01013 18.5873 4.26 20.6928 7.03536 20.6928H17.0858C19.8612 20.6928 22.111 18.5873 22.111 15.99V11.2871C22.111 10.7676 21.6611 10.3465 21.106 10.3465C20.5509 10.3465 20.101 10.7676 20.101 11.2871V15.99C20.101 17.5483 18.751 18.8117 17.0858 18.8117H7.03536C5.37015 18.8117 4.02022 17.5483 4.02022 15.99V6.58422C4.02022 5.02582 5.37015 3.7625 7.03536 3.7625H12.0606C12.6157 3.7625 13.0656 3.34139 13.0656 2.82192C13.0656 2.30246 12.6157 1.88135 12.0606 1.88135H7.03536Z" fill="white"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3091 3.56791C19.084 2.4214 17.0977 2.42139 15.8726 3.56791L8.72849 10.2538C8.34207 10.6154 8.06794 11.0685 7.9354 11.5647L7.06539 14.8215C6.97977 15.142 7.08012 15.4811 7.32975 15.7147C7.57939 15.9483 7.94169 16.0422 8.28419 15.9621L11.7642 15.1479C12.2944 15.0238 12.7786 14.7673 13.165 14.4057L20.3091 7.7198C21.5342 6.57329 21.5342 4.71442 20.3091 3.56791ZM17.294 4.89808C17.7341 4.4862 18.4477 4.4862 18.8878 4.89808C19.3279 5.30996 19.3279 5.97775 18.8878 6.38963L11.7436 13.0755C11.6148 13.196 11.4534 13.2816 11.2767 13.3229L9.42173 13.7569L9.88548 12.0209C9.92965 11.8555 10.021 11.7045 10.1498 11.5839L17.294 4.89808Z" fill="white"/>
                                    </svg>
                                </n-icon>
                                <span class="buttonText">&nbsp;上传图片</span>
                            </n-button>
        </el-upload>
                <!-- <n-upload
                        accept="image/jpeg,image/png"
                        action="http://43.138.77.133:8889/api/v1/user/upload_avatar"
                        :headers="{
                            'accept': 'application/json',
                            'Content-Type':'multipart/form-data',
                        }"
                        name='avatar'
                        :data="{
                            'user_id': '9982444',
                        }"
                >
                    <n-button type="info" round size="medium" color="#5AA8D7AD" style="border-radius:10px;">
                        <n-icon size="22" color="white">
                        <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.03536 1.88135C4.26 1.88135 2.01013 3.98689 2.01013 6.58422V15.99C2.01013 18.5873 4.26 20.6928 7.03536 20.6928H17.0858C19.8612 20.6928 22.111 18.5873 22.111 15.99V11.2871C22.111 10.7676 21.6611 10.3465 21.106 10.3465C20.5509 10.3465 20.101 10.7676 20.101 11.2871V15.99C20.101 17.5483 18.751 18.8117 17.0858 18.8117H7.03536C5.37015 18.8117 4.02022 17.5483 4.02022 15.99V6.58422C4.02022 5.02582 5.37015 3.7625 7.03536 3.7625H12.0606C12.6157 3.7625 13.0656 3.34139 13.0656 2.82192C13.0656 2.30246 12.6157 1.88135 12.0606 1.88135H7.03536Z" fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3091 3.56791C19.084 2.4214 17.0977 2.42139 15.8726 3.56791L8.72849 10.2538C8.34207 10.6154 8.06794 11.0685 7.9354 11.5647L7.06539 14.8215C6.97977 15.142 7.08012 15.4811 7.32975 15.7147C7.57939 15.9483 7.94169 16.0422 8.28419 15.9621L11.7642 15.1479C12.2944 15.0238 12.7786 14.7673 13.165 14.4057L20.3091 7.7198C21.5342 6.57329 21.5342 4.71442 20.3091 3.56791ZM17.294 4.89808C17.7341 4.4862 18.4477 4.4862 18.8878 4.89808C19.3279 5.30996 19.3279 5.97775 18.8878 6.38963L11.7436 13.0755C11.6148 13.196 11.4534 13.2816 11.2767 13.3229L9.42173 13.7569L9.88548 12.0209C9.92965 11.8555 10.021 11.7045 10.1498 11.5839L17.294 4.89808Z" fill="white"/>
                        </svg>
                        </n-icon>
                        <span class="buttonText">&nbsp;上传图片</span>
                    </n-button>
                </n-upload> -->

          
      </n-space>


    <n-form size="large" :show-label=false ref="formRef" :model="modelRef" :rules="rules">
    

        <n-grid cols="33" class="textline">
            <n-gi offset="6" span="10">
                <div class="headertext">用户名</div>
               </n-gi>
            <n-gi span="1">
            </n-gi>
            <n-gi span="1">
                <n-icon size="25" color="black">
                    <svg width="28" height="21" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.67773 2.15157L9.70342 2.11185C9.71438 2.11894 9.95545 2.27561 10.1962 2.49842L10.1666 2.53048L10.1962 2.49842C10.5557 2.83113 10.7489 3.15538 10.7489 3.46185C10.7489 3.79361 10.6095 4.07252 10.3668 4.26743C10.1251 4.4616 9.78369 4.57025 9.38095 4.57025C8.97821 4.57025 8.63684 4.4616 8.39506 4.26743C8.15235 4.07252 8.013 3.79362 8.01299 3.46185C8.01299 3.15537 8.20614 2.83111 8.56565 2.49842C8.80621 2.27582 9.04704 2.11923 9.05847 2.11185L9.67773 2.15157ZM9.67773 2.15157L9.70341 2.11185M9.67773 2.15157L9.70341 2.11185M19.5563 2.52519L19.5811 2.49842C19.9406 2.83113 20.1337 3.15538 20.1337 3.46185C20.1337 3.79361 19.9944 4.07252 19.7517 4.26743C19.5099 4.4616 19.1685 4.57025 18.7658 4.57025C18.3631 4.57025 18.0217 4.4616 17.7799 4.26743C17.5372 4.07252 17.3979 3.79362 17.3979 3.46185C17.3979 3.15537 17.591 2.83111 17.9505 2.49842C18.191 2.27584 18.4318 2.11926 18.4433 2.11185L19.5563 2.52519ZM19.5563 2.52519L19.5811 2.49842C19.3405 2.27582 19.0997 2.11923 19.0883 2.11185M19.5563 2.52519L18.4434 2.11183C18.6312 1.99038 18.9004 1.99039 19.0883 2.11185M9.70341 2.11185C9.51556 1.99039 9.24636 1.99039 9.0585 2.11183L9.70341 2.11185ZM19.0883 2.11185L19.0611 2.15384L19.0882 2.11183C19.0883 2.11184 19.0883 2.11184 19.0883 2.11185ZM14.0734 3.72874C14.5101 3.72874 14.8799 3.61079 15.1415 3.40039C15.4041 3.18926 15.5549 2.88722 15.5549 2.5278C15.5549 2.19494 15.3425 1.83968 14.9454 1.47229C14.6766 1.2235 14.408 1.04895 14.3958 1.0411C14.208 0.919634 13.9388 0.919634 13.7509 1.0411C13.7388 1.04895 13.4702 1.22351 13.2013 1.47228C12.8043 1.83968 12.5919 2.19494 12.5919 2.5278C12.5919 2.88722 12.7426 3.18926 13.0052 3.40039C13.2669 3.61079 13.6367 3.72874 14.0734 3.72874ZM13.763 2.23883C13.8467 2.13439 13.9576 2.02522 14.074 1.92544C14.1901 2.02487 14.3007 2.13373 14.3842 2.23805C14.4298 2.295 14.4664 2.34959 14.4915 2.39971C14.5168 2.45027 14.5287 2.49323 14.5287 2.5278C14.5287 2.66457 14.4914 2.75502 14.423 2.81285C14.3529 2.8722 14.2407 2.90543 14.0734 2.90543C13.9061 2.90543 13.7939 2.8722 13.7238 2.81286C13.6554 2.75503 13.6181 2.66458 13.6181 2.5278C13.6181 2.49364 13.63 2.45093 13.6554 2.40044C13.6805 2.35041 13.7173 2.29583 13.763 2.23883ZM26.6837 18.0705H24.6145V11.1547C24.6145 9.99019 23.4068 9.06245 21.9495 9.06245H19.9628V5.08173C19.9628 4.84358 19.7209 4.67008 19.4497 4.67008H18.0819C17.8107 4.67008 17.5688 4.84358 17.5688 5.08173V9.06245H15.3612V4.49835C15.3612 4.26019 15.1193 4.08669 14.8482 4.08669H13.2986C13.0274 4.08669 12.7855 4.26019 12.7855 4.49835V9.06245H10.578V5.08173C10.578 4.84358 10.336 4.67008 10.0649 4.67008H8.69703C8.42588 4.67008 8.18395 4.84358 8.18395 5.08173V9.06245H6.19731C4.74 9.06245 3.53231 9.99019 3.53231 11.1547V18.0705H1.46308C1.19193 18.0705 0.95 18.244 0.95 18.4821V20.1627C0.95 20.4009 1.19193 20.5744 1.46308 20.5744H26.6837C26.9549 20.5744 27.1968 20.4009 27.1968 20.1627V18.4821C27.1968 18.244 26.9549 18.0705 26.6837 18.0705ZM18.595 9.06245V5.49339H18.9367V9.06245H18.595ZM13.8117 9.06244V4.90998H14.3351V9.06244H13.8117ZM9.21011 9.06245V5.49339H9.55181V9.06245H9.21011ZM26.1706 18.8938L26.1706 19.7511H1.97614V18.8938H26.1706ZM21.9495 9.88576C22.8653 9.88576 23.5883 10.4659 23.5883 11.1547V18.0705H4.55847V11.1547C4.55847 10.4658 5.28148 9.88576 6.19731 9.88576H21.9495ZM9.38093 3.00222C9.47094 3.08283 9.55361 3.16755 9.61548 3.24683C9.65013 3.29125 9.67747 3.33296 9.69595 3.37046C9.71469 3.40847 9.72275 3.43897 9.72275 3.46186C9.72275 3.5694 9.69492 3.63645 9.64597 3.67832C9.59524 3.7217 9.51176 3.74696 9.38097 3.74696C9.25017 3.74696 9.16669 3.7217 9.11597 3.67832C9.06702 3.63645 9.03919 3.5694 9.03919 3.46186C9.03918 3.43896 9.04724 3.40846 9.06598 3.37044C9.08447 3.33293 9.11182 3.29121 9.14647 3.24679C9.20833 3.1675 9.29098 3.08278 9.38093 3.00222ZM18.7658 3.00222C18.8558 3.08283 18.9385 3.16755 19.0003 3.24683C19.035 3.29125 19.0623 3.33296 19.0808 3.37046C19.0996 3.40847 19.1076 3.43897 19.1076 3.46186C19.1076 3.56941 19.0798 3.63645 19.0308 3.67832C18.9801 3.7217 18.8966 3.74696 18.7658 3.74696C18.635 3.74696 18.5516 3.7217 18.5008 3.67832C18.4519 3.63645 18.424 3.56941 18.424 3.46186C18.424 3.43896 18.4321 3.40846 18.4508 3.37044C18.4693 3.33293 18.4967 3.29121 18.5313 3.24679C18.5932 3.1675 18.6758 3.08278 18.7658 3.00222Z" fill="#242424" stroke="#242424" stroke-width="0.1"/>
                    </svg>
                </n-icon>
            </n-gi>
            <n-gi span="9">
                <span class="headertext">年龄</span>
            </n-gi>
        </n-grid>
        <n-grid cols="33" class="inputline">
        <n-gi offset="6" span="10">
            <n-form-item path="name" label="用户名">
                <n-input v-model:value="modelRef.name" type="text" placeholder=用户名></n-input>
            </n-form-item>            
            <!--  -->
        </n-gi>
        <n-gi span="1">
        </n-gi>
        <n-gi span="10">
            <n-form-item path="age" label="年龄">
                <n-input v-model:value="modelRef.age" type="text" placeholder=年龄></n-input>
            </n-form-item>
            <!-- v-model:value="age" -->
        </n-gi>
        </n-grid>
        
        <n-grid cols="33" class="textline">
            <n-gi offset="6" span="1">
                <n-icon size="25" color="black">
                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 6.75C6.5 5.0103 8.067 3.6 10 3.6C11.933 3.6 13.5 5.0103 13.5 6.75C13.5 8.4897 11.933 9.9 10 9.9C8.067 9.9 6.5 8.4897 6.5 6.75ZM10 5.4C9.17157 5.4 8.5 6.00442 8.5 6.75C8.5 7.49558 9.17157 8.1 10 8.1C10.8284 8.1 11.5 7.49558 11.5 6.75C11.5 6.00442 10.8284 5.4 10 5.4Z" fill="#152C70"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3307 17.4887C17.2161 16.2539 20 12.9195 20 9C20 4.02944 15.5228 0 10 0C4.47715 0 0 4.02944 0 9C0 12.9195 2.78394 16.2539 6.66927 17.4887C7.52012 17.8058 8.61102 18 9.99998 18C11.3889 18 12.4798 17.8058 13.3307 17.4887ZM10 1.8C5.58172 1.8 2 5.02355 2 9C2 10.8995 2.8173 12.6272 4.15267 13.9138C4.93324 12.5554 6.49158 11.7 8.19429 11.7H11.806C13.5086 11.7 15.0669 12.5553 15.8475 13.9137C17.1828 12.6271 18 10.8994 18 9C18 5.02355 14.4183 1.8 10 1.8ZM12.6147 15.8066C13.0486 15.6378 13.3306 15.4399 13.5144 15.267C13.791 15.0067 13.9106 14.7416 13.9621 14.5695C13.4982 13.9082 12.6865 13.5 11.806 13.5H8.19429C7.31368 13.5 6.50197 13.9082 6.0381 14.5695C6.08956 14.7416 6.20915 15.0068 6.48575 15.267C6.6695 15.44 6.95143 15.6378 7.38527 15.8066C8.20463 16.0616 9.08435 16.2 10 16.2C10.9156 16.2 11.7954 16.0616 12.6147 15.8066Z" fill="#152C70"/>
                    </svg>
                </n-icon>
            </n-gi>
            <n-gi span="9">
                <div class="headertext">性别</div>
               </n-gi>
            <n-gi span="1">
            </n-gi>
            <n-gi span="1">
                <n-icon size="25" color="black">
                    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.25 0H2.75C1.233 0 0 0.94721 0 2.11242V11.7035C0 12.8687 1.233 13.8167 2.75 13.8167H17.25C18.767 13.8167 20 12.8687 20 11.7035V2.11242C20 0.94721 18.767 0 17.25 0ZM2.75 1.15139H17.25C17.94 1.15139 18.5 1.58124 18.5 2.11088V2.65894L10.45 6.77862C10.177 6.91678 9.824 6.91832 9.55 6.77708L1.5 2.65894V2.11088C1.5 1.58124 2.06 1.15139 2.75 1.15139V1.15139ZM17.25 12.6638H2.75C2.06 12.6638 1.5 12.2339 1.5 11.7043V4.00837L8.74 7.71585C9.123 7.91235 9.562 8.01061 10 8.01061C10.44 8.01061 10.877 7.91235 11.26 7.71662L18.5 4.00914V11.702C18.5 12.2316 17.94 12.6615 17.25 12.6615V12.6638Z" fill="#242424"/>
                    </svg>
                </n-icon>
                
            </n-gi>
            <n-gi span="10">
                <div class="headertext">电子邮箱</div>
            </n-gi>
        </n-grid>
        <n-grid cols="33" class="inputline">
        <n-gi offset="6" span="10"> 
            <n-form-item path="gender" label="性别">
                <n-input v-model:value="modelRef.gender" type="text" placeholder=性别></n-input>
            </n-form-item>
           
            <!-- v-model:value="gender" -->
        </n-gi>
        <n-gi span="1">
        </n-gi>
        <n-gi span="10">
            <n-form-item path="email" label="电子邮箱">
                <n-input v-model:value="modelRef.email" type="text" placeholder=电子邮箱></n-input>
            </n-form-item>
            
            <!-- v-model:value="email" -->
        </n-gi>
        </n-grid>

        

    </n-form>

        <n-space justify="center" :size="60" class="test">
            <n-button type="info" round size="large" @click="cancelProfileChanging = true" style="border-radius:10px;" color="#5AA8D7">
                <span class="buttonText">&nbsp;&nbsp;&nbsp;取消&nbsp;&nbsp;&nbsp;</span>
            </n-button>
            <el-dialog
                v-model="cancelProfileChanging"
                width="33%"
                center
                
            >
                <span id="notice">当前页面修改未保存，是否确认退出？</span>
                <template #footer>
                <span >
                    <n-button 
                    type="info" 
                    round 
                    size="medium" 
                    @click="cancelProfileChanging = false" 
                    style="border-radius:10px;margin-right:30px;" 
                    color="#5AA8D7">
                        <span class="buttonText">取消</span>
                    </n-button>
                    <!-- <el-button @click="cancelProfileChanging = false">取消</el-button> -->
                    <n-button @click="routerToPersonalInfo"
                    type="warning" round size="medium" color="#F48023" 
                    style="border-radius:10px;margin-left:30px;">
                    <span class="buttonText">退出</span>
                    </n-button>
                    <!-- <el-button type="primary" @click="routerToPersonalInfo"
                    >退出</el-button
                    > -->
                </span>
                </template>
            </el-dialog>
            
            <n-button type="warning" round size="large" 
            color="#F48023" @click="handleValidateButtonClick1"
            style="border-radius:10px;">
                <!-- 需要保存到后端！ -->
                <span class="buttonText">保存修改</span>
            </n-button>
        </n-space>
    </n-card>
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
import Header from "../../components/block/header/index.vue";
import Main from "../../components/block/main/index.vue";
import axios from 'axios'



let t2 =  localStorage.getItem("user_ID");
const message = useMessage()
const router = useRouter()
const routerToPersonalInfo = () => {
  router.push({
    path: "/PersonalInfo",
    query: {
      user_id: localStorage.getItem("user_ID"),
    },
  });
};
const cancelProfileChanging=ref(false)

interface ModelType {
  name: string | null
  email: string | undefined
  gender: string | null
  age: string | null
}
const formRef = ref<FormInst | null>(null)


const Ava: any = ref("")
const Name: any = ref("")
const Age: any = ref("")
const Gender: any = ref("")
const Email: any = ref("")
const Level: any = ref("")
onMounted(() => {
    let t2 = localStorage.getItem("user_ID");
    axios.post('/user/info',{user_id:t2,})
            .then(function (response) {
                console.log(response)
                if (response.data?.status) {
                    Name.value = response.data.data.user_name;
                    Age.value = response.data.data.age;
                    Gender.value = response.data.data.sex;
                    Email.value = response.data.data.email;
                    Level.value = response.data.data.user_level;
                    Ava.value = response.data.data.avatar_url;
                    console.log(response.data.data)
                }
                else {
                    message.error('查询失败...')
                }
                })  
      console.log("yes")
})
const modelRef = ref<ModelType>({
  name: Name,
  email: Email,
  gender: Gender,
  age: Age
})

const rules: FormRules = {
  name: [
    {
      required: true,
      validator(rule: FormItemRule, value: string) {
        if (!value) {
          return new Error('需要用户名')
        }
        // else if (!/^\d*$/.test(value)) {
        //   return new Error('年龄应该为整数')
        // } else if (Number(value) < 18) {
        //   return new Error('年龄应该超过十八岁')
        // }
        return true
      },
      trigger: ['input', 'blur']
    }
  ],
  email:[
      {
          required: true,
          validator(rule: FormItemRule, value: string) {
              if(!value){
                  return new Error('需要邮箱')
              }
              return true
          },
          trigger: ['input', 'blur']
      }
  ],
  gender:[
      {
          required: true,
          validator(rule: FormItemRule, value: string) {
              if(!value){
                  return new Error('需要性别')
              }
              return true
          },
          trigger: ['input', 'blur']
      }
  ],
  age:[
      {
          required: true,
          validator(rule: FormItemRule, value: string) {
            if (!value) {
                return new Error('需要年龄')
            }
            else if (!/^\d*$/.test(value)) {
                return new Error('年龄应该为整数')
            } else if (Number(value) < 18) {
                return new Error('年龄应该超过十八岁')
            }
            return true
          },
          trigger: ['input', 'blur']
      }
  ]
}

const handleValidateButtonClick1 = (e: MouseEvent) => {
  e.preventDefault()
  formRef.value?.validate((errors) => {
      let t1=localStorage.getItem("user_ID")
    if (!errors) {
        // console.log(t1.toString)
        axios.post('/user/update_info', {
        user_id:t1,
        username:modelRef.value.name,
        email:modelRef.value.email,
        sex:modelRef.value.gender,
        age:modelRef.value.age
      })
        .then(function (response) {
          // 处理成功情况
          console.log(response.data)
          if(response.data?.status){
              message.success('保存成功！~')
              //User.Login=true;
              //localStorage.setItem("login","true")
              routerToPersonalInfo();
          }
          else{
             message.error('用户不存在或信息有误！')
          }
          console.log(response.data)
        }
        )

      
    } else {
      console.log(errors)
       message.error('信息有误，请重新填写')
    }
  })

}

// function submitUpload() {
//     //this.$refs.upload.submit();
//     let file = this.$refs.upload.uploadFiles.pop().raw;//这里获取上传的文件对象
//     let formData = new FormData();
//     formData.append("file", file);
//     this.$axios.post("/upload", formData).then(res => {
//         console.log(res.data);
//     }),
// }
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
</style>