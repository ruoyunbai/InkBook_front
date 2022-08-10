/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module '@kangc/v-md-editor/lib/theme/github.js'
declare module '@kangc/v-md-editor'
declare module '@kangc/v-md-editor/lib/plugins/emoji/index'
declare module  'vue-drag-resize'
declare module 'vue-email-editor'
declare module 'shortid'
declare module 'vue-fabric'
declare module 'y-websocket'
declare module 'vue-tree-list'
declare module  'file-saver'
declare module  'pizzip'

declare module  'pizzip/utils'

declare module 'file-saver'

declare module 'docxtemplater-image-module-free'
declare module  "html-docx-js/dist/html-docx"
declare module "jspdf"
