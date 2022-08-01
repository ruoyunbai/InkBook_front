<template>
  <div class="mycard">
    <div class="title">{{ onePost.title }}</div>

    <div>
      <p class="content">{{ onePost.content }}</p>
    </div>
    <br />
    <n-space justify="space-between">
      <n-space>
        <div v-for="item in onePost.tags" :key="item" class="tags">
          {{ item }}
        </div></n-space
      >
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
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 9.5L9.5 2.5"
                  stroke="#808080"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.5 2.5H9.5V9.5"
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
import internal from "stream";

type Props = {
  onePost: {
    tags: string[];
    title: string;
    content: string;
    watches: number;
    comments: number;
    ups: number;
  };
};
defineProps<Props>();
</script>

<style scoped>
.mycard {
  border-radius: 5px;
  background: #ffffff;
  border: 1px solid #eaeaea;
  box-shadow: 2px 1px 5px 0px #00000026;
  padding-left: 30px;
  padding-top: 25px;
  padding-bottom: 15px;
  padding-right: 20px;
  margin: 10px;
  width: 94%;
}
.title {
  color: #000000;
  font-family: roboto, sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: normal;
  letter-spacing: 2px;
  text-align: left;
  padding-bottom: 10px;
}
.tags {
  color: #808080;
  font-family: roboto, sans-serif;
  font-weight: regular;
  font-size: 10px;
  line-height: normal;

  text-align: left;
  padding: 3px 10px 5px 10px;
  border-radius: 5px;
  background: #eaeaea;
}
.content {
  color: #000000;
  font-family: roboto, sans-serif;
  font-weight: 200;
  font-size: 14px;
  line-height: 25px;
  letter-spacing: 2px;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
