<template>
    <div>
        <n-modal v-model:show="showModal" class="custom-card" preset="card" title=" 请输入文档名字" size="huge"
            :bordered="false">
            <template #header-extra>
                取消
            </template>
            <!-- <n-input v-model:value="createName"></n-input> -->
            <template #footer>
                <n-button @click="createDoc">确定</n-button>
            </template>
        </n-modal>
        <n-button @click="show"></n-button>
        <n-card :bordered="false">
            <n-grid :cols="20">
                <n-gi span="3">
                    <n-space vertical>
                        <n-select v-model:value="projvalue" :options="projoptions" remote :loading="projLoading"
                            placeholder="请选择项目" @update:value="getDocs()" class="choose" />
                    </n-space>
                </n-gi>
                <n-gi span="3">
                    <n-space vertical>
                        <n-select v-model:value="docValue" :options="options" remote :loading="projLoading"
                            placeholder="请选文档" @update:value="enterDoc" class="choose" />
                    </n-space>
                </n-gi>
                <!-- <n-gi></n-gi> -->
                <n-gi span="3">

                </n-gi>
                <n-gi span="2">
                    <n-space>
                        <n-button type="warning" strong secondary :disabled="ProjNotChosed" v-on:click="saveDesign"
                            @click="() => { showModal = true }">新建文档</n-button>
                        <!-- <n-button v-on:click="exportHtml">Export HTML</n-button> -->
                    </n-space>
                </n-gi>
                <!--   <n-gi span="2"> -->
                <!-- <n-space> -->
                <!-- <n-button type="warning" strong secondary :disabled="nopageChosed" v-on:click="saveDesign">保存设计 -->
                <!-- </n-button> -->
                <!-- <n-button v-on:click="exportHtml">Export HTML</n-button> -->
                <!-- </n-space> -->
                <!-- </n-gi>  -->


            </n-grid>
        </n-card>
        <menu-bar class="editor__header" :editor="editor" />
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
        <n-grid cols="100">
            <n-gi></n-gi>
            <n-gi span="99">
                <n-card content-style="padding:0px;
  
  border-radius: 0.75rem;">
                    <div class="editor" v-if="editor">
                        <editor-content class="editor__content" :editor="editor" />
                        <div class="editor__footer">
                            <div :class="`editor__status editor__status--${status}`">
                                <template v-if="status === 'connected'">
                                    {{ editor?.storage.collaborationCursor.users.length }} user{{
                                            editor?.storage.collaborationCursor.users.length === 1 ? '' : 's'
                                    }} online in {{
        doc.name
}}
                                </template>
                                <template v-else>
                                    offline
                                </template>
                            </div>
                            <div class="editor__name">

                                {{ User.Name }}

                            </div>
                        </div>
                    </div>
                </n-card>
            </n-gi>
        </n-grid>
    </div>
</template>

<script setup lang="ts">
import StarterKit from '@tiptap/starter-kit'
import { useEditor, Editor, EditorContent } from '@tiptap/vue-3'
import Collaboration from '@tiptap/extension-collaboration'
import * as Y from 'yjs'
import { WebrtcProvider } from 'y-webrtc'
import CollaborationCursor from '@tiptap/extension-collaboration-cursor'
import { ref, onBeforeMount, onBeforeUnmount, reactive, onMounted } from 'vue'
import axios from "axios"
import { useUserStore } from '../../store/User'
import { SelectOption } from 'naive-ui'
import { HocuspocusProvider } from '@hocuspocus/provider'
import { useGroupStore } from '../../store/Group'
import { messageConfig } from 'element-plus'
import { useMessage } from 'naive-ui'
import { WebsocketProvider } from 'y-websocket'
import MenuBar from './MenuBar.vue'
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
let ydoc = new Y.Doc()
// let provider = new WebrtcProvider('example-document1', ydoc)
const createDoc = () => {

}
// provider.on('status', (event: { status: any }) => {
//     status.value = event.status
//     console.log("status", event.status)
// });
// provider.on('synced', (synced: any) => {
//     // NOTE: This is only called when a different browser connects to this client
//     // Windows of the same browser communicate directly with each other
//     // Although this behavior might be subject to change.
//     // It is better not to expect a synced event when using y-webrtc
//     console.log('synced!', synced)
// })
// const providerw = new HocuspocusProvider({
//   url: 'ws://121.40.165.18:8800',
//   name: '',
// })
let wsProvider = new WebsocketProvider('wss://demos.yjs.dev', "gwx" , ydoc)

// let wsProvider = new WebsocketProvider('wss://demos.yjs.dev', "gwx-" + Math.random().toString(36).slice(-8), ydoc)
const saveDesign = () => {
    axios({
        url: axios.defaults.baseURL + "/doc/upload_document",
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Authorization": User.token
        },
        data: {
            content: JSON.stringify(editor?.value?.getJSON()),
            document_name: doc.name,
            proj_id: 1,
            document_id: doc.id
        },
        transformRequest: [
            function (data, headers) {
                let data1 = JSON.stringify(data);
                console.log(data1);
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
const editor = useEditor({
    autofocus: true,
    extensions: [
        StarterKit.configure({
            // The Collaboration extension comes with its own history handling
            history: false,
        }),
        Collaboration.configure({
            document: ydoc,
            // document:providerw.docunment
        }),
        CollaborationCursor.configure({
            provider: wsProvider,
            user: {
                name: User.Name,
                color: '#f783ac',
            },
        }),
    ],
    content: ""
})
onMounted(() => {

})
onBeforeMount(() => {
    getProjs()
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
    getDocs()
})
function beforeLeave(event: any) {
      console.log("leave doc!!!!!!")
    editor?.value?.destroy()
    // provider.destroy()
    wsProvider.destroy()

    console.log("quit!")
    if (doc.id == -1) return

    axios({
        url: axios.defaults.baseURL + "/file/quit_document",
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Authorization": User.token
        },
        data: {
            document_id: doc.id
        },
        transformRequest: [
            function (data, headers) {
                let data1 = JSON.stringify(data);
                console.log(data1);
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
    axios({
        url: axios.defaults.baseURL + "/doc/upload_document",
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Authorization": User.token
        },
        data: {
            content: JSON.stringify(editor?.value?.getJSON()),
            document_name: doc.name,
            proj_id: 1,
            document_id: doc.id
        },
        transformRequest: [
            function (data, headers) {
                let data1 = JSON.stringify(data);
                console.log(data1);
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
window.addEventListener("beforeunload",beforeLeave);
onBeforeUnmount(() => {
    window.removeEventListener("beforeunload",beforeLeave)
    console.log("leave doc!!!!!!")
    editor?.value?.destroy()
    // provider.destroy()
    wsProvider.destroy()

    console.log("quit!")
    if (doc.id == -1) return

    axios({
        url: axios.defaults.baseURL + "/file/quit_document",
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Authorization": User.token
        },
        data: {
            document_id: doc.id
        },
        transformRequest: [
            function (data, headers) {
                let data1 = JSON.stringify(data);
                console.log(data1);
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
    axios({
        url: axios.defaults.baseURL + "/doc/upload_document",
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Authorization": User.token
        },
        data: {
            content: JSON.stringify(editor?.value?.getJSON()),
            document_name: doc.name,
            proj_id: 1,
            document_id: doc.id
        },
        transformRequest: [
            function (data, headers) {
                let data1 = JSON.stringify(data);
                console.log(data1);
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
})
const status = ref('connecting')
const getRandomElement = (list: string | any[]) => {
    return list[Math.floor(Math.random() * list.length)]
}
const getRandomColor = () => {
    return getRandomElement([
        '#958DF1',
        '#F98181',
        '#FBBC88',
        '#FAF594',
        '#70CFF8',
        '#94FADB',
        '#B9F18D',
    ])
}
const getProjs = () => {
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
                console.log(data1);
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
            projLoading.value = false

            //   protoLoading.value = false

        }
        else {
            message.error("还没有项目")
        }
    })
}
const getDocs = () => {
    axios({
        url: axios.defaults.baseURL + "/doc/get_proj_documents",
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Authorization": User.token
        },
        data: {
            proj_id: 1
        },
        transformRequest: [
            function (data, headers) {
                let data1 = JSON.stringify(data);
                console.log(data1);
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
                options.value.push({
                    label: response.data?.documents[i]?.document_name,
                    value: response.data?.documents[i]?.document_id
                })
            }
            //   protoLoading.value = false

        }
    })
}
const enterDoc = () => {
    doc.id = Number(docValue.value)
    console.log("docid", doc.id)
    for (let i = 0; i < options.value.length; i++) {
        if (docValue.value == options.value[i].value) {
            console.log("LABEL", options.value[i].label)
            doc.name = String(options.value[i].label)
        }
    }
    let t=new Y.Doc()
    wsProvider = new WebsocketProvider('wss://demos.yjs.dev', "gwx1-" + doc.name, t)
    axios({
        url: axios.defaults.baseURL + "/doc/enter_document",
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Authorization": User.token
        },
        data: {
            document_id: doc.id
        },
        transformRequest: [
            function (data, headers) {
                let data1 = JSON.stringify(data);
                console.log(data1);
                return data1;
            },
        ],
    }).then(function (response) {
        // 处理成功情况
        console.log("response", response)
        console.log(response.data);

        if (response.data?.success) {
            doc.name = response.data?.document.document_name
            if (response.data?.rank == 1) {
                editor?.value?.chain()
                    .clearContent()
                    .focus()
                    .toggleBold()
                    .setContent(JSON.parse(response.data?.document.content)).run()
                //   protoLoading.value = false
            }

        }
    })
    status.value = "connected"
}

const show = () => {
    console.log("status", status.value)
    console.log(editor?.value?.getJSON())
    console.log(JSON.stringify(editor?.value?.getJSON()))
    console.log(editor?.value?.getText())
    console.log(editor?.value?.getHTML())
    console.log("wsp", wsProvider)
    // provider.disconnect()
    // provider.roomName = 'example-document2'
    // console.log(provider.roomName)
    // provider.connect()
    // console.log("room", provider.room)
    // let t = new Y.Doc()

    // provider = new WebrtcProvider('example-document2', t)
    // console.log("room", provider.room)
}

// Registered with a WebRTC 
let roomName = ""
const createName = () => {
    roomName += ""
    // provider
}



console.log(ydoc)
console.log("ydoc", ydoc.get('array', Y.Array))
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

