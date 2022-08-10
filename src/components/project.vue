<template>
  <div class="parent" style="background:#FFFFFF">
    <div class="user" style="background:#EDF5ED;margin:15px 25px 15px 15px" >
        <n-space vertical>
            <n-space justify="end">
                <n-image style="margin:15px 0px 10px 0px" height="25" preview-disabled @click="proj_top()" src="svg\project_svg\top.svg"/>
                <n-image style="margin:15px 10px 10px 0px" height="25" preview-disabled @click="proj_copy()" src="svg\project_svg\copy.svg"/>
            </n-space>
            <p class="name"  style="margin:0px 10px 10px 30px">{{props.oneProject.proj_name}}</p>
            <p class="state" style="margin:0px 10px 10px 30px">{{props.oneProject.proj_info}}</p>
            <div style="height:15px"></div>
            <n-button
                round
                size="large"
                color="#DADADA"
                ghost
                @click="routerToPersonalInfo"
            >
                <template #icon>
                    <n-image preview-disabled src="svg\project_svg\toDetail.svg">
                    </n-image>
                  </template>
                <!-- <router-link to="/projectDetail" style="text-decoration: none"> -->
                    <p class="buttonText2" @click="toDetail()">进入项目</p>    
                <!-- </router-link> -->
            </n-button>

            <n-button
                round
                size="large"
                color="#DADADA"
                ghost
                style="margin:5px 10px 5px 10px"
                @click="dialogEditVisible = true"
            >
                <template #icon>
                    <n-image preview-disabled src="svg\project_svg\edit.svg">
                    </n-image>
                  </template>
                <p class="buttonText2">编辑信息</p>
            </n-button>

            <n-button
                round
                size="large"
                color="#DADADA"
                ghost
                style="margin:0px 10px 10px 10px"
                @click="move_proj_to_bin()"
            >
                <template #icon>
                    <n-image preview-disabled src="svg\project_svg\dele.svg">
                    </n-image>
                </template>
                <p class="buttonText2"
                >删除项目</p>
            </n-button>

            <el-dialog v-model="dialogEditVisible" title="修改项目信息">
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
                    <el-button @click="dialogEditVisible = false">取消</el-button>
                    <el-button type="primary" @click="project_update()"
                    >确定</el-button
                    >
                </span>
                </template>
            </el-dialog>
           
        </n-space>
    </div>
  </div>
</template>

<script lang="ts" setup>
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
import axios from "axios";
import { useProjectStore } from "../store/Project";
import { useUserStore } from "../store/User";
import { InputInst, useMessage } from "naive-ui";
import { useRouter } from "vue-router"

const router = useRouter();

const Project = useProjectStore();

const routerToPersonalInfo=()=>{
    console.log("route")
}
const dialogEditVisible = ref(false)
const formLabelWidth = '140px'

const form = reactive({
  name: '项目1',
  region: '项目描述',
})

// type projectDetail ={
//   proj_id:number,
//   proj_name:String,
//   proj_state:String
// }



onBeforeMount(()=>{
    form.region=props.oneProject.proj_info
    form.name=props.oneProject.proj_name
})

//修改项目
const project_update = () => {
    Project.proj_info=form.region;
    Project.proj_name=form.name;
    Project.proj_id=props.oneProject.proj_id;
    Project.operation="changeInfo";
    dialogEditVisible.value = false;
}

const move_proj_to_bin = () =>{
    Project.proj_id=props.oneProject.proj_id;
    Project.operation="move_to_bin";
    dialogEditVisible.value = false;
}

const proj_copy= () =>{
    Project.proj_id=props.oneProject.proj_id;
    Project.operation="proj_copy";
}

const proj_top= () =>{
    Project.proj_id=props.oneProject.proj_id;
    Project.operation="proj_top";
}

const toDetail = () =>{
  router.push({
    name:"projectDetail",
    params:{
      proj_id:props.oneProject.proj_id,
    }
  })
}

type Props = {
  oneProject?: {
    name?: string;
    time?: number;
    tags?: string[];
    title?: string;
    content?: string;
    watches?: number;
    comments?: number;
    ups?: number;
    user_id?: number;
    post_id?: number;
    clear?: boolean;
    like_status?: number;
    time_weeks?: number;
    time_days?: number;
    time_hours?: number;
    time_mins?: number;
   
  };

};
const props: any = withDefaults(defineProps<Props>(), {
  oneProject: () => {
    return {
      name: "123",
      time: 0,
      tags: [],
      title: "",
      content: "",
      watches: 0,
      comments: 0,
      ups: 0,
      gShow: false,
      downs: 0,
      user_id: 1,
      post_id: 1,
      clear: true,
      like_status: 0,
    };
  },
});
</script>

<style>
    .parent{
      border-radius: 16px;
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
    .el-button--text {
    margin-right: 15px;
    }
    .el-select {
    width: 300px;
    }
    .el-input {
    width: 300px;
    }
    .dialog-footer button:first-child {
    margin-right: 10px;
    }
</style>