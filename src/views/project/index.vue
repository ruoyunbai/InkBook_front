<template>
<div>
  <n-space vertical size="large">
    <div style="height:10px"></div>
    <n-grid x-gap="12" :cols="16">
      <n-gi span="7">

      </n-gi>
      <!-- v-model:value="" -->
      <n-gi span="5">
         <n-input-group>
         <n-button
         @click="search"
          type="warning">
        搜索
      </n-button>
        <n-input
        v-model:value="input"
         ref="inputInstRef" 
        placeholder="项目名称" 
        clearable round  style="margin-left: 19px">
          <template #prefix>
            <n-image preview-disabled src="svg\project_svg\search.svg"></n-image>
          </template>
        </n-input>
        </n-input-group>
      </n-gi>
      <n-gi span="1">
      </n-gi>
      <n-gi span="3">
        <el-button round color="#2772F0" size="large" @click="dialogCreateVisible = true">
          <template #icon>
            <n-icon>
              <n-image preview-disabled src="svg\project_svg\plus.svg" />
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
    <transition-group
            name="posts"
            tag="p"
            enter-active-class="animate__animated animate__backInLeft"
            appear-active-class="animate__animated animate__backInLeft"
      >
    <n-grid :key="1" v-show="searched" x-gap="5" :cols="30">

      <n-gi span="1">
      </n-gi>

      <n-gi span="28">
        <n-layout class="bg" bordered="false" content-style="padding: 30px 30px 30px 30px;" style="margin:20px 10px 10px 20px">
          <n-collapse
          :default-expanded-names="['2']">
            <template #arrow>
              <n-icon>
                <n-image preview-disabled 
                 src="svg\project_svg\folder.svg" />
              </n-icon>
            </template>
            <n-collapse-item 
            name="2"
            title="&emsp;搜索结果">
              <n-divider></n-divider>

              <div  name="2" style="float: left;width:240px" :key="project.proj_id"  v-for="(project, index) in sprojects">
                  <Card  :one-project="project"></Card>
              </div>
              <!--加载项目-->
              <!-- <n-grid x-gap="20px" y-gap="20px" cols="2 s:3 m:4 l:5 xl:6 2xl:7" responsive="screen">
                <n-grid-item name="2" v-for="(project, index) in sprojects">
                      <Card  :key="project.project_id" :one-project="project"></Card>
                </n-grid-item>
              </n-grid> -->

              <template #header-extra>
                <n-image preview-disabled  src="svg\project_svg\sort.svg" />
              </template>
            </n-collapse-item>
          </n-collapse>
        </n-layout>
      </n-gi>
      <n-gi span="1">
      </n-gi>

    </n-grid>
    <n-grid :key="2" v-show="!searched" x-gap="5" :cols="30">

      <n-gi span="1">
      </n-gi>

      <n-gi span="28">
        <n-layout class="bg" bordered="false" content-style="padding: 30px 30px 30px 30px;"  style="margin:20px 10px 10px 20px">
          <n-collapse>
            <template #arrow>
              <n-icon>
                <n-image preview-disabled 
                 src="svg\project_svg\folder.svg" />
              </n-icon>
            </template>
            <n-collapse-item title="&emsp;全部项目" >
              <n-divider></n-divider>
              <n-space justify="end" style="margin:0px 10px 10px 20px">
                <n-button round strong secondary type="info" @click="show('new')">
                    <template #icon>
                      <n-image preview-disabled src="svg\project_svg\clock.svg">
                      </n-image>
                    </template>
                    最新创建
                </n-button>
                <n-button round strong secondary type="info" @click="show('old')">
                    <template #icon>
                      <n-image preview-disabled src="svg\project_svg\clock.svg">
                      </n-image>
                    </template>
                    最早创建
                </n-button>
                <n-button round strong secondary type="info" @click="show('hot')">
                    <template #icon>
                      <n-image preview-disabled src="svg\project_svg\hot.svg"></n-image>
                    </template>
                    最多编辑
                </n-button>
                <n-button round strong secondary type="info" @click="show('recent')">
                    <template #icon>
                      <n-image preview-disabled src="svg\project_svg\recent.svg"></n-image>
                    </template>
                    最近编辑
                </n-button>
              </n-space>
              <!--加载项目-->
              <!-- <n-grid x-gap="20px" y-gap="20px" cols="2 s:3 m:4 l:5 xl:6 2xl:7" responsive="screen"> -->
               <!-- <n-space> -->
              <transition-group
                name="projs"
                tag="p"
                enter-active-class="animate__animated animate__backInLeft"
                appear-active-class="animate__animated animate__backInLeft"
                style="position:relative;"
            >

              <div style="float: left;width:240px" :key="project.proj_id"  v-for="(project, index) in projects">
                    <Card :oneProject="project"></Card>
              </div>
                <!-- </n-space> -->
                </transition-group>
              <!-- </n-grid> -->

            </n-collapse-item>
          </n-collapse>
        </n-layout>
      </n-gi>
      <n-gi span="1">
      </n-gi>

    </n-grid>
    <n-grid :key="4" v-show="!searched" x-gap="5" :cols="30">

      <n-gi span="1">
      </n-gi>

      <n-gi span="28">
        <n-layout class="bg" bordered="false" content-style="padding: 30px 30px 30px 30px;" style="margin:20px 10px 10px 20px">
          <n-collapse>
            <template #arrow>
              <n-icon>
                <n-image preview-disabled  src="svg\project_svg\folder.svg" />
              </n-icon>
            </template>
            <n-collapse-item title="&emsp;我创建的">
              <n-divider></n-divider>
              <n-space justify="end" style="margin:0px 10px 10px 20px">
                <n-button round strong secondary type="info" @click="show2('new')">
                    <template #icon>
                      <n-image preview-disabled src="svg\project_svg\clock.svg">
                      </n-image>
                    </template>
                    最新创建
                </n-button>
                <n-button round strong secondary type="info" @click="show2('old')">
                    <template #icon>
                      <n-image preview-disabled src="svg\project_svg\clock.svg">
                      </n-image>
                    </template>
                    最早创建
                </n-button>
                <n-button round strong secondary type="info" @click="show2('hot')">
                    <template #icon>
                      <n-image preview-disabled src="svg\project_svg\hot.svg"></n-image>
                    </template>
                    最多编辑
                </n-button>
                <n-button round strong secondary type="info" @click="show('recent')">
                    <template #icon>
                      <n-image preview-disabled src="svg\project_svg\recent.svg"></n-image>
                    </template>
                    最近编辑
                </n-button>
              </n-space>

              <div style="float: left;width:240px" :key="project.proj_id"  v-for="(project, index) in creprojects">
                    <Card :one-project="project"></Card>
              </div>
              <!-- <n-grid x-gap="20px" y-gap="20px" cols="2 s:3 m:4 l:5 xl:6 2xl:7" responsive="screen">
                <n-grid-item>
                  <Card></Card>
                </n-grid-item>
              </n-grid> -->

              <template #header-extra>
                <n-image preview-disabled  src="svg\project_svg\sort.svg" />
              </template>
            </n-collapse-item>
          </n-collapse>
        </n-layout>
      </n-gi>
      <n-gi span="1">
      </n-gi>

    </n-grid>
    <n-grid :key="5" v-show="!searched" x-gap="5" :cols="30">

      <n-gi span="1">
      </n-gi>

      <n-gi span="28">
        <n-layout class="bg" bordered="false" content-style="padding: 30px 30px 30px 30px;" style="margin:20px 10px 10px 20px">
          <n-collapse>
            <template #arrow>
              <n-icon>
                <n-image preview-disabled  src="svg\project_svg\folder.svg" />
              </n-icon>
            </template>
            <n-collapse-item title="&emsp;我参与的">
              <n-divider></n-divider>

              <n-grid x-gap="20px" y-gap="20px" cols="2 s:3 m:4 l:5 xl:6 2xl:7" responsive="screen">
                <n-grid-item>
                  <Card></Card>
                </n-grid-item>
              </n-grid>

              <template #header-extra>
                <n-image preview-disabled  src="svg\project_svg\sort.svg" />
              </template>
            </n-collapse-item>
          </n-collapse>
        </n-layout>
      </n-gi>
      <n-gi span="1">
      </n-gi>

    </n-grid>
</transition-group>
  </n-space>

  <!--编辑信息dialog-->
  <el-dialog v-model="dialogCreateVisible" title="新建项目信息">
    <el-form :model="form">
      <el-form-item label="项目名称" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off" placeholder="请输入项目名称" />
      </el-form-item>
      <el-form-item label="项目描述" :label-width="formLabelWidth">
        <el-input v-model="form.region" placeholder="请输入项目描述" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogCreateVisible = false">取消</el-button>
        <el-button type="primary" @click="project_create()">确定</el-button>
      </span>
    </template>
  </el-dialog>
</div>
</template>


<script setup lang = "ts">
import Card from "../../components/project.vue";
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
import { useProjectStore } from "../../store/Project";
import { useUserStore } from "../../store/User";
import { InputInst, useMessage,NGrid,NSpace } from "naive-ui";

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

let sort_flag:number = 0;
let desc_flag:boolean = true;
//项目排序
const show = (order1: string,clear: boolean = true) => {
  // getPosts();
  if (order1 == "new") {
    sort_flag=1;
    desc_flag = true;
  }
  if (order1 == "hot") {
    sort_flag=3;
    desc_flag = true;
  }
  if (order1 == "recent") {
    sort_flag=2;
    desc_flag = true;
  }
  if (order1 == "old") {
    sort_flag=1;
    desc_flag = false;
  }
  axios({
        url: axios.defaults.baseURL + "/proj/get_proj_all",
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "Authorization": User.token
        },
        data: {
          group_id: one_group_id,
          is_desc: desc_flag,
          order_by: sort_flag
        },
        transformRequest: [
          function (data, headers) {
            let data1 = JSON.stringify(data);
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
};

//项目排序
const show2 = (order1: string,clear: boolean = true) => {
  // getPosts();
  if (order1 == "new") {
    sort_flag=1;
    desc_flag = true;
  }
  if (order1 == "hot") {
    sort_flag=3;
    desc_flag = true;
  }
  if (order1 == "recent") {
    sort_flag=2;
    desc_flag = true;
  }
  if (order1 == "old") {
    sort_flag=1;
    desc_flag = false;
  }
  axios({
        url: axios.defaults.baseURL + "/proj/get_proj_create",
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "Authorization": User.token
        },
        data: {
          group_id: one_group_id,
          is_desc: desc_flag,
          order_by: sort_flag
        },
        transformRequest: [
          function (data, headers) {
            let data1 = JSON.stringify(data);
            return data1;
          },
        ],
      }).then(function (response) {
        // 处理成功情况
        if (response.data?.success) {
          count = response.data?.count;
          console.log(response.data);
          let i = 0;
          if (clear) while (creprojects.length != 0) creprojects.pop();
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
              creprojects.push(temp);
            }
          console.log(projects);
          // User.Name=modelRef.value.name,
          // User.Id=response.data.data.user_id,
        } else {
        }
        console.log(response.data);
      });
};

//修改项目
Project.$subscribe((mutation, state)=>{
    if(Project.operation=="")return;
    else if(Project.operation=="changeInfo"){
      axios({
        url: axios.defaults.baseURL + "/proj/update_proj",
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "Authorization": User.token
        },
        data: {
          proj_id: Project.proj_id,
          proj_info: Project.proj_info,
          proj_name: Project.proj_name,
          top: 1
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
        getProject();
      })
      Project.operation="";
    }
    else if(Project.operation=="move_to_bin"){
      axios({
        url: axios.defaults.baseURL + "/proj/move_proj_to_bin",
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
        getProject();
      })
      Project.operation="";
    }else if(Project.operation=="proj_copy"){
      axios({
        url: axios.defaults.baseURL + "/proj/copy_proj",
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
        getProject();
      })
      Project.operation="";
    }
})


const search=()=>{
axios({
    url: axios.defaults.baseURL + "/proj/get_proj_by_name",
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Authorization": User.token
    },
    data: {
      proj_name:input.value
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
    while (sprojects.length != 0) sprojects.pop();     
    if (response.data?.success) {
         if (response.data != null)
            for (let i = 0; i < response.data.count; i++) {
              let temp = reactive({
                group_id: response.data.projs[i].group_id,
                proj_id: response.data.projs[i].proj_id,
                proj_info: response.data.projs[i].proj_info,
                proj_name: response.data.projs[i].proj_name,
                status: response.data.projs[i].status,
                user_id: response.data.projs[i].user_id,
              });
              sprojects.push(temp);
            }
            searched.value=true
    }else{
      message.error(response.data?.message)
      searched.value=false
    }})


}


onBeforeMount(() => {
  getProject();
  getCreProject();
  console.log("1");
});

let count: number = 0;
let one_group_id: number;
const projects: any[] = reactive([]);
const sprojects: any[] = reactive([]);
const creprojects: any[] = reactive([]);

//获取项目
const getProject = (clear: boolean = true) => {
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
        url: axios.defaults.baseURL + "/proj/get_proj_all",
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "Authorization": User.token
        },
        data: {
          group_id: one_group_id,
          is_desc: true,
          order_by: 1
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

//获取我创建的项目
const getCreProject = (clear: boolean = true) => {
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
      if (clear) while (creprojects.length != 0) creprojects.pop();
      if (response.data != null)
      one_group_id = response.data.groups[0].group_id;
      console.log("one_group_id" + one_group_id);
      axios({
        url: axios.defaults.baseURL + "/proj/get_proj_create",
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "Authorization": User.token
        },
        data: {
          group_id: one_group_id,
          is_desc: true,
          order_by: 1
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
              creprojects.push(temp);
            }
          console.log(creprojects);
          getProject();
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


//创建项目
const project_create = () => {
  axios({
    url: axios.defaults.baseURL + "/proj/create_proj",
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Authorization": User.token
    },
    data: {
      group_id: one_group_id,
      proj_info: form.region,
      proj_name: form.name,
      top: 2
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
      getCreProject();
      console.log("2");
      dialogCreateVisible.value = false;

    } else {
      message.error(response.data?.message);
    }
    console.log(response.data);
  });
}

</script>


<style scoped>
.allprojs-move{
  transition: transform 1s;
}
.projs-move {
  transition: transform 1s;
}
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
  background: rgb(255, 255, 255);
  text-align: center;
}

.projCard {
  max-width: 300px;
}

.state {
  opacity: 0.4000000059604645;
  color: #091B3D;
  font-family: Sk-Modernist;
  font-weight: regular;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;

}

.name {
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
