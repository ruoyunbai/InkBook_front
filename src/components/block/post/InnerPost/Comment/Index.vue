<template>
  <div class="mycard" ref="root">
    <n-button text class="cross" @click="delComment()" v-show="User.isadmin"
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
    <n-grid cols="30">
      <n-gi>
        <div ref="bar" :class="barC"></div>
      </n-gi>
      <n-gi></n-gi>
      <n-gi span="28">
        <div style="height: 20px"></div>
        <n-space>
          <n-avatar
            round
            size="large"
            :src="oneComment.src"
            style="cursor: pointer"
            @click="OthersInfo()"
          />
          <n-space vertical>
            <div class="name">{{ oneComment.name }}</div>
            <div class="time">{{ timeText }}</div>
          </n-space>
        </n-space>
        <div style="height: 10px"></div>
        <div style="margin-left: -32px">
          <v-md-editor
            v-model="oneComment.content"
            mode="preview"
          ></v-md-editor>
        </div>
        <!-- <div class="content">{{ oneComment.content }}</div> -->
        <n-divider />
        <n-space>
          <n-button @click="comment_like(true)" text>
            <n-icon>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                id="thumbUpSVG"
              >
                <path
                  d="M4.08332 12.8333H2.33332C2.0239 12.8333 1.72716 12.7104 1.50837 12.4916C1.28957 12.2728 1.16666 11.976 1.16666 11.6666V7.58329C1.16666 7.27387 1.28957 6.97713 1.50837 6.75833C1.72716 6.53954 2.0239 6.41663 2.33332 6.41663H4.08332M8.16666 5.24996V2.91663C8.16666 2.4525 7.98228 2.00738 7.65409 1.67919C7.3259 1.351 6.88079 1.16663 6.41666 1.16663L4.08332 6.41663V12.8333H10.6633C10.9447 12.8365 11.2177 12.7379 11.4321 12.5556C11.6465 12.3734 11.7878 12.1198 11.83 11.8416L12.635 6.59163C12.6604 6.42442 12.6491 6.25369 12.6019 6.09127C12.5548 5.92885 12.4729 5.77863 12.3619 5.65101C12.2509 5.52339 12.1135 5.42142 11.9592 5.35217C11.8049 5.28292 11.6374 5.24804 11.4683 5.24996H8.16666Z"
                  stroke="#808080"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  ref="thumbUp"
                />
              </svg>
            </n-icon>
          </n-button>
          <span>{{ oneComment.ups }}</span>
          <n-button @click="comment_like(false)" text>
            <n-icon>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                id="thumbDownSVG"
              >
                <path
                  d="M9.91669 1.16671H11.4742C11.8043 1.16088 12.1251 1.27646 12.3757 1.49153C12.6262 1.70659 12.7891 2.00617 12.8334 2.33338V6.41671C12.7891 6.74393 12.6262 7.0435 12.3757 7.25857C12.1251 7.47364 11.8043 7.58922 11.4742 7.58338H9.91669M5.83335 8.75005V11.0834C5.83335 11.5475 6.01773 11.9926 6.34591 12.3208C6.6741 12.649 7.11922 12.8334 7.58335 12.8334L9.91669 7.58338V1.16671H3.33668C3.05533 1.16353 2.7823 1.26214 2.56791 1.44438C2.35351 1.62661 2.21221 1.88019 2.17002 2.15838L1.36502 7.40838C1.33964 7.57559 1.35092 7.74632 1.39807 7.90873C1.44522 8.07115 1.52712 8.22138 1.6381 8.349C1.74908 8.47662 1.88647 8.57859 2.04077 8.64784C2.19506 8.71709 2.36257 8.75196 2.53168 8.75005H5.83335Z"
                  stroke="#808080"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  ref="thumbDown"
                />
              </svg>
            </n-icon>
          </n-button>
          <span>{{ oneComment.downs }}</span>
        </n-space>
        <div style="height: 20px"></div>
      </n-gi>
    </n-grid>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, defineEmits } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { InputInst, useMessage } from "naive-ui";
import { useUserStore } from "../../../../../store/User";
import { gsap } from "gsap";

const barC = ref("barr");
const root: any = ref(null);
const bar: any = ref(null);
const thumbDown = ref(null);
const thumbUp = ref(null);
const message = useMessage();
const User = useUserStore();
const router = useRouter();

const timeText = ref<string>("");

let like = false;
let dislike = false;

const emit = defineEmits(['delComment']);
const delComment = ()=>{
  emit("delComment",props.oneComment.comment_id);
}

const handleTime = () => {
  if (props.oneComment.time_weeks! > 1) {
    timeText.value = Math.floor(props.oneComment.time_weeks!) + " weeks ago";
  } else if (props.oneComment.time_days! > 1) {
    timeText.value = Math.floor(props.oneComment.time_days!) + " days ago";
  } else if (props.oneComment.time_hours! > 1) {
    timeText.value = Math.floor(props.oneComment.time_hours!) + " hours ago";
  } else if (props.oneComment.time_mins! > 1) {
    timeText.value = Math.floor(props.oneComment.time_mins!) + " mins ago";
  } else {
    timeText.value = "just now";
  }
};

const initLike = () => {
  if (props.oneComment.like_status == 1) {
    like = true;
    dislike = false;
    gsap.set(thumbDown.value, {
      fill: "none",
    });
    gsap.set(thumbUp.value, {
      fill: "blue",
    });
  } else if (props.oneComment.like_status == -1) {
    like = false;
    dislike = true;
    gsap.set(thumbUp.value, {
      fill: "none",
    });
    gsap.set(thumbDown.value, {
      fill: "blue",
    });
  } else {
    like = false;
    dislike = false;
    gsap.set(thumbUp.value, {
      fill: "none",
    });
    gsap.set(thumbDown.value, {
      fill: "none",
    });
  }
};

const comment_like = (isLike: boolean = true) => {
  let timeline = gsap.timeline({ paused: true });
  axios({
    url: axios.defaults.baseURL + "/post/comment/like",
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      comment_id: props.oneComment.comment_id,
      like_or_dislike: isLike,
      user_id: User.Id,
    },
    transformRequest: [
      function (data, headers) {
        let data1 = JSON.stringify(data);
        console.log(data1);
        return data1;
      },
    ],
  }).then(function (response) {
    // 处理成功情况
    // message.success(response.data?.message);
    console.log(response.data);
    if (response.data?.success) {
      switch (response.data?.message) {
        case "踩成功":
          if (props.oneComment.downs != undefined) props.oneComment.downs += 1;
          dislike = true;
          timeline.set(thumbDown.value, {
            fill: "blue",
          });
          timeline.to(thumbDown.value, {
            duration: 0.1,
            yoyo: true,
            repeat: 3,
            y: "+=3px",
          });
          timeline.play();
          if (like) {
            like = false;
            if (props.oneComment.ups != undefined) props.oneComment.ups -= 1;
            gsap.set(thumbUp.value, {
              fill: "none",
            });
          }
          break;

        case "取消踩成功":
          dislike = false;
          if (props.oneComment.downs != undefined) props.oneComment.downs -= 1;
          gsap.set(thumbDown.value, {
            fill: "none",
          });
          break;
        case "点赞成功":
          if (props.oneComment.ups != undefined) props.oneComment.ups += 1;
          like = true;
          timeline.set(thumbUp.value, {
            fill: "blue",
            transformOrigin: "0% 100%",
          });
          timeline.to(thumbUp.value, {
            duration: 0.1,
            scaleY: 0.8,
          });
          timeline.to(thumbUp.value, {
            duration: 0.1,
            x: "-=1px",
            y: "-=5px",
            rotation: "-10deg",
            scaleX: 1,
            scaleY: 1,
          });
          timeline.to(
            thumbUp.value,
            {
              duration: 0.1,
              x: "+=2px",
              y: "+=5px",
              rotation: "0deg",
            },
            ">0.1"
          );
          timeline.play();
          if (dislike) {
            dislike = false;
            gsap.set(thumbDown.value, {
              fill: "none",
            });
            if (props.oneComment.downs != undefined)
              props.oneComment.downs -= 1;
          }
          break;
        case "取消点赞成功":
          like = false;
          if (props.oneComment.ups != undefined) props.oneComment.ups -= 1;
          gsap.set(thumbUp.value, {
            fill: "none",
          });
          break;
      }
      message.success(response.data?.message);
      // if (isLike) {
      //   message.success(response.data?.message);
      //   like=true
      // }
      // else {
      //   message.success(response.data?.message);
      //   dislike=true
      // }
    } else {
      console.log(response.data);
      message.error(response.data.message);
    }
    console.log(response.data);
  });
};

onMounted(() => {
  bar.value.style.height = root.value.offsetHeight + "px";
  console.log(root.value.offsetHeight);
  if (Math.random() >= 0.5) barC.value = "barb";
  handleTime();
  initLike();
  // bar.value.style.background='url("index\\indicator-1.png")';
});
type Props = {
  oneComment?: {
    name?: string;
    time?: number;
    tags?: string[];
    title?: string;
    content?: string;
    watches?: number;
    comments?: number;
    ups?: number;
    downs?: number;
    comment_id?: number;
    user_id?: number;
    time_weeks?: number;
    time_days?: number;
    time_hours?: number;
    time_mins?: number;
    like_status?: number;
    src: string;
  };
};

const props = withDefaults(defineProps<Props>(), {
  oneComment: () => {
    return {
      name: "123",
      time: 0,
      time_weeks: 0,
      time_days: 0,
      time_hours: 0,
      time_mins: 0,
      tags: [],
      title: "",
      content: "",
      watches: 0,
      comments: 0,
      ups: 0,
      downs: 0,
      comment_id: 0,
      like_status: 0,
      src: "http://43.138.77.133:81/media/avatars/default.jpg",
    };
  },
});

const OthersInfo = () => {
  console.log("to others");
  router.push({
    path: "/PersonalInfo",
    query: {
      user_id: props.oneComment.user_id,
    },
  });
};
</script>

<style scoped>
.barr {
  background: url("index\\indicator-1.png");
  width: 10px;

  background-size: cover;
}
.barb {
  background: url("index\\indicator-2.png");
  width: 10px;

  background-size: cover;
}
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
  padding: 0px 40px 0px 0px;
  margin: 10px 10px 10px 10px;
  width: 100%;
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
.editor {
  margin-left: -32px;
}
.cross{
  position: absolute;
  left:750px;
  top:16px;
}
</style>
