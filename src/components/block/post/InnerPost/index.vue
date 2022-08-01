<template>
  <el-dialog v-model="checkDelete" width="33%" center>
    <span id="notice"
      >确定要删除评论吗？请注意，您的当前行为无法恢复，请谨慎决定</span
    >
    <template #footer>
      <span>
        <n-button
          type="info"
          round
          size="medium"
          @click="cancelDelete"
          style="border-radius: 10px; margin-right: 30px"
          color="#5AA8D7"
        >
          <span class="buttonText">再考虑一下</span>
        </n-button>
        <n-button
          @click="concernDelete"
          type="warning"
          round
          size="medium"
          color="#F48023"
          style="border-radius: 10px; margin-left: 30px"
        >
          <span class="buttonText">删除</span>
        </n-button>
        <!-- <el-button type="primary" @click="routerToPersonalInfo"
                    >退出</el-button
                    > -->
      </span>
    </template>
  </el-dialog>
  <n-grid style="width: 135%" v-show="gShow" cols="30">
    <n-gi></n-gi>
    <n-gi :span="20">
      <n-space vertical justify="space-between">
        <div ref="post">
          <Post :onePost="onePost"></Post>
        </div>
        <Comment
          v-for="comment in comments"
          :key="comment.comment_id"
          :one-comment="comment"
          @delComment="delComment"
        ></Comment>

        <div style="height: 70px"></div>
        <transaction
          appear-active-class="animate__animated animate__rubberBand"
        >
          <div ref="footRef" :style="gfootStyle">
            <n-grid cols="20">
              <n-gi></n-gi>
              <n-gi :span="10">
                <n-space>
                  <n-tag v-for="item in onePost.tags" :key="item">
                    {{ item }}
                  </n-tag>
                  <n-button size="small" @click="addTag()" strong secondary>
                    <template #icon>
                      <n-icon>
                        <svg
                          width="9"
                          height="8"
                          viewBox="0 0 9 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.5 1V7M8 4L1 4"
                            stroke="#808080"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </n-icon>
                    </template>
                  </n-button>
                  <n-input-group>
                    <n-input
                      v-if="Ifadd"
                      v-model:value="tag2add"
                      placeholder="请输入要添加的标签"
                    >
                    </n-input>
                    <n-button v-if="Ifadd" @click="commitTag()">提交</n-button>
                  </n-input-group>
                </n-space>
              </n-gi>
              <n-gi :span="9">
                <n-space>
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

                      <!-- <n-image preview-disabled src="public/svg/查看帖子svg/eye.svg"></n-image> -->
                    </template>
                    {{ onePost.watches }}
                  </n-button>

                  <n-button type="info" @click="pubComment">
                    <template #icon>
                      <n-icon>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.25 9.5C13.25 9.83152 13.1183 10.1495 12.8839 10.3839C12.6495 10.6183 12.3315 10.75 12 10.75H4.5L2 13.25V3.25C2 2.91848 2.1317 2.60054 2.36612 2.36612C2.60054 2.1317 2.91848 2 3.25 2H12C12.3315 2 12.6495 2.1317 12.8839 2.36612C13.1183 2.60054 13.25 2.91848 13.25 3.25V9.5Z"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </n-icon>
                    </template>

                    评论
                  </n-button>

                  <n-button type="info" @click="post_like()">
                    <template #icon>
                      <n-icon>
                        <svg
                          width="11"
                          height="13"
                          viewBox="0 0 11 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.5 10.2917V2.70837"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M2.29169 6.50004L5.50002 2.70837L8.70836 6.50004"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </n-icon>
                    </template>

                    赞 ({{ onePost.ups }})
                  </n-button>
                </n-space>
              </n-gi>
            </n-grid>
          </div>
        </transaction>
      </n-space>
    </n-gi>
    <n-gi span="4"></n-gi>
    <n-gi span="5">
      <Poster :poster="poster"></Poster>
    </n-gi>
  </n-grid>

  <el-dialog v-model="dialogFormVisible" @opened="pubComment" draggable>
    <template #title>
      <n-space justify="center">
        <div class="commentTitle">评论</div>
      </n-space>
    </template>
    <!-- <div id="vditor"> -->
    <v-md-editor
      :disabled-menus="[]"
      @upload-image="handleUploadImage"
      left-toolbar="undo redo clear | emoji h bold italic strikethrough quote | ul ol table hr | link code "
      right-toolbar="preview toc sync-scroll"
      v-model="text"
    >
    </v-md-editor>
    <!-- </div> -->
    <template #footer>
      <n-space justify="center">
        <n-button
          @click="
            dialogFormVisible = false;
            footRef.style.width = post.value?.offsetWidth + 'px';
          "
        >
          取消</n-button
        >
        <n-button @click="comment_create()">提交</n-button>
      </n-space>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import Post from "./Post/index.vue";
import Comment from "./Comment/index.vue";
import Poster from "./Poster/poster.vue";
import {
  onUpdated,
  toRaw,
  reactive,
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
import { useUserStore } from "../../../../store/User";
import { InputInst, useMessage } from "naive-ui";

import { useBlockStore } from "../../../../store/Block";

let text: Ref<string> = ref("");
const poster: any = reactive({
  name: "gwx",
  user_id: -1,
  post_id: -1,
  src: "http://43.138.77.133:81/media/avatars/default.jpg",
});
const Block = useBlockStore();
const User = useUserStore();
type PostCtx = InstanceType<typeof Post>;
// const vditor = ref<Vditor | null>(null);
const post: any = ref(null);
const dialogFormVisible = ref(false);

const footRef: any = ref(null);
const message = useMessage();
let like = false;
const tag2add: Ref<string> = ref("");
const Ifadd: Ref<boolean> = ref(false);
const addTag = () => {
  Ifadd.value = !Ifadd.value;
};
const commitTag = () => {
  axiosAddTag();
};
const axiosAddTag = () => {
  axios
    .post("/post/add_post_tag", {
      post_id: props.onePost.post_id,
      name: tag2add.value,
    })
    .then(function (response) {
      // 处理成功情况
      console.log(response.data);
      if (response.data?.success) {
        props.onePost.tags.push(tag2add.value);
        tag2add.value = "";
        message.success("添加成功");

        Ifadd.value = !Ifadd.value;
      } else {
        message.error(response.data.message);
      }
      console.log(response.data);
    });
};

onMounted(() => {
  poster.name = props.onePost.name;
  poster.post_id = props.onePost.post_id;
  poster.user_id = props.onePost.user_id;
  poster.src = props.onePost.src;
  like = props.onePost.like_status == 1;
  const crystal = toRaw(post.value);
  console.log(crystal);
  // console.log(toRaw(post.value))
  //  console.log(post.value?.children)
  //  console.log(post.value?.offsetWidth)
  // console.log(post.value?.style.width+"px")
  footRef.value.style.width = post.value?.offsetWidth + 22 + "px";
  console.log(footRef.value);
  setTimeout(function () {
    footRef.value.style.width = post.value?.offsetWidth + 22 + "px";
  }, 1);
  setTimeout(function () {
    footRef.value.style.width = post.value?.offsetWidth + 22 + "px";
  }, 100);
  setTimeout(function () {
    footRef.value.style.width = post.value?.offsetWidth + 22 + "px";
  }, 200);
  setTimeout(function () {
    footRef.value.style.width = post.value?.offsetWidth + 22 + "px";
  }, 500);
  setTimeout(function () {
    footRef.value.style.width = post.value?.offsetWidth + 22 + "px";
  }, 1000);
  setTimeout(function () {
    footRef.value.style.width = post.value?.offsetWidth + 22 + "px";
  }, 3000);
  window.onresize = () => {
    footRef.value.style.width = post.value?.offsetWidth + 22 + "px";

    console.log(post.value?.offsetWidth);
    console.log(post.value?.style.width);
  };

  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  getComment();
});
let count: number = 0;
let offset: number = 0;
const comments: any[] = reactive([]);
const comment_create = () => {
  axios
    .post("/post/comment/create", {
      post_id: props.onePost.post_id,
      user_id: User.Id,
      content: text.value,
      // content:vditor.value!.getValue(),
    })
    .then(function (response) {
      // 处理成功情况
      console.log(response.data);

      if (response.data?.success) {
        message.success("评论成功");
        getComment();
        dialogFormVisible.value = false;

        setTimeout(() => {
          footRef.value.style.width = post.value?.offsetWidth + "px";
        }, 200);
      } else {
        message.error(response.data.message);
      }
      console.log(response.data);
    });
};
const post_like = (isLike: boolean = true) => {
  if (User.level < 2) {
    message.error("请再努努力");
    return;
  }
  axios({
    url: axios.defaults.baseURL + "/post/like",
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      post_id: props.onePost.post_id,
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
    console.log(response.data);
    if (response.data?.message == "点赞成功") {
      message.success("点赞成功");
      like = true;
      props.onePost.ups += 1;
    } else {
      message.success("取消点赞成功");
      like = false;
      props.onePost.ups -= 1;
    }
    console.log(response.data);
  });
};
const getComment = (clear: boolean = true) => {
  //   section.value=parseInt(localStorage.getItem("section")+"")
  axios
    .post("/post/get_post_comments", {
      post_id: props.onePost.post_id,
      offset: offset,
      length: 10,
      user_id: User.Id,
    })
    .then(function (response) {
      // 处理成功情况

      if (response.data?.success) {
        count = response.data?.count;
        console.log(response.data.data);
        let i = 0;
        if (clear) while (comments.length != 0) comments.pop();
        if (response.data.data != null)
          for (i = 0; i < response.data.data.length; i++) {
            let temp = reactive({
              tags: [],
              title: response.data.data[i].comment.title,
              watches: response.data.data[i].comment.views,
              // comments: response.data.data[i].comment.,
              comments: response.data.data[i].comment.comment,
              ups: response.data.data[i].comment.like,
              downs: response.data.data[i].comment.dislike,
              time: response.data.data[i].comment.create_time,
              content: response.data.data[i].comment.content,
              name: response.data.data[i].comment.username,
              comment_id: response.data.data[i].comment.comment_id,
              time_weeks: response.data.data[i].comment_time_weeks,
              time_days: response.data.data[i].comment_time_days,
              time_hours: response.data.data[i].comment_time_hours,
              time_mins: response.data.data[i].comment_time_mins,
              like_status: response.data.data[i].like_status,
              src: "http://43.138.77.133:81/media/avatars/default.jpg",
              // user
              // create_time: "2022-06-03T11:23:11+08:00"
              // // dislike: 0
              // last_comment_time: "2022-06-03T11:23:11+08:00"

              section: response.data.data[i].comment.section,
              user_id: response.data.data[i].comment.user_id,
            });
            axios({
              url: axios.defaults.baseURL + "/user/info",
              method: "post",
              // headers: {
              //   "Content-Type": "application/json",
              // },
              data: {
                user_id: response.data.data[i].comment.user_id,
              },
              // transformRequest: [
              //   function (data, headers) {
              //     let data1 = JSON.stringify(data);
              //     console.log(data1);
              //     return data1;
              //   },
              // ],
            }).then(function (response) {
              console.log(response.data);
              if (response.data.status) {
                if (response.data.data.avatar_url != "")
                  temp.src = response.data.data.avatar_url;
              }
            });
            comments.push(temp);
          }
        console.log(comments);
        // User.Name=modelRef.value.name,
        // User.Id=response.data.data.user_id,
      } else {
      }
      console.log(response.data);
      footRef.value.style.width = post.value?.offsetWidth + "px";
    });
};
// const get = (clear: boolean = true) => {
//   //   section.value=parseInt(localStorage.getItem("section")+"")
//   axios.post('/post/get_post_comments', {
//     post_id: props.onePost.post_id,
//     offset: offset,
//     length: 10,

//   })
//     .then(function (response) {
//       // 处理成功情况
//       console.log(response.data)

//       if (response.data?.success) {
//         count = response.data?.count
//         console.log(response.data.comments)
//         let i = 0;
//         if (clear)
//           while (comments.length != 0) comments.pop()

//         for (i = 0; i < response.data.comments.length; i++) {
//           let temp = reactive({
//             tags: [],
//             title: response.data.comments[i].title,
//             watches: response.data.comments[i].views,
//             // comments: response.data.comments[i].,
//             comments: response.data.comments[i].comment,
//             ups: response.data.comments[i].like,
//             downs: response.data.comments[i].dislike,
//             time: response.data.comments[i].create_time,
//             content: response.data.comments[i].content,
//             name: response.data.comments[i].username,
//             comment_id: response.data.comments[i].comment_id,
//             // user
//             // create_time: "2022-06-03T11:23:11+08:00"
//             // // dislike: 0
//             // last_comment_time: "2022-06-03T11:23:11+08:00"

//             section: response.data.comments[i].section,
//             user_id: response.data.comments[i].user_id

//           })

//           comments.push(temp)

//         }
//         console.log(comments)

//         console.log(comments)
//         // User.Name=modelRef.value.name,
//         // User.Id=response.data.data.user_id,

//       } else {

//       }
//       console.log(response.data)
//     }
//     )
// }
const posttest = reactive({
  tags: ["go", "python"],
  title: "title",
  content: "content",
  watches: 5,
  comments: 6,
  ups: 7,
  name: "20373000",
  time: 0,
});
const commenttest = reactive({
  tags: ["go", "python"],
  title: "title",
  content: "content",
  watches: 5,
  comments: 6,
  ups: 7,
  name: "20373000",
  time: 0,
  downs: 1,
});
const dialog = useDialog();
let commentStr = "";
let firstCommet = true;
const pubComment = () => {
  if (User.level < 2) {
    message.error("请再努努力");
    return;
  }
  dialogFormVisible.value = true;
  footRef.value.style.width = post.value?.offsetWidth + "px";
  // console.log(vditor.value)
  // if (true) {
  //   vditor.value = new Vditor('vditor', {
  //     width: "100%",
  //     after: () => {
  //       // vditor.value is a instance of Vditor now and thus can be safely used here
  //       vditor.value!.setValue(commentStr);
  //     },
  //   })
  // }

  firstCommet = false;
};

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
    like_status?: number;
    time_weeks?: number;
    time_days?: number;
    time_hours?: number;
    time_mins?: number;
    src: string;
  };
  gShow: boolean;
};
const props: any = withDefaults(defineProps<Props>(), {
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
      gShow: false,
      downs: 0,
      user_id: 1,
      post_id: 1,
      clear: true,
      like_status: 0,
      src: "http://43.138.77.133:81/media/avatars/default.jpg",
    };
  },
});

// onMounted(()=>{
// const gp = ref(null);

// if(gp!=null)
// {
//     console.log("yhhhh")
//     console.log(gp)
//     console.log(gp.value)
//     // console.log(gp.getBoundingClientRect())
// }
//     let d=document.getElementById('div3');
//     if(d!=null)
// {    gfootStyle.left=d.getBoundingClientRect().left+"px";
//     console.log(d.getBoundingClientRect().left+"px")}

// })
let gfootStyle: any = reactive({
  padding: "10px",
  width: "555.8px",
  position: "fixed",
  // width: "inherit",
  // left:"320px",
  margin: "10px 10px 0 10px",
  bottom: 0,
  background: "#FFFFFF",
  boxShadow: " 2px 1px 5px 0px #00000026",
});
function stringify(data: any) {
  const formData = new FormData();
  for (const key in data) {
    // eslint-disable-next-line no-prototype-builtins
    if (data.hasOwnProperty(key)) {
      if (data[key]) {
        if (data[key].constructor === Array) {
          if (data[key][0]) {
            if (data[key][0].constructor === Object) {
              formData.append(key, JSON.stringify(data[key]));
            } else {
              data[key].forEach((item: any, index: any) => {
                formData.append(key + `[${index}]`, item);
              });
            }
          } else {
            formData.append(key + "[]", "");
          }
        } else if (data[key].constructor === Object) {
          formData.append(key, JSON.stringify(data[key]));
        } else {
          formData.append(key, data[key]);
        }
      } else {
        if (data[key] === 0) {
          formData.append(key, 0 + "");
        } else {
          formData.append(key, "");
        }
      }
    }
  }
  return formData;
}
const handleUploadImage = (event: any, insertImage: any, files: any) => {
  console.log(files);
  console.log(event);
  axios({
    url: axios.defaults.baseURL + "/portal/upload_file",
    method: "post",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    data: {
      image: files[0],
      user_id: User.Id,
    },
    transformRequest: [
      (data) => {
        return stringify(data);
      },
    ],
  }).then(function (response) {
    // 处理成功情况
    console.log(response.data);
    if (response.data?.success) {
      text.value += "![image](" + response.data?.url + ")";
    } else {
      console.log(response.data);
      message.error(response.data.message);
    }
    console.log(response.data);
  });
};

const checkDelete = ref<Boolean>(false);
let deleteId = 0;
const cancelDelete = () => {
  checkDelete.value = false;
};

const concernDelete = () => {
  let i = 0;
  for (i = 0; i < comments.length; ++i) {
    if (comments[i].comment_id == deleteId) {
      axios.post("/post/comment/delete",{
        user_id:comments[i].user_id,
        comment_id:comments[i].comment_id
      })
      comments.splice(i, 1);
      break;
    }
  }
  checkDelete.value = false;
};

const delComment = (id: number) => {
  deleteId = id;
  checkDelete.value = true;
};
</script>

<style>
.commentTitle {
  color: #808080;
  text-shadow: 0px 4px 4px 0px #0000003f;
  font-family: Roboto;
  font-weight: bold;
  font-size: 24px;
  line-height: 25px;
  letter-spacing: 5px;
  text-align: center;
}
.ensureButtonText {
  color: #ffffff;
  font-family: nunito-sans, sans-serif;
  font-weight: bold;
  font-size: 14px;
  line-height: normal;
  letter-spacing: 2px;
  text-align: left;
}
</style>