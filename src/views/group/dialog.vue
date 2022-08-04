<template>
  <el-dialog :model-value="true" :title="title" @close="handleClose">
    <el-form
        ref="ruleFormRef"
        :model="formData"
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
        :size="formSize"
    >
      <el-form-item label="昵称：" prop="nickname">
        <el-input v-model="formData.nickname"></el-input>
      </el-form-item>
      <el-form-item label="姓名：" prop="name">
        <el-input v-model="formData.name"></el-input>
      </el-form-item>
      <el-form-item label="email：" prop="email">
        <el-input v-model="formData.email"></el-input>
      </el-form-item>
      <!-- <el-form-item label="年龄：" prop="age">
        <el-input v-model="formData.age"></el-input>
      </el-form-item> -->
      <el-form-item>
        <el-button type="primary" @click="submitForm()">确定</el-button>
        <el-button @click="resetForm()">重置</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import { reactive, toRefs, watch, ref, h, onMounted, computed } from "vue";
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    dialogShow: {
      type: Boolean,
      default: false,
    },
    rowInfo: {
      type: Object,
      default() {
        return {};
      },
    },
    arrayNum: {
      type: Number,
      default: 0,
    },
  },
  setup(props, { emit }) {
    const data = reactive({
      dialogFlag: false,
      formData: {},
    });
    const method = reactive({
      // 关闭弹窗
      handleClose() {
        emit("update:dialogShow", false);
      },
      // 重置
      resetForm() {
        data.formData = Object.assign({}, props.rowInfo);
      },
      // 提交表单内容
      submitForm() {
        method.handleClose();
        if (props.rowInfo.name) {
          // 修改
          emit("editRow", data.formData);
        } else {
          // 新增
          data.formData["id"] = props.arrayNum + 1;
          emit("addRow", data.formData);
        }
      },
    });
    onMounted(() => {
      data.formData = Object.assign({}, props.rowInfo);
      data.dialogFlag = props.rowInfo;
    });
    return { ...toRefs(data), ...method };
  },
};
</script>

<style lang="scss" scoped>
</style>
