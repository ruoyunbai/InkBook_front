<template>
    <n-card :bordered="false">
        <n-button @click="show"></n-button>
        <n-grid :cols="20">
            <n-gi span="3">
                <n-space vertical>
                    
                    <n-select v-model:value="docValue" :options="options" remote :loading="protoLoading" placeholder="请选文档"
                        @update:value="enterDoc" class="choose" />
                </n-space>
            </n-gi>
            <!-- <n-gi></n-gi> -->
            <n-gi span="3">
              
            </n-gi>
            <n-gi span="2">
                <n-space>
                    <n-button type="warning" strong secondary :disabled="ProtoNotChosed" v-on:click="saveDesign"
                        @click="() => { showModal = true }">新建页面</n-button>
                    <!-- <n-button v-on:click="exportHtml">Export HTML</n-button> -->
                </n-space>
            </n-gi>
            <n-gi span="2">
                <n-space>
                    <n-button type="warning" strong secondary :disabled="nopageChosed" v-on:click="saveDesign">保存设计
                    </n-button>
                    <!-- <n-button v-on:click="exportHtml">Export HTML</n-button> -->
                </n-space>
            </n-gi>


        </n-grid>
    </n-card>
    <div v-if="editor">

        <n-button @click="editor?.chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
            bold
        </n-button>
        <n-button @click="editor?.chain().focus().toggleItalic().run()"
            :class="{ 'is-active': editor.isActive('italic') }">
            italic
        </n-button>
        <n-button @click="editor?.chain().focus().toggleStrike().run()"
            :class="{ 'is-active': editor.isActive('strike') }">
            strike
        </n-button>
        <n-button @click="editor?.chain().focus().toggleCode().run()" :class="{ 'is-active': editor.isActive('code') }">
            code
        </n-button>
        <n-button @click="editor?.chain().focus().unsetAllMarks().run()">
            clear marks
        </n-button>
        <n-button @click="editor?.chain().focus().clearNodes().run()">
            clear nodes
        </n-button>
        <n-button @click="editor?.chain().focus().setParagraph().run()"
            :class="{ 'is-active': editor.isActive('paragraph') }">
            paragraph
        </n-button>
        <n-button @click="editor?.chain().focus().toggleHeading({ level: 1 }).run()"
            :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
            h1
        </n-button>
        <n-button @click="editor?.chain().focus().toggleHeading({ level: 2 }).run()"
            :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
            h2
        </n-button>
        <n-button @click="editor?.chain().focus().toggleHeading({ level: 3 }).run()"
            :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }">
            h3
        </n-button>
        <n-button @click="editor?.chain().focus().toggleHeading({ level: 4 }).run()"
            :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }">
            h4
        </n-button>
        <n-button @click="editor?.chain().focus().toggleHeading({ level: 5 }).run()"
            :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }">
            h5
        </n-button>
        <n-button @click="editor?.chain().focus().toggleHeading({ level: 6 }).run()"
            :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }">
            h6
        </n-button>
        <n-button @click="editor?.chain().focus().toggleBulletList().run()"
            :class="{ 'is-active': editor.isActive('bulletList') }">
            bullet list
        </n-button>
        <n-button @click="editor?.chain().focus().toggleOrderedList().run()"
            :class="{ 'is-active': editor.isActive('orderedList') }">
            ordered list
        </n-button>
        <n-button @click="editor?.chain().focus().toggleCodeBlock().run()"
            :class="{ 'is-active': editor.isActive('codeBlock') }">
            code block
        </n-button>
        <n-button @click="editor?.chain().focus().toggleBlockquote().run()"
            :class="{ 'is-active': editor.isActive('blockquote') }">
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
        </n-button>
    </div>
    <br>
    <n-card content-style="padding:10px;height:1000px">
        <editor-content :editor="editor" />
    </n-card>
</template>

<script setup lang="ts">
import StarterKit from '@tiptap/starter-kit'
import { useEditor, Editor, EditorContent } from '@tiptap/vue-3'
import Collaboration from '@tiptap/extension-collaboration'
import * as Y from 'yjs'
import { WebrtcProvider } from 'y-webrtc'
import CollaborationCursor from '@tiptap/extension-collaboration-cursor'
import { ref, onBeforeMount, onBeforeUnmount, reactive } from 'vue'
import axios from "axios"
import { useUserStore } from '../../store/User'
import { SelectOption } from 'naive-ui'
import { HocuspocusProvider } from '@hocuspocus/provider'
const User = useUserStore()
const options = ref<SelectOption[]>([])
const docChosed = ref(false)
const docId = ref(-1)
const docValue=ref(null)
const doc = reactive({
    id:-1,
    name: ""
}
)
onBeforeMount(() => {
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
onBeforeUnmount(() => {
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
        url: axios.defaults.baseURL + "/file/upload_document",
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Authorization": User.token
        },
        data: {
            context: JSON.stringify(editor.value?.getJSON()),
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


const getDocs = () => {
    axios({
        url: axios.defaults.baseURL + "/file/get_proj_documents",
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
    doc.id=docValue.value
    axios({
        url: axios.defaults.baseURL + "/file/enter_document",
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Authorization": User.token
        },
        data: {
            document_id:doc.id
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
            doc.name=response.data?.document.document_name
            editor.value?.chain()
            .clearContent()
            .setContent(JSON.parse).run()
            //   protoLoading.value = false

        }
    })

}
const show = () => {
    console.log(editor.value?.getJSON())
    console.log(JSON.stringify(editor.value?.getJSON()))
    console.log(editor.value?.getText())
    console.log(editor.value?.getHTML())
    
   

}
const ydoc = new Y.Doc()
// Registered with a WebRTC provider
const provider = new WebrtcProvider('example-document1', ydoc)
// const providerw = new HocuspocusProvider({
//   url: 'ws://121.40.165.18:8800',
//   name: '',
// })
const editor = useEditor({
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
            provider: provider,
            user: {
                name: User.Name,
                color: '#f783ac',
            },
        }),
    ],
    content: ""
})


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