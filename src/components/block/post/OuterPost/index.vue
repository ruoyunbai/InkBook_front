<template>
  <div class="mycard">
    <n-button text class="cross" @click.stop="delPost()" v-show="User.isadmin"
      ><n-icon
        ><svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.6336 7.86798C10.1221 8.35657 10.1221 9.14621 9.6336 9.63479C9.39181 9.88155 9.07106 10 8.75031 10C8.42956 10 8.10881 9.87662 7.86701 9.63479L5 6.76743L2.13299 9.63479C1.89119 9.88155 1.57044 10 1.24969 10C0.928942 10 0.608191 9.87662 0.366395 9.63479C-0.122132 9.14621 -0.122132 8.35657 0.366395 7.86798L3.23341 5.00062L0.366395 2.13325C-0.122132 1.64466 -0.122132 0.855028 0.366395 0.36644C0.854922 -0.122147 1.64446 -0.122147 2.13299 0.36644L5 3.23381L7.86701 0.36644C8.35554 -0.122147 9.14508 -0.122147 9.6336 0.36644C10.1221 0.855028 10.1221 1.64466 9.6336 2.13325L6.76659 5.00062L9.6336 7.86798Z"
            fill="#F48023"
          />
        </svg> </n-icon
    ></n-button>
    <n-space>
      <n-avatar
        round
        size="large"
        :src="onePost.src"
        @click.stop="OthersInfo"
        style="cursor: pointer"
      />
      <n-space vertical>
        <div class="name">{{ onePost.name }}</div>
        <div class="time">{{ timeText }}</div>
      </n-space>
    </n-space>
    <div style="height: 10px"></div>
    <div class="title">{{ onePost.title }}</div>
    <br />
    <div style="margin-left: -32px">
      <v-md-editor
        class="vmd"
        v-model="text"
        height="100px"
        mode="preview"
      ></v-md-editor>
    </div>
    <!-- <div  id="vditor"></div> -->
    <!-- <div class="content">{{ onePost.content }}</div> -->
    <br />
    <n-space justify="space-between">
      <n-space>
        <div v-for="item in onePost.tags" :key="item" class="tags">
          {{ item }}
        </div>
      </n-space>
      <n-space justify="end">
        <n-button text>
          <template #icon>
            <n-icon>
              <svg
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.625 8C0.625 8 3.125 3 7.5 3C11.875 3 14.375 8 14.375 8C14.375 8 11.875 13 7.5 13C3.125 13 0.625 8 0.625 8Z"
                  stroke="#808080"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.5 9.875C8.53553 9.875 9.375 9.03553 9.375 8C9.375 6.96447 8.53553 6.125 7.5 6.125C6.46447 6.125 5.625 6.96447 5.625 8C5.625 9.03553 6.46447 9.875 7.5 9.875Z"
                  stroke="#808080"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </n-icon>
          </template>
          {{ onePost.watches }}
        </n-button>
        <n-button text>
          <template #icon>
            <n-icon>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.125 9.375C13.125 9.70652 12.9933 10.0245 12.7589 10.2589C12.5245 10.4933 12.2065 10.625 11.875 10.625H4.375L1.875 13.125V3.125C1.875 2.79348 2.0067 2.47554 2.24112 2.24112C2.47554 2.0067 2.79348 1.875 3.125 1.875H11.875C12.2065 1.875 12.5245 2.0067 12.7589 2.24112C12.9933 2.47554 13.125 2.79348 13.125 3.125V9.375Z"
                  stroke="#808080"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </n-icon>
          </template>
          {{ onePost.comments }}
        </n-button>
        <n-button text>
          <template #icon>
            <n-icon>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.08332 12.8333H2.33332C2.0239 12.8333 1.72716 12.7104 1.50837 12.4916C1.28957 12.2728 1.16666 11.976 1.16666 11.6666V7.58329C1.16666 7.27387 1.28957 6.97713 1.50837 6.75833C1.72716 6.53954 2.0239 6.41663 2.33332 6.41663H4.08332M8.16666 5.24996V2.91663C8.16666 2.4525 7.98228 2.00738 7.65409 1.67919C7.3259 1.351 6.88079 1.16663 6.41666 1.16663L4.08332 6.41663V12.8333H10.6633C10.9447 12.8365 11.2177 12.7379 11.4321 12.5556C11.6465 12.3734 11.7878 12.1198 11.83 11.8416L12.635 6.59163C12.6604 6.42442 12.6491 6.25369 12.6019 6.09127C12.5548 5.92885 12.4729 5.77863 12.3619 5.65101C12.2509 5.52339 12.1135 5.42142 11.9592 5.35217C11.8049 5.28292 11.6374 5.24804 11.4683 5.24996H8.16666Z"
                  stroke="#808080"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </n-icon>
          </template>
          {{ onePost.ups }}
        </n-button>
      </n-space>
    </n-space>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, Ref, ref, onUpdated, defineEmits } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../../../../store/User"
import axios from "axios";
// import Vditor from 'vditor';
import "vditor/dist/index.css";

const User = useUserStore();

const router = useRouter();
const emit = defineEmits(["delPost"]);
const delPost = ()=>{
  emit("delPost",props.onePost.post_id);
}

// const vditor = ref<Vditor | null>(null);
const text: Ref<string> = ref("content");
onMounted(() => {
  text.value = props.onePost.content + "";
  handleTime();
  // text.value=text.value.substring(0,5);
});
onUpdated(() => {
  text.value = props.onePost.content + "";
  //  text.value=text.value.substring(0,100);
});

const timeText = ref<string>("");
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
    src: string;
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
      src: "http://43.138.77.133:81/media/avatars/default.jpg",
    };
  },
});

const OthersInfo = () => {
  router.push({
    path: "/PersonalInfo",
    query: {
      user_id: props.onePost.user_id,
    },
  });
};
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
  position: relative;
  border-radius: 5px;
  background: #ffffff;
  border: 1px solid #eaeaea;
  box-shadow: 2px 1px 5px 0px #00000026;
  padding-left: 40px;
  padding-top: 25px;
  padding-right: 40px;
  padding-bottom: 25px;
  margin: 10px;
  margin-left: 50px;
  width: 90%;
}

.title {
  color: #000000;
  font-family: Roboto;
  font-weight: bold;
  font-size: 14px;
  line-height: normal;
  letter-spacing: 5px;
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
.vmd {
  padding: 0;
}
.cross{
  position: absolute;
  left:780px;
  top:19px;
}
</style>
