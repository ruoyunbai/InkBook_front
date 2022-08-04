

<template>
   <DndProvider :backend="HTML5Backend">
         <Example>

  </Example>
    </DndProvider>

</template>
<script setup lang="ts">
import { DndProvider } from 'vue3-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Example from "./index"
</script>