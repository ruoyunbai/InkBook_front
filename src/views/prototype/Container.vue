<script lang="ts" setup>
import { useDrop, XYCoord } from 'vue3-dnd'
import { ItemTypes } from './ItemTypes'
// import  { DragItem } from './Interfaces'
import Box from './Box.vue'
import { reactive, ref } from 'vue'

interface DragItem{
    type: string
    id: string
    top: number
    left: number
    z:number
}
const props = defineProps<{
  hideSourceOnDrag: boolean
}>()

const boxes = reactive<{
  [key: string]: {
    top: number
    left: number
    title: string
    z:number
  }
}>({
  a: { top: 0, left: 80, title: 'Drag me around',z:200},
  b: { top: 0, left: 20, title: 'Drag me too' ,z:100},
})

const moveBox = (id: string, left: number, top: number) => {
  Object.assign(boxes[id], { left, top })
}

const [, drop] = useDrop(() => ({
  accept: ItemTypes.BOX,
  drop(item: DragItem, monitor) {
    const delta = monitor.getDifferenceFromInitialOffset() as XYCoord
    const left = Math.round(item.left + delta.x)
    const top = Math.round(item.top + delta.y)
    moveBox(item.id, left, top)
    return undefined
  },
}))
</script>

<template>
  <div :ref="drop" class="container">
   <n-collapse display-directive="show">
    <n-collapse-item title="绿灯" name="1">
      <n-collapse>
        <n-collapse-item title="常亮" name="1">
          <div>通过</div>
        </n-collapse-item>
        <n-collapse-item title="闪烁" name="2">
          <div>快速通过</div>
        </n-collapse-item>
      </n-collapse>
    </n-collapse-item>
    <n-collapse-item   v-for="(value, key) in boxes" title="value" name="key">
       <Box
      :id="key"
      :key="key"
      :left="value.left"
      :top="value.top"
      :hide-source-on-drag="hideSourceOnDrag"
    >
          <!-- <n-button type="info">
      Info
    </n-button> -->
    <n-card>
      {{ value.title }}
    </n-card>
      <!-- {{ value.title }} -->
     </Box>
    </n-collapse-item>
 
  </n-collapse>
    <!-- <Box
      v-for="(value, key) in boxes"
      :id="key"
      :key="key"
      :left="value.left"
      :top="value.top"
      :hide-source-on-drag="hideSourceOnDrag"
    >
      {{ value.title }}
    </Box> -->

  </div>
</template>

<style scoped lang="less">
.container {
  position: relative;
  width: 600px;
  height: 600px;
  border: 1px solid black;
}
</style>