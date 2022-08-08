<template>
    <div class="user" style="background:#EDF5ED;margin:10px 10px 10px 30px">
      <n-grid x-gap="0" :cols="20">
        <n-gi span="2">
        </n-gi>
        <n-gi span="4">
          <div class="name" style="margin:10px 10px 10px 30px">昵称</div>
        </n-gi>
        <n-gi span="6">
          <div class="name" style="margin:10px 10px 10px 30px">邮箱</div>
        </n-gi>
        <n-gi span="4">
          <div class="name" style="margin:10px 10px 10px 30px">身份</div>
        </n-gi>
        <n-gi span="4">
          <div class="name" style="margin:10px 10px 10px 30px">操作</div>
        </n-gi>
      </n-grid>
    </div>
</template>

<script setup lang="ts">
    

</script>

<style>
.user {
    border-radius: 16px;
    text-align: left;
  }
</style>