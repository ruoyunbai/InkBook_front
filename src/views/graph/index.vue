<template>
<div ref="root">
    <iframe id="inlineFrameExample"
    title="Inline Frame Example"
    :width="height"
    :height="width"
    class="ifra"
    src="https://www.iodraw.com/diagram/">
</iframe>
</div>
</template>
<script lang="ts" setup>
import {ref,onMounted} from 'vue'
// import 
const height=ref(-1)
const width=ref(-1)
const root=ref(null)
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
