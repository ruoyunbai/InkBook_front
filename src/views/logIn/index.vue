<template>
  <n-layout>
    <Header :Login="true" :Register="false">
    </Header>

    <n-layout-content content-style="background:rgb(245,181,68,0.1);">
      <n-grid cols="2">
        <n-gi>
          <n-image preview-disabled :height="imageHeight" :width="imageWidth" src="svg\logIn\Illustration.svg"></n-image>
        </n-gi>

        <n-gi>
          <div style="height:80px"></div>
          <n-space>
            <div style="width: 80px"></div>
            <div class="title">登录</div>
          </n-space>
          <div style="height:15px"></div>
          <n-space>
            <div style="width: 80px"></div>
            <div class="subtitle">加入墨书，与团队一起高效协作！</div>
          </n-space>
          <div style="height:20px"></div>

          <n-space>
            <div style="width: 80px"></div>
            <div style="width: 400px">
              <n-form size="large" :show-label=false ref="formRef" :model="modelRef" :rules="rules">
                <n-form-item path="name" label="用户名">
                  <n-input v-model:value="modelRef.name" placeholder="用户名" @keydown.enter.prevent />
                </n-form-item>



                <n-form-item path="password" label="密码">
                  <n-input v-model:value="modelRef.password" type="password" @input="handlePasswordInput"
                    @keydown.enter.prevent placeholder="密码" />
                </n-form-item>


                <n-row :gutter="[0, 24]">
                  <n-col :span="24">
                    <div>
                      <n-button size="large" block :disabled="modelRef.name === null ||
                      modelRef.password == null
                      || modelRef.name == '' ||
                      modelRef.password == ''" round type="warning" @click="handleValidateButtonClick">
                        登录
                      </n-button>
                    </div>
                  </n-col>
                </n-row>


              </n-form>
            </div>

          </n-space>

        </n-gi>
      </n-grid>
    </n-layout-content>
    <n-layout-content content-style="padding: 24px;">

    </n-layout-content>




  </n-layout>

</template>
<script setup lang="ts">
import Header from '../../components/Tourist/SimpleHeader/index.vue'
import {
  FormInst,
  FormItemInst,
  FormItemRule,
  useMessage,
  FormRules
} from 'naive-ui'
import { ref, onMounted, computed, onUnmounted,onBeforeMount,onBeforeUnmount } from 'vue'

import { useRouter } from 'vue-router'
import axios from 'axios';

import { useUserStore } from '../../store/User';
import { useGroupStore } from '../../store/Group';
const User = useUserStore();
const Group = useGroupStore();


interface ModelType {
  name: string | null
  password: string | null
}
const formRef = ref<FormInst | null>(null)
const rPasswordFormItemRef = ref<FormItemInst | null>(null)
// const message = useMessage()
const modelRef = ref<ModelType>({
  name: null,
  password: null
})

const validatePasswordStartWith = (
  rule: FormItemRule,
  value: string
): boolean => {
  return (
    !!modelRef.value.password &&
    modelRef.value.password.startsWith(value) &&
    modelRef.value.password.length >= value.length
  )
}

const validatePasswordSame = (rule: FormItemRule, value: string): boolean => {
  return value === modelRef.value.password
}

const rules: FormRules = {
  name: [
    {
      required: true,
      validator(rule: FormItemRule, value: string) {
        if (!value) {
          return new Error('需要用户名')
        }
        //  else if (!/^\d*$/.test(value)) {
        //    return new Error('年龄应该为整数')
        //  } else if (Number(value) < 18) {
        //    return new Error('年龄应该超过十八岁')
        //  }
        return true
      },
      trigger: ['input', 'blur']
    }
  ],
  password: [
    {
      required: true,
      validator(rule: FormItemRule, value: string) {
        if (!value) {
          return new Error('需要密码')
        }
        //  else if (!/^\d*$/.test(value)) {
        //    return new Error('年龄应该为整数')
        //  } else if (Number(value) < 18) {
        //    return new Error('年龄应该超过十八岁')
        //  }
        return true
      },
      message: '请输入密码',
      trigger: ['input', 'blur']
    }
  ],

}


const handlePasswordInput = () => {

}
let count: number = 0;
const router = useRouter();
const message = useMessage()
const handleValidateButtonClick = (e: MouseEvent) => {
  e.preventDefault()
  formRef.value?.validate((errors) => {
    if (!errors) {
      axios({
        url: axios.defaults.baseURL + "/login",
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          username: modelRef.value.name,
          password: modelRef.value.password,
        },
        transformRequest: [
          function (data, headers) {
            let data1 = JSON.stringify(data);
            
            return data1;
          },
        ],
      }).then(function (response) {
        // 处理成功情况
        console.log("response",response)
        console.log(response.data);

        if (response.data?.success) {
          User.Login=true
          User.token=response.data.token
          if(modelRef.value.name!=null)
          User.Name= modelRef.value.name
          User.Id=response.data.user.user_id
          localStorage.setItem("Login","true")
          
          axios({
            url: axios.defaults.baseURL + "/group/get_groups",
            method: "post",
            headers: {
              "Content-Type": "application/json",
              "Authorization": User.token
            },
            data: {
            },
            transformRequest: [
              function (data, headers) {
                let data1 = JSON.stringify(data);
                return data1;
              },
            ],
          }).then(function (response) {
            // 处理成功情况
            if (response.data?.success) {
              count = response.data?.count;
              console.log(response.data);
              let i = 0;
              if (response.data != null){
                if(response.data.count==0){
                  router.push({
                  name:"NewGroup",
                  // params:{
                  //   proj_id:props.oneProject.proj_id,
                  // }
                  })
                }
                else{
                    router.push('/');
                }
              }
            } else {
            }
            console.log(response.data);
          });

          // axios({
          //   url: axios.defaults.baseURL + "/info",
          //   method: "post",
          //   headers: {
          //     "Content-Type": "application/json",
          //     "Authorization":User.token
          //   },
          //   data: {
                
          //   },
          //   transformRequest: [
          //     function (data, headers) {
          //       let data1 = JSON.stringify(data);
          //       
          //       return data1;
          //     },
          //   ],
          // }).then(function (response) {
          //   // 处理成功情况
          //   console.log(response.data);

          //   if (response.data?.success) {

          //   }

          // }
          // )
        }


      }
      )


    } else {
      console.log(errors)
      message.error('密码错误')
    }
  })

}




const imageHeight = ref(500);
const imageWidth = ref(500);
const totalWidth = ref(500);
const totalHeight = ref(500);
onMounted(() => {
  modelRef.value.name = ""
  let x: HTMLElement = <HTMLElement>document.body.parentNode;
  if (x != null) {
    x.style.overflowY = "hidden";
  }
  totalWidth.value = document.documentElement.clientWidth;
  totalHeight.value = document.documentElement.clientHeight;
  window.onresize = () => {   //屏幕尺寸变化就重新赋值
    totalWidth.value = document.documentElement.clientWidth;
    totalHeight.value = document.documentElement.clientHeight;
    imageWidth.value = totalWidth.value * 0.54;
    imageHeight.value = totalHeight.value * 0.907;
  }
  imageWidth.value = totalWidth.value * 0.54;
  imageHeight.value = totalHeight.value * 0.907;
})
onUnmounted(() => {
  let x: HTMLElement = <HTMLElement>document.body.parentNode;
  if (x != null) {
    x.style.overflowY = "auto";
  }
})
</script>

<style scoped>
.title {
  color: #000000;
  font-family: Roboto;
  font-weight: black;
  font-size: 24px;
  line-height: normal;
  letter-spacing: 5px;
  text-align: left;

}

.subtitle {
  color: #000000;
  font-family: Roboto;
  font-weight: light;
  font-size: 18px;
  line-height: 30px;
  letter-spacing: 5px;
  text-align: left;

}
</style>
