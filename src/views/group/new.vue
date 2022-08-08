<template>
  <div class="new_body">
    <div class="new_head">
      <div class="new_title">
        <n-image src="svg\group_svg\home.svg" />
        <span class="title_font">开始创建您的团队</span>
      </div>
      <div class="new_form">
        <n-form
            ref="formRef"
            :model="model"
            :rules="rules"
            label-placement="left"
            label-width="auto"
            require-mark-placement="right-hanging"
            :size="small"
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
            <n-button @click="handleValidateButtonClick"
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

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { FormInst, FormItemRule, useMessage } from 'naive-ui'

export default defineComponent({
  setup () {
    const formRef = ref<FormInst | null>(null)
    const message = useMessage()
    return {
      formRef,
      size: ref('medium'),
      model: ref({
        inputValue: null,
        textareaValue: null,
      }),
      handleValidateButtonClick (e: MouseEvent) {
        e.preventDefault()
        formRef.value?.validate((errors) => {
          if (!errors) {
            message.success('创建成功')
          } else {
            console.log(errors)
            message.error('创建失败')
          }
        })
      }
    }
  }
})
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
