<template>
  <div class="trash_head">
    <n-image src="svg\trash_svg\shape.svg" class="title_img"/>
    <div class="title_font">已删除内容</div>
  </div>
  <div class="trash_body">
<!--    项目-->
    <div style="float: left;width:240px" :key="project.proj_id"  v-for="(project, index) in projects">
        <ProTrash :oneProject="project"></ProTrash>
    </div>
<!--    文档-->
    <!-- <FileTrash></FileTrash> -->
<!--    设计原型-->
    <!-- <DesignTrash></DesignTrash> -->
<!--    uml-->
    <!-- <UmlTrash></UmlTrash> -->
  </div>

</template>

<script setup lang="ts">

import {
  onUpdated,
  toRaw,
  reactive,
  onBeforeMount,
  ref,
  onMounted,
  StyleValue,
  Ref,
  getCurrentInstance,
  h,
} from "vue";
import { useDialog, NInput } from "naive-ui";
// import Vditor from 'vditor'
import ProTrash from '../../components/trash/pro_trash.vue';
import FileTrash from '../../components/trash/file_trash.vue';
import DesignTrash from '../../components/trash/design_trash.vue';
import UmlTrash from '../../components/trash/uml_trash.vue';
import axios from "axios";
import { useProjectStore } from "../../store/Project";
import { useUserStore } from "../../store/User";
import { InputInst, useMessage } from "naive-ui";

let text1: Ref<string> = ref("");
const searched=ref(false)
const Project = useProjectStore();
const User = useUserStore();
const message = useMessage();
const input=ref("")
//对话框
const dialogCreateVisible = ref(false)
const formLabelWidth = '140px'
const form = reactive({
  name: '',
  region: '',
})

//获取项目
let count: number = 0;
let one_group_id: number;
const projects: any[] = reactive([]);
const sprojects: any[] = reactive([]);

onBeforeMount(() => {
  getProject_in_bin();
  console.log("1!!!");
});

Project.$subscribe((mutation, state)=>{
    if(Project.operation=="")return;
    else if(Project.operation=="delete_proj"){
      axios({
        url: axios.defaults.baseURL + "/bin/delete_proj",
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "Authorization": User.token
        },
        data: {
          proj_id: Project.proj_id,
        },
        transformRequest: [
          function (data, headers) {
            let data1 = JSON.stringify(data);
            return data1;
          },
        ],
      }).then(function (response) {
        // 处理成功情况
        console.log(response)
        getProject_in_bin();
      })
      Project.operation="";
    }
})

//获取项目
const getProject_in_bin = (clear: boolean = true) => {
  
  //   section.value=parseInt(localStorage.getItem("section")+"")
  axios({
    url: axios.defaults.baseURL + "/group/get_groups",
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Authorization": User.token
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
      if (response.data != null)
      one_group_id = response.data.groups[0].group_id;
      console.log("one_group_id" + one_group_id);
      axios({
        url: axios.defaults.baseURL + "/bin/get_projs_in_bin",
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "Authorization": User.token
        },
        data: {
          group_id: one_group_id,
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
        console.log("!!!获取项目成功");
        if (response.data?.success) {
          count = response.data?.count;
          console.log(response.data);
          let i = 0;
          if (clear) while (projects.length != 0) projects.pop();
          if (response.data != null)
            for (i = 0; i < count; i++) {
              let temp = reactive({
                group_id: response.data.projs[i].group_id,
                proj_id: response.data.projs[i].proj_id,
                proj_info: response.data.projs[i].proj_info,
                proj_name: response.data.projs[i].proj_name,
                status: response.data.projs[i].status,
                user_id: response.data.projs[i].user_id,
              });
              console.log("  projectid" + temp.proj_id);
              projects.push(temp);
            }
          console.log(projects);
          // User.Name=modelRef.value.name,
          // User.Id=response.data.data.user_id,
        } else {
        }
        console.log(response.data);
      });
      // User.Name=modelRef.value.name,
      // User.Id=response.data.data.user_id,
    } else {
    }
    console.log(response.data);
  });

}



</script>

<style>

.btn_font{
  font-family: 'Inria Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  margin-left: 5px;
}

.trash_head{
  margin-top: 100px;
  margin-left: 100px;
  height: 40px;
  position: relative;
}

.title_img{
  margin-top: 5px;
  position: absolute;
}

.title_font{
  position: absolute;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  margin-left: 50px;
}

.trash_body{
  width: 94%;
  height: 600px;
  max-height: 600px;
  margin-left: 3%;
  margin-top: 50px;
  padding-top: 30px;
  background-color: #FFFFFF;
  border-radius: 24px;
  overflow-y: scroll;
}

.one_trash{
  width: 21%;
  height: 300px;
  margin-left: 40px;
  margin-top: 10px;
  margin-bottom: 10px;
  background: rgba(75,159,71, 0.1);
  mix-blend-mode: normal;
  border-radius: 24px;
  float: left;
}

.wrap{
  position: relative;
}

.tip_first{
  position: absolute;
  font-family: 'Inria Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  margin-left: 28px;
  margin-top: 63px;
}

.tip_second{
  position: absolute;
  font-family: 'Inria Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  margin-top: 120px;
  margin-left: 28px;
}

.tip_btn{
  margin-top: 220px;
  margin-left: 20px;
  position: absolute;
}

</style>
