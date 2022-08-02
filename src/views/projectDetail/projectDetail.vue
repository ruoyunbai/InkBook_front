<!--<template>
<div>hahah</div>
</template>
<script >
</script>-->

<template>
    <n-space vertical size="large">
        <n-layout>
        <n-layout-header class="projectTitle">
            <n-grid x-gap="12" :cols="4">
                <n-gi style="display: flex;">
                    <n-image width=32 src="svg\\主页svg\\Icons\\Setting - 5.svg" />
                    <span style="margin-left: 15px; padding-top: -10px;">项目名称</span>
                </n-gi>
                <n-gi>
                </n-gi>
                <n-gi style="margin-top: -1px">
                    <span>
                        <n-input round placeholder="搜索文件">
                            <template #prefix>
                                <n-image width=24 src="svg\\主页svg\\⭐️ Icons L.svg" />
                            </template>
                        </n-input>
                    </span>
                </n-gi>
                <n-gi style="margin-top: -8px">
                    <n-button color=#2772F0 class="button">管理文件</n-button>
                </n-gi>
            </n-grid>
            
        </n-layout-header>
        <n-layout-content content-style="padding: 24px;" style="background-color: rgb(245, 181, 68, 0.1)">
            <div class="fileTitle">项目介绍</div>
            <div class="intro">
                <n-space vertical>
                    <n-input
                        v-model:value="value"
                        type="textarea"
                        placeholder="项目内容简介"
                        rows="5"
                        style="font-family: Inria Sans; font-size: 20px;"
                    />
                </n-space>
            </div>
        </n-layout-content>
        <n-layout-content content-style="padding: 24px;" style="background-color: rgb(245, 181, 68, 0.1)">
            <n-grid x-gap="50" :cols="3" class="fileTitle">
                <n-gi>
                    <div>
                        设计原型
                    </div>
                </n-gi>
                <n-gi>
                    <div>
                        UML图
                    </div>
                </n-gi>
                <n-gi>
                    <div>
                        文档
                    </div>
                </n-gi>
            </n-grid>
            <n-grid x-gap="50" :cols="3" style="margin-top: 10px">
                <n-gi>
                    <div class="section">
                        <div class="item">
                            <n-image width=26.5 height=23.5 src="svg\\主页svg\\ItemIcon.svg" />
                            设计原型名称
                        </div>
                        <div class="btnspace">
                            <n-button color=#4B9F47 class="button">新建原型</n-button>
                        </div>
                    </div>
                    
                </n-gi>

                <n-gi>
                    <div class="section" style="background-color: rgb(246, 134, 106, 0.2)">
                        <div class="item">
                            <n-image width=26.5 height=23.5 src="svg\\主页svg\\ItemIcon.svg" />
                            图文件名称
                        </div>
                        <div class="btnspace">
                            <n-button color=#F6866A class="button">新建图文件</n-button>
                        </div>
                    </div>
                </n-gi>

                <n-gi>
                    <div class="section" style="background-color: rgb(255, 190, 92, 0.2)">
                        <div class="item">
                            <n-image width=26.5 height=23.5 src="svg\\主页svg\\ItemIcon.svg" />
                            文档名称
                        </div>
                        <div class="btnspace">
                            <n-button color=#F5B544 class="button">新建文档</n-button>
                        </div>
                    </div>
                    
                </n-gi>

            </n-grid>
        </n-layout-content>
        <!--<n-layout-footer>角标</n-layout-footer>-->
        </n-layout>
    </n-space>

</template>

<script lang="ts">
import { SearchOutline } from '@vicons/ionicons5'
//import { defineComponent } from 'vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      value: ref(null)
    }
  }
})


</script>

<style scoped>
.projectTitle{
    display: flex;
    /*justify-content: center;*/
    align-items: baseline;

    background-color: rgb(245, 181, 68, 0.1);
    font-family: Inria Sans;
    font-weight: bold;
    font-size: 32px;
}
.button {
    border-radius: 10px;
    text-align: center;
    background-color: (39, 114, 240);
    
    font-family: Inria Sans;
    font-weight: bold;
    color: white;
}

.intro {
    border-radius: 16px;
    background-color: white;
    /*width: 1130px;*/
    height: 177px;
    margin-top: 10px;
    padding: 25px;
}

.fileTitle {
    margin-left: 30px;
    margin-bottom: 0px;
    line-height: 32px;
    text-align: left;
    font-family: Inria Sans;
    font-weight: bold;
    font-size: 24px;
}

.section {
    display: flex;
    justify-content: space-between;
    flex-direction: column;/**/

    border-radius: 16px;
    background-color: rgb(75, 159, 71, 0.2);
    text-align: center;
    padding-bottom: 10px;
    padding-top: 20px;
    padding-left: 30px;
    padding-right: 30px;
    align-items: center;

    /*width: 330.7px;*/
    height: 450px;

    font-family: Inria Sans;
    font-weight: bold;
    font-size: 20px;
}
.btnspace {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
}

.item {
    display: flex;
    align-items: center;
    background-color: rgb(255, 255, 255, 0.3);
    border-radius: 10px;

    font-family: Inria Sans;
    font-size: 20px;
    text-align: left;

    height: 45px;
    width: 100%;
}
</style >