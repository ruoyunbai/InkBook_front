<template>
    <div class="user" style="background:#EDF5ED;margin:10px 10px 10px 30px">
      <n-grid x-gap="0" :cols="20">
        <n-gi span="2">
        </n-gi>
        <n-gi span="4">
          <div class="name" style="margin:10px 10px 10px 30px">{{props.oneMember.username}}</div>
        </n-gi>
        <n-gi span="6">
          <div class="name" style="margin:10px 10px 10px 30px">{{props.oneMember.email}}</div>
        </n-gi>
        <n-gi span="4">
          <div class="name" style="margin:10px 10px 10px 30px">{{props.oneMember.status}}</div>
        </n-gi>
        <n-gi span="4">
          <div class="name" style="margin:10px 10px 10px 30px">操作</div>
        </n-gi>
      </n-grid>
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
import axios from "axios";
import { useProjectStore } from "../store/Project";
import { useUserStore } from "../store/User";
import { InputInst, useMessage } from "naive-ui";




type Props = {
  oneMember?: {
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
  oneMember: () => {
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
.user {
    border-radius: 16px;
    text-align: left;
  }
</style>