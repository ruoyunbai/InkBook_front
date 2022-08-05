<template>
  <n-space vertical size="large">
    <div style="height:10px"></div>
    <n-grid x-gap="12" :cols="16">
      <n-gi span="7">

      </n-gi>
<!-- v-model:value="" -->
      <n-gi span="5">
        <n-input
            
            ref="inputInstRef"
            placeholder="搜索项目"
            clearable
            round
            size="large"
            style="margin-left: 19px"
        >
          <template #prefix>
            <n-image src="svg\project_svg\search.svg"></n-image>
          </template>
        </n-input>
      </n-gi>
      <n-gi span="1">
      </n-gi>
      <n-gi span="3">
        <el-button
            round
            color="#2772F0"
            size="large"
            @click="dialogCreateVisible = true"
        >
          <template #icon>
            <n-icon>
              <n-image src="svg\project_svg\plus.svg" />
            </n-icon>
          </template>
          <div class="commonText">
            新建项目
          </div>
        </el-button>
      </n-gi>

    </n-grid>
    <div class="headTitle" style="text-align: left">
      &emsp;
    </div>
    <div class="headTitle" style="text-align: left">
      <div style="margin:0px 0px 0px 50px">
        我的项目
      </div>
    </div>

    <n-grid x-gap="5" :cols="30">
      
      <n-gi span="1">
      </n-gi>

      <n-gi span="28">
          <n-layout  class="bg"  bordered="false" content-style="padding: 30px 30px 30px 30px;">
        <n-collapse >
          <template #arrow>
            <n-icon>
              <n-image preview-disabled src="svg\project_svg\folder.svg" />
            </n-icon>
          </template>
          <n-collapse-item title="&emsp;全部项目"  >
            <n-divider></n-divider>
              <!-- <el-table  style="width: 100%">
                <el-table-column prop="obname" label="项目名称" width="280" />
                <el-table-column prop="obstate" label="项目描述" width="580" />
                <el-table-column prop="operation" label="操作" />
              </el-table> -->

              <!--加载项目-->
              <Card v-for="(project,index) in projects"
              :key="project.project_id"
              :one-project="project"
              @delProject="delProject"></Card>
            <!-- <n-grid x-gap="20px" y-gap="20px" cols="2 s:3 m:4 l:5 xl:6 2xl:7" responsive="screen">
              <n-grid-item>
                <Card></Card>
              </n-grid-item>
            </n-grid> -->

            <template #header-extra>
              <n-image preview-disabled src="svg\project_svg\sort.svg" />
            </template>
          </n-collapse-item>
        </n-collapse>
      </n-layout>
      </n-gi>
      <n-gi span="1">
      </n-gi>
      
    </n-grid>

    <n-grid x-gap="5" :cols="30">
      
      <n-gi span="1">
      </n-gi>

      <n-gi span="28">
          <n-layout  class="bg"  bordered="false" content-style="padding: 30px 30px 30px 30px;">
        <n-collapse >
          <template #arrow>
            <n-icon>
              <n-image preview-disabled src="svg\project_svg\folder.svg" />
            </n-icon>
          </template>
          <n-collapse-item title="&emsp;我创建的"  >
            <n-divider></n-divider>

            <n-grid x-gap="20px" y-gap="20px" cols="2 s:3 m:4 l:5 xl:6 2xl:7" responsive="screen">
              <n-grid-item>
                <Card></Card>
              </n-grid-item>
            </n-grid>

            <template #header-extra>
              <n-image preview-disabled src="svg\project_svg\sort.svg" />
            </template>
          </n-collapse-item>
        </n-collapse>
      </n-layout>
      </n-gi>
      <n-gi span="1">
      </n-gi>
      
    </n-grid>

    <n-grid x-gap="5" :cols="30">
      
      <n-gi span="1">
      </n-gi>

      <n-gi span="28">
          <n-layout  class="bg"  bordered="false" content-style="padding: 30px 30px 30px 30px;">
        <n-collapse >
          <template #arrow>
            <n-icon>
              <n-image preview-disabled src="svg\project_svg\folder.svg" />
            </n-icon>
          </template>
          <n-collapse-item title="&emsp;我参与的"  >
            <n-divider></n-divider>

            <n-grid x-gap="20px" y-gap="20px" cols="2 s:3 m:4 l:5 xl:6 2xl:7" responsive="screen">
              <n-grid-item>
                <Card></Card>
              </n-grid-item>
            </n-grid> 

            <template #header-extra>
              <n-image preview-disabled src="svg\project_svg\sort.svg" />
            </template>
          </n-collapse-item>
        </n-collapse>
      </n-layout>
      </n-gi>
      <n-gi span="1">
      </n-gi>
      
    </n-grid>

  </n-space>

  <!--编辑信息dialog-->
   <el-dialog v-model="dialogCreateVisible" title="新建项目信息">
                <el-form :model="form">
                <el-form-item label="项目名称" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off" placeholder="请输入项目名称"/>
                </el-form-item>
                <el-form-item label="项目描述" :label-width="formLabelWidth">
                    <el-input v-model="form.region" placeholder="请输入项目描述"/>
                </el-form-item>
                </el-form>
                <template #footer>
                <span class="dialog-footer">
                    <el-button @click="dialogCreateVisible = false">取消</el-button>
                    <el-button type="primary"  @click="project_create() "
                    >确定</el-button
                    >
                </span>
                </template>
            </el-dialog>

</template>


<script setup lang = "ts">
import Card from "../../components/project.vue";
import {
  onUpdated,
  toRaw,
  reactive,
  ref,
  onMounted,
  StyleValue,
  Ref,
  getCurrentInstance,
  h,
} from "vue";
import { useDialog, NInput } from "naive-ui";
// import Vditor from 'vditor'
import axios from "axios";
import { useUserStore } from "../../store/User";
import { InputInst, useMessage } from "naive-ui";
import { useProjectStore } from "../../store/Project";
let text1: Ref<string> = ref("");

const Project = useProjectStore();
const User = useUserStore();
const message = useMessage();

//对话框
const dialogCreateVisible = ref(false)
const formLabelWidth = '140px'
const form = reactive({
  name: '',
  region: '',
})



onMounted(() => {
  getProject();
});
 
let count: number = 0;
let one_group_id : number;
const projects: any[] = reactive([]);
const getProject = (clear: boolean = true) => {
  //   section.value=parseInt(localStorage.getItem("section")+"")
    axios({
    url: axios.defaults.baseURL + "/proj/get_proj_all",
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Authorization":User.token
    },
    data: {
    },
    transformRequest: [
      function (data, headers) {
        let data1 = JSON.stringify(data);
        console.log(data1);
        return data1;
      },
    ],
  }).then(function (response) {
      // 处理成功情况
      if (response.data?.success) {
        count = response.data?.count;
        console.log(response.data);
        let i = 0;
        if (clear) while (projects.length != 0) projects.pop();
        if (response.data!= null)
          for (i = 0; i < response.data.length; i++) {
            let temp = reactive({
              group_id:response.data.projs[i].group_id,
              proj_id: response.data.projs[i].proj_id,
              proj_info: response.data.projs[i].proj_info,
              proj_name: response.data.projs[i].proj_name,
              status: response.data.projs[i].status,
              user_id: response.data.projs[i].user_id,
            });
            projects.push(temp);
            if(i==0)
              one_group_id = response.data.projs[0].group_id;
          }
        console.log(projects);
        // User.Name=modelRef.value.name,
        // User.Id=response.data.data.user_id,
      } else {
      }
      console.log(response.data);
    });
}
//创建项目
const project_create = () =>{
  axios({
    url: axios.defaults.baseURL + "/proj/create_proj",
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Authorization":User.token
    },
    data: {
      // post_id: props.onePost.post_id,
      // user_id: User.Id,
      // content: text.value,
      // content:vditor.value!.getValue(),
      group_id: one_group_id,//怎么获得团队id？
      proj_info: form.region,
      proj_name: form.name
    },
    transformRequest: [
      function (data, headers) {
        let data1 = JSON.stringify(data);
        console.log(data1);
        return data1;
      },
    ],
  }).then(function (response) {
    // 处理成功情况
      console.log(response.data);

      if (response.data?.success) {
        message.success("创建成功");
        getProject();
        dialogCreateVisible.value = false;

        // setTimeout(() => {
        //   footRef.value.style.width = post.value?.offsetWidth + "px";
        // }, 200);
      } else {
        message.error(response.data?.message);
      }
      console.log(response.data);
  });
}


</script>


<style scoped>
  .headTitle {
    margin: auto;
    color: #000000;
    vertical-align: middle;
    font-family: nunito-sans, sans-serif;
    font-size: 24px;
    font-weight: bold;
  }
  .commonText {
    color: #FFFFFF;
    font-family: Roboto;
    font-weight: bold;
    font-size: 14px;
    line-height: normal;
    letter-spacing: 2px;
    text-align: left;
  }
  .bg {
    /* opacity: 0.10000000149011612; */
    border-radius: 16px;
    background: rgb(255,255,255);
    text-align: center;
  }
  .projCard {
    max-width: 300px;
  }
  .state{
    opacity: 0.4000000059604645;
    color: #091B3D;
    font-family: Sk-Modernist;
    font-weight: regular;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: left;

  }
  .name{
    color: #091B3D;
    font-family: Sk-Modernist;
    font-weight: bold;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0px;
    text-align: left;

  }
  .user {
    /* opacity: 0.10000000149011612; */
    border-radius: 16px;
    /*background: rgb(245, 181, 68, 0.1);*/
    text-align: center;
  }
  .buttonText2 {
    color: #2772F0;
    font-family: nunito-sans, sans-serif;
    font-weight: bold;
    font-size: 14px;
    line-height: normal;
    letter-spacing: 2px;
    text-align: left;
  }
</style>
