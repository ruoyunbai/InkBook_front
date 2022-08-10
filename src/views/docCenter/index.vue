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
                <n-button color="#2772F0" text-color="#FFFFFF" style="width: 130px; height: 46px; border-radius: 16px;">
                    <n-image src="svg\center_svg\export.svg" />
                    <span class="btn_font">导出文档</span>
                </n-button>
            </n-gi>
            <n-gi span="1">

            </n-gi>
            <n-gi span="1">
                <n-button color="#2772F0" text-color="#FFFFFF" style="width: 130px; height: 46px; border-radius: 16px;">
                    <n-image src="svg\center_svg\more.svg" />
                    <span class="btn_font">更多模板</span>
                </n-button>
            </n-gi>
        </n-grid>
    </div>
    <div class="center_mid">
        <div class="center_edit">
            <router-view></router-view>
        </div>
        <div class="center_menu">
            <n-space vertical :size="12">
                <div class="custom-tree-container">

                    <el-tree highlight-current="true" @node-click="enterDoc" draggable :data="dataSource" node-key="id"
                        default-expand-all :expand-on-click-node="false">
                        <template #default="{ node, data }">
                            <span class="custom-tree-node">
                                <!-- <n-space> -->
                                    <div>
                                       
                                <n-image v-if="!data.isDir" preview-disabled src="svg\doc\documents.svg"
                                    style="padding:0;margin:0"></n-image>

                                <n-image v-if="data.isDir" preview-disabled src="svg\doc\doc.svg"
                                    style="padding:0;margin:0"></n-image>
                                    </div>
                                    
                                <span style="padding:0;margin:0;position:relative;"> {{ node.label }}</span>
                                <n-input @blur="" v-if="data.renaming" size="small"></n-input>

                                <!-- <span>{{ node.id }}</span> -->
                                <!-- <span>{{data}}</span> -->
                                <span>
                                <!-- 添加文件夹 -->
                                    <n-image preview-disabled v-if="!data.inputingDir&&!(data.isProj)&&data.isDir" @click="appendDir(data)"
                                        src="svg\doc\dir+.svg"></n-image>
                                    <n-input v-model:value="newDirName"  @blur="endAddDir(data)" v-if="data.inputingDir" size="small"></n-input>
                               
                               <!-- 添加文件 -->
                                    <n-image preview-disabled v-if="data.isDir && !data.inputingDoc" @click="appendDoc(data)"
                                        src="svg\doc\doc+.svg"></n-image>
                                    <n-input @blur="" v-if="data.inputingDoc" size="small"></n-input>
                               
                               <!-- rename -->
                                    <n-image preview-disabled v-if="!(data.isProj&&data.isDir&&(data.level==1||data.level==2))&&!data.isRoot" @click="appendDoc(data)"
                                        src="svg\doc\rename.svg"></n-image>

                                <!-- delete -->
                                    <n-image preview-disabled  @click="remove(node, data)"
                                    v-if="!(data.isProj&&data.isDir&&(data.level==1||data.level==2))&&!data.isRoot"
                                    width="20"
                                        src="svg\group_svg\trash.svg"></n-image>

                                </span>

                                <!-- </n-space> -->
                            </span>
                        </template>
                    </el-tree>
                </div>
                <!-- <n-tree
            :default-expand-all="true"
            :show-irrelevant-nodes="showIrrelevantNodes"
            :pattern="pattern"
            :data="data"
            :render-prefix="renderPrefix"
            block-line
        /> -->
            </n-space>
        </div>
        <div class="add_btn">
            <n-button color="rgba(39, 114, 240, 0.09)" text-color="#2772F0"
                style="position: absolute; width: 169px; height: 32px; border-radius: 20px">
                <span class="add_btn_font">+ 设计项目文档区</span>
            </n-button>
        </div>
    </div>



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

        <!-- <n-grid :cols="100">
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
        </n-grid> -->

    </div>
</template>
<script setup lang="ts">
import { reactive, ref, onMounted, onBeforeMount } from 'vue'
import type Node from 'element-plus/es/components/tree/src/model/node'
import axios from 'axios'
import { useUserStore } from '../../store/User'
import { useGroupStore } from '../../store/Group'
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

const User = useUserStore()
const Group = useGroupStore()
const showModal = ref(false)
const createName = ref("")
const newDirName=ref("")
interface Tree {
    id: number
    name?: string
    label: string
    type1?: string
    children?: Tree[] | null | undefined
    isDir: boolean
    inputingDir?: boolean
    inputingDoc?: boolean
    renaming?: boolean
    isProj?:boolean
    isRoot?:boolean
    level:number
}
let id = 1000
let doc = {
    id: -1,
    name: ""
}
const enterDoc = (tar: { isDir: any; id: number; label: string }, node: any, event: any) => {
    console.log(tar, node, event)
    if (tar.isDir) return
    if (doc.id == tar.id) return

    doc.id = tar.id
    doc.name = tar.label
    if (route.name === "docCContent") {
        router.push({
            name: "docCContent0",
            params: doc
        })
    } else {
        router.push({
            name: "docCContent",
            params: doc
        })
    }

}
onBeforeMount(() => {
    axios({
        url: axios.defaults.baseURL + "/doc/get_doc_files",
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Authorization": User.token
        },
        data: {
            group_id: Group.id
        },
        transformRequest: [
            function (data, headers) {
                let data1 = JSON.stringify(data);
                return data1;
            },
        ],
    }).then(function (response) {
        // 处理成功情况
        console.log("responseDoc", response.data)
        if (response.data?.success) {
            let d = response.data
            let root = d.file
            console.log("root", root)
            let t = createTree(root)
            console.log(t)
            t.isRoot=true
            dataSource.value.push(t)
        }
    })
})
const createTree = (src: any,isProj=false,level=0) => {
    let t: Tree = {
        id: -1,
        label: "",
        name: "tre",
        children: null,
        isDir: false,
        level:0
    }
    t.id = src.file_id
    t.label = src.file_name
    t.isDir = src.is_dir == 1 ? true : false
    t.inputingDir = false
    t.inputingDoc = false
    t.renaming = false
    t.isProj=false
    t.isRoot=false
    t.level=level
    let tis=false
    if(src.file_name=="项目文档区"||isProj)
    {
        t.isProj=true
        tis=true
    }
    if (src != null) {
        t.children = []
        if (src.contained_files != null)
            for (let i = 0; i < src.contained_files?.length; i++) {
                // console.log("contained",src.contained_files[i])
                // console.log(createTree(src.contained_files[i]))
                
                t.children.push(createTree(src.contained_files[i],tis,level+1))
                // t.children.push(undefined)
            }
    }
    return t
}

const appendDoc = (data: Tree) => {

    const newChild = { id: id++, label: 'new', children: [], isDir: false }
    if (!data.children) {
        data.children = []
    }
    data.children.push(newChild)

    dataSource.value = [...dataSource.value]
}

const endAddDir=(data:Tree)=>{
    data.inputingDir=false
        const newChild = { 
        inputingDir:false,inputingDoc:false,renaming:false,
        isProj:data.isProj,
        level:data.level+1,
        isRoot:false,
        id: id++, label: newDirName.value, children: [], isDir: true }

    if (!data.children) {
        data.children = []
    }
    newDirName.value=""
    data.children.push(newChild)
    dataSource.value = [...dataSource.value]
}
const appendDir = (data: Tree) => {
    data.inputingDir = true
    
}

const remove = (node: Node, data: Tree) => {
    console.log(data)
    const parent = node.parent
    const children: Tree[] = parent.data.children || parent.data
    const index = children.findIndex((d) => d.id === data.id)
    children.splice(index, 1)
    dataSource.value = [...dataSource.value]
}



const dataSource = ref<Tree[]>([])
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
</style>







<style>
.center_head {
    margin-top: 50px;
}

.title_font {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 34px;
    margin-left: 10px;
}

.btn_font {
    font-family: 'Inria Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    margin-left: 5px;
}

.center_mid {
    position: relative;
    margin-top: 30px;
}

.center_edit {
    position: absolute;
    margin-left: 5%;
    width: 60%;
    background-color: #FFFFFF;
    /* height: 800px; */
    border-radius: 24px;
}

.center_menu {
    position: absolute;
    margin-left: 70%;
    width: 25%;
    background-color: #FFFFFF;
    height: 780px;
    border-radius: 24px;
    padding-top: 20px;
}

.add_btn_font {
    font-family: 'Inria Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
}

.add_btn {
    position: absolute;
    z-index: 5;
    margin-left: 76%;
    margin-top: 750px;
}
</style>