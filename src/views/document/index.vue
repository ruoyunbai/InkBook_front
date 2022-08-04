<template>
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

const show = () => {
    console.log(editor.value?.getJSON())
    console.log(JSON.stringify(editor.value?.getJSON()))
    console.log(editor.value?.getText())
    console.log(editor.value?.getHTML())

}
const ydoc = new Y.Doc()
// Registered with a WebRTC provider
const provider = new WebrtcProvider('example-document1', ydoc)
let a = `{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"十大算法是大多数"}]}]}`
const editor = useEditor({
    extensions: [
        StarterKit.configure({
            // The Collaboration extension comes with its own history handling
            history: false,
        }),
        Collaboration.configure({
            document: ydoc,
        }),
        CollaborationCursor.configure({
            provider: provider,
            user: {
                name: 'Cyndi Lauper',
                color: '#f783ac',
            },
        }),
    ],
    content: null
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