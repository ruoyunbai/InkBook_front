<template>
  <div class="card">
    <n-space vertical class="space">
      <n-avatar round :size="170" :src="poster.src"> </n-avatar>
      <p class="username">{{ poster.name }}</p>
      <div style="height: 10px"></div>
      <hr style="border: none; border-top: 1px solid #eaeaea" />
      <div @click="OthersInfo">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style="vertical-align: middle;"
          >
            <path
              d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z"
              stroke="#F48023"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88"
              stroke="#F48023"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        <span class="enterCenter">进入主页</span>
      </div>
      <hr style="border: none; border-top: 1px solid #eaeaea" />
    </n-space>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

type Props = {
  poster: {
    name: string;
    user_id: number;
    post_id: number;
    src: string;
  };
};

const props = withDefaults(defineProps<Props>(), {
  poster: () => {
    return {
      name: "null",
      user_id: -1,
      post_id: -1,
      src: "http://43.138.77.133:81/media/avatars/default.jpg",
    };
  },
});

const OthersInfo = ()=>{
  router.push({
    path:"/PersonalInfo",
    query:{
     user_id:props.poster.user_id, 
    }
  })
}
</script>

<style scoped>
.card {
  border-radius: 5px;
  background: #ffffff;
  border: 1px solid #eaeaea;
  box-shadow: 0px 0px 5px 0px #0000000c;
  padding: 30px 35px;
  width: 170px;
}
.space {
  text-align: center;
}
.username {
  word-wrap:break-word;
  color: #000000;
  font-family: Roboto;
  font-weight: bold;
  font-size: 18px;
  line-height: normal;
  letter-spacing: 5px;
  text-align: center;
}
.enterCenter {
  color: #f48023;
  font-family: Roboto;
  font-weight: regular;
  font-size: 22px;
  line-height: 18px;
  letter-spacing: 2px;
  text-align: center;
  vertical-align: middle;
}
</style>
