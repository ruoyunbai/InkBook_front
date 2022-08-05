<template>
  <div class="item">
    <n-grid
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
        <div display="inline">{{form.fileName}}</div>
      </n-gi>
      <n-gi span="1">
        <el-icon @click="dialogEditVisible = true">
          <Edit />
        </el-icon>
      </n-gi>
      <n-gi span="1">
        <!--<el-icon @click="openDelete">
          <Delete />
        </el-icon>-->
      </n-gi>
      <!--<n-gi span="1" justify="center">
            <el-icon @click="openDelete" >
                <Delete />
            </el-icon>
            <el-button type="danger" :icon="Delete" circle
                @click="openDelete" >
            </el-button>
            <el-button text @click="open">Click to open the Message Box</el-button>
            
            <div v-if="deleteShow">
                <el-button text @click="affirmDelete">Click to open the Message Box</el-button>
                <el-button type="danger" :icon="Delete" circle @click="affirmDelete">
                <el-button class="deleteButton" @click="affirmDelete"></el-button>
            </div>-->
    </n-grid>
  </div>

  <!--文件名修改框-->
  <el-dialog v-model="dialogEditVisible" title="重命名文件"  draggable>
    <el-form :model="form">
      <el-form-item label="新的文件名称" :label-width="formLabelWidth">
        <el-input v-model="form.fileName" autocomplete="off" />
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
</template>

<script lang="ts" setup>
import { ElMessage, ElMessageBox } from 'element-plus'
import { Check, Delete, Edit, Message, Search, Star, } from '@element-plus/icons-vue'
import { reactive, ref } from "vue";

const dialogEditVisible = ref(false);
const formLabelWidth = "140px";

const form = reactive({
  fileName: "新建文档文件",
});

const openDelete = () => {
    ElMessageBox.confirm(
        '确定删除这个文件？',
        'Confirm',
        {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        }
    )
        .then(() => {
        ElMessage({
            type: 'success',
            message: 'Delete completed',
        })
        })
        .catch(() => {
        ElMessage({
            type: 'info',
            message: 'Delete canceled',
        })
        })
}

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