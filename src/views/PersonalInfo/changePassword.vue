<template>
  <!-- <Header></Header> -->
  <n-layout embedded content-style="padding: 15px 40px 15px 40px;"
    ><!--背景暗一些 突出上面的卡片-->
    <n-card
      style="
        border-radius: 24px;
        background: #ffffff;
        box-shadow: 10px 10px 80px 0px #3f276619;
      "
    >
      <n-layout content-style="padding: 28px;"></n-layout>
      <n-space vertical align="center" class="Avatar">
        <n-avatar
          round
          :size="100"
          src="../../../public/index/avatar.jpg"
        ></n-avatar>
      </n-space>

      <n-form
        size="large"
        :show-label="false"
        ref="formRef"
        :model="modelRef"
        :rules="rules"
      >
        <n-grid cols="32" class="textline">
          <n-gi offset="11" span="1">
            <n-icon size="25" color="Black">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 15.7324C13.5978 15.3866 14 14.7403 14 14C14 12.8954 13.1046 12 12 12C10.8954 12 10 12.8954 10 14C10 14.7403 10.4022 15.3866 11 15.7324V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V15.7324Z"
                  fill="#152C70"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 2C9.23858 2 7 4.23858 7 7V8.41604C5.23409 9.1876 4 10.9497 4 13V17C4 19.7614 6.23858 22 9 22H15C17.7614 22 20 19.7614 20 17V13C20 10.9497 18.7659 9.1876 17 8.41604V7C17 4.23858 14.7614 2 12 2ZM15 10H9C7.34315 10 6 11.3431 6 13V17C6 18.6569 7.34315 20 9 20H15C16.6569 20 18 18.6569 18 17V13C18 11.3431 16.6569 10 15 10ZM9 8H15V7C15 5.34315 13.6569 4 12 4C10.3431 4 9 5.34315 9 7V8Z"
                  fill="#152C70"
                />
              </svg>
            </n-icon>
          </n-gi>
          <n-gi span="9">
            <span class="headertext">原密码</span>
          </n-gi>
        </n-grid>
        <n-grid cols="32" class="inputline">
          <n-gi offset="11" span="10">
            <!-- form-item -->
            <n-input
              type="password"
              placeholder=" "
              v-model:value="modelRef.oldpassword"
              @input="handlePasswordInput"
              @keydown.enter.prevent
            ></n-input>
            <!-- v-model:value="oldPassword" -->
          </n-gi>
        </n-grid>

        <n-grid cols="32" class="textline">
          <n-gi offset="11" span="1">
            <n-icon size="25" color="Black">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 15.7324C13.5978 15.3866 14 14.7403 14 14C14 12.8954 13.1046 12 12 12C10.8954 12 10 12.8954 10 14C10 14.7403 10.4022 15.3866 11 15.7324V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V15.7324Z"
                  fill="#152C70"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 2C9.23858 2 7 4.23858 7 7V8.41604C5.23409 9.1876 4 10.9497 4 13V17C4 19.7614 6.23858 22 9 22H15C17.7614 22 20 19.7614 20 17V13C20 10.9497 18.7659 9.1876 17 8.41604V7C17 4.23858 14.7614 2 12 2ZM15 10H9C7.34315 10 6 11.3431 6 13V17C6 18.6569 7.34315 20 9 20H15C16.6569 20 18 18.6569 18 17V13C18 11.3431 16.6569 10 15 10ZM9 8H15V7C15 5.34315 13.6569 4 12 4C10.3431 4 9 5.34315 9 7V8Z"
                  fill="#152C70"
                />
              </svg>
            </n-icon>
          </n-gi>
          <n-gi span="9">
            <span class="headertext">新密码</span>
          </n-gi>
        </n-grid>
        <n-grid cols="32" class="inputline">
          <n-gi offset="11" span="10">
            <n-form-item path="password" label="密码">
              <n-input
                v-model:value="modelRef.password"
                type="password"
                @keydown.enter.prevent
                placeholder=" "
              ></n-input>
              <!-- v-model:value="newPassword" -->
            </n-form-item>
          </n-gi>
        </n-grid>

        <n-grid cols="32" class="textline">
          <n-gi offset="11" span="1">
            <n-icon size="25" color="Black">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 15.7324C13.5978 15.3866 14 14.7403 14 14C14 12.8954 13.1046 12 12 12C10.8954 12 10 12.8954 10 14C10 14.7403 10.4022 15.3866 11 15.7324V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V15.7324Z"
                  fill="#152C70"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 2C9.23858 2 7 4.23858 7 7V8.41604C5.23409 9.1876 4 10.9497 4 13V17C4 19.7614 6.23858 22 9 22H15C17.7614 22 20 19.7614 20 17V13C20 10.9497 18.7659 9.1876 17 8.41604V7C17 4.23858 14.7614 2 12 2ZM15 10H9C7.34315 10 6 11.3431 6 13V17C6 18.6569 7.34315 20 9 20H15C16.6569 20 18 18.6569 18 17V13C18 11.3431 16.6569 10 15 10ZM9 8H15V7C15 5.34315 13.6569 4 12 4C10.3431 4 9 5.34315 9 7V8Z"
                  fill="#152C70"
                />
              </svg>
            </n-icon>
          </n-gi>
          <n-gi span="9">
            <span class="headertext">确认密码</span>
          </n-gi>
        </n-grid>
        <n-grid cols="32" class="inputline">
          <n-gi offset="11" span="10">
            <n-form-item
              ref="rPasswordFormItemRef"
              first
              path="reenteredPassword"
              label="重复密码"
            >
              <n-input
                @keydown.enter.prevent
                v-model:value="modelRef.reenteredPassword"
                :disabled="modelRef.password == '' || modelRef.password == null"
                type="password"
                placeholder=" "
              ></n-input>
              <!-- v-model:value="confirmPassword" -->
            </n-form-item>
          </n-gi>
        </n-grid>
      </n-form>

      <n-space justify="center" :size="60" class="test">
        <n-button
          type="info"
          round
          size="large"
          @click="cancelProfileChanging = true"
          style="border-radius: 10px"
          color="#5AA8D7"
        >
          <span class="buttonText"
            >&nbsp;&nbsp;&nbsp;取消&nbsp;&nbsp;&nbsp;</span
          >
        </n-button>
        <el-dialog v-model="cancelProfileChanging" width="33%" center class="dialog">
          <span id="notice">当前页面修改未保存，是否确认退出？</span>
          <template #footer>
            <span>
              <n-button
                type="info"
                round
                size="medium"
                @click="cancelProfileChanging = false"
                style="border-radius: 10px; margin-right: 30px"
                color="#5AA8D7"
              >
                <span class="buttonText">取消</span>
              </n-button>
              <!-- <el-button @click="cancelProfileChanging = false">取消</el-button> -->
              <n-button
                @click="routerToPersonalInfo"
                type="warning"
                round
                size="medium"
                color="#F48023"
                style="border-radius: 10px; margin-left: 30px"
              >
                <span class="buttonText">退出</span>
              </n-button>
              <!-- <el-button type="primary" @click="routerToPersonalInfo"
                    >退出</el-button
                    > -->
            </span>
          </template>
        </el-dialog>

        <n-button
          type="warning"
          round
          size="large"
          color="#F48023"
          @click="handleValidateButtonClick2"
          style="border-radius: 10px"
        >
          <!-- @click="SaveProfileChange" -->
          <span class="buttonText">保存修改</span>
        </n-button>
      </n-space>
      <img
        preview-disabled
        class="bg"
        src="../../../public/svg/个人信息svg/bg_cut.png"
      />
    </n-card>
  </n-layout>
</template>

<script setup lang="ts">
import { onMounted, Ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { defineComponent } from "vue";
import {
  useMessage,
  useDialog,
  FormInst,
  FormItemInst,
  FormItemRule,
  FormRules,
} from "naive-ui";
import { ref } from "vue";
import { ElMessageBox } from "element-plus";
// import Header from "../../components/block/header/index.vue";
import Main from "../../components/block/main/index.vue";
import axios from "axios";
const message = useMessage();
const router = useRouter();
const routerToPersonalInfo = () => {
  router.push({
    path: "/PersonalInfo",
    query: { user_id: localStorage.getItem("user_ID") },
  });
};
const cancelProfileChanging = ref(false);

interface ModelType {
  oldpassword: string | null;
  password: string | null;
  reenteredPassword: string | null;
}
const formRef = ref<FormInst | null>(null);
const rPasswordFormItemRef = ref<FormItemInst | null>(null);
const modelRef = ref<ModelType>({
  oldpassword: null,
  password: null,
  reenteredPassword: null,
});
const validatePasswordStartWith = (
  rule: FormItemRule,
  value: string
): boolean => {
  return (
    !!modelRef.value.password &&
    modelRef.value.password.startsWith(value) &&
    modelRef.value.password.length >= value.length
  );
};
const validatePasswordSame = (rule: FormItemRule, value: string): boolean => {
  return value === modelRef.value.password;
};
const rules: FormRules = {
  oldpassword: [
    {
      required: true,
      message: "请输入旧密码",
    },
  ],
  password: [
    {
      required: true,
      message: "请输入新密码",
    },
  ],
  reenteredPassword: [
    {
      required: true,
      message: "请再次输入密码",
      trigger: ["input", "blur"],
    },
    {
      validator: validatePasswordStartWith,
      message: "两次密码输入不一致",
      trigger: "input",
    },
    {
      validator: validatePasswordSame,
      message: "两次密码输入不一致",
      trigger: ["blur", "password-input"],
    },
  ],
};

const handlePasswordInput = () => {
  if (modelRef.value.reenteredPassword) {
    rPasswordFormItemRef.value?.validate({ trigger: "password-input" });
  }
};
const handleValidateButtonClick2 = (e: MouseEvent) => {
  e.preventDefault();
  formRef.value?.validate((errors) => {
    let t2 = localStorage.getItem("user_ID");
    if (!errors) {
      // console.log(t2.toString)
      console.log(t2);
      axios
        .post("/user/update_password", {
          user_id: t2,
          old_password: modelRef.value.oldpassword,
          password1: modelRef.value.password,
          password2: modelRef.value.reenteredPassword,
        })
        .then(function (response) {
          // 处理成功情况
          console.log(response.data);
          if (response.data?.status) {
            message.success("修改密码成功！~");
            routerToPersonalInfo();
          } else {
            message.error("修改失败");
          }
          console.log(response.data);
        });
      console.log("yes");
    } else {
      console.log(errors);
      message.error("修改失败");
    }
  });
};
</script>

<style scoped>
.inputline {
  margin-bottom: 25px;
}
.Avatar {
  margin-bottom: 40px;
}
.test {
  padding: 50px;
}
.textline {
  padding: 10px;
}
.headertext {
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
.buttonText {
  color: #ffffff;
  font-family: nunito-sans, sans-serif;
  font-weight: bold;
  font-size: 14px;
  line-height: normal;
  letter-spacing: 2px;
  text-align: left;
}
.bg {
  border-radius: 24px;
  position: absolute;
  bottom: 0px;
  right: 0px;
  height: 350px;
  width: 350px;
}
.dialog {
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0px 0px 60px 0px #0c1e5b59;
}
</style>