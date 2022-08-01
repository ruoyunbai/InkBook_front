<template>

  <div class="gditor">
    <n-space justify="center" vertical>
      <n-input placeholder="请输入标题" type="text"  v-model:value="title" ref="titleInput" clearable></n-input>

      <div style="height:10px"></div>

      <n-input v-model:value="tagInput" ref="inputInstRef" placeholder="请输入并选择标签" type="text" clearable>
        <template #prefix>
          <n-tag v-for="item in tagListChosed" closable  @close="handleClose(item)" type="warning" :bordered=false round :key="item">
            <template #avatar>
              <div style="width:10px"></div>
              <n-icon>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 4.5H15.75" stroke="#F48023" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M6 9H15.75" stroke="#F48023" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M6 13.5H15.75" stroke="#F48023" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M2.25 4.5H2.2575" stroke="#F48023" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M2.25 9H2.2575" stroke="#F48023" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M2.25 13.5H2.2575" stroke="#F48023" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>

              </n-icon>

            </template>
            {{ item }}
          </n-tag>
        </template>
      </n-input>
      <n-space>
        <n-tag v-for="item in tagList2Choose" :bordered=false @click="handleChoose(item)" type="warning" round :key="item">
          <template #avatar>
              <div style="width:10px"></div>
            <n-image preview-disabled src="svg\板块界面svg\list.svg" />
          </template>
          {{ item }}
        </n-tag>
      </n-space>
      <div style="height:10px"></div>
      <!-- <div id="vditor"></div> -->
       <v-md-editor    
        :disabled-menus="[]"
    @upload-image="handleUploadImage"
     left-toolbar="undo redo clear | emoji h bold italic strikethrough quote | ul ol table hr | link image code | save" 
     v-model="text" height="400px"></v-md-editor>
      <div style="height:10px"></div>
      <n-space justify="space-between">

        <n-button @click="submit">提交</n-button>
      </n-space>
    </n-space>

  </div>
</template>

<script setup lang="ts">
import { ref, Ref, onMounted, reactive, watch, setBlockTracking } from 'vue'
// import Vditor from 'vditor'
import { InputInst,useMessage } from 'naive-ui'
// import 'vditor/dist/index.css';
import axios from 'axios';
import {useUserStore} from '../../../store/User'
import {useBlockStore} from '../../../store/Block'
import { getPackedSettings } from 'http2';
const User=useUserStore()
const Block=useBlockStore()
const text:Ref<string>=ref("")
// const vditor = ref<Vditor | null>(null);
const tagInput: Ref<string> = ref("");
let tagListChosed: string[] = reactive([])
let tagList2Choose: string[] = reactive([])
let tags:any[]=reactive([])
const inputInstRef = ref<InputInst | null>(null)
const title=ref(null)
watch(tagInput, (newVal, oldVal) => {

  while (tagList2Choose.length != 0) {
    tagList2Choose.pop();
  }
  if (newVal == "") return
  let have=false;
  for (let i = 0; i <tags.length; i += 1) {
    console.log(tags[i]?.name)
    if(tags[i]?.name.indexOf(newVal)!=-1)
    tagList2Choose.push(tags[i]?.name)
    if(tags[i]?.name===(newVal))have=true
    
  }
  if(!have)
  tagList2Choose.push(newVal)
  console.log(newVal)
})
const handleClose = (item: string) => {
  tagListChosed.forEach((item1, index, arr) => {
    if (item1 == item) {
      arr.splice(index, 1);
    }
  });

}
const handleChoose = (item: string) => {
  if (tagListChosed.indexOf(item) == -1)
    tagListChosed.push(item);
  tagInput.value=""
  inputInstRef.value?.focus()
}
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
const titleInput:any=ref(null);
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
  //     let formData=new FormData();
  //     // formData.append("image", files[0]);
  //     formData.append("user_id",User.Id+"")
  //      axios.post('/portal/upload_file',formData,  {
  //   headers: {
  //     "Content-Type": "multipart/form-data",
  //   }
  // }).then(function (response) {
  //         // 处理成功情况
  //         console.log(response.data)
  //         if(response.data?.status){
             
  //             // User.Name=modelRef.value.name,
  //             // User.Id=response.data.data.user_id,
  //             // localStorage.setItem("name",modelRef.value.name!=null?modelRef.value.name:"")
              
         
  //         }else{
  //            message.error(response.data.message)
  //         }
  //         console.log(response.data)
  //       }
  //     )

}
const getTags=()=>{
         axios.get('/post/get_section_tags', {
        params:{
            section:Block.section
        }
      

      })
        .then(function (response) {
          // 处理成功情况
      
          if(response.data?.success){
              // message.success(response.data.message)
             console.log(response.data.data)
             let i=0;
             for(i=0;i<response.data.data.length;i++){
               tags.push(response.data.data[i])
             }
              // User.Login=true;
              // localStorage.setItem("login","true")
              // router.push("/")
          }else{
            //  message.error(response.data.message)
          }
          // console.log(response.data)
          }
        )


}

onMounted(() => {
  // vditor.value = new Vditor('vditor', {
  //   width: "100%",
  //    cache: {
  //       enable: true,
  //     },
  //      upload: {
  //       	//允许的图片后缀
  //           accept: 'image/*,.wav,.jpg,.png,.gif,.jpeg,.svg',
			
  //           max: 10 * 1024 * 1024,

  //           multiple: true,
	// 		// 上传图片要用的url
  //           url:axios.defaults.baseURL+"/portal/upload_file",
  //           fieldName: 'image',
  //           extraData: {user_id:User.Id+""},
  //           // filename(name) {
  //           //     // return name.replace(/[^(a-zA-Z0-9\u4e00-\u9fa5\.)]/g, '').replace(
  //           //     //     /[\?\\/:|<>\*\[\]\(\)\$%\{\}@~]/g, '').replace('/\\s/g', '')
  //           //     return "image"
  //           // },
  //           //  filename(name) {
  //           //   return name.replace(/[^(a-zA-Z0-9\u4e00-\u9fa5\.)]/g, "")
  //           //     .replace(/[\?\\/:|<>\*\[\]\(\)\$%\{\}@~]/g, "")
  //           //     .replace("/\\s/g", "");
  //           // },
			
	// 		//上传成功时执行
  
  //   success(editor: HTMLPreElement, msg: string){
  //     console.log(msg)
  //      let testJson = eval("(" + msg + ")")
  //     console.log(testJson)
  //     // editor.blur()
  //     // insertValue(value: "sad", render = true)
  //     vditor.value?.insertValue("\n![image]("+testJson?.url+")\n" )
  //     // editor.innerText+= "\n![image]("+testJson?.url+")\n" 
  //     // editor.focus()
  //     // self.insertValue() ; 
  //   },
  //           error() {
  //               alert('失败');
  //           }

  //       },
  //   after: () => {
  //     // vditor.value is a instance of Vditor now and thus can be safely used here
  //     vditor.value!.setValue('');
  //     vditor.value!.blur();
  //     titleInput.value!.focus();
  //   },
  // });
 getTags()
  // console.log( vditor.value!.getValue())
}
)
let section=parseInt(localStorage.getItem("section")+"")
const message = useMessage()

const submit=()=>{
  // if(vditor.value!.getValue()==""||vditor.value!.getValue()==null)
  if(text.value=="")
  {
    message.error("请输入帖子内容");
    
  }else{
     axios(
       {url:axios.defaults.baseURL+'/post/create',
        method:'post',
        headers:{
        'Content-Type':'application/json' 
        },
        data:{
          // content: vditor.value?.getValue(),
          content:text.value,
          tags:tagListChosed.map((tag)=>{
            return {
              name:tag
            }
          }),
          title:title.value,
          user_id:User.Id,
          section:Block.section
         
        },
         transformRequest: [ function (data, headers){
         let data1 = JSON.stringify(data)
         console.log(data1)
         return data1
        }]
       }
      )
        .then(function (response) {
          // 处理成功情况
          console.log(response.data)
          if(response.data?.success){

              message.success('发布成功')
            
          }else{
            console.log(response.data)
             message.error(response.data.message)
          }
          console.log(response.data)
        }
        )

    
  }
}
</script>

<style>
.gditor {
  margin: 30px;
  padding: 20px;
  background: #FFFFFF;
  box-shadow: 2px 1px 5px 0px #00000026;
  width:110%;
}
</style>
