<template>
  <n-space vertical size="large">
    <n-layout style="margin: 20px">
      <n-layout-header class="projectTitle">
        <n-grid x-gap="12" :cols="9">
          <n-gi span="4" style="display: flex">
            <n-image width="32" src="svg\\主页svg\\Icons\\Setting - 5.svg" />
            <span style="margin-left: 15px; padding-top: -10px">{{
              form.name
            }}</span>
          </n-gi>
          <n-gi> </n-gi>
          <n-gi span="2" style="margin-top: -1px">
            <span>
              <n-input
                v-model:value="tagInput"
                ref="inputInstRef"
                round
                clearable
                placeholder="搜索文件"
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
              color="#2772F0"
              class="button"
              @click="searchFile"
              >搜索文件</n-button
            >
          </n-gi>
          <n-gi style="margin-top: -8px">
            <n-button
              color="#2772F0"
              class="button"
              margin-left="15px"
              @click="projectEditVisible = true"
              >编辑项目</n-button
            >
          </n-gi>
        </n-grid>
      </n-layout-header>
      <n-layout-content
        content-style="padding: 24px;"
        style="background-color: rgb(245, 181, 68, 0.1)"
      >
        <div class="fileTitle">项目介绍</div>
        <div class="intro">
          {{ form.description }}
        </div>
      </n-layout-content>
      <n-layout-content
        content-style="padding: 24px;"
        style="background-color: rgb(245, 181, 68, 0.1)"
      >
        <n-grid x-gap="50" :cols="3" class="fileTitle">
          <n-gi>
            <div>设计原型</div>
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
                <div
                  v-for="(item, idx) in countProto"
                  :key="idx" 
                  class="scrollbar-demo-item">
                  <n-grid class="item"
                    x-gap="0"
                    :cols="11"
                    style="padding-top: 5px; vertical-align: middle"
                  >
                    <n-gi span="1">
                      <n-image
                        width="26.5"
                        height="23.5"
                        src="svg\\主页svg\\projectDetail\\ItemIcon.svg"
                      />
                    </n-gi>
                    <n-gi span="8">
                      <div display="inline">{{protoList[idx]}}</div>
                    </n-gi>
                    <n-gi span="1">
                      <el-icon @click="editProto"><!--@click="dialogEditVisible = true"-->
                        <Edit />
                      </el-icon>
                    </n-gi>
                    <n-gi span="1">
                      <el-icon @click="delProto(idx)">
                        <Delete />
                      </el-icon><!---->
                    </n-gi>
                  </n-grid>
                </div>
              </el-scrollbar>

              <div class="btnspace">
                <n-button color="#4B9F47" class="button" @click="addProto"
                  >新建原型</n-button
                >
              </div>
            </div>
          </n-gi>

          <n-gi>
            <div
              class="section"
              style="background-color: rgb(246, 134, 106, 0.2)"
            >
              <el-scrollbar max-height="97%">
                <div
                  v-for="(item, idx) in countUML"
                  :key="idx" 
                  class="scrollbar-demo-item">
                  <n-grid class="item"
                    x-gap="0"
                    :cols="11"
                    style="padding-top: 5px; vertical-align: middle"
                  >
                    <n-gi span="1">
                      <n-image
                        width="26.5"
                        height="23.5"
                        src="svg\\主页svg\\projectDetail\\ItemIcon.svg"
                      />
                    </n-gi>
                    <n-gi span="8">
                      <div display="inline">{{umlList[idx]}}</div>
                    </n-gi>
                    <n-gi span="1">
                      <el-icon @click="dialogEditVisible = true">
                        <Edit />
                      </el-icon>
                    </n-gi>
                    <n-gi span="1">
                      <el-icon @click="delUML(idx)">
                        <Delete />
                      </el-icon><!---->
                    </n-gi>
                  </n-grid>
                </div>
              </el-scrollbar>

              <div class="btnspace">
                <n-button color="#F6866A" class="button" @click="addUML"
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
              <el-scrollbar max-height="97%">
                <div
                  v-for="(item, idx) in countFile"
                  :key="idx" 
                  class="scrollbar-demo-item">
                  <n-grid class="item"
                    x-gap="0"
                    :cols="11"
                    style="padding-top: 5px; vertical-align: middle"
                  >
                    <n-gi span="1">
                      <n-image
                        width="26.5"
                        height="23.5"
                        src="svg\\主页svg\\projectDetail\\ItemIcon.svg"
                      />
                    </n-gi>
                    <n-gi span="8">
                      <div display="inline">{{fileList[idx]}}</div>
                    </n-gi>
                    <n-gi span="1">
                      <el-icon @click="dialogEditVisible = true">
                        <Edit />
                      </el-icon>
                    </n-gi>
                    <n-gi span="1">
                      <el-icon @click="delFile(idx)">
                        <Delete />
                      </el-icon><!---->
                    </n-gi>
                  </n-grid>
                </div>
              </el-scrollbar>

              <div class="btnspace">
                <n-button color="#F5B544" class="button" @click="addFile"
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

  <!--文件名修改框-->
  <el-dialog @click="dialogEditVisible" title="重命名文件"  draggable>
    <el-form :model="form">
      <el-form-item label="新的文件名称" :label-width="formLabelWidth">
        <el-input v-model="project.name" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogEditVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogEditVisible = false"
          >确认</el-button
        >
      </span>
    </template>
  </el-dialog>

  <!--项目信息修改框-->
  <el-dialog v-model="projectEditVisible" title="修改项目信息">
    <el-form :model="form">
      <el-form-item label="项目名称" :label-width="formLabelWidth">
        <el-input
          v-model="form.name"
          autocomplete="off"
          placeholder="请输入项目名称"
        />
      </el-form-item>
      <el-form-item label="项目描述" :label-width="formLabelWidth">
        <el-input v-model="form.description" placeholder="请输入项目描述" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="projectEditVisible = false">取消</el-button>
        <el-button type="primary" @click="projectEditVisible = false"
          >确认</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import FileItem from "./fileName.vue";
import UmlItem from "./UMLName.vue";
import ProtoItem from "./protoName.vue";
import { reactive, Ref, ref, toRefs } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from "@element-plus/icons-vue";
import axios from "axios"; //axios请求地址
import { useProjectStore } from "../../store/Project";
import { useMessage } from "naive-ui";

const dialogEditVisible = ref(false);
const projectEditVisible = ref(false);
const formLabelWidth = "140px";

const form = reactive({
  name: "项目名称",
  description: "项目描述",
});
const project = reactive({
  name: ""
})
const searchFile = () => {
  ElMessage({
    message: "searching",
    type: "warning",
  });
};

//const protoList=ref([])
const countProto = ref(0);
const countUML = ref(0);
const countFile = ref(0);

let protoList: Array<String> = ["新建设计原型"];
let umlList: Array<String> = ["新建UML图"];
let fileList: Array<String> = ["新建文档"];
let cntP: number = 1;
let cntU: number = 1;
let cntF: number = 1;

const addProto = () => {
  let str: String = "新建设计原型"+cntP.toString();
  protoList.push(str);
  cntP++;
  countProto.value++;
};
const addUML = () => {
  let str: String = "新建UML图"+cntU.toString();
  umlList.push(str);
  cntU++;
  countUML.value++;
};
const addFile = () => {
  let str: String = "新建文档"+cntF.toString();
  fileList.push(str);
  cntF++;
  countFile.value++;
};

const msg = ref("");
const editProto = (idx: number) => {
  dialogEditVisible = true;
  ElMessage({
            type: 'success',
            message: '测试editProto ',
        })
  if (project.name !== "") {
    protoList[idx]=project.name;
    project.name = "";
  }
}

const delProto = (idx: number) => {
  ElMessageBox.confirm(
        '确定删除这个文件？',
        //idx.toString(),
        'Confirm',
        {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        }
    )
      .then(() => {
        let str: String =protoList[idx];
        protoList.splice(idx,1);
        countProto.value--;
        ElMessage({
            type: 'success',
            message: '成功删除文件 '+str,
        })
      })
      .catch(() => {
        // catch error
      });
};
const delUML = (idx: number) => {
  ElMessageBox.confirm(
        '确定删除这个文件？',
        //idx.toString(),
        'Confirm',
        {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        }
    )
      .then(() => {
        let str: String =umlList[idx];
        umlList.splice(idx,1);
        countUML.value--;
        ElMessage({
            type: 'success',
            message: '成功删除文件 '+str,
        })
      })
      .catch(() => {
        // catch error
      });
};
const delFile = (idx: number) => {
  ElMessageBox.confirm(
        '确定删除这个文件？',
        //idx.toString(),
        'Confirm',
        {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        }
    )
      .then(() => {
        let str: String =fileList[idx];
        fileList.splice(idx,1);
        countFile.value--;
        ElMessage({
            type: 'success',
            message: '成功删除文件 '+str,
        })
      })
      .catch(() => {
        // catch error
      });
};

const handleDeleteOne = (id) => {
  //接口调用
  axios
    .post("/user/order/del", {
      data: {
        document_id: [id],
      },
    })
    .then(() => {
      ElMessage.success("删除成功");
      //getShowList();
    });
};
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
  margin-left: 22px;
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
  flex-direction: column; /**/

  border-radius: 16px;
  background-color: rgb(75, 159, 71, 0.2);
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