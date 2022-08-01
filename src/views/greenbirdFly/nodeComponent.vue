<template>
  <div>
    <div class = "order">{{order}}</div>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="node" class="cirsvg">
      <circle r="27" stroke="white" stroke-width="15" fill="#C4C4C4" />
    </svg>
    <n-space vertical id="textBlock" class="block">
      <n-input v-if="modifying" v-model:value="title" placeholder="子标题" autosize class="head"></n-input>
      <div v-else class="head"><strong>{{ title }}</strong></div>
      <n-input v-if="modifying" v-model:value="content" type="textarea" placeholder="内容" class="content" :autosize="{
        minRows: 3,
      }" />
      <div v-else class="content">{{ content }}</div>
      <n-button color="#D8EFFD" type="info" @click="del" v-show="modifying">
        <template #icon>
          <svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L12.6064 1" stroke="#5AA8D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </template>
        删除步骤
      </n-button>
    </n-space>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref, watch, toRefs } from "vue";

type Props = {
  Modifying: boolean,
  Title: string,
  Content: string,
  Order: number
}

let props = defineProps<Props>();
let modifying = toRefs(props).Modifying;
let title = toRefs(props).Title;
let content = toRefs(props).Content;
let order = toRefs(props).Order

const emit = defineEmits(["del"]);

const del = () => {
  emit("del");
}
</script>

<style scoped>
.cirsvg {
  width: 60px;
  height: 60px;
}

.block {
  margin-left: -55px;
  margin-bottom: 13px;
}

.head {
  width: 132px;
}

.content {
  width: 236px;
}

.order {
  position: absolute;
  left:100px;
  opacity: 0.05;
  color: #000000;
  font-family: 'Times New Roman', Times, serif;
  font-weight: normal;
  font-size: 204px;
  line-height: 204px;
  letter-spacing: -2px;
  text-align: left;
  z-index: 100;
}
</style>
