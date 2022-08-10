<template>
  <div class="item">
    <n-grid
      x-gap="0"
      :cols="11"
      style="padding-top: 5px; vertical-align: middle"
    >
      <n-gi span="1">
        <n-image
          preview-disabled
          width="26.5"
          height="23.5"
          src="svg\projectDetail\ItemIcon.svg"
        />
      </n-gi>
      <n-gi span="8">
        <!-- <router-link to="/document" style="text-decoration: none; color: black"> -->
        <div display="inline">{{ props.oneDoc.document_name }}</div>
        <!-- </router-link> -->
      </n-gi>
      <n-gi span="1">
        <n-image
          preview-disabled
          @click="recoverDoc"
          width="20"
          src="svg\trash_svg\recover_file.svg"
        />
      </n-gi>
      <n-gi span="1">
        <n-popconfirm>
          <template #icon>
            <n-icon>
              <n-image
                style="margin: 0px 0px 0px 0px"
                height="20"
                preview-disabled
                src="svg\project_svg\remove_clue.svg"
              />
            </n-icon>
          </template>
          <template #trigger>
            <el-icon>
              <Delete />
            </el-icon>
          </template>
          确定要永久删除文档吗？
          <template #action>
            <n-button size="small" @click="move_doc_from_bin()">
              确定
            </n-button>
          </template>
        </n-popconfirm>
      </n-gi>
    </n-grid>
  </div>
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
  console.log(props.oneDoc);
});

const recoverDoc = () => {
  Doc.document_id = props.oneDoc.document_id;
  Doc.operation = "recover";
};

const move_doc_from_bin = () => {
  Doc.document_id = props.oneDoc.document_id;
  Doc.operation = "delete_complete";
};

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