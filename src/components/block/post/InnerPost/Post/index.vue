<template>
  <div class="mycard">

    <n-space>
      <n-avatar
        round
        size="large"
        :src="onePost.src"
        style="cursor:pointer;"
        @click="OthersInfo()"
      />
      <n-space vertical>
        <div class="name">{{ onePost.name }}</div>
        <div class="time">{{ timeText }}</div>
      </n-space>
    </n-space>
    <div style="height: 10px"></div>
    <div class="title">{{ onePost.title }}</div>
    <br />
    <div class="editor">
      <v-md-editor v-model="text" mode="preview"></v-md-editor>
    </div>
    <!-- <div  id="vditor"></div> -->
    <!-- <div class="content">{{ onePost.content }}</div> -->
    <br />
    <n-space justify="space-between"> </n-space>

  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, Ref, ref, onUpdated } from "vue";
import axios from "axios";
import { useRouter } from "vue-router"
// import Vditor from 'vditor';
import "vditor/dist/index.css";

const router = useRouter()

// const vditor = ref<Vditor | null>(null);
const text: Ref<string> = ref("content");
onMounted(() => {
  text.value = props.onePost.content + "";
  handleTime();
});
onUpdated(() => {
  text.value = props.onePost.content + "";
});

const timeText = ref<string>("")
const handleTime = () => {
  if (props.onePost.time_weeks! > 1) {
    timeText.value = Math.floor(props.onePost.time_weeks!) + " weeks ago";
  } else if (props.onePost.time_days! > 1) {
    timeText.value = Math.floor(props.onePost.time_days!) + " days ago";
  } else if (props.onePost.time_hours! > 1) {
    timeText.value = Math.floor(props.onePost.time_hours!) + " hours ago";
  } else if (props.onePost.time_mins! > 1) {
    timeText.value = Math.floor(props.onePost.time_mins!) + " mins ago";
  } else {
    timeText.value = "just now";
  }
};

// onBeforeMount(()=>{
//   axios.post('/post/get', {
//         offset: 0,
//         length: 10,

//     })
//         .then(function (response) {
//             // 处理成功情况
//             console.log(response.data)
//             if (response.data) {

//             } else {

//             }
//             console.log(response.data)
//         }
//         )
// })
type Props = {
  onePost?: {
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
    time_weeks?: number;
    time_days?: number;
    time_hours?: number;
    time_mins?: number;
    like_status?: number;
    src:string
  };
};

const props = withDefaults(defineProps<Props>(), {
  onePost: () => {
    return {
      name: "123",
      time: 0,
      tags: [],
      title: "",
      content: "",
      watches: 0,
      comments: 0,
      ups: 0,
      user_id: 1,
      post_id: 1,
      clear: true,
      src:"http://43.138.77.133:81/media/avatars/default.jpg",
    };
  },
});

const OthersInfo = ()=>{
  console.log("to others")
  router.push({
    path:"/PersonalInfo",
    query:{
     user_id:props.onePost.user_id, 
    }
  })
}
</script>

<style scoped>
.name {
  color: #000000;
  font-family: Roboto;
  font-weight: regular;
  font-size: 13px;
  line-height: normal;
  letter-spacing: 5px;
  text-align: left;
}

.time {
  color: #808080;
  font-family: Roboto;
  font-weight: regular;
  font-size: 10px;
  line-height: normal;
  /*letter-spacing: 5px;*/
  text-align: left;
}

.mycard {
  border-radius: 5px;
  background: #ffffff;
  border: 1px solid #eaeaea;
  box-shadow: 2px 1px 5px 0px #00000026;
  padding-left: 40px;
  padding-top: 50px;
  padding-right:40px;
  padding-bottom: 40px;
  margin: 10px;
  width: 94%;
}

.title {
  color: #000000;
font-family: Roboto;
font-weight: bold;
font-size: 18px;
line-height: normal;
letter-spacing: 0px;
text-align: left;

}

.tags {
  color: #808080;
  font-family: Roboto;
  font-weight: regular;
  font-size: 10px;
  line-height: normal;

  text-align: left;

  border-radius: 5px;
  background: #eaeaea;
  padding: 3px 10px 5px 10px;
}

.content {
  color: #000000;
  font-family: Roboto;
  font-weight: light;
  font-size: 14px;
  line-height: 25px;
  letter-spacing: 5px;
  text-align: left;
}

.editor{
  margin-left: -32px;
}
</style>
