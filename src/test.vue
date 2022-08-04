<template>
<n-space>
        <VueDragResize :isActive="false" z="999"
        :stickSize="12"
      
         v-on:resizing="resize" v-on:dragging="resize">                  
    <n-button type="primary">
      Primary
    </n-button>
    
        </VueDragResize>

     <VueDragResize :isActive="true" z="999"
        :stickSize="10"
        :preventActiveBehavior="true"
         v-on:resizing="resize" v-on:dragging="resize"> 
    <n-image
    width="100"
    src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
  />
   </VueDragResize>

    <VueDragResize :isActive="true" >
    <n-carousel show-arrow>
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
    >
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
    >
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
    >
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
    >
  </n-carousel>
    </VueDragResize>

   
         <VueDragResize>
             <n-h1>{{value}}</n-h1>
         </VueDragResize>
         
    </n-space>
     <n-input
      v-model:value="value"
      type="textarea"
      placeholder="基本的 Textarea"
    />
</template>
<script setup lang="ts">

import VueDragResize from 'vue-drag-resize'
import {ref} from "vue"
const value=ref("你好")
        
             const   width=ref(0)
             const    height=ref(0)
             const    top=ref(0)
            const     left=ref(0)
       

      
         const   resize=(newRect: { width: number; height: number; top: number; left: number; })=> {
                width.value = newRect.width;
                height.value = newRect.height;
                top.value = newRect.top;
                left.value = newRect.left;
         }
</script>
<style>
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}</style>