<template>
<div ref="root">
<n-modal v-model:show="showModal" class="custom-card" preset="card"  title=" 请输入页面名字" size="huge"
    :bordered="false">
    <template #header-extra>
      取消
    </template>
    <n-input v-model:value="createName"></n-input>
    <template #footer>
      <n-button @click="createPage">确定</n-button>
    </template>
  </n-modal>
  <n-card :bordered="false">
    <n-grid :cols="20">
      <n-gi span="3">
        <n-space vertical>
          <n-select v-model:value="projSelected" :options="projOptions" remote :loading="protoLoading" placeholder="请选择项目"
            @update:value="getPPages(false)" class="choose" />
        </n-space>
      </n-gi>
      <!-- <n-gi></n-gi> -->
      <n-gi span="3">
        <n-space vertical>
          <n-select :loading="pageNotChosed" remote :placeholder=pageHolder :disabled="ProtoNotChosed"
            v-model:value="pageId" :options="optionsPage" @update:value="getPage" class="choose" />
        </n-space>
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
          <n-button type="warning" strong secondary :disabled="nopageChosed" v-on:click="saveDesign">保存设计</n-button>
          <!-- <n-button v-on:click="exportHtml">Export HTML</n-button> -->
        </n-space>
      </n-gi>
      <n-gi span="2">
        <n-input-number v-model:value="height" @update:value="changeHeight" placeholder="高" :min="300" :step="20"
          :max="3000" />
      </n-gi>
      <n-gi span="2">
        <n-input-number v-model:value="width" placeholder="宽" @update:value="changeWidth" :step="20" :min="10"
          :max="900" />
      </n-gi>
    </n-grid>
  </n-card>


  <br>
    <iframe
    ref="ifr"
    id="inlineFrameExample"
    title="Inline Frame Example"
    :width="height"
    :height="width"
    class="ifra"
    :src=url
    @load="iframeLoad"
    >
</iframe>
</div>
</template>
<script lang="ts" setup>

import {useRouter} from "vue-router";
import axios from "axios";
import {useUserStore} from "../../store/User";
import html2canvas from 'html2canvas';
import { ref, reactive, onMounted, computed, watch, onBeforeMount } from 'vue'
import { EmailEditor } from 'vue-email-editor';
import type { UploadInst, UploadFileInfo } from 'naive-ui'
import { id } from 'date-fns/locale';
import { SelectOption } from 'naive-ui'

import {useMessage} from 'naive-ui'
const message=useMessage()
const createName = ref("")
const User = useUserStore()
const ProtoNotChosed = ref(true)
const protoLoading = ref(true)
const nopageChosed = ref(true)
const pageNotChosed = ref(false)
const pageHolder = ref("选择原型后可选择页面")
const showModal = ref(false)
const url=ref("https://embed.diagrams.net/?embed=1&proto=json&spin=1&libraries=1")
// import 
// "https://www.iodraw.com/diagram/"
const ifr=ref()
const height=ref(-1)
const width=ref(-1)
const root=ref(null)
const router = useRouter();
const projOptions = ref<SelectOption[]>([])
const umlOptions = ref<SelectOption[]>([])
const projSelected=ref()
const umlSelected=ref()

let xml = ""
const iframeLoad=()=>{
    window.addEventListener("message",(e)=>{
        console.log(e)
        if(JSON.parse(e.data).event=="init"){
            console.log("event:init")
            if(ifr!=null){
                console.log(ifr.value)
                ifr.value.contentWindow.postMessage(JSON.stringify({action:"load",
                xml:xml}), "*");
            }
        }
        if(JSON.parse(e.data).event=="save"){
            console.log("event:save")
            console.log(JSON.parse(e.data).xml)
            axios({
                url: axios.defaults.baseURL + "/uml/upload_uml",
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": User.token
                },
                data: {
                    uml_id: 1, // TODO uml_id 不会获取
                    uml_data: JSON.parse(e.data).xml
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
        if(JSON.parse(e.data).event=="exit"){ // 如果使用保存并退出按键, 传回的消息是save, 就没法跳转了
            console.log("event:exit")
            router.push({name:"projectDetail"}) // TODO 似乎需要把 proj_id 传回去，可是我不会
        }
    });
}
onMounted(()=>{
    // height.value=document.body.offsetHeight
    // window.screen.availHeight;
    // root.value.offsetHeight
    width.value=2000
    console.log(document.body.clientWidth)
})
onBeforeMount(()=>{
    axios({
        url: axios.defaults.baseURL + "/uml/get_uml_by_id",
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Authorization": User.token
        },
        data: {
            uml_id: 1, // TODO uml_id 不会获取
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
            console.log(response.data?.uml.uml_data)
            xml = response.data?.uml.uml_data
            console.log(xml)
        }
  })
})
</script>
<style>
.ifra{
    border:0;
    position: absolute;
    height: 75%;
    width:98%
}
</style>
