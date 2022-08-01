<template>
<n-layout
      :native-scrollbar="false">
  <Header class="Header"></Header>
  <div style="height:83px"></div>
    <Main> </Main>
</n-layout>
</template>

<script setup lang="ts">
import  Header  from '../../components/block/header/index.vue';
import Main from '../../components/block/main/index.vue';
import {onMounted,onUnmounted} from 'vue'
import {useBlockStore} from "../../store/Block"
const Block=useBlockStore()
onMounted(()=>{
  document.getElementsByTagName('body')[0].style.overflowY='hidden';
  Block.search=false

})
onUnmounted(()=>{
   document.getElementsByTagName('body')[0].style.overflowY='scroll';
   Block.search=false
})
</script>


<style>
.Header{
  position:fixed;
  z-index: 4;
}
</style>
