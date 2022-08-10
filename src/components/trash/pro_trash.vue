<template>
  <div class="user" style="background:#EDF5ED;margin:15px 25px 15px 15px" >
        <n-space vertical>
            <n-space justify="end">
                <div>&ensp;</div>
            </n-space>
            <p class="name"  style="margin:0px 10px 10px 30px">{{props.oneProject.proj_name}}</p>
            <p class="state" style="margin:0px 10px 10px 30px">{{props.oneProject.proj_info}}</p>
            <div style="height:15px"></div>
            <n-button
                round
                size="large"
                color="#DADADA"
                ghost
                @click="move_out()"
            >
                <template #icon>
                    <n-image preview-disabled src="svg\project_svg\toDetail.svg">
                    </n-image>
                  </template>
                <!-- <router-link to="/projectDetail" style="text-decoration: none"> -->
                    <p class="buttonText2" @click="toDetail()">恢复项目</p>    
                <!-- </router-link> -->
            </n-button>

            <n-button
                round
                size="large"
                color="#DADADA"
                ghost
                style="margin:0px 10px 10px 10px"
                @click="move_proj_to_bin()"
            >
                <template #icon>
                    <n-image preview-disabled src="svg\project_svg\dele.svg">
                    </n-image>
                </template>
                <p class="buttonText2"
                >删除项目</p>
            </n-button>
        </n-space>
    </div>

  <!-- <div class="one_trash project">
    <div class="wrap">
      <div class="tip_first">{{props.oneProject.proj_name}}</div>
      <div class="tip_second">{{props.oneProject.proj_info}}</div>
      <div class="tip_btn">
        <n-button style=" width: 200px;height: 40px; border-radius: 12px; border: 1px solid #cdcdcd"
                  color="transparent" text-color="#2772F0">
          <n-image src="svg\trash_svg\recover.svg" />
          <span class="btn_font">恢复</span>
        </n-button>
      </div>
    </div>
  </div> -->
</template>

<script lang="ts" setup>
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
import { useProjectStore } from "../../store/Project";
import { useUserStore } from "../../store/User";
import { InputInst, useMessage } from "naive-ui";
import { useRouter } from "vue-router"

const router = useRouter();
const Project = useProjectStore();



type Props = {
  oneProject?: {
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
  oneProject: () => {
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

.btn_font{
  font-family: 'Inria Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  margin-left: 5px;
}

.trash_head{
  margin-top: 100px;
  margin-left: 100px;
  height: 40px;
  position: relative;
}

.title_img{
  margin-top: 5px;
  position: absolute;
}

.title_font{
  position: absolute;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  margin-left: 50px;
}

.trash_body{
  width: 94%;
  height: 600px;
  max-height: 600px;
  margin-left: 3%;
  margin-top: 50px;
  padding-top: 30px;
  background-color: #FFFFFF;
  border-radius: 24px;
  overflow-y: scroll;
}

.one_trash{
  width: 21%;
  height: 300px;
  margin-left: 40px;
  margin-top: 10px;
  margin-bottom: 10px;
  background: rgba(75,159,71, 0.1);
  mix-blend-mode: normal;
  border-radius: 24px;
  float: left;
}

.wrap{
  position: relative;
}

.tip_first{
  position: absolute;
  font-family: 'Inria Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  margin-left: 28px;
  margin-top: 63px;
}

.tip_second{
  position: absolute;
  font-family: 'Inria Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  margin-top: 120px;
  margin-left: 28px;
}

.tip_btn{
  margin-top: 220px;
  margin-left: 20px;
  position: absolute;
}

  .parent{
      border-radius: 16px;
    }
     .user {
    /* opacity: 0.10000000149011612; */
    border-radius: 16px;
    /*background: rgb(245, 181, 68, 0.1);*/
    text-align: center;
  }
  .buttonText2 {
    color: #2772F0;
    font-family: nunito-sans, sans-serif;
    font-weight: bold;
    font-size: 14px;
    line-height: normal;
    letter-spacing: 2px;
    text-align: left;
  }
    .state{
    opacity: 0.4000000059604645;
    color: #091B3D;
    font-family: Sk-Modernist;
    font-weight: regular;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: left;

  }
  .name{
    color: #091B3D;
    font-family: Sk-Modernist;
    font-weight: bold;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0px;
    text-align: left;
  }
    .el-button--text {
    margin-right: 15px;
    }
    .el-select {
    width: 300px;
    }
    .el-input {
    width: 300px;
    }
    .dialog-footer button:first-child {
    margin-right: 10px;
    }

</style>
