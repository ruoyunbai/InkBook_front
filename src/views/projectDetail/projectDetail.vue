<template>
  <n-space vertical size="large">
    <n-layout style="margin: 20px">
      <n-layout-header class="projectTitle">
        <n-grid x-gap="12" :cols="9">
          <n-gi span="4" style="display: flex">
            <n-image width="32" src="svg\\主页svg\\Icons\\Setting - 5.svg" />
            <span style="margin-left: 15px; padding-top: -10px">{{
              Detail.proj_name
            }}</span>
          </n-gi>
          <n-gi> </n-gi>
          <n-gi span="2" style="margin-top: -1px">
            <span>
              <n-input
                ref="inputInstRef"
                round
                clearable
                placeholder="搜索文件"
                v-model:value="input"
              >
                <template #prefix>
                  <n-image
                    width="24"
                    src="svg\\主页svg\\projectDetail\\⭐️ Icons L.svg"
                  />
                </template>
              </n-input>
            </span>
          </n-gi>
          <n-gi style="margin-top: -8px">
            <n-button
              align="center"
              color="#AA25A480"
              class="button"
              @click="searchFile()"
              >搜索文件</n-button
            >
          </n-gi>
          <n-gi style="margin-top: -8px">
            <n-button
              color="#AA25A480"
              class="button"
              margin-left="-15px"
              @click="router.go(-1)"
              >返回上一页
            </n-button>
          </n-gi>
        </n-grid>
      </n-layout-header>
      <n-layout-content
        content-style="padding: 24px;"
        style="background-color: rgb(245, 181, 68, 0.1)"
      >
        <div class="fileTitle">
          项目介绍
          <span style="margin-left: 30px">
          <n-button
            color="#AA25A480"
            class="button"
            @click="projectEditVisible = true"
            >编辑项目信息
          </n-button></span>
        </div>
        <div class="intro">
          {{ Detail.proj_info }}
        </div>
      </n-layout-content>
      <n-layout-content
        content-style="padding: 24px;"
        style="background-color: rgb(245, 181, 68, 0.1)"
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
              <el-scrollbar v-show="!searched" max-height="97%">
                <div 
                  v-for="(proto, idx) in prototypes"
                  :key="idx"
                  class="scrollbar-demo-item"
                >
                  <protoItem
                    :key="proto.prototype_id"
                    :one-proto="proto"
                  ></protoItem>
                </div>
              </el-scrollbar>

              <el-scrollbar v-show="searched" max-height="97%">
                <div 
                  v-for="(proto, idx) in sprototypes"
                  :key="idx"
                  class="scrollbar-demo-item"
                >
                  <protoItem
                    :key="proto.prototype_id"
                    :one-proto="proto"
                  ></protoItem>
                </div>
              </el-scrollbar>

              <div class="btnspace">
                <n-button
                  color="#4B9F47"
                  class="button"
                  @click="protoNewVisible = true"
                  >新建页面</n-button
                >
              </div>
            </div>

          </n-gi>

          <n-gi>
            <div
              class="section"
              style="background-color: rgb(246, 134, 106, 0.2)"
            >
              <el-scrollbar max-height="97%" v-show="!searched">
                <div
                  v-for="(item, idx) in umls"
                  :key="idx"
                  class="scrollbar-demo-item"
                >
                  <UmlItem :key="item.uml_id" :one-UML="item"></UmlItem>
                </div>
              </el-scrollbar>

              <el-scrollbar max-height="97%" v-show="searched">
                <div
                  v-for="(item, idx) in sumls"
                  :key="idx"
                  class="scrollbar-demo-item"
                >
                  <UmlItem :key="item.uml_id" :one-UML="item"></UmlItem>
                </div>
              </el-scrollbar>

              <div class="btnspace">
                <n-button
                  color="#F6866A"
                  class="button"
                  @click="umlNewVisible = true"
                  >新建图文件</n-button
                >
              </div>
            </div>
          </n-gi>

          <n-gi>
            <div
              class="section"
              style="background-color: rgb(255, 190, 92, 0.2)"
            >
              <el-scrollbar max-height="97%" v-show="!searched">
                <div
                  v-for="(item, idx) in documents"
                  :key="idx"
                  class="scrollbar-demo-item"
                >
                  <DocItem :key="item.document_id" :one-Doc="item"></DocItem>
                </div>
              </el-scrollbar>

              <el-scrollbar max-height="97%" v-show="searched">
                <div
                  v-for="(item, idx) in sdocuments"
                  :key="idx"
                  class="scrollbar-demo-item"
                >
                  <DocItem :key="item.document_id" :one-Doc="item"></DocItem>
                </div>
              </el-scrollbar>

              <div class="btnspace">
                <n-button
                  color="#F5B544"
                  class="button"
                  @click="docNewVisible = true"
                  >新建文档</n-button
                >
              </div>
            </div>
          </n-gi>
        </n-grid>
      </n-layout-content>
      <!--<n-layout-footer>角标</n-layout-footer>-->
    </n-layout>
  </n-space>

  <!--原型页面新建对话框-->
  <el-dialog v-model="protoNewVisible" title="新建原型页面" draggable>
    <el-form :model="file">
      <el-form-item label="请输入页面名称" :label-width="formLabelWidth">
        <el-input v-model="file.name" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="protoNewVisible = false">取消</el-button>
        <el-button type="primary" @click="addProto">确认</el-button>
      </span>
    </template>
  </el-dialog>

  <!--UML图新建对话框-->
  <el-dialog v-model="umlNewVisible" title="新建UML图" draggable>
    <el-form :model="file">
      <el-form-item label="请输入UML图名称" :label-width="formLabelWidth">
        <el-input v-model="file.name" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="umlNewVisible = false">取消</el-button>
        <el-button type="primary" @click="addUML">确认</el-button>
      </span>
    </template>
  </el-dialog>

  <!--文档新建对话框-->
  <el-dialog v-model="docNewVisible" title="新建文档" draggable>
    <el-form :model="file">
      <el-form-item label="请输入文档名称" :label-width="formLabelWidth">
        <el-input v-model="file.name" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="docNewVisible = false">取消</el-button>
        <el-button type="primary" @click="addDoc">确认</el-button>
      </span>
    </template>
  </el-dialog>

  <!--项目信息修改框-->
  <el-dialog v-model="projectEditVisible" title="修改项目信息">
    <el-form :model="project">
      <el-form-item label="项目名称" :label-width="formLabelWidth">
        <el-input
          v-model="project.name"
          autocomplete="off"
          placeholder="请输入项目名称"
        />
      </el-form-item>
      <el-form-item label="项目描述" :label-width="formLabelWidth">
        <el-input v-model="project.description" placeholder="请输入项目描述" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="projectEditVisible = false">取消</el-button>
        <el-button type="primary" @click="editProject()"
          >确认</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import DocItem from "./document.vue";
import UmlItem from "./uml.vue";
import ProtoItem from "./prototype.vue";
import { onBeforeMount, onMounted, reactive, Ref, ref, toRefs } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { useMessage } from "naive-ui";
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from "@element-plus/icons-vue";
import axios from "axios"; //axios请求地址
//USER全局变量
import { useUserStore } from "../../store/User";
import { useDetailStore } from "../../store/ProjectDetail";
import { usePrototypeStore } from "../../store/prototype";
import { useUmlStore } from "../../store/Uml";
import { useDocumentStore } from "../../store/Document";

import { useRouter } from "vue-router"
import { useRoute } from "vue-router"
const route = useRoute();
const router = useRouter();

// import { FileReadOptions } from "fs/promises";
const User = useUserStore();
const Detail = useDetailStore();
const Proto = usePrototypeStore();
const Uml = useUmlStore();
const Doc = useDocumentStore();
const message = useMessage();

const protoNewVisible = ref(false);
const umlNewVisible = ref(false);
const docNewVisible = ref(false);
const projectEditVisible = ref(false);
const formLabelWidth = "140px";

const project = reactive({
  name: "项目名称",
  description: "项目介绍内容",
});
const file = reactive({
  name: "",
});

const prototypes: any = reactive([]);
const umls: any = reactive([]);
const documents: any = reactive([]);

let protoNum: number = 0;
let umlNum: number = 0;
let docNum: number = 0;

//获取信息，加载项目、页面、uml和文档
onBeforeMount(() => {
  getProjectDetail();
  getPrototype();
  getUml();
  getDocument();
  console.log("get project info");
});

let this_proj_id: number = 0;
this_proj_id = Number(route.params.proj_id);
// localStorage.setItem('id', route.params.proj_id.toString());
const getProjectDetail = (clear: boolean = true) => {
  axios({
    url: axios.defaults.baseURL + "/proj/get_proj_by_id",
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: User.token,
    },
    data: {
      proj_id: this_proj_id, // 传递的this_proj_id 如何获取？
    },
    transformRequest: [
      function (data, headers) {
        let data1 = JSON.stringify(data);
        console.log(data1);
        return data1;
      },
    ],
  }).then(function (response) {
    console.log("response", response);
    console.log(response.data);
    console.log("input"+this_proj_id.toString());
    // 处理成功情况
    if (response.data?.success) {
      Detail.proj_info = response.data.proj.proj_info;
      Detail.proj_name = response.data.proj.proj_name;
      project.name = Detail.proj_name;
      project.description = Detail.proj_info;
    } else {
      console.log("找不到项目" + this_proj_id);
      message.error("项目加载出错");
    }
  });
};

const getPrototype = (clear: boolean = true) => {
  axios({
    url: axios.defaults.baseURL + "/ppage/get_proj_ppages",
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: User.token,
    },
    data: {
      proj_id: this_proj_id, // 传递的this_proj_id 如何获取？
    },
    transformRequest: [
      function (data, headers) {
        let data1 = JSON.stringify(data);
        console.log(data1);
        return data1;
      },
    ],
  }).then(function (response) {
    console.log("response", response);
    console.log(response.data);

    // 处理成功情况
    if (response.data?.success) {
      protoNum = response.data?.count;
      let i = 0;
      if (clear) while (prototypes.length != 0) prototypes.pop();
      for (i = 0; i < protoNum; i++) {
        let tmp = reactive({
          prototype_id: response.data.ppages[i].ppage_id,
          prototype_name: response.data.ppages[i].ppage_name,
          // prototype_url: response.data.prototypes[i].prototype_url,
          // proj_id: response.data.prototypes[i].proj_id,
          // status:  response.data.prototypes[i].status,
        });
        // console.log("ppageID" + tmp.prototype_id + " " + tmp.prototype_name);
        prototypes.push(tmp);
      }
    } else {
      console.log("prototypes loading error / none");
      // message.error("设计原型加载出错");
    }
  });
};

const getUml = (clear: boolean = true) => {
  axios({
    url: axios.defaults.baseURL + "/uml/get_proj_umls",
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: User.token,
    },
    data: {
      proj_id: this_proj_id, // 传递的this_proj_id 如何获取？
    },
    transformRequest: [
      function (data, headers) {
        let data1 = JSON.stringify(data);
        console.log(data1);
        return data1;
      },
    ],
  }).then(function (response) {
    console.log("response", response);
    console.log(response.data);

    // 处理成功情况
    if (response.data?.success) {
      umlNum = response.data?.count;
      if (clear) while (umls.length != 0) umls.pop();
      let i = 0;
      for (i = 0; i < umlNum; i++) {
        let tmp = reactive({
          uml_id: response.data.umls[i].uml_id,
          uml_name: response.data.umls[i].uml_name,
          uml_url: response.data.umls[i].uml_url,
          proj_id: response.data.umls[i].proj_id,
          status: response.data.umls[i].status,
        });
        console.log("UML ID" + tmp.uml_id + " " + tmp.uml_name);
        umls.push(tmp);
      }
    } else {
      console.log("umls loading error");
      // message.error("UML加载出错");
    }
  });
};

const getDocument = (clear: boolean = true) => {
  axios({
    url: axios.defaults.baseURL + "/doc/get_proj_documents",
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: User.token,
    },
    data: {
      proj_id: this_proj_id, // 传递的this_proj_id 如何获取？
    },
    transformRequest: [
      function (data, headers) {
        let data1 = JSON.stringify(data);
        console.log(data1);
        return data1;
      },
    ],
  }).then(function (response) {
    console.log("response", response);
    console.log(response.data);

    // 处理成功情况
    if (response.data?.success) {
      docNum = response.data?.count;
      let i = 0;
      if (clear) while (documents.length != 0) documents.pop();
      for (i = 0; i < docNum; i++) {
        let tmp = reactive({
          count: response.data.documents[i].count,
          document_id: response.data.documents[i].document_id,
          document_name: response.data.documents[i].document_name,
          document_url: response.data.documents[i].document_url,
          proj_id: response.data.documents[i].proj_id,
          status: response.data.documents[i].status,
        });
        console.log("document_id" + tmp.document_id + " " + tmp.document_name);
        documents.push(tmp);
      }
    } else {
      console.log("documents loading error");
      // message.error("文档加载出错");
    }
  });
};

// 添加文件，handle里用axios, add中控制弹窗、刷新
const addProto = () => {
  handleProtoAdd(file.name);
  // getPrototype();
  protoNewVisible.value = false;
};
const addUML = () => {
  handleUmlAdd(file.name);
  // getUml();
  umlNewVisible.value = false;
};
const addDoc = () => {
  handleDocAdd(file.name);
  // getDocument();
  docNewVisible.value = false;
};

const handleProtoAdd = (page_name: String) => {
  axios({
    url: axios.defaults.baseURL + "/ppage/create_ppage",
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: User.token,
    },
    data: {
      ppage_data: "",
      ppage_name: page_name,
      proj_id: this_proj_id,
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
      getPrototype();
      console.log("get in add");
    } else {
      message.error(response.data.message);
    }
    file.name="";
    console.log(response.data);
  });
};

const handleUmlAdd = (uml_str: String) => {
  axios({
    url: axios.defaults.baseURL + "/uml/create_uml",
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: User.token,
    },
    data: {
      uml_name: uml_str,
      proj_id: this_proj_id,
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
      getUml();
      console.log("get in add");
    } else {
      message.error(response.data.message);
    }
    file.name="";
    console.log(response.data);
  });
};

const handleDocAdd = (doc_name: String) => {
  axios({
    url: axios.defaults.baseURL + "/doc/create_document",
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: User.token,
    },
    data: {
      document_name: doc_name,
      proj_id: this_proj_id,
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
      message.success("创建文件成功");
      getDocument();
      console.log("get in add");
    } else {
      message.error(response.data.message);
    }
    file.name="";
    console.log(response.data);
  });
};

// 修改、删除
Proto.$subscribe((mutation, state) => {
  if (Proto.operation == "") return;
  else if (Proto.operation == "edit") {
    axios({
      url: axios.defaults.baseURL + "/ppage/update_ppage",
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: User.token,
      },
      data: {
        ppage_id: Proto.ppage_id,
        ppage_data: "",
        ppage_name: Proto.ppage_name,
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
      // console.log("id:"+Proto.ppage_id+" newName: "+Proto.ppage_name);
      getPrototype();
      message.success("重命名成功");
    });
    Proto.operation = "";
  } else if (Proto.operation == "delete") {
    axios({
      url: axios.defaults.baseURL + "/ppage/move_ppage_to_bin",
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
      getPrototype();
      message.success("成功移入回收站");
    });
    Proto.operation = "";
  }
});

Uml.$subscribe((mutation, state) => {
  if (Uml.operation == "") return;
  else if (Uml.operation == "edit") {
    axios({
      url: axios.defaults.baseURL + "/uml/update_uml",
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: User.token,
      },
      data: {
        uml_id: Uml.uml_id,
        uml_name: Uml.uml_name,
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
      getUml();
      message.success("重命名成功");
    });
    Uml.operation = "";
  } else if (Uml.operation == "delete") {
    axios({
      url: axios.defaults.baseURL + "/uml/move_uml_to_bin",
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
      getUml();
      message.success("成功移入回收站");
    });
    Uml.operation = "";
  }
});

Doc.$subscribe((mutation, state) => {
  if (Doc.operation == "") return;
  else if (Doc.operation == "edit") {
    axios({
      url: axios.defaults.baseURL + "/doc/update_document",
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: User.token,
      },
      data: {
        document_id: Doc.document_id,
        document_name: Doc.document_name,
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
      getDocument();
      message.success("重命名成功");
    });
    Doc.operation = "";
  } else if (Doc.operation == "delete") {
    axios({
      url: axios.defaults.baseURL + "/doc/move_document_to_bin",
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
      getDocument();
      message.success("成功移入回收站");
    });
    Doc.operation = "";
  }
});

// 搜索
const searched = ref(false);
const input=ref("");

let sprotoNum: number = 0;
let sumlNum: number = 0;
let sdocNum: number = 0;

const sprototypes: any = reactive([]);
const sumls: any = reactive([]);
const sdocuments: any = reactive([]);

const searchFile = () => {
  axios({
    url: axios.defaults.baseURL + "/file/get_files_by_name",
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: User.token,
    },
    data: {
      name: input.value,
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
    while (sprototypes.length != 0) sprototypes.pop();
    while (sumls.length != 0) sumls.pop();
    while (sdocuments.length != 0) sdocuments.pop();
    sdocNum = response.data.count_documents;
    sprotoNum = response.data.count_ppage;
    sumlNum = response.data.count_umls;
    if (response.data?.success) {
      for (let i = 0; i < sprotoNum; i++) {
        let tmp1 = reactive({
          prototype_id: response.data.ppage[i].ppage_id,
          prototype_name: response.data.ppage[i].ppage_name,
        });
        sprototypes.push(tmp1);
      }
      for (let i = 0; i < sumlNum; i++) {
        let tmp2 = reactive({
          uml_id: response.data.umls[i].uml_id,
          uml_name: response.data.umls[i].uml_name,
          uml_url: response.data.umls[i].uml_url,
          proj_id: response.data.umls[i].proj_id,
          status: response.data.umls[i].status,
        });
        sumls.push(tmp2);
      }
      for (let i = 0; i < sdocNum; i++) {
        let tmp3 = reactive({
          count: response.data.documents[i].count,
          document_id: response.data.documents[i].document_id,
          document_name: response.data.documents[i].document_name,
          document_url: response.data.documents[i].document_url,
          proj_id: response.data.documents[i].proj_id,
          status: response.data.documents[i].status,
        });
        sdocuments.push(tmp3);
      }
      searched.value = true;
    } else {
      message.error(response.data?.message);
      searched.value = false;
    }
  });
};

//修改项目信息
const editProject=()=>{
  projectEditVisible.value = false;
  axios({
    url: axios.defaults.baseURL + "/proj/update_proj",
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Authorization": User.token
    },
    data: {
      proj_id: this_proj_id,
      proj_info: project.description,
      proj_name: project.name,
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
    getProjectDetail();
  })
}

</script>

<style scoped>
.projectTitle {
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
  background-color: (39, 114, 240, 0.5);

  font-family: Inria Sans;
  font-weight: bold;
  color: white;
}

.intro {
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 0.7);
  /*width: 1130px;*/
  height: 100px;
  margin-top: 10px;
  padding: 25px;

  font-family: Inria Sans;
  font-weight: bold;
}

.fileTitle {
  margin-left: 22px;
  margin-bottom: 0px;
  line-height: 32px;
  text-align: left;
  justify-content: center;
  font-family: Inria Sans;
  font-weight: bold;
  font-size: 20px;
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
  margin-bottom: 10px;
}

.btnspace {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
}

.deleteButton {
  width: 16px;
  height: 16px;
  background: url("svg\\主页svg\\projectDetail\\trash.svg") no-repeat;
  border-style: hidden;
}

</style > 