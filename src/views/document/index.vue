<template>
    <div>
        <n-modal v-model:show="showModal" style="width:500px" class="custom-card" preset="card" title=" 请输入文档名字"
            size="huge" :bordered="false">
            <template #header-extra>
                取消
            </template>
            <n-input v-model:value="createName"></n-input>
            <template #footer>
                <n-button @click="createDoc">确定</n-button>
            </template>
        </n-modal>
        <!-- <n-card :bordered="false" > -->
        <div>
            <n-grid :cols="100">
                <n-gi></n-gi>
                <n-gi span="3">
                    <n-image preview-disabled src="svg\doc\形状 (1).svg"></n-image>
                </n-gi>
                <n-gi span="10">
                    <div style="font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 34px;
color: #000000;">多人文档</div>
                </n-gi>
                <n-gi span="10"></n-gi>
                <n-gi span="15">
                    <n-space vertical>
                        <n-select v-model:value="projvalue" :options="projoptions" remote :loading="projLoading"
                            placeholder="请选择项目" @update:value="selectProj" class="choose selectP" />
                    </n-space>
                </n-gi>
                <n-gi></n-gi>
                <n-gi span="15">
                    <n-space vertical>
                        <n-select v-model:value="docValue" :options="options" remote :loading="projLoading"
                            placeholder="请选文档" @update:value="enterDoc" class="choose selectP" />

                    </n-space>
                </n-gi>
                <!-- <n-gi></n-gi> -->
                <n-gi span="3">

                </n-gi>
                <n-gi span="2">
                    <n-space>
                        <n-button bordered type="info" strong :disabled="ProjNotChosed" v-on:click="saveDesign"
                            @click="() => { showModal = true }">新建文档</n-button>
                        <!-- <n-button v-on:click="exportHtml">Export HTML</n-button> -->
                    </n-space>
                </n-gi>
                <n-gi span="5"></n-gi>
                <n-gi span="2">
                    <n-space>
                        <n-button bordered type="info" strong :disabled="ProjNotChosed" v-on:click="saveDesign"
                            @click="() => { showModal = true }">导出文档</n-button>
                        <!-- <n-button v-on:click="exportHtml">Export HTML</n-button> -->
                    </n-space>
                </n-gi>
                <n-gi span="5">
                </n-gi>

                    <n-gi span="10">
                        <n-space vertical>

                            <n-select v-model:value="docValue" :options="options" remote :loading="projLoading"
                                placeholder="更多模板" @update:value="enterDoc" class="choose selectP" />
                        </n-space>
                      
                    </n-gi>


            </n-grid>

        </div>
        <!-- </n-card> -->

        <!-- <div v-if="editor"> -->

        <!-- <n-button @click="editor?.chain().focus().toggleBold().run()"
                :class="{ 'is-active': editor?.isActive('bold') }">
                bold
            </n-button>
            <n-button @click="editor?.chain().focus().toggleItalic().run()"
                :class="{ 'is-active': editor?.isActive('italic') }">
                italic
            </n-button>
            <n-button @click="editor?.chain().focus().toggleStrike().run()"
                :class="{ 'is-active': editor?.isActive('strike') }">
                strike
            </n-button>
            <n-button @click="editor?.chain().focus().toggleCode().run()"
                :class="{ 'is-active': editor?.isActive('code') }">
                code
            </n-button>
            <n-button @click="editor?.chain().focus().unsetAllMarks().run()">
                clear marks
            </n-button>
            <n-button @click="editor?.chain().focus().clearNodes().run()">
                clear nodes
            </n-button>
            <n-button @click="editor?.chain().focus().setParagraph().run()"
                :class="{ 'is-active': editor?.isActive('paragraph') }">
                paragraph
            </n-button>
            <n-button @click="editor?.chain().focus().toggleHeading({ level: 1 }).run()"
                :class="{ 'is-active': editor?.isActive('heading', { level: 1 }) }">
                h1
            </n-button>
            <n-button @click="editor?.chain().focus().toggleHeading({ level: 2 }).run()"
                :class="{ 'is-active': editor?.isActive('heading', { level: 2 }) }">
                h2
            </n-button>
            <n-button @click="editor?.chain().focus().toggleHeading({ level: 3 }).run()"
                :class="{ 'is-active': editor?.isActive('heading', { level: 3 }) }">
                h3
            </n-button>
            <n-button @click="editor?.chain().focus().toggleHeading({ level: 4 }).run()"
                :class="{ 'is-active': editor?.isActive('heading', { level: 4 }) }">
                h4
            </n-button>
            <n-button @click="editor?.chain().focus().toggleHeading({ level: 5 }).run()"
                :class="{ 'is-active': editor?.isActive('heading', { level: 5 }) }">
                h5
            </n-button>
            <n-button @click="editor?.chain().focus().toggleHeading({ level: 6 }).run()"
                :class="{ 'is-active': editor?.isActive('heading', { level: 6 }) }">
                h6
            </n-button>
            <n-button @click="editor?.chain().focus().toggleBulletList().run()"
                :class="{ 'is-active': editor?.isActive('bulletList') }">
                bullet list
            </n-button>
            <n-button @click="editor?.chain().focus().toggleOrderedList().run()"
                :class="{ 'is-active': editor?.isActive('orderedList') }">
                ordered list
            </n-button>
            <n-button @click="editor?.chain().focus().toggleCodeBlock().run()"
                :class="{ 'is-active': editor?.isActive('codeBlock') }">
                code block
            </n-button>
            <n-button @click="editor?.chain().focus().toggleBlockquote().run()"
                :class="{ 'is-active': editor?.isActive('blockquote') }">
                blockquote
            </n-button>
            <n-button @click="editor?.chain().focus().setHorizontalRule().run()">
                horizontal rule
            </n-button>
            <n-button @click="editor?.chain().focus().setHardBreak().run()">
                hard break
            </n-button>
            <n-button @click="editor?.chain().focus().undo().run()">
                undo
            </n-button>
            <n-button @click="editor?.chain().focus().redo().run()">
                redo
            </n-button> -->
        <!-- </div> -->
        <br>
        <!-- <router-link to="/document/content">1111111</router-link> -->
        <n-layout>
            <router-view></router-view>
        </n-layout>
    </div>
</template>

<script setup lang="ts">

import { ref, onBeforeMount, onBeforeUnmount, reactive, onMounted } from 'vue'
import axios from "axios"
import { useUserStore } from '../../store/User'
import { SelectOption } from 'naive-ui'
import { HocuspocusProvider } from '@hocuspocus/provider'
import { useGroupStore } from '../../store/Group'
import { messageConfig } from 'element-plus'
import { useMessage } from 'naive-ui'
import { useRouter, useRoute } from 'vue-router'
import projectDetailVue from '../projectDetail/projectDetail.vue'
import { useProjectStore } from '../../store/Project'
// import projectVue from '../../components/project.vue'
const Project=useProjectStore()
const route = useRoute()
const router = useRouter()
const message = useMessage()
const Group = useGroupStore()
const User = useUserStore()
const options = ref<SelectOption[]>([])
const projoptions = ref<SelectOption[]>([])
const docChosed = ref(false)
const docId = ref(-1)
const docValue = ref(null)
const projvalue = ref(null)
const projLoading = ref(true)
const showModal = ref(false)
// const ProjNotChosed=ref(true)
const ProjNotChosed = ref(false)

const doc = reactive({
    id: -1,
    name: ""
}
)
const selectProj=()=>{
    Project.proj_id=projvalue.value
    console.log("IDDDD",Project.proj_id)
    getDocs()
}
// let provider = new WebrtcProvider('example-document1', ydoc)
const createDoc = () => {
    axios({
        url: axios.defaults.baseURL + "/doc/create_document",
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Authorization": User.token
        },
        data: {
            document_name: createName.value,
            proj_id: Project.proj_id,
        },
        transformRequest: [
            function (data, headers) {
                let data1 = JSON.stringify(data);
                
                return data1;
            },
        ],
    }).then(function (response) {
        // 处理成功情况
        console.log("response", response)
        console.log(response.data);
        showModal.value = false

        if (response.data?.success) {
            message.success(response.data?.message)
            getDocs(true)

        } else {
            message.error(response.data?.message)
        }
    })

}
let pushN = 0
const enterDoc = () => {
    doc.id = Number(docValue.value)
    console.log("docid", doc.id)
    for (let i = 0; i < options.value.length; i++) {
        if (docValue.value == options.value[i].value) {
            console.log("LABEL", options.value[i].label)
            doc.name = String(options.value[i].label)
        }
    }
    // console.log("name11111111111",route.name)
    if (route.name === "docContent") {
        router.push({
            name: "docContent0",
            params: doc
        })
        pushN = 1
    } else {
        router.push({
            name: "docContent",
            params: doc
        })
        pushN = 0
    }


}

const saveDesign = () => {
    axios({
        url: axios.defaults.baseURL + "/doc/upload_document",
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Authorization": User.token
        },
        data: {
            content: "",
            document_name: doc.name,
            proj_id: 1,
            document_id: doc.id
        },
        transformRequest: [
            function (data, headers) {
                let data1 = JSON.stringify(data);
                
                return data1;
            },
        ],
    }).then(function (response) {
        // 处理成功情况
        console.log("response", response)
        console.log(response.data);

        if (response.data?.success) {

        }
    })
}

onMounted(() => {

})
onBeforeMount(() => {
    if(Project.proj_id==-1)
        getProjs(true)
    else{
        getProjs(false)
        getDocs()
    }
    //     axios.post('http://43.138.77.133:81/media/documents/2592b0d7a779ac7c4590c74d707b76a7.md'
    //     ,{},{responseType:'blob'}).then((res)=>{
    //         console.log(res)
    //     const blob = new Blob([res.data]);//处理文档流
    //     console.log(blob)
    //     const fileName = '资产列表.xlsx';
    //     const elink = document.createElement('a');
    //     elink.download = fileName;
    //     elink.style.display = 'none';
    //     elink.href = URL.createObjectURL(blob);
    //     document.body.appendChild(elink);
    //     elink.click();
    //     URL.revokeObjectURL(elink.href); // 释放URL 对象
    //     document.body.removeChild(elink);
    // })
    
})



const getProjs = (ifgetDocs=false) => {
    projLoading.value = true
    let id: Number = Group.id
    if (id == -1) id = 1
    axios({
        url: axios.defaults.baseURL + "/proj/get_proj_all",
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Authorization": User.token
        },
        data: {
            group_id: Group.id,
            is_desc: true,
            order_by: 0
        },
        transformRequest: [
            function (data, headers) {
                let data1 = JSON.stringify(data);
                
                return data1;
            },
        ],
    }).then(function (response) {
        // 处理成功情况
        console.log("response", response)
        console.log(response.data);
        while (options.value.length != 0) options.value.pop()
        if (response.data?.success) {
            for (let i = 0; i < response.data?.count; i++) {
                projoptions.value.push({
                    label: response.data?.projs[i]?.proj_name,
                    value: response.data?.projs[i]?.proj_id
                })
                
            }
           if(ifgetDocs==true){
                // Project.proj_id=response.data?.projs[0]?.proj_id
                // Project.proj_name=response.data?.projs[0]?.proj_name
                // getDocs()
           }
            projLoading.value = false
            //   protoLoading.value = false
        }
        else {
            message.error("还没有项目")
        }
    })
}
const getDocs = (set = false) => {
    projLoading.value = false
    axios({
        url: axios.defaults.baseURL + "/doc/get_proj_documents",
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Authorization": User.token
        },
        data: {
            proj_id: Project.proj_id
        },
        transformRequest: [
            function (data, headers) {
                let data1 = JSON.stringify(data);
                
                return data1;
            },
        ],
    }).then(function (response) {
        // 处理成功情况
        console.log("responseDocs", response)
        // console.log(response.data);
        while (options.value.length != 0) options.value.pop()
        if (response.data?.success) {
            for (let i = 0; i < response.data?.count; i++) {
                console.log("onePush")
                options.value.push({
                    label: response.data?.documents[i]?.document_name,
                    value: response.data?.documents[i]?.document_id
                })
            }
            if (set) {
                doc.id = response.data?.documents[0]?.document_id
                doc.name = response.data?.documents[0]?.document_name
                docValue.value = response.data?.documents[0]?.document_name
                enterDoc()
            }
            //   protoLoading.value = false

        }
    })
}



// Registered with a WebRTC 
let roomName = ""
const createName = ref("")




</script>

<style lang="scss">
/* Basic editor styles */
.ProseMirror {
    >*+* {
        margin-top: 0.75em;
    }

    ul,
    ol {
        padding: 0 1rem;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        line-height: 1.1;
    }

    code {
        background-color: rgba(#616161, 0.1);
        color: #616161;
    }

    pre {
        background: #0D0D0D;
        color: #FFF;
        font-family: 'JetBrainsMono', monospace;
        padding: 0.75rem 1rem;
        border-radius: 0.5rem;

        code {
            color: inherit;
            padding: 0;
            background: none;
            font-size: 0.8rem;
        }
    }

    img {
        max-width: 100%;
        height: auto;
    }

    blockquote {
        padding-left: 1rem;
        border-left: 2px solid rgba(#0D0D0D, 0.1);
    }

    hr {
        border: none;
        border-top: 2px solid rgba(#0D0D0D, 0.1);
        margin: 2rem 0;
    }
}

.ProseMirror {
    >*+* {
        margin-top: 0.75em;
    }
}

/* Placeholder (at the top) */
.ProseMirror p.is-editor-empty:first-child::before {
    content: attr(data-placeholder);
    float: left;
    color: #adb5bd;
    pointer-events: none;
    height: 0;
}

/* Give a remote user a caret */
.collaboration-cursor__caret {
    position: relative;
    margin-left: -1px;
    margin-right: -1px;
    border-left: 1px solid #0D0D0D;
    border-right: 1px solid #0D0D0D;
    word-break: normal;
    pointer-events: none;
}

/* Render the username above the caret */
.collaboration-cursor__label {
    position: absolute;
    top: -1.4em;
    left: -1px;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    user-select: none;
    color: #0D0D0D;
    padding: 0.1rem 0.3rem;
    border-radius: 3px 3px 3px 0;
    white-space: nowrap;
}
</style>

<style lang="less" scoped>
.selectP {
    :deep(.n-base-selection-label) {
        /* Colors / Blue / 100% */

        background: #2772F0;
        border-radius: 16px;
    }

    :deep(.n-base-selection__border) {
        // background: #2772F0;
        border-radius: 16px;
    }

    :deep(.n-base-selection--active) {
        background: #2772F0;
        border-radius: 16px;
    }

    :deep(.n-base-selection__state-border) {
        // background: #2772F0;
        border-radius: 16px;
    }

}

.choose {
    border-width: 0px;

    :deep(.n-base-selection__border) {
        border-width: 0px;

    }

    :deep(.n-base-selection--selected) {
        border-width: 0px;
    }



    :deep(.n-base-selection-input__content) {
        font-family: 'Inria Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        // background-color: aqua;
        line-height: 34px;
        /* identical to box height, or 142% */
        color: rgba(9, 27, 61, 0.5);
    }
}
</style>

<style lang="scss">
.editor {
    display: flex;
    flex-direction: column;
    max-height: 26rem;
    color: #0D0D0D;
    background-color: #FFF;
    border: 3px solid #0D0D0D;
    border-radius: 0.75rem;

    &__header {
        display: flex;
        align-items: center;
        flex: 0 0 auto;
        flex-wrap: wrap;
        padding: 0.25rem;
        border-bottom: 3px solid #0D0D0D;
    }

    &__content {
        padding: 1.25rem 1rem;
        flex: 1 1 auto;
        overflow-x: hidden;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        height: 2000px;
    }

    &__footer {
        display: flex;
        flex: 0 0 auto;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        white-space: nowrap;
        border-top: 3px solid #0D0D0D;
        font-size: 12px;
        font-weight: 600;
        color: #0D0D0D;
        white-space: nowrap;
        padding: 0.25rem 0.75rem;
    }

    /* Some information about the status */
    &__status {
        display: flex;
        align-items: center;
        border-radius: 5px;

        &::before {
            content: ' ';
            flex: 0 0 auto;
            display: inline-block;
            width: 0.5rem;
            height: 0.5rem;
            background: rgba(#0D0D0D, 0.5);
            border-radius: 50%;
            margin-right: 0.5rem;
        }

        &--connecting::before {
            background: #616161;
        }

        &--connected::before {
            background: #B9F18D;
        }
    }

    &__name {
        button {
            background: none;
            border: none;
            font: inherit;
            font-size: 12px;
            font-weight: 600;
            color: #0D0D0D;
            border-radius: 0.4rem;
            padding: 0.25rem 0.5rem;

            &:hover {
                color: #FFF;
                background-color: #0D0D0D;
            }
        }
    }
}
</style>

<style lang="scss">
/* Give a remote user a caret */
.collaboration-cursor__caret {
    position: relative;
    margin-left: -1px;
    margin-right: -1px;
    border-left: 1px solid #0D0D0D;
    border-right: 1px solid #0D0D0D;
    word-break: normal;
    pointer-events: none;
}

/* Render the username above the caret */
.collaboration-cursor__label {
    position: absolute;
    top: -1.4em;
    left: -1px;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    user-select: none;
    color: #0D0D0D;
    padding: 0.1rem 0.3rem;
    border-radius: 3px 3px 3px 0;
    white-space: nowrap;
}

/* Basic editor styles */
.ProseMirror {
    >*+* {
        margin-top: 0.75em;
    }

    ul,
    ol {
        padding: 0 1rem;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        line-height: 1.1;
    }

    code {
        background-color: rgba(#616161, 0.1);
        color: #616161;
    }

    pre {
        background: #0D0D0D;
        color: #FFF;
        font-family: 'JetBrainsMono', monospace;
        padding: 0.75rem 1rem;
        border-radius: 0.5rem;

        code {
            color: inherit;
            padding: 0;
            background: none;
            font-size: 0.8rem;
        }
    }

    mark {
        background-color: #FAF594;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    hr {
        margin: 1rem 0;
    }

    blockquote {
        padding-left: 1rem;
        border-left: 2px solid rgba(#0D0D0D, 0.1);
    }

    hr {
        border: none;
        border-top: 2px solid rgba(#0D0D0D, 0.1);
        margin: 2rem 0;
    }

    ul[data-type="taskList"] {
        list-style: none;
        padding: 0;

        li {
            display: flex;
            align-items: center;

            >label {
                flex: 0 0 auto;
                margin-right: 0.5rem;
                user-select: none;
            }

            >div {
                flex: 1 1 auto;
            }
        }
    }
}
</style>

