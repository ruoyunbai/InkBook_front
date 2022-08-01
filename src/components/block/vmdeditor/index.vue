<template>
  <v-md-editor     :disabled-menus="[]"
    @upload-image="handleUploadImage"
     left-toolbar="undo redo clear | emoji h bold italic strikethrough quote | ul ol table hr | link image code | save" 
     v-model="text" height="400px"></v-md-editor>
</template>
<script setup lang="ts">
import axios from 'axios'
import {ref,Ref} from 'vue'
import {useUserStore} from '../../../store/User'
import {useBlockStore} from '../../../store/Block'
import { InputInst,useMessage } from 'naive-ui'
const message=useMessage()
let text:Ref<string>=ref("")
const User=useUserStore()
const Block=useBlockStore()


function stringify (data:any) {
  const formData = new FormData()
  for (const key in data) {
    // eslint-disable-next-line no-prototype-builtins
    if (data.hasOwnProperty(key)) {
      if (data[key]) {
        if (data[key].constructor === Array) {
          if (data[key][0]) {
            if (data[key][0].constructor === Object) {
              formData.append(key, JSON.stringify(data[key]))
            } else {
              data[key].forEach((item:any, index:any) => {
                formData.append(key + `[${index}]`, item)
              })
            }
          } else {
            formData.append(key + '[]', '')
          }
        } else if (data[key].constructor === Object) {
          formData.append(key, JSON.stringify(data[key]))
        } else {
          formData.append(key, data[key])
        }
      } else {
        if (data[key] === 0) {
          formData.append(key, 0+"")
        } else {
          formData.append(key, '')
        }
      }
    }
  }
  return formData
}
const handleUploadImage=(event: any, insertImage: any, files: any)=>{
     console.log(files);
     console.log(event)
      axios(
       {url:axios.defaults.baseURL+'/portal/upload_file',
        method:'post',
        headers:{
        'Content-Type':'multipart/form-data' 
        },
        data:{
          image:files[0],
          user_id:User.Id
         
        },
        transformRequest: [ (data) => {
          return stringify(data)}
        ]

   
       
       }
      )
        .then(function (response) {
          // 处理成功情况
          console.log(response.data)
          if(response.data?.success){
              text.value+="![image]("+response.data?.url+")"
            
          }else{
            console.log(response.data)
             message.error(response.data.message)
          }
          console.log(response.data)
        }
        )
        }

        </script>