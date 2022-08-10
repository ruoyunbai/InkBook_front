<template>
  <div class="trash_head">
    <n-image src="svg\trash_svg\shape.svg" class="title_img" />
    <div class="title_font">已删除内容</div>
  </div>
  <div class="trash_body">
    <!--    项目-->
    <div
      style="float: left; width: 240px"
      :key="project.proj_id"
      v-for="(project, index) in projects"
    >
      <ProTrash :oneProject="project"></ProTrash>
    </div>
    <!-- 文档-->
    <FileTrash></FileTrash>
    <!-- 设计原型 -->
    <DesignTrash></DesignTrash>
    <!-- uml -->
    <UmlTrash></UmlTrash>
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
import ProTrash from "../../components/trash/pro_trash.vue";
import FileTrash from "../../components/trash/file_trash.vue";
import DesignTrash from "../../components/trash/design_trash.vue";
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
const dialogCreateVisible = ref(false);
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

// 彻底删除
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
      url: axios.defaults.baseURL + "/bin/move_PPage_from_bin",
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

<style>
.btn_font {
  font-family: "Inria Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  margin-left: 5px;
}

.trash_head {
  margin-top: 100px;
  margin-left: 100px;
  height: 40px;
  position: relative;
}

.title_img {
  margin-top: 5px;
  position: absolute;
}

.title_font {
  position: absolute;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  margin-left: 50px;
}

.trash_body {
  width: 94%;
  height: 600px;
  max-height: 600px;
  margin-left: 3%;
  margin-top: 50px;
  padding-top: 30px;
  background-color: #ffffff;
  border-radius: 24px;
  overflow-y: scroll;
}

.one_trash {
  width: 21%;
  height: 300px;
  margin-left: 40px;
  margin-top: 10px;
  margin-bottom: 10px;
  background: rgba(75, 159, 71, 0.1);
  mix-blend-mode: normal;
  border-radius: 24px;
  float: left;
}

.wrap {
  position: relative;
}

.tip_first {
  position: absolute;
  font-family: "Inria Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  margin-left: 28px;
  margin-top: 63px;
}

.tip_second {
  position: absolute;
  font-family: "Inria Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  margin-top: 120px;
  margin-left: 28px;
}

.tip_btn {
  margin-top: 220px;
  margin-left: 20px;
  position: absolute;
}
</style>
