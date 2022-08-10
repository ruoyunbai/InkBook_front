<template>

    <div>
        <n-modal v-model:show="showModal" style="width:500px" class="custom-card" preset="card" title=" 请输入文档名字"
            size="huge" :bordered="false">
            <template #header-extra>
                取消
            </template>
            <n-input v-model:value="createName"></n-input>
            <template #footer>
                <n-button>确定</n-button>
            </template>
        </n-modal>
        <!-- <n-card :bordered="false" > -->

        <n-grid :cols="100">
            <n-gi></n-gi>
            <n-gi span="3">
                <n-image preview-disabled src="svg\doc\形状 (1).svg"></n-image>
            </n-gi>
            <n-gi span="15">
                <div style="font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 34px;
color: #000000;">团队文档中心</div>
            </n-gi>
        </n-grid>
        <div style="height:20px"></div>
        <n-grid cols="20">
            <n-gi span="15"></n-gi>
            <n-gi span="5">
                <div class="tree">
                    <div class="custom-tree-container">
                        <!-- <p>Using render-content</p>
                        <el-tree :data="dataSource" show-checkbox node-key="id" default-expand-all
                            :expand-on-click-node="false" :render-content="renderContent" />
                        <p>Using scoped slot</p> -->
                        <el-tree 
                        draggable
                        :data="dataSource"  node-key="id" default-expand-all
                            :expand-on-click-node="false">
                            <template #default="{ node, data }">
                                <span class="custom-tree-node">
                                    <span>{{ node.label }}</span>
                                    <p>{{node.name}}</p>
                                    <span >
                                        <a @click="append(data)"> Append </a>
                                        <a style="margin-left: 8px" @click="remove(node, data)"> Delete </a>
                                    </span>
                                </span>
                            </template>
                        </el-tree>
                    </div>
                </div>
            </n-gi>

        </n-grid>
    </div>
</template>
<script setup lang="ts">
import { reactive, ref, onMounted, onBeforeMount } from 'vue'
import type Node from 'element-plus/es/components/tree/src/model/node'
const showModal = ref(false)
const createName = ref("")
interface Tree {
  id: number
  label: string
  type1?: string
  name?:string
  children?: Tree[]
}
let id = 1000

const append = (data: Tree) => {
    
    const newChild = { id: id++, label: 'testtest', children: [] }
    if (!data.children) {
        data.children = []
    }
    data.children.push(newChild)
    dataSource.value = [...dataSource.value]
}

const remove = (node: Node, data: Tree) => {
    console.log(data)
    const parent = node.parent
    const children: Tree[] = parent.data.children || parent.data
    const index = children.findIndex((d) => d.id === data.id)
    children.splice(index, 1)
    dataSource.value = [...dataSource.value]
}



const dataSource = ref<Tree[]>([
    {
        name:"tree",
        id: 1,
        label: 'Level one 1',
        type1:"10",
        children: [
            {
                name:"tree",
                type1:"666",
                id: 4,
                label: 'Level two 1-1',
                children: [
                    {
                        name:"tree",
                        id: 9,
                        label: 'Level three 1-1-1',
                    },
                    {
                        name:"tree",
                        id: 10,
                        label: 'Level three 1-1-2',
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        name:"tree",
        label: 'Level one 2',
        children: [
            {
                name:"tree",
                id: 5,
                label: 'Level two 2-1',
            },
            {
                name:"tree",
                id: 6,
                label: 'Level two 2-2',
            },
        ],
    },
    {
        name:"tree",
        id: 3,
        label: 'Level one 3',
        children: [
            {
                name:"tree",
                id: 7,
                label: 'Level two 3-1',
            },
            {
                name:"tree",
                id: 8,
                label: 'Level two 3-2',
            },
        ],
    },
])
</script>

<style>
.custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
}
</style>
 

<style>
.tree {
    background: #FFFFFF;
    border-radius: 24px;
    height: 856px;
}
=======
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

>>>>>>> 95bfcbb8884e23440b9859d7259f74df02ddd1cb
</style>
