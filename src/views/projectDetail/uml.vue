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
        <div display="inline">{{ props.oneUML.uml_name }}</div>
      </n-gi>
      <n-gi span="1">
        <el-icon @click="dialogEditVisible = true">
          <Edit />
        </el-icon>
      </n-gi>
      <n-gi span="1">
        <el-icon @click="move_uml_to_bin">
          <Delete />
        </el-icon>
      </n-gi>
    </n-grid>
  </div>

  <!--uml修改框-->
  <el-dialog v-model="dialogEditVisible" title="重命名UML图" draggable>
    <el-form :model="file">
      <el-form-item label="请输入新UML图名称" :label-width="formLabelWidth">
        <el-input v-model="file.name" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogEditVisible = false">取消</el-button>
        <el-button type="primary" @click="editUml"
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
import { useUmlStore } from "../../store/Uml";
import router from "../../router";

const dialogEditVisible = ref(false);
const formLabelWidth = "140px";
const UML = useUmlStore();

const file = reactive({
  name: "UML图",
});

onBeforeMount(() => {
  file.name = props.oneUML.uml_name;
  console.log(props.oneUML);
});

const editUml = () => {
  UML.uml_id = props.oneUML.uml_id;
  UML.uml_name = file.name;
  //console.log("UML_id"+UML.uml_id);
  UML.operation = "edit";
  dialogEditVisible.value = false;
};

const move_uml_to_bin = () => {
  ElMessageBox.confirm("确定将文件移入回收站？", "Confirm", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(() => {
      UML.uml_id = props.oneUML.uml_id;
      UML.operation = "delete";
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

const toUMl = () =>{
  router.push({
    path:props.oneUML.uml_url,
    query:{
      uml_id:props.oneUML.uml_id,
    }
  })
}


type Props = {
  oneUML?: {
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
  oneUML: () => {
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