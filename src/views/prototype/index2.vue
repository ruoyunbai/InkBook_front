<template>
    <n-card :bordered="false">
        <n-grid :cols="20">
            <n-gi span="3">
                <n-space vertical>

                    <n-select v-model:value="value" :options="options" class="choose" />
                </n-space>

            </n-gi>
        </n-grid>
    </n-card>
    <br>
    <n-grid cols="10">
        <n-gi span="8">
            <canvas ref="domCanvas"></canvas>
        </n-gi>
        <n-gi span="2">
            <n-card :bordered="false">
                123
            </n-card>
            <br>
            <n-card>
                <n-collapse 
                 display-directive="show" default-expanded-names="1" accordion>
                    <n-collapse-item title="青铜" name="1">
                        <n-space>
                        <canvas style="display: inline-block" ref="domCanvas0"></canvas>
                       <canvas style="display: inline-block" ref="domCanvas00"></canvas>
                       </n-space>
                    </n-collapse-item>
                    <n-collapse-item title="白银" name="2">
                        <div>很好</div>
                    </n-collapse-item>
                    <n-collapse-item title="黄金" name="3">
                        <div>真棒</div>
                    </n-collapse-item>
                </n-collapse>
            </n-card>
        </n-gi>
    </n-grid>
</template>

<script setup lang="ts">
import { defineComponent, reactive, ref, Ref, onMounted } from 'vue'
import { fabric } from "fabric";
const domCanvas: Ref<HTMLCanvasElement | null> = ref(null);
const domCanvas00: Ref<HTMLCanvasElement | null> = ref(null);
const domCanvas0: Ref<HTMLCanvasElement | null> = ref(null);
const canvas0=ref<fabric.Canvas>()
 const   canvas00=ref<fabric.Canvas>()

const canvas = ref<fabric.Canvas>();
const circle = ref<fabric.Circle>();
const circle0 = ref<fabric.Circle>();
const circle00 = ref<fabric.Circle>();
const value = ref(null)
onMounted(() => {
    init()
    draw()
})
const options = reactive([
    {
        label: "Everybody's Got Something to Hide Except Me and My Monkey",
        value: 'song0',

    },
    {
        label: 'InkBook',
        value: 'song1'
    }])
function init() {
    canvas.value = new fabric.Canvas(domCanvas.value, {
        width: 500,
        height: 500,
        backgroundColor: "rgb(245, 181, 68, 0.1)",
    });
    canvas0.value = new fabric.Canvas(domCanvas0.value, {
        width: 50,
        height: 50,
        backgroundColor: "white",
    });
     canvas00.value = new fabric.Canvas(domCanvas00.value, {
        width: 50,
        height: 50,
        backgroundColor: "white",
    });
}

function draw() {
    circle.value = new fabric.Circle({
        left: 100,
        top: 100,
        radius: 50,
        stroke: "black",
        fill: "red",
    });
circle0.value = new fabric.Circle({
        left: 0,
        top: 0,
        radius: 10,
        stroke: "black",
        fill: "red",
    });
    canvas.value?.add(circle.value);
    canvas0.value?.add(circle0.value);
    canvas00.value?.add(circle0.value);
}
// console.log(store.pageGetters())
</script>

<style scoped lang="less">
.choose {
    border-width: 0px;

    :deep(.n-base-selection__border) {
        border-width: 0px;
        //  background-color: aqua;
    }

    :deep(.n-base-selection--selected) {
        border-width: 0px;
    }

    :deep(.n-base-selection__border:hover) {
        border-width: 0px;
        //  background-color: aqua;
    }

    :deep(.n-base-selection__state-border) {
        border-width: 0px;
        //  background-color: aqua;
    }

    .n-base-selection {
        border-width: 0px;
        background-color: aqua;
    }
}
</style>