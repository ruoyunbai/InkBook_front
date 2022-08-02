<template>
  <n-card :bordered="false">
    <n-grid :cols="20">
      <n-gi span="3">
        <n-space vertical>
          <n-select v-model:value="value" :options="options" class="choose" />
        </n-space>
      </n-gi>
      <n-gi>

      </n-gi>
      <n-gi>
        
      </n-gi>
      <n-gi>

      </n-gi>
      <n-gi span="5">
        <n-space>
        <n-button v-on:click="saveDesign">Save Design</n-button>
        <n-button v-on:click="exportHtml">Export HTML</n-button>
     </n-space> 
     </n-gi>
    </n-grid>
  </n-card>


<br>

<div>
  <EmailEditor displayMode='web' 
  style="height:1000px" 
  :min-height="minHeight" :project-id="projectId" :locale="locale"
    ref="emailEditor" v-on:load="editorLoaded()"
    display-mod="web"
     v-on:ready="editorReady()" />
</div>
 

</template>

<script setup lang="ts">
import { ref, reactive,onMounted } from 'vue'
import { EmailEditor } from 'vue-email-editor';

const emailEditor = ref()
const minHeight = ref('500px')
const locale = ref('en')
const projectId = ref(0) // replace with your project id
// const tools=reactive( {
// disable image tool
//    const  image=reactive( {
//         enabled: false,
//       })




// called when the editor is created
const editorLoaded = () => {
  console.log('editorLoaded');
  // Pass your template JSON here
  // this.$refs.emailEditor.editor.loadDesign({});
}
// called when the editor has finished loading
const editorReady = () => {
  console.log('editorReady');

}

const saveDesign = () => {
  emailEditor.value.editor.saveDesign((design: any) => {
    console.log('saveDesign', design);
    // a=design
  });
}
const exportHtml = () => {
  emailEditor.value.editor.exportHtml((data: any) => {
    console.log('exportHtml', data);
  });
  // emailEditor.value.editor.loadDesign(a)
}


</script>