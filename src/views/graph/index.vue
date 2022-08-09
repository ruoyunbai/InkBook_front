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
import {ref,onMounted} from 'vue'
const url=ref("https://embed.diagrams.net/?embed=1&proto=json&spin=1&libraries=1&noSaveBtn=1")
// import 
// "https://www.iodraw.com/diagram/"
const ifr=ref()
const height=ref(-1)
const width=ref(-1)
const root=ref(null)
const iframeLoad=()=>{
    window.addEventListener("message",(e)=>{
        console.log(e)
        if(JSON.parse(e.data).event=="init"){
            console.log("event:init")
            if(ifr!=null){
                console.log(ifr.value)
                ifr.value.contentWindow.postMessage(JSON.stringify({action:"load",
                xml:""}), "*");
            }
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
</script>
<style>
.ifra{
    position: absolute;
    height: 75%;
    width:98%
}
</style>
