<template>
<div ref="root">
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
import {ref, onMounted, onBeforeMount} from 'vue'
import {useRouter} from "vue-router";
import axios from "axios";
import {useUserStore} from "../../store/User";
const url=ref("https://embed.diagrams.net/?embed=1&proto=json&spin=1&libraries=1")
// import 
// "https://www.iodraw.com/diagram/"
const ifr=ref()
const height=ref(-1)
const width=ref(-1)
const root=ref(null)
const router = useRouter();
const User = useUserStore()
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
                console.log(data1);
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
