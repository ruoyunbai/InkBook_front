<template>
  <div class="center_head">
    <n-grid x-gap="12" :cols="16">
      <n-gi span="1">
      </n-gi>
      <n-gi span="3">
        <n-image src="svg\center_svg\title_img.svg" />
        <span class="title_font">团队文档中心</span>
      </n-gi>
      <n-gi span="5">
      </n-gi>
      <n-gi span="1">
        <n-button
          color="#2772F0"
          text-color="#FFFFFF"
          style="width: 130px; height: 46px; border-radius: 16px;"
        >
          <n-image src="svg\center_svg\export.svg" />
          <span class="btn_font">导出文档</span>
        </n-button>
      </n-gi>
      <n-gi span="1">

      </n-gi>
      <n-gi span="1">
        <n-button
            color="#2772F0"
            text-color="#FFFFFF"
            style="width: 130px; height: 46px; border-radius: 16px;"
        >
          <n-image src="svg\center_svg\more.svg" />
          <span class="btn_font">更多模板</span>
        </n-button>
      </n-gi>
    </n-grid>
  </div>
  <div class="center_mid">
    <div class="center_edit">

    </div>
    <div class="center_menu">
      <n-space vertical :size="12">
        <n-tree
            :default-expand-all="true"
            :show-irrelevant-nodes="showIrrelevantNodes"
            :pattern="pattern"
            :data="data"
            :render-prefix="renderPrefix"
            block-line
        />
      </n-space>
    </div>
    <div class="add_btn">
      <n-button
          color="rgba(39, 114, 240, 0.09)"
          text-color="#2772F0"
          style="position: absolute; width: 169px; height: 32px; border-radius: 20px"
      >
        <span class="add_btn_font">+ 设计项目文档区</span>
      </n-button>
    </div>
  </div>
</template>

<script lang="ts">
import { h, defineComponent, ref } from 'vue'
import { NButton, TreeOption } from 'naive-ui'
import { repeat } from 'seemly'
import dirImg from "../../../public/svg/center_svg/dir.svg"
import fileImg from "../../../public/svg/center_svg/file.svg"

const data: TreeOption[] = [
  {
    label: '项目文件',
    key: '0',
    children: [
      {
        label: '项目1',
        key: '0-0',
        children: [
          { label: '文档1', key: '0-0-0' },
          { label: '文档2', key: '0-0-1' }
        ]
      },
      {
        label: '项目2',
        key: '0-1',
        children: [
          { label: '文档1', key: '0-1-0' },
          { label: '文档2', key: '0-1-1' }
        ]
      }
    ]
  },
]

export default defineComponent({
  setup () {
    return {
      data,
      pattern: ref(''),
      showIrrelevantNodes: ref(false),
      dirImg,
      fileImg,
      renderPrefix,
    }
  }
})

function renderPrefix ({ option }: { option: TreeOption }) {
  return h(
      NButton,
      { text: true, type: 'primary' },
      { default: () => 'img'}
  )
}

</script>

<style>

.center_head{
  margin-top: 50px;
}

.title_font{
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 34px;
  margin-left: 10px;
}

.btn_font{
  font-family: 'Inria Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  margin-left: 5px;
}

.center_mid{
  position: relative;
  margin-top: 30px;
}

.center_edit{
  position: absolute;
  margin-left: 5%;
  width: 60%;
  background-color: #FFFFFF;
  height: 800px;
  border-radius: 24px;
}

.center_menu{
  position: absolute;
  margin-left: 70%;
  width: 25%;
  background-color: #FFFFFF;
  height: 780px;
  border-radius: 24px;
  padding-top: 20px;
}

.add_btn_font{
  font-family: 'Inria Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
}

.add_btn{
  position: absolute;
  z-index: 5;
  margin-left: 76%;
  margin-top: 750px;
}

</style>
