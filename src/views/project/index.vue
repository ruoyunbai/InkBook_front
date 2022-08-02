<template>
  <n-space vertical size="large">
    <div style="height:10px"></div>
    <n-grid x-gap="12" :cols="16">
      <n-gi span="7">

      </n-gi>

      <n-gi span="5">
        <n-input
            v-model:value="tagInput"
            ref="inputInstRef"
            placeholder="搜索项目"
            clearable
            round
            size="large"
            style="margin-left: 19px"
        >
          <template #prefix>
            <n-image src="svg\project_svg\search.svg"></n-image>
          </template>
        </n-input>
      </n-gi>
      <n-gi span="1">
      </n-gi>
      <n-gi span="3">
        <n-button
            round
            color="#2772F0"
            size="large"
        >
          <template #icon>
            <n-icon>
              <n-image src="svg\project_svg\plus.svg" />
            </n-icon>
          </template>
          <div class="commonText">
            新建项目
          </div>
        </n-button>
      </n-gi>
    </n-grid>
    <div class="headTitle" style="text-align: left">
      &emsp;
    </div>
    <div class="headTitle" style="text-align: left">
      <div style="margin:0px 0px 0px 50px">
        我的项目
      </div>
    </div>

    <n-grid x-gap="5" :cols="30">
      
      <n-gi span="1">
      </n-gi>

      <n-gi span="28">
          <n-layout  class="bg"  bordered="false" content-style="padding: 30px 30px 30px 30px;">
        <n-collapse >
          <template #arrow>
            <n-icon>
              <n-image preview-disabled src="svg\project_svg\folder.svg" />
            </n-icon>
          </template>
          <n-collapse-item title="&emsp;全部项目"  >
            <n-divider></n-divider>

            <n-grid x-gap="20px" y-gap="20px" cols="2 s:3 m:4 l:5 xl:6 2xl:7" responsive="screen">

              <n-grid-item>
                <div class="user" style="background:#EDF5ED">
                  <n-space
                      vertical>
                    <p class="name"  style="margin:20px 10px 10px 30px">项目名称</p>
                    <p class="state" style="margin:0px 10px 10px 30px">项目描述</p>
                    <div style="height:15px"></div>
                    <n-button
                        round
                        size="large"
                        color="#DADADA"
                        ghost
                        @click=""
                    >
                      <p class="buttonText2">进入项目</p>
                    </n-button>

                    <n-button
                        round
                        size="large"
                        color="#DADADA"
                        ghost
                        style="margin:5px 10px 10px 10px"
                        @click="routerToPersonalInfo"
                    >
                      <p class="buttonText2">编辑信息</p>
                    </n-button>

                  </n-space>
                </div>

              </n-grid-item>
              <n-grid-item>
                <div class="user" style="background:#FCEEE9">
                  <n-space
                      vertical>
                    <p class="name"  style="margin:20px 10px 10px 30px">项目名称</p>
                    <p class="state" style="margin:0px 10px 10px 30px">项目描述</p>
                    <div style="height:15px"></div>
                    <n-button
                        round
                        size="large"
                        color="#DADADA"
                        ghost
                        @click=""
                    >
                      <p class="buttonText2">进入项目</p>
                    </n-button>

                    <n-button
                        round
                        size="large"
                        color="#DADADA"
                        ghost
                        style="margin:5px 10px 10px 10px"
                        @click="routerToPersonalInfo"
                    >
                      <p class="buttonText2">编辑信息</p>
                    </n-button>

                  </n-space>
                </div>
              </n-grid-item>

              <n-grid-item>
                <div class="user" style="background:#FEF8EC">
                  <n-space
                      vertical>
                    <p class="name"  style="margin:20px 10px 10px 30px">项目名称</p>
                    <p class="state" style="margin:0px 10px 10px 30px">项目描述</p>
                    <div style="height:15px"></div>
                    <n-button
                        round
                        size="large"
                        color="#DADADA"
                        ghost
                        @click=""
                    >
                      <p class="buttonText2">进入项目</p>
                    </n-button>

                    <n-button
                        round
                        size="large"
                        color="#DADADA"
                        ghost
                        style="margin:5px 10px 10px 10px"
                        @click="routerToPersonalInfo"
                    >
                      <p class="buttonText2">编辑信息</p>
                    </n-button>

                  </n-space>
                </div>
              </n-grid-item>

              <n-grid-item>
                <div class="user" style="background:#EDF5ED">
                  <n-space
                      vertical>
                    <p class="name"  style="margin:20px 10px 10px 30px">项目名称</p>
                    <p class="state" style="margin:0px 10px 10px 30px">项目描述</p>
                    <div style="height:15px"></div>
                    <n-button
                        round
                        size="large"
                        color="#DADADA"
                        ghost
                        @click=""
                    >
                      <p class="buttonText2">进入项目</p>
                    </n-button>

                    <n-button
                        round
                        size="large"
                        color="#DADADA"
                        ghost
                        style="margin:5px 10px 10px 10px"
                        @click="routerToPersonalInfo"
                    >
                      <p class="buttonText2">编辑信息</p>
                    </n-button>

                  </n-space>
                </div>
              </n-grid-item>

              <n-grid-item>
                <div class="user" style="background:#FCEEE9">
                  <n-space
                      vertical>
                    <p class="name"  style="margin:20px 10px 10px 30px">项目名称</p>
                    <p class="state" style="margin:0px 10px 10px 30px">项目介绍</p>
                    <div style="height:15px"></div>
                    <n-button
                        round
                        size="large"
                        color="#DADADA"
                        ghost
                        @click=""
                    >
                      <p class="buttonText2">进入项目</p>
                    </n-button>

                    <n-button
                        round
                        size="large"
                        color="#DADADA"
                        ghost
                        style="margin:5px 10px 10px 10px"
                        @click="routerToPersonalInfo"
                    >
                      <p class="buttonText2">编辑信息</p>
                    </n-button>

                  </n-space>
                </div>
              </n-grid-item>

              <n-grid-item>
                <div class="user" style="background:#FEF8EC">
                  <n-space
                      vertical>
                    <p class="name"  style="margin:20px 10px 10px 30px">项目名称</p>
                    <p class="state" style="margin:0px 10px 10px 30px">项目描述</p>
                    <div style="height:15px"></div>
                    <n-button
                        round
                        size="large"
                        color="#DADADA"
                        ghost
                        @click=""
                    >
                      <p class="buttonText2">进入项目</p>
                    </n-button>

                    <n-button
                        round
                        size="large"
                        color="#DADADA"
                        ghost
                        style="margin:5px 10px 10px 10px"
                        @click="routerToPersonalInfo"
                    >
                      <p class="buttonText2">编辑信息</p>
                    </n-button>

                  </n-space>
                </div>
              </n-grid-item>
            </n-grid>


            <template #header-extra>
              <n-image preview-disabled src="svg\project_svg\sort.svg" />
            </template>
          </n-collapse-item>
        </n-collapse>
      </n-layout>
      </n-gi>
      <n-gi span="1">
      </n-gi>
      
    </n-grid>
  </n-space>

</template>
<script setup lang="ts">

</script>

  <style scoped>
  .headTitle {
    margin: auto;
    color: #000000;
    vertical-align: middle;
    font-family: nunito-sans, sans-serif;
    font-size: 24px;
    font-weight: bold;
  }
  .commonText {
    color: #FFFFFF;
    font-family: Roboto;
    font-weight: bold;
    font-size: 14px;
    line-height: normal;
    letter-spacing: 2px;
    text-align: left;
  }
  .bg {
    /* opacity: 0.10000000149011612; */
    border-radius: 16px;
    background: rgb(255,255,255);
    text-align: center;
  }
  .projCard {
    max-width: 300px;
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
</style>
