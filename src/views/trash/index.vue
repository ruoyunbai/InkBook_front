<template>
  <div class="header">
    <n-image
      width="40"
      style="margin-top: 10px"
      src="svg\trash_svg\shape.svg"
    />
    <span class="title">已删除内容</span>
  </div>
  <div class="fileTitle" style="margin-left: 40px">项目</div>
  <div class="proj_body">
    <div v-show="projTipShow" class="tip">暂无已删除项目</div>
    <div :key="project.proj_id" v-for="(project, index) in projects">
      <ProTrash :oneProject="project"></ProTrash>
    </div>
  </div>

  <n-layout-content
    content-style="padding: 24px;"
    style="background-color: rgb(255, 255, 255, 0)"
  >
    <n-grid x-gap="50" :cols="3" class="fileTitle">
      <n-gi>
        <div>原型页面</div>
      </n-gi>
      <n-gi>
        <div>UML图</div>
      </n-gi>
      <n-gi>
        <div>文档</div>
      </n-gi>
    </n-grid>
    <n-grid x-gap="50" :cols="3" style="margin-top: 10px">
      <n-gi>
        <div class="section">
          <el-scrollbar max-height="97%">
            <div v-show="protoTipShow" class="tip">暂无已删除原型页面</div>
            <div
              v-for="(proto, idx) in protos"
              :key="idx"
              class="scrollbar-demo-item"
            >
              <ProtoTrash :one-proto="proto"></ProtoTrash>
            </div>
          </el-scrollbar>
        </div>
      </n-gi>

      <n-gi>
        <div class="section" style="background-color: rgb(246, 134, 106, 0.2)">
          <el-scrollbar max-height="97%">
            <div v-show="umlTipShow" class="tip">暂无已删除UML图</div>
            <div
              v-for="(item, idx) in umls"
              :key="idx"
              class="scrollbar-demo-item"
            >
              <UmlTrash :one-UML="item"></UmlTrash>
            </div>
          </el-scrollbar>
        </div>
      </n-gi>

      <n-gi>
        <div class="section" style="background-color: rgb(255, 190, 92, 0.2)">
          <el-scrollbar max-height="97%">
            <div v-show="docTipShow" class="tip">暂无已删除文档</div>
            <div
              v-for="(item, idx) in documents"
              :key="idx"
              class="scrollbar-demo-item"
            >
              <DocTrash :one-Doc="item"></DocTrash>
            </div>
          </el-scrollbar>
        </div>
      </n-gi>
    </n-grid>
  </n-layout-content>
  <!-- 文档-->
  <!-- <FileTrash></FileTrash> -->
  <!-- 设计原型 -->
  <!-- <DesignTrash></DesignTrash> -->
  <!-- uml -->
  <!-- <UmlTrash></UmlTrash> -->
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
import ProTrash from "../../components/trash/pro_trash.vue";
import DocTrash from "../../components/trash/doc_trash.vue";
import ProtoTrash from "../../components/trash/proto_trash.vue";
import UmlTrash from "../../components/trash/uml_trash.vue";
import axios from "axios";
import { useProjectStore } from "../../store/Project";
import { useUserStore } from "../../store/User";
import { useGroupStore } from "../../store/Group";
import { usePrototypeStore } from "../../store/prototype";
import { useUmlStore } from "../../store/Uml";
import { useDocumentStore } from "../../store/Document";
import { useMessage } from "naive-ui";

const Project = useProjectStore();
const User = useUserStore();
const Group = useGroupStore();
const Proto = usePrototypeStore();
const Uml = useUmlStore();
const Doc = useDocumentStore();
const message = useMessage();
const input = ref("");

//对话框
const projTipShow = ref(true);
const docTipShow = ref(true);
const umlTipShow = ref(true);
const protoTipShow = ref(true);
const formLabelWidth = "140px";
const form = reactive({
  name: "",
  region: "",
});

onBeforeMount(() => {
  getProject_in_bin();
  getFiles_in_bin();
  console.log("1!!!");
});

// 彻底删除与恢复
Project.$subscribe((mutation, state) => {
  if (Project.operation == "") return;
  else if (Project.operation == "delete_proj") {
    axios({
      url: axios.defaults.baseURL + "/bin/delete_proj",
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: User.token,
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
      console.log(response);
      getProject_in_bin();
    });
    Project.operation = "";
  } else if (Project.operation == "recover_proj") {
    axios({
      url: axios.defaults.baseURL + "/proj/move_proj_to_bin",
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: User.token,
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
      console.log(response);
      getProject_in_bin();
    });
    Project.operation = "";
  }
});

Proto.$subscribe((mutation, state) => {
  if (Proto.operation == "") return;
  else if (Proto.operation == "delete_complete") {
    axios({
      url: axios.defaults.baseURL + "/bin/delete_ppage",
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: User.token,
      },
      data: {
        ppage_id: Proto.ppage_id,
      },
      transformRequest: [
        function (data, headers) {
          let data1 = JSON.stringify(data);
          return data1;
        },
      ],
    }).then(function (response) {
      // 处理成功情况
      console.log(response);
      getFiles_in_bin();
    });
    Proto.operation = "";
  } else if (Proto.operation == "recover") {
    axios({
      url: axios.defaults.baseURL + "/bin/move_ppage_from_bin",
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: User.token,
      },
      data: {
        ppage_id: Proto.ppage_id,
      },
      transformRequest: [
        function (data, headers) {
          let data1 = JSON.stringify(data);
          return data1;
        },
      ],
    }).then(function (response) {
      // 处理成功情况
      console.log(response);
      getFiles_in_bin();
    });
    Proto.operation = "";
  }
});

Uml.$subscribe((mutation, state) => {
  if (Uml.operation == "") return;
  else if (Uml.operation == "delete_complete") {
    axios({
      url: axios.defaults.baseURL + "/bin/delete_uml",
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: User.token,
      },
      data: {
        uml_id: Uml.uml_id,
      },
      transformRequest: [
        function (data, headers) {
          let data1 = JSON.stringify(data);
          return data1;
        },
      ],
    }).then(function (response) {
      // 处理成功情况
      console.log(response);
      getFiles_in_bin();
    });
    Uml.operation = "";
  } else if (Uml.operation == "recover") {
    axios({
      url: axios.defaults.baseURL + "/bin/move_uml_from_bin",
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: User.token,
      },
      data: {
        uml_id: Uml.uml_id,
      },
      transformRequest: [
        function (data, headers) {
          let data1 = JSON.stringify(data);
          return data1;
        },
      ],
    }).then(function (response) {
      // 处理成功情况
      console.log(response);
      getFiles_in_bin();
    });
    Uml.operation = "";
  }
});

Doc.$subscribe((mutation, state) => {
  if (Doc.operation == "") return;
  else if (Doc.operation == "delete_complete") {
    axios({
      url: axios.defaults.baseURL + "/bin/delete_document",
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: User.token,
      },
      data: {
        document_id: Doc.document_id,
      },
      transformRequest: [
        function (data, headers) {
          let data1 = JSON.stringify(data);
          return data1;
        },
      ],
    }).then(function (response) {
      // 处理成功情况
      console.log(response);
      getFiles_in_bin();
    });
    Doc.operation = "";
  } else if (Doc.operation == "recover") {
    axios({
      url: axios.defaults.baseURL + "/bin/move_document_from_bin",
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: User.token,
      },
      data: {
        document_id: Doc.document_id,
      },
      transformRequest: [
        function (data, headers) {
          let data1 = JSON.stringify(data);
          return data1;
        },
      ],
    }).then(function (response) {
      // 处理成功情况
      console.log(response);
      getFiles_in_bin();
    });
    Doc.operation = "";
  }
});

// 获取项目
let count: number = 0;
let cntP: number = 0;
let cntU: number = 0;
let cntD: number = 0;

const projects: any[] = reactive([]);
const protos: any[] = reactive([]);
const umls: any[] = reactive([]);
const documents: any[] = reactive([]);
const sprojects: any[] = reactive([]);

const getProject_in_bin = (clear: boolean = true) => {
  axios({
    url: axios.defaults.baseURL + "/bin/get_projs_in_bin",
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: User.token,
    },
    data: {
      group_id: Group.id,
    },
    transformRequest: [
      function (data, headers) {
        let data1 = JSON.stringify(data);
        return data1;
      },
    ],
  }).then(function (response) {
    // 处理成功情况
    console.log("!!!获取项目成功");
    if (response.data?.success) {
      count = response.data?.count;
      if (count) {
        projTipShow.value = false;
      } else {
        projTipShow.value = true;
      }
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

const getFiles_in_bin = (clear: boolean = true) => {
  axios({
    url: axios.defaults.baseURL + "/bin/get_files_in_bin",
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: User.token,
    },
    data: {
      group_id: Group.id,
    },
    transformRequest: [
      function (data, headers) {
        let data1 = JSON.stringify(data);
        return data1;
      },
    ],
  }).then(function (response) {
    // 处理成功情况
    console.log(response);
    // console.log("input: "+input.value);
    while (protos.length != 0) protos.pop();
    while (umls.length != 0) umls.pop();
    while (documents.length != 0) documents.pop();
    cntD = response.data.count_documents;
    cntP = response.data.count_ppages;
    cntU = response.data.count_umls;
    if (cntD) {
      docTipShow.value = false;
    } else {
      docTipShow.value = true;
    }
    if (cntP) {
      protoTipShow.value = false;
    } else {
      protoTipShow.value = true;
    }
    if (cntU) {
      umlTipShow.value = false;
    } else {
      umlTipShow.value = true;
    }
    if (response.data?.success) {
      for (let i = 0; i < cntP; i++) {
        let tmp1 = reactive({
          ppage_id: response.data.ppages[i].ppage_id,
          ppage_name: response.data.ppages[i].ppage_name,
        });
        protos.push(tmp1);
      }
      for (let i = 0; i < cntU; i++) {
        let tmp2 = reactive({
          uml_id: response.data.umls[i].uml_id,
          uml_name: response.data.umls[i].uml_name,
          uml_url: response.data.umls[i].uml_url,
          status: response.data.umls[i].status,
        });
        umls.push(tmp2);
      }
      for (let i = 0; i < cntD; i++) {
        let tmp3 = reactive({
          count: response.data.documents[i].count,
          document_id: response.data.documents[i].document_id,
          document_name: response.data.documents[i].document_name,
          document_url: response.data.documents[i].document_url,
          status: response.data.documents[i].status,
        });
        documents.push(tmp3);
      }
    } else {
      message.error(response.data?.message);
    }
  });
};
</script>

<style scoped>
.header {
  display: flex;
  height: 75px;
  width: 100%;
  margin-left: 30px;
  align-content: center;
  margin-bottom: 10px;
}
.title {
  margin-left: 20px;
  font-family: "Roboto";
  font-weight: bold;
  font-size: 32px;
  vertical-align: middle;
  padding-top: 15px;
}
.proj_body {
  background-color: rgb(255, 255, 255);
  height:300px;
  max-height: 300px;
  padding: 10px;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;

  overflow-y: scroll;
  border-radius: 16px;
}

.fileTitle {
  margin-left: 22px;
  margin-bottom: 0px;
  line-height: 32px;
  text-align: left;
  justify-content: center;
  font-family: Inria Sans;
  font-weight: bold;
  font-size: 28px;
}

.section {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  /**/

  border-radius: 10px;
  background-color: rgb(75, 159, 71, 0.2);
  padding-bottom: 10px;
  padding-top: 20px;
  padding-left: 30px;
  padding-right: 30px;
  align-items: center;

  /*width: 330.7px;*/
  height: 550px;

  font-family: Inria Sans;
  font-weight: bold;
  font-size: 16px;
}

.tip {
  color: rgba(0, 0, 0, 0.5);
}
</style>
