<template>
  <n-layout-content
  :naitive-sceoll="false"
  content-style="padding: 24px;">
    <div id="grid1">
      <n-image
        preview-disabled
        width="358"
        src="index/Express Your Daily Life.png"
        class="mainText"
      ></n-image>
      <div class="rollFrame">
        <div
          width="258"
          height="258"
          style="position: absolute; top: 50px"
        ></div>
        <n-image
          preview-disabled
          width="258"
          height="258"
          src="svg/首页动效svg/bg.svg"
          id="frame"
          style="position: absolute; top: 50px"
        ></n-image>
        <div id="characters">
          <n-image
            preview-disabled
            width="100"
            height="100"
            src="svg/首页动效svg/绿角色.svg"
            id="绿"
            class="character"
          ></n-image>
          <n-image
            preview-disabled
            width="100"
            height="100"
            src="svg/首页动效svg/黄角色.svg"
            id="黄"
            class="character"
          ></n-image>
          <n-image
            preview-disabled
            width="100"
            height="100"
            src="svg/首页动效svg/粉角色.svg"
            id="粉"
            class="character"
          ></n-image>
          <n-image
            preview-disabled
            width="100"
            height="100"
            src="svg/首页动效svg/红角色.svg"
            id="红"
            class="character"
          ></n-image>
          <n-image
            preview-disabled
            width="100"
            height="100"
            src="svg/首页动效svg/紫角色.svg"
            id="紫"
            class="character"
          ></n-image>
          <n-image
            preview-disabled
            width="100"
            height="100"
            src="svg/首页动效svg/蓝角色.svg"
            id="蓝"
            class="character"
          ></n-image>
        </div>
        <div>
          <div class="dialog" id="dialog1" v-show="showDialogs[1]">
            <img id="dialogImage1" />
            <div class="dialogText" id="dialogText1"></div>
          </div>
          <div class="dialog" id="dialog2" v-show="showDialogs[2]">
            <img id="dialogImage2" />
            <div class="dialogText" id="dialogText2"></div>
          </div>
          <div class="dialog" id="dialog4" v-show="showDialogs[4]">
            <img id="dialogImage4" />
            <div class="dialogText" id="dialogText4"></div>
          </div>
          <div class="dialog" id="dialog5" v-show="showDialogs[5]">
            <img id="dialogImage5" />
            <div class="dialogText" id="dialogText5"></div>
          </div>
          <div class="dialog" id="dialog6" v-show="showDialogs[6]">
            <img id="dialogImage6" />
            <div class="dialogText" id="dialogText6"></div>
          </div>
        </div>
      </div>
      <div style="height: 407px"></div>
      <!-- <n-grid :cols="6">
        <n-gi> </n-gi>
        <n-gi>
          <br />
          <br />
          <br />
          <n-image
            preview-disabled
            src="index/Express Your Daily Life.png"
          ></n-image>
        </n-gi>
        <n-gi> </n-gi>
        <n-gi> </n-gi>
        <n-gi>
          <n-image preview-disabled width="358" src="index/bg.png"></n-image>
        </n-gi>
        <n-gi> </n-gi>
        <n-gi> </n-gi>
      </n-grid> -->
      <n-grid cols="22" x-gap="10px">
        <n-gi></n-gi>
        <n-gi span="5" class="relative">
          <n-image
            @click="routerToBlock(0)"
            @mouseenter="enterBlock(1)"
            @mouseleave="leaveBlock(1)"
            width="209"
            preview-disabled
            class="z4 pointer"
            src="index/Feature.png"
          />
          <div class="selectBlockDeco upDeco classDeco" id="upDeco1"></div>
          <div
            class="selectBlockDeco bottomDeco classDeco"
            id="bottomDeco1"
          ></div>
        </n-gi>
        <n-gi span="5" class="relative">
          <div class="selectBlockDeco upDeco aroundDeco" id="upDeco2"></div>
          <div
            class="selectBlockDeco bottomDeco aroundDeco"
            id="bottomDeco2"
          ></div>
          <n-image
            @click="routerToBlock(1)"
            @mouseenter="enterBlock(2)"
            @mouseleave="leaveBlock(2)"
            width="209"
            preview-disabled
            class="z4 pointer"
            src="index/Features-1.png"
          />
        </n-gi>
        <n-gi span="5" class="relative">
          <div class="selectBlockDeco upDeco testDeco" id="upDeco3"></div>
          <div
            class="selectBlockDeco bottomDeco testDeco"
            id="bottomDeco3"
          ></div>
          <n-image
            @click="routerToBlock(2)"
            @mouseenter="enterBlock(3)"
            @mouseleave="leaveBlock(3)"
            width="209"
            preview-disabled
            class="z4 pointer"
            src="index/Features-2.png"
          />
        </n-gi>
        <n-gi span="5" class="relative">
          <div class="selectBlockDeco upDeco resDeco" id="upDeco4"></div>
          <div
            class="selectBlockDeco bottomDeco resDeco"
            id="bottomDeco4"
          ></div>
          <n-image
            @click="routerToBlock(3)"
            @mouseenter="enterBlock(4)"
            @mouseleave="leaveBlock(4)"
            width="209"
            preview-disabled
            class="z4 pointer"
            src="index/Features.png"
          />
        </n-gi>
        <n-gi></n-gi>
      </n-grid>
    </div>
    <br />

    <n-image src="index/热门帖子排行.png"></n-image>

    <br />
    <br />
    <n-grid cols="5" x-gap="40px">
        <n-gi
        v-for="post in posts"
        key="post.post_id"
        >
        <Post :onePost="post">
        </Post>
        </n-gi>



    </n-grid>
  </n-layout-content>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onBeforeUnmount } from "vue";
import { GameController } from "@vicons/ionicons5";
import { onBeforeRouteLeave, useRouter, useRoute } from "vue-router";
import { useBlockStore } from "../../../store/Block";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { random } from "gsap/all";
import axios from 'axios'

gsap.registerPlugin(TextPlugin);

const router = useRouter();
const route = useRoute();
const Block = useBlockStore();

const blocks = ["class", "around", "test", "source"];
const routerToBlock = (id: number) => {
  localStorage.setItem("section", id + "");
  Block.section = id;
  Block.block = blocks[id];
  router.push("/block");

};

const enterBlock = (section: number) => {
  gsap.to("#upDeco" + section, {
    duration: 0.2,
    transformOrigin: "10% 50%",
    rotation: "-10deg",
  });
  gsap.to("#bottomDeco" + section, {
    duration: 0.2,
    transformOrigin: "90% 50%",
    rotation: "-10deg",
  });
};

const leaveBlock = (section: number) => {
  gsap.to("#upDeco" + section, {
    duration: 0.2,
    transformOrigin: "10% 50%",
    rotation: "0deg",
  });
  gsap.to("#bottomDeco" + section, {
    duration: 0.2,
    transformOrigin: "90% 50%",
    rotation: "0deg",
  });
};

type xy = {
  x: string;
  y: string;
};

const pos: xy[] = [
  {
    x: "0",
    y: "0",
  },
  {
    x: "-50px",
    y: "43px",
  },
  {
    x: "83px",
    y: "0px",
  },
  {
    x: "83px",
    y: "113.5px",
  },
  {
    x: "206.6px",
    y: "124px",
  },
  {
    x: "-40.6px",
    y: "185.6px",
  },
  {
    x: "83px",
    y: "253.6px",
  },
];

// const posCharacter = [reactive<(Element | null)[]>([null])];
const posCharacter: (Element | null)[] = [null];
// const posDialog = reactive<(Element | null)[]>([null]);
const posDialog: (Element | null)[] = [null];

const showDialogs = ref<boolean[]>([
  false,
  false,
  false,
  false,
  false,
  false,
  false,
]);

type Fromto = {
  from: number;
  to: number;
};
const edge: Fromto[] = [
  {
    from: 1,
    to: 2,
  },
  {
    from: 1,
    to: 3,
  },
  {
    from: 1,
    to: 6,
  },
  {
    from: 2,
    to: 4,
  },
  {
    from: 2,
    to: 5,
  },
  {
    from: 3,
    to: 4,
  },
  {
    from: 3,
    to: 6,
  },
  {
    from: 4,
    to: 6,
  },
  {
    from: 5,
    to: 6,
  },
];

const dialogs = [
  "感谢分享！",
  "非常有用~",
  "发现大佬",
  "楼主好强",
  "谢谢学长！",
  "受教了",
  "学到了",
  //6
  "好用！爱了！",
  "Thanks♪(･ω･)ﾉ",
  "博客搭建指南：",
  "前后端学习路线",
  "如何评价软工课",
  "原来我不是一个人",
  "你最喜欢的IDE是？",
  "求通识课选课推荐",
  "求助，有人知道...",
  "有什么博雅途径吗",
  //16
  "求助，这个怎么实现啊？",
  "绿园来了新鸭子，好可爱！",
  "核酸检测什么时候人少啊",
  "发现了一个好用的插件……",
  "刷题的时候发现这道有意思",
  "学姐学长分享的资料！",
  "又在合一三楼发现了好吃的",
];

const dialogSize: xy[] = [
  {
    x: "0",
    y: "0",
  },
  {
    x: "105",
    y: "101",
  },
  {
    x: "146",
    y: "101",
  },
  {
    x: "222",
    y: "103",
  },
];

const dialogPos: xy[] = [
  {
    x: "0",
    y: "0",
  },
  {
    x: "-142px",
    y: "-30px",
  },
  {
    x: "-205px",
    y: "-28px",
  },
  {
    x: "-272px",
    y: "-18px",
  },
  {
    x: "195px",
    y: "-30px",
  },
  {
    x: "195px",
    y: "-30px",
  },
  {
    x: "205px",
    y: "-30px",
  },
  {
    x: "0",
    y: "0",
  },
  {
    x: "0",
    y: "0",
  },
  {
    x: "0",
    y: "0",
  },
  {
    x: "275px",
    y: "45px",
  },
  {
    x: "292px",
    y: "50px",
  },
  {
    x: "304px",
    y: "63px",
  },
  {
    x: "-150px",
    y: "140px",
  },
  {
    x: "-192px",
    y: "130px",
  },
  {
    x: "-275px",
    y: "143px",
  },
  {
    x: "195px",
    y: "222px",
  },
  {
    x: "196px",
    y: "212px",
  },
  {
    x: "214px",
    y: "203px",
  },
];

const dialogTextColor: { [key: string]: string } = {
  红: "#CE3D4F",
  紫: "#451897",
  黄: "#E68513",
  粉: "#DE4368",
  蓝: "#1F72C4",
  绿: "#00B578",
};

const dialogTextxy: xy[] = [
  {
    x: "0",
    y: "0",
  },
  {
    x: "51px",
    y: "32px",
  },
  {
    x: "51px",
    y: "36px",
  },
  {
    x: "51px",
    y: "41px",
  },
  {
    x: "51px",
    y: "12px",
  },
];

const timer: NodeJS.Timeout[] = [];

const swap = (index: number) => {
  if (route.path != "/") {
    return;
  }
  let fromto = edge[index];
  let delay = random(3,8);
  gsap.to(posCharacter[fromto.from], {
    duration: 0.5,
    left: pos[fromto.to].x,
    top: pos[fromto.to].y,
    delay:delay
  });
  gsap.to(posCharacter[fromto.to], {
    duration: 0.5,
    left: pos[fromto.from].x,
    top: pos[fromto.from].y,
    delay:delay,
    onComplete: () => {
      let temp = posCharacter[fromto.from];
      posCharacter[fromto.from] = posCharacter[fromto.to];
      posCharacter[fromto.to] = temp;
      swap(Math.floor(random(0, edge.length)));
    },
  });
};

const popDialog = (index: number) => {
  if (route.path != "/") {
    return;
  }
  let textnum = Math.floor(random(0, dialogs.length));
  let size = 0;
  if (textnum > 16) {
    size = 3;
  } else if (textnum > 6) {
    size = 2;
  } else {
    size = 1;
  }

  let dir = "";
  let textPos: xy = dialogTextxy[0];
  if (index == 1 || index == 5) {
    dir = "左";
    textPos = dialogTextxy[size];
  } else {
    dir = "右";
    textPos = dialogTextxy[4];
  }

  let src = "svg/首页动效svg/" + posCharacter[index]?.id + dir + size + ".svg";
  console.log(src);
  showDialogs.value[index] = true;

  let timeline = gsap.timeline({
    onComplete: () => {
      showDialogs.value[index] = false;
      popDialog(index);
      timeline.kill();
    },
  });

  let shake = gsap.timeline();
  shake.to(posCharacter[index], {
    duration: 0.1,
    transformOrigin: "50% 50%",
    repeat: 1,
    yoyo: true,
    rotation: "-5deg",
  });
  shake.to(posCharacter[index], {
    duration: 0.1,
    transformOrigin: "50% 50%",
    repeat: 1,
    yoyo: true,
    rotation: "5deg",
  });
  shake.to(posCharacter[index], {
    duration: 0.1,
    transformOrigin: "50% 50%",
    repeat: 1,
    yoyo: true,
    rotation: "-5deg",
  });
  shake.to(posCharacter[index], {
    duration: 0.1,
    transformOrigin: "50% 50%",
    repeat: 1,
    yoyo: true,
    rotation: "5deg",
  });
  timeline.add(shake);
  timeline.set(
    "#dialogText" + index,
    {
      fontSize: "0px",
      left: 0,
      top: 0,
      text: dialogs[textnum],
      color: dialogTextColor[posCharacter[index]?.id!],
    },
    "<"
  );
  timeline.set(
    posDialog[index],
    {
      left: pos[index].x,
      top: pos[index].y,
    },
    "<"
  );
  timeline.set("#dialogImage" + index, {
    attr: {
      src: src,
    },
  });
  timeline.to(
    posDialog[index],
    {
      duration: 0.5,
      transformOrigin: "right bottom",
      left: dialogPos[(index - 1) * 3 + size].x,
      top: dialogPos[(index - 1) * 3 + size].y,
    },
    "<"
  );
  timeline.to(
    "#dialogImage" + index,
    {
      duration: 0.5,
      transformOrigin: "right bottom",
      attr: {
        width: parseInt(dialogSize[size].x),
        height: parseInt(dialogSize[size].y),
      },
    },
    "<"
  );
  timeline.to(
    "#dialogText" + index,
    {
      duration: 0.5,
      transformOrigin: "right bottom",
      left: textPos.y,
      top: textPos.x,
      fontSize: "14px",
    },
    "<"
  );
  timeline.to(
    posDialog[index],
    {
      duration: 0.5,
      transformOrigin: "right bottom",
      left: pos[index].x,
      top: pos[index].y,
    },
    ">2"
  );
  timeline.to(
    "#dialogImage" + index,
    {
      duration: 0.5,
      transformOrigin: "right bottom",
      attr: {
        src: src,
        width: 0,
        height: 0,
      },
    },
    "<"
  );
  timeline.to(
    "#dialogText" + index,
    {
      duration: 0.1,
      transformOrigin: "right bottom",
      fontSize: "0px",
      left: 0,
      top: 0,
    },
    "<"
  );
  timeline.delay(random(1, 5));
};
let posts:any[]=reactive([])
const getPosts = (clear: boolean = true) => {


  console.log(Block.searchText);
  axios({
    url: axios.defaults.baseURL + "/portal/get_hot_posts",
    method: "post",
    // headers: {
    //   "Content-Type": "application/json",
    // },
    // data: {
    //   offset: 0,
    //   length: 5,
    //   section: 0,
    //   order: 'hot',
    //   tags: [],
    //   user_id: 10000,
    //   fliters:[]
    // },
    // transformRequest: [
    //   function (data, headers) {
    //     let data1 = JSON.stringify(data);
    //     console.log(data1);
    //     return data1;
    //   },
    // ],
  }).then(function (response) {
    // 处理成功情况

    if (response.data?.success) {
       console.log(response.data.data)

      let i = 0;
      if (response.data.data != null)
        for (i = 0; i < response.data.data.length; i++) {
          let temp = reactive({

            title: response.data.data[i].post.title,
            // watches: response.data.data[i].post.views,
            // // comments: response.data[i].,
            // comments: response.data.data[i].comment,
            // ups: response.data.data[i].like,
            // content: response.data.data[i].content,
            // name: response.data.data[i].username,
            post_id: response.data.data[i].post_id,
            time_weeks: response.data.data[i].create_time_weeks,
            time_days: response.data.data[i].create_time_days,
            time_hours: response.data.data[i].create_time_hours,
            time_mins: response.data.data[i].create_time_mins,
            // user
            // create_time: "2022-06-03T11:23:11+08:00"
            // // dislike: 0
            // last_comment_time: "2022-06-03T11:23:11+08:00"

            // section: response.data.data[i].post.section,
            // user_id: response.data.data[i].post.user_id,
            like_status: response.data.data[i].like_status,
            // src: response.data.data[i].user.avatar_url,
          });

          // if(response.data.data[i].user.avatar_url=="")temp.src="http://43.138.77.133:81/media/avatars/default.jpg"
          posts.push(temp);
        }

    } else {
    }
  });
};
onMounted(() => {
  let i = 1;

  console.log(posCharacter);
  console.log(posDialog);
  if (posCharacter.length <= 1) {
    posCharacter.push(document.getElementById("绿"));
    posCharacter.push(document.getElementById("黄"));
    posCharacter.push(document.getElementById("粉"));
    posCharacter.push(document.getElementById("红"));
    posCharacter.push(document.getElementById("紫"));
    posCharacter.push(document.getElementById("蓝"));

    posDialog.push(document.getElementById("dialog1"));
    posDialog.push(document.getElementById("dialog2"));
    posDialog.push(null);
    posDialog.push(document.getElementById("dialog4"));
    posDialog.push(document.getElementById("dialog5"));
    posDialog.push(document.getElementById("dialog6"));

    for (i = 1; i <= 6; ++i) {
      gsap.set(posCharacter[i], {
        left: pos[i].x,
        top: pos[i].y,
      });
      if(posDialog[i]!=null)
      {
        popDialog(i);
      }
    }
    swap(Math.floor(random(0,edge.length)));
  }
  getPosts()
});
</script>

<style scoped>
.title {
  margin: 0 auto;
  line-height: 100px;
  /*垂直居中关键*/

  text-align: center;

  height: 200px;

  font-size: 50px;
}

.subtitle {
  margin: 0 auto;
  line-height: 100px;
  /*垂直居中关键*/

  text-align: center;

  height: 100px;

  font-size: 30px;
}
.relative {
  position: relative;
}
.z4 {
  z-index: 4;
}
.selectBlockDeco {
  position: absolute;
  border-radius: 15px;
  width: 163px;
  height: 40px;
}
.upDeco {
  left: 20px;
  top: 19px;
}
.bottomDeco {
  left: 20px;
  bottom: 81px;
}
.classDeco {
  background-color: #ff884d;
}
.aroundDeco {
  background-color: #e27f86;
}
.testDeco {
  background-color: #4ac06f;
}
.resDeco {
  background-color: #77c5ea;
}
.mainText {
  position: absolute;
  left: 221px;
  top: 93px;
}
.rollFrame {
  position: absolute;
  left: 895px;
  top: 30px;
}
.character {
  position: absolute;
  width: 100px;
  height: 100px;
}
.dialog {
  position: absolute;
}
.dialogText {
  position: absolute;
  font-family: sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #ce3d4f;
}
.pointer{
  cursor: pointer;
}
</style>
