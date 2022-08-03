<template>
  <el-dialog :model-value="true" title="详情" @close="handleClose">
    <p>
      <label for="name">姓名：</label>
      <span id="name"> {{ studentInfo.name }} </span>
    </p>
    <p>
      <label for="sex">性别：</label>
      <span id="sex"> {{ studentInfo.sex }} </span>
    </p>
    <p>
      <label for="age">年龄：</label>
      <span id="age"> {{ studentInfo.age }} </span>
    </p>
  </el-dialog>
</template>

<script>
import { computed, toRefs } from "vue";
export default {
  props: {
    rowInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  emit: ["closeDetail"],
  setup(props, { emit }) {
    const data = {
      studentInfo: computed(() => props.rowInfo).value,
    };
    const method = {
      handleClose() {
        emit("closeDetail");
      },
    };
    return { ...toRefs(data), ...method };
  },
};
</script>

<style lang="less" scoped>
</style>
