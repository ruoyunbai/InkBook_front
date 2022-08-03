<!--<template>
<div>hahah</div>
</template>
<script >
</script>-->

<template>
    <n-space vertical size="large" >
        <n-layout style="margin: 20px">
        <n-layout-header class="projectTitle">
            <n-grid x-gap="12" :cols="4" >
                <n-gi style="display: flex;">
                    <n-image width=32 src="svg\\主页svg\\Icons\\Setting - 5.svg" />
                    <span style="margin-left: 15px; padding-top: -10px;">项目名称</span>
                </n-gi>
                <n-gi>
                </n-gi>
                <n-gi style="margin-top: -1px">
                    <span>
                        <n-input
                        v-model:value="tagInput"
                        ref="inputInstRef" 
                        round 
                        clearable 
                        placeholder="搜索文件">
                            <template #prefix>
                                <n-image width=24 src="svg\\主页svg\\projectDetail\\⭐️ Icons L.svg" />
                            </template>
                        </n-input>
                    </span>
                </n-gi>
                <n-gi style="margin-top: -8px">
                    <n-button color=#2772F0 class="button" @click="show_delete">管理文件</n-button>
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
                        style="font-family: Inria Sans; font-size: 16px;"
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
                            <div>
                                <n-grid x-gap="0" :cols="10" style="padding-top: 5px;">
                                    <n-gi span="1">
                                        <n-image width=26.5 height=23.5 src="svg\\主页svg\\projectDetail\\ItemIcon.svg" />
                                    </n-gi>
                                    <n-gi span="8">
                                        <div display="inline">设计原型名称</div>
                                    </n-gi>
                                    <n-gi span="1" align="right">
                                        <n-button 
                                            v-show="showDelete"
                                            quaternary circle ghost
                                            type="error"
                                            size="tiny"
                                            color="white">
                                            <n-icon size="24" color="red">
                                                <CancelOutlined />
                                            </n-icon>
                                        </n-button>
                                    </n-gi>
                                </n-grid>
                            </div>
                        </div>
                        <div class="btnspace">
                            <n-button color=#4B9F47 class="button">新建原型</n-button>
                        </div>
                    </div>
                    
                </n-gi>

                <n-gi>
                    <div class="section" style="background-color: rgb(246, 134, 106, 0.2)">
                        <div class="item">
                            <div>
                                <n-grid x-gap="0" :cols="10" style="padding-top: 5px;">
                                    <n-gi span="1">
                                        <n-image width=26.5 height=23.5 src="svg\\主页svg\\projectDetail\\ItemIcon.svg" />
                                    </n-gi>
                                    <n-gi span="8">
                                        <div display="inline">图文件名称</div>
                                    </n-gi>
                                    <n-gi span="1" align="right">
                                        <n-button 
                                            v-show="show_delete"
                                            quaternary circle ghost
                                            type="error"
                                            size="tiny"
                                            color="white">
                                            <n-icon size="24" color="red">
                                                <CancelOutlined />
                                            </n-icon>
                                        </n-button>
                                    </n-gi>
                                </n-grid>
                            </div>
                            
                            
                        </div>
                        <div class="btnspace">
                            <n-button color=#F6866A class="button">新建图文件</n-button>
                        </div>
                    </div>
                </n-gi>

                <n-gi>
                    <div class="section" style="background-color: rgb(255, 190, 92, 0.2)">
                        <div class="item">
                            <div>
                                <n-grid x-gap="0" :cols="10" style="padding-top: 5px;">
                                    <n-gi span="1">
                                        <n-image width=26.5 height=23.5 src="svg\\主页svg\\projectDetail\\ItemIcon.svg" />
                                    </n-gi>
                                    <n-gi span="8">
                                        <div display="inline">文档名称</div>
                                    </n-gi>
                                    <n-gi span="1" align="right">
                                        <n-button 
                                            v-show="show_delete"
                                            quaternary circle ghost
                                            type="error"
                                            size="tiny"
                                            color="white">
                                            <n-icon size="24" color="red">
                                                <CancelOutlined />
                                            </n-icon>
                                        </n-button>
                                    </n-gi>
                                </n-grid>
                            </div>
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

<script>
//import { defineComponent } from 'vue'
import { defineComponent, ref } from 'vue'
import { CancelOutlined } from '@vicons/material'
import { Delete } from '@element-plus/icons-vue'
export default defineComponent({
  data: {
    showDelete: false,
    buttonMessage:"管理文件",
  },
  components: {
    CancelOutlined
  },
  setup () {
    return {
      value: ref(null),
      CancelOutlined
    }
  },
  methods: {
    show_delete(){
        this.showDelete = !this.showDelete;
    }
  },
    //动态删除批量绑定数据
    /*batchDel(index) {
        if (this.batchForm.length <= 1) {
            this.batchForm[index].value = "";
            this.batchForm[index].index = 0;
            this.batchFormNum = 0;
        } else {
        //先删除当前下标的数据
            this.batchForm.splice(index, 1);
            let num = [];
        //循环找出所有下标,不找出最大值，不根据顺序删除会报错
            this.batchForm.forEach((item) => {
            num.push(item.index);
            });
            //查出数组中最大值，赋值给batchFormNum 
            this.batchFormNum = Math.max(...num);
        }
    }
  },*/
})

</script>

<style scoped>
.projectTitle{
    display: flex;
    /*justify-content: center;*/
    align-items: center;

    background-color: rgb(245, 181, 68, 0.1);
    font-family: Inria Sans;
    font-weight: bold;
    font-size: 28px;
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
    height: 175px;
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
    font-size: 20px;
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
    font-size: 16px;
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
    font-size: 16px;
    text-align: left;

    height: 45px;
    width: 100%;
}
</style >