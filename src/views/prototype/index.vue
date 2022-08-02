<template>
 
    <div class="container">
      <div id="bar">
        <h1>Vue Email Editor (Demo)</h1>

        <button v-on:click="saveDesign">Save Design</button>
        <button v-on:click="exportHtml">Export HTML</button>
      </div>
  
      <EmailEditor
      displayMode='web'
    style="height:1000px"
        :min-height="minHeight"
        :project-id="projectId"
        :locale="locale"
        ref="emailEditor"
        v-on:load="editorLoaded()"
        v-on:ready="editorReady()"
      />
   
    </div>
 
</template>

<script setup lang="ts">
import {ref,reactive} from 'vue'
  import { EmailEditor } from 'vue-email-editor';

const emailEditor=ref()
       const   minHeight= ref('500px')
    const    locale=ref( 'en')
        const projectId=ref(0) // replace with your project id
        // const tools=reactive( {
          // disable image tool
    //    const  image=reactive( {
    //         enabled: false,
    //       })
    
       
   

      // called when the editor is created
   const editorLoaded=() =>{
        console.log('editorLoaded');
        // Pass your template JSON here
        // this.$refs.emailEditor.editor.loadDesign({});
      }
      // called when the editor has finished loading
  const  editorReady=() =>{
        console.log('editorReady');
      }
 const   saveDesign=() =>{
        emailEditor.value.editor.saveDesign((design: any) => {
          console.log('saveDesign', design);
        });
      }
 const   exportHtml=() =>{
       emailEditor.value.editor.exportHtml((data: any) => {
          console.log('exportHtml', data);
        });
      }
   
 
</script>