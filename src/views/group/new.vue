<template>
  <div class="new_body" >
    <div class="new_head">
      <div class="new_title">
        <n-image src="svg\group_svg\home.svg" />
        <span class="title_font" >开始创建您的团队</span>
      </div>
      <div class="new_form">
        <n-form
            ref="formRef"
            :model="model"
           
            label-placement="left"
            label-width="auto"
            require-mark-placement="right-hanging"
            size="small"
            :style="{
      maxWidth: '400px'
    }"
        >
          <n-form-item label="团队名称" path="inputValue">
            <n-input v-model:value="model.inputValue" placeholder="请输入团队名称" />
          </n-form-item>
          <n-form-item label="团队简介" path="textareaValue">
            <n-input
                v-model:value="model.textareaValue"
                placeholder="请输入团队简介"
                type="textarea"
                :autosize="{
          minRows: 4,
          maxRows: 6
        }"
            />
          </n-form-item>
          <div style="display: flex; justify-content: flex-end">
            <n-button @click="create_group()"
                      style="border-radius: 5px 5px 5px 20px; width: 100px;height: 30px;"
                      color="#F5B544" text-color="#FFFFFF">
              确认创建
            </n-button>
          </div>
        </n-form>
      </div>
    </div>

    <div class="new_bottom">
      <n-image src="svg\group_svg\rocket.svg" />
    </div>
  </div>

</template>

<script setup lang="ts">
import Card from "../../components/project.vue";
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
  defineEmits,
  h,
} from "vue";
import { useDialog, NInput } from "naive-ui";
// import Vditor from 'vditor'
import axios from "axios";
import { useProjectStore } from "../../store/Project";
import { useUserStore } from "../../store/User";
import { InputInst, useMessage } from "naive-ui";
import { useRouter } from "vue-router"
import { useMsgStore } from "../../store/Msg";
const emits = defineEmits(['myevent'])
const Msg=useMsgStore()
const router = useRouter();
const User = useUserStore();
const message = useMessage();
// const inputTitle = ref<string>("");
// const inputTitle = ref<string>("");
const model = reactive({
  inputValue: '',
  textareaValue: '',
})

const create_group = () =>{
  console.log("111111");
  emits("myevent")
  axios({
        url: axios.defaults.baseURL + "/group/create_group",
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "Authorization": User.token
        },
        data: {
          group_info: model.textareaValue,
          group_name: model.inputValue
        },
        transformRequest: [
          function (data, headers) {
            let data1 = JSON.stringify(data);
            return data1;
          },
        ],
      }).then(function (response) {
        // 处理成功情况
        console.log(response);
        let selected_group_id = response.data.group.group_id;
       emits("myevent")
        Msg.Iopt="refresh"
        router.push({
          name:"group",
          params:{
            proj_id:selected_group_id,
            refreshIndex:1
          }
          })
      })
}

// export default defineComponent({
//   setup () {
//     const formRef = ref<FormInst | null>(null)
//     const message = useMessage()
//     return {
//       formRef,
//       size: ref('medium'),
//       model: ref({
//         inputValue: null,
//         textareaValue: null,
//       }),
//       handleValidateButtonClick (e: MouseEvent) {
//         e.preventDefault()
//         formRef.value?.validate((errors) => {
//           if (!errors) {
//             message.success('创建成功')
//           } else {
//             console.log(errors)
//             message.error('创建失败')
//           }
//         })
//       }
//     }
//   }
// })
</script>

<style>

.new_head{
  height: 400px;
}

.new_form{
  height: 240px;
  width: 480px;
  margin-left: 350px;
  margin-top: 20px;
  background-color: #FFFFFF;
  border-radius: 24px;
  padding-top: 40px;
  padding-left: 20px;
}

.new_title{
  margin-top: 80px;
  margin-left: 350px;
}

.new_bottom{
  margin-left: 300px;
}

.title_font{
  font-family: 'Inria Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  margin-left: 10px;
}

</style>
