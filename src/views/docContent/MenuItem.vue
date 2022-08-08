<template>
  <button
    class="menu-item"
   @click="props.action"
    :title="props.title"
    :class="{ 'is-active': isActive?isActive():null}"
  >
    <svg class="remix">
      <use :xlink:href="`${remixiconUrl}#ri-${props.icon}`" />
    </svg>
  </button>
</template>

<script setup lang="ts">
import remixiconUrl from 'remixicon/fonts/remixicon.symbol.svg'
import {ref} from 'vue'

type Props = {
    icon: any,
    title: any,
    action: any,
    isActive?:Function,
}
const props = defineProps<Props>();
// console.log("prps",props.title,props.isActive)

// const remixiconUrl=ref(null)
 
</script>

<style lang="scss">
.menu-item {
  width: 1.75rem;
  height: 1.75rem;
  color: #0D0D0D;
  border: none;
  background-color: transparent;
  border-radius: 0.4rem;
  padding: 0.25rem;
  margin-right: 0.25rem;

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }

  &.is-active,
  &:hover {
    color: #FFF;
    background-color: #0D0D0D;
  }
}
</style>