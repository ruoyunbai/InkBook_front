<template>
  <div class="item">
    <n-grid
      x-gap="0"
      :cols="11"
      style="padding-top: 5px; vertical-align: middle"
    >
      <n-gi span="1">
        <n-image preview-disabled
          width="26.5"
          height="23.5"
          src="svg\\主页svg\\projectDetail\\ItemIcon.svg"
        />
      </n-gi>
      <n-gi span="8">
        <!-- <router-link to="/document" style="text-decoration: none; color: black"> -->
        <div display="inline" @click="toDoc()">{{ props.oneDoc.document_name }}</div>
        <!-- </router-link> -->
      </n-gi>
      <n-gi span="1">
        <el-icon @click="dialogEditVisible = true">
          <Edit />
        </el-icon>
      </n-gi>
      <n-gi span="1">
        <el-icon @click="move_doc_to_bin()">
          <Delete />
        </el-icon>
      </n-gi>
    </n-grid>
  </div>

  <!--文件名修改框-->
  <el-dialog v-model="dialogEditVisible" title="重命名文档" draggable>
    <el-form :model="file">
      <el-form-item label="请输入新文档名称" :label-width="formLabelWidth">
        <el-input v-model="file.name" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogEditVisible = false">取消</el-button>
        <el-button type="primary" @click="editDoc()"
          >确认</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ElMessage, ElMessageBox } from "element-plus";
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from "@element-plus/icons-vue";
import { onBeforeMount, reactive, ref } from "vue";
import { useDocumentStore } from "../../store/Document";
import router from "../../router";

const dialogEditVisible = ref(false);
const formLabelWidth = "140px";
const Doc = useDocumentStore();

const file = reactive({
  name: "文档",
});

onBeforeMount(() => {
  file.name = props.oneDoc.document_name;
  console.log(props.oneDoc)
});

const editDoc = () => {
  Doc.document_id = props.oneDoc.document_id;
  Doc.document_name = file.name;
  Doc.operation = "edit";
  dialogEditVisible.value = false;
};

const move_doc_to_bin = () => {
  ElMessageBox.confirm("确定将文件移入回收站？", "Confirm", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(() => {
      Doc.document_id = props.oneDoc.document_id;
      Doc.operation = "delete";
      dialogEditVisible.value = false;
    })
    .catch(() => {
      // catch error
    });
  // Proto.ppage_id = props.oneProto.ppage_id;
  // Proto.ppage_name = file.name;
  // Proto.operation = "delete";
  // dialogEditVisible.value = false;
};

const toDoc = () =>{
  router.push({
    name:"document",
    params:{
      doc_id:props.oneDoc.document_id,
    }
  })
}


type Props = {
  oneDoc?: {
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
  oneDoc: () => {
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
</style>