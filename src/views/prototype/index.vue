<template>
  <div>
    <n-modal v-model:show="showModal" class="custom-card" preset="card" :style="bodyStyle" title=" 请输入页面名字" size="huge"
      :bordered="false">
      <template #header-extra>
        取消
      </template>
      <n-input v-model:value="createName"></n-input>
      <template #footer>
        <n-button @click="createPage">确定</n-button>
      </template>
    </n-modal>
    <n-modal v-model:show="openShare" class="custom-card" preset="card" :style="bodyStyle" title="分享" size="huge"
      :bordered="false">
      <template #header-extra>
        取消
      </template>
      <el-link v-if="linkOpen" :href="'https://inkbook.mina.moe/#/share/?pro=' + url" target="_blank" type="success">
        https://inkbook.mina.moe/#/share/?pro={{ url }}</el-link>

      <template #footer>
        <n-button v-if="!linkOpen" @click="share">打开分享</n-button>
        <n-button v-if="linkOpen" @click="unshare">关闭分享</n-button>
      </template>
    </n-modal>
    <n-card :bordered="false">
      <n-grid :cols="20">
        <n-gi span="3">
          <n-space vertical>
            <n-select v-model:value="value" :options="options" remote :loading="protoLoading" placeholder="请选择项目"
              @update:value="getPPages(false)" class="choose" />
          </n-space>
        </n-gi>
        <!-- <n-gi></n-gi> -->
        <n-gi span="3">
          <n-space vertical>
            <n-select :loading="pageNotChosed" remote :placeholder=pageHolder :disabled="ProtoNotChosed"
              v-model:value="pageId" :options="optionsPage" @update:value="getPage" class="choose" />
          </n-space>
        </n-gi>
        <n-gi span="2">

          <n-button type="warning" strong secondary :disabled="ProtoNotChosed" v-on:click="saveDesign"
            @click="() => { showModal = true }">新建页面</n-button>
          <!-- <n-button v-on:click="exportHtml">Export HTML</n-button> -->

        </n-gi>
        <n-gi span="2">
          <n-select placeholder="导入模板" :consistent-menu-width="false" v-model:value="modelValue" :options="optionsModels" @update:value="loadModel"
            class="choose" />
        </n-gi>
        <n-gi span="2">
          <n-space>
            <n-button type="warning" strong secondary :disabled="nopageChosed" v-on:click="saveDesign">保存设计</n-button>
            <!-- <n-button v-on:click="exportHtml">Export HTML</n-button> -->
          </n-space>
        </n-gi>
        <n-gi span="2">
          <n-input-number v-model:value="height" @update:value="changeHeight" placeholder="高" :min="300" :step="20"
            :max="3000" />
        </n-gi>
        <n-gi span="2">
          <n-input-number v-model:value="width" placeholder="宽" @update:value="changeWidth" :step="20" :min="10"
            :max="900" />
        </n-gi>
        <n-gi></n-gi>
        <n-gi span="2">
          <n-space>
            <n-button type="warning" strong secondary :disabled="nopageChosed" v-on:click="openShare = true">分享页面
            </n-button>
            <!-- <n-button v-on:click="exportHtml">Export HTML</n-button> -->
          </n-space>
        </n-gi>
        <n-gi>

        </n-gi>
      </n-grid>
    </n-card>


    <br>

    <div>
      <EmailEditor locale='zh-CN' displayMode='web' style="height:300px" :min-height="minHeight" :project-id="projectId"
        :locale="locale" ref="emailEditor" v-on:load="editorLoaded()" display-mod="web" v-on:ready="editorReady()" />
    </div>

  </div>
</template>

<script setup lang="ts">
import html2canvas from 'html2canvas';
import { ref, reactive, onMounted, computed, watch, onBeforeMount } from 'vue'
import { EmailEditor } from 'vue-email-editor';
import type { UploadInst, UploadFileInfo } from 'naive-ui'
import { id } from 'date-fns/locale';
import axios from 'axios';
import { SelectOption } from 'naive-ui'
import { useUserStore } from '../../store/User'
import { useMessage } from 'naive-ui'
import { useGroupStore } from '../../store/Group';
const Group = useGroupStore()
const message = useMessage()
const openShare = ref(false)
const createName = ref("")
const User = useUserStore()
const height = ref(800)
const width = ref(500)
const ProtoNotChosed = ref(true)
const protoLoading = ref(true)
const nopageChosed = ref(true)
const pageNotChosed = ref(false)
const pageHolder = ref("选择页面")
const showModal = ref(false)
const url = ref("")
const bodyStyle = {
  width: '600px'
}
// const  segmented={
//   content: 'soft',
//   footer: 'soft'
// }
onBeforeMount(() => {
  getProjs()
  minHeight.value = height.value + "px"
})
const changeHeight = () => {
  if (height.value != null) {
    minHeight.value = height.value + "px"
    console.log("minHeight:", minHeight.value)
  }
}
const changeWidth = () => {
  emailEditor.value.editor.setBodyValues({
    backgroundColor: "#e7e7e7",
    contentWidth: width.value + "px", // or percent "50%"
    fontFamily: {
      label: "Helvetica",
      value: "'Helvetica Neue', Helvetica, Arial, sans-serif"
    },
    preheaderText: "Hello World"
  });
}
const linkOpen = ref(false)
// import * as Automerge from 'automerge'
const options = ref<SelectOption[]>([])
const optionsPage = ref<SelectOption[]>([])
const modelValue = ref()
const optionsModels: SelectOption[] = [
  {
    label: "学术成果分享平台内容页",
    value: "scholor_detail",
  },
  {
    label: "学术成果分享平台首页",
    value: "scholor_index",
  },
  {
    label: "商城内容页",
    value: "shop_detail",
  },
  {
    label: "商城首页",
    value: "shop_index",
  },
  {
    label: "商城检索页",
    value: "shop_search",
  }
]
const loadModel = () => {
  let modelName = modelValue.value
  modelValue.value=null
  axios({
    url: 'http://127.0.0.1:3000/json/' + modelName + '.json',
    method: "post",
    headers: {
      "Content-Type": "application/json",
    }
  }).then(function (response) {
    // 处理成功情况
    let t = response.data
    console.log("response", response)

    emailEditor.value.editor.
      loadDesign(t.design);
    height.value = t.h
    minHeight.value = height.value + "px"
    emailEditor.value.editor.setBodyValues({
      backgroundColor: "#e7e7e7",
      contentWidth: t.w + "px", // or percent "50%"
      fontFamily: {
        label: "Helvetica",
        value: "'Helvetica Neue', Helvetica, Arial, sans-serif"
      },
      preheaderText: "Hello World"
    });



  }
  )
}
const getProjs = () => {
  axios({
    url: axios.defaults.baseURL + "/proj/get_proj_all",
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Authorization": User.token
    },
    data: {
      group_id: Group.id,
      is_desc: true,
      order_by: 0
    },
    transformRequest: [
      function (data, headers) {
        let data1 = JSON.stringify(data);

        return data1;
      },
    ],
  }).then(function (response) {
    // 处理成功情况
    console.log("response", response)
    console.log(response.data);

    if (response.data?.success) {
      for (let i = 0; i < response.data?.count; i++) {


        options.value.push({
          label: response.data?.projs[i]?.proj_name,
          value: response.data?.projs[i]?.proj_id
        })

      }
      protoLoading.value = false

    }
  })
}
const value = ref(null)
const pageId: any = ref(null)
const emailEditor = ref()
const minHeight = ref('800px')
watch(minHeight, (newVal, oldVal) => {
  height.value = Number(newVal.slice(0, -2))
}
)
const locale = ref('en')
const projectId = ref(0) // replace with your project id
// const tools=reactive( {
// disable image tool
//    const  image=reactive( {
//         enabled: false,
//       })

const share = () => {
  axios({
    url: axios.defaults.baseURL + "/ppage/gen_shared_ppage_token",
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Authorization": User.token
    },
    data: {
      ppage_id: pageId.value
    },
    transformRequest: [
      function (data, headers) {
        let data1 = JSON.stringify(data);
        return data1;
      },
    ],
  }).then(function (response) {
    // 处理成功情况
    console.log("response", response)
    // console.log(response.data);

    if (response.data?.success) {
      url.value = response.data?.token
      linkOpen.value = true
      message.success("已生成分享链接")
    }

    // console.log(content)
    // console.log("JSON",eval('('+content+')'))
    // console.log("JSON",JSON.parse(content))
  }
  )
}
const unshare = () => {
  axios({
    url: axios.defaults.baseURL + "/ppage/close_shared_ppage",
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Authorization": User.token
    },
    data: {
      ppage_id: pageId.value
    },
    transformRequest: [
      function (data, headers) {
        let data1 = JSON.stringify(data);
        return data1;
      },
    ],
  }).then(function (response) {
    // 处理成功情况
    console.log("response", response)
    // console.log(response.data);

    if (response.data?.success) {
      linkOpen.value = false
      message.success(response?.data.message)
    }

    // console.log(content)
    // console.log("JSON",eval('('+content+')'))
    // console.log("JSON",JSON.parse(content))
  }
  )
}
onMounted(() => {
  // getPPage()
})
let ppageName = ""
let ppageData = ""
const createPage = () => {
  createDesign()
  nopageChosed.value = false
}
const getPage = () => {
  axios({
    url: axios.defaults.baseURL + "/ppage/get_ppage_by_id",
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Authorization": User.token
    },
    data: {
      ppage_id: pageId.value
    },
    transformRequest: [
      function (data, headers) {
        let data1 = JSON.stringify(data);
        // 
        return data1;
      },
    ],
  }).then(function (response) {
    // 处理成功情况
    console.log("response", response)
    // console.log(response.data);

    if (response.data?.success) {
      ppageName = response.data?.ppage.ppage_name,
        ppageData = response.data?.ppage.ppage_data
      let t = JSON.parse(ppageData)
      emailEditor.value.editor.
        loadDesign(t.design);
      height.value = t.h
      minHeight.value = height.value + "px"
      emailEditor.value.editor.setBodyValues({
        backgroundColor: "#e7e7e7",
        contentWidth: t.w + "px", // or percent "50%"
        fontFamily: {
          label: "Helvetica",
          value: "'Helvetica Neue', Helvetica, Arial, sans-serif"
        },
        preheaderText: "Hello World"
      });

      nopageChosed.value = false


    }

    // console.log(content)
    // console.log("JSON",eval('('+content+')'))
    // console.log("JSON",JSON.parse(content))
  }
  )
}
const getPPages = (set: boolean = false) => {
  pageNotChosed.value = true
  axios({
    url: axios.defaults.baseURL + "/ppage/get_proj_ppages",
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Authorization": User.token
    },
    data: {
      proj_id: value.value
    },
    transformRequest: [
      function (data, headers) {
        let data1 = JSON.stringify(data);
        // 
        return data1;
      },
    ],
  }).then(function (response) {
    // 处理成功情况
    // console.log("response",response)
    // console.log(response.data);
    while (optionsPage.value.length != 0) {
      optionsPage.value.pop()
    }
    ProtoNotChosed.value = false
    if (response.data?.success) {

      while (optionsPage.value.length != 0) {
        optionsPage.value.pop()
      }
      for (let i = 0; i < response.data?.count; i++) {
        console.log(response)
        const t = {
          label: response.data?.ppages[i].ppage_name,
          value: response.data?.ppages[i].ppage_id
        }
        optionsPage.value.push(t)
      }

      if (set) {
        pageId.value = optionsPage.value[0].value
      }
    }
    pageNotChosed.value = false
    ProtoNotChosed.value = false
    pageHolder.value = "请选择页面"
    // console.log(content)
    // console.log("JSON",eval('('+content+')'))
    // console.log("JSON",JSON.parse(content))
  }
  )

}
// called when the editor is created
const editorLoaded = () => {
  console.log('editorLoaded');
  emailEditor.value.editor.loadBlank({
    backgroundColor: 'rgb(245, 181, 68, 0.1)'
  })
  //  emailEditor.value.editor.init({

  //   });
  emailEditor.value.editor.addEventListener('image:uploaded', function (data: any) {
    console.log("传过来了")
  })
  emailEditor.value.editor.addEventListener('design:updated', function (data: { type: any; item: any; changes: any; }) {
    // Design is updated by the user
    // console.log("data", data)
    var type = data.type; // body, row, content
    var item = data.item;
    var changes = data.changes;
    // console.log('design:updated', type, item, changes);
  })
  emailEditor.value.editor.registerCallback('selectImage', function (data: any, done: (arg0: { url: string; }) => void) {
    // Open your image library

    // console.log("data",data)

    var input = document.createElement("input");
    input.type = "file";
    input.click();
    input.onchange = function () {
      if (input != null && input.files != null) {
        if (input.files?.length != 0) {
          var file = input?.files[0];
        }
      }
      done({ url: "data:image/jpeg;base64,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" })
    }
    // Once a user picks an image, call the done function with URL
  });
  //  emailEditor.value.editor.registerColumns([2, 2,2, 4, 2])
  // Pass your template JSON here
  // this.$refs.emailEditor.editor.loadDesign({});


}
// called when the editor has finished loading
const editorReady = () => {
  console.log('editorReady');

  emailEditor.value.editor.setBodyValues({
    backgroundColor: "#e7e7e7",
    contentWidth: width.value + "px", // or percent "50%"
    fontFamily: {
      label: "Helvetica",
      value: "'Helvetica Neue', Helvetica, Arial, sans-serif"
    },
    preheaderText: "Hello World"
  });
}
const upJson = (str: String) => {

  axios({
    url: axios.defaults.baseURL + "/ppage/update_ppage",
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Authorization": User.token
    },
    data: {
      ppage_id: pageId.value,
      ppage_name: ppageName,
      ppage_data: str
    },
    transformRequest: [
      function (data, headers) {
        let data1 = JSON.stringify(data);

        return data1;
      },
    ],
  }).then(function (response) {
    // 处理成功情况
    console.log("response", response)
    console.log(response.data);

    if (response.data?.success) {


    }
  })

}
const createJson = (str: String) => {

  axios({
    url: axios.defaults.baseURL + "/ppage/create_ppage",
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Authorization": User.token
    },
    data: {
      proj_id: value.value,
      ppage_name: createName.value,
      ppage_data: str
    },
    transformRequest: [
      function (data, headers) {
        let data1 = JSON.stringify(data);

        return data1;
      },
    ],
  }).then(function (response) {
    // 处理成功情况
    console.log("response", response)
    console.log(response.data);

    if (response.data?.success) {
      message.success("创建成功")
      showModal.value = false
      let set = true
      getPPages(set)


      // console.log("OPP",optionsPage.value)
      // pageId.value=optionsPage.value[cnt-1].value


    } else {
      message.error(response.data?.message)
    }
  })

}
const createDesign = () => {
  emailEditor.value.editor.saveDesign((design: any) => {
    // console.log('saveDesign', design);
    let t = {
      w: width.value,
      h: height.value,
      design: design
    }
    createJson(JSON.stringify(t))
    // console.log(JSON.stringify(design))
    // a=design
  });
}
const saveDesign = () => {
  emailEditor.value.editor.saveDesign((design: any) => {
    let t = {
      w: width.value,
      h: height.value,
      design: design
    }
    console.log('saveDesign', t);
    upJson(JSON.stringify(t))

    // console.log(JSON.stringify(design))
    // a=design
  });
  // let dom = document.body // 先滚动到最顶部
  // console.log(dom)
  // document.documentElement.style.position = 'fixed';
  //   if(dom != null){
  //      html2canvas(document.body,{}).then(canvas => { 
  //       dom.appendChild(canvas)   
  //    let dataURL = canvas.toDataURL("image/png");
  //       console.log(canvas)

  //        document.documentElement.style.position = '';
  //   //  this.uploadImg = dataURL
  //   //  this.loading = true
  //      });
  //   }

  //    emailEditor.value.editor.setBodyValues({
  //   backgroundColor: "#e7e7e7",
  //   contentWidth: "200px", // or percent "50%"
  //   fontFamily: {
  //     label: "Helvetica",
  //     value: "'Helvetica Neue', Helvetica, Arial, sans-serif"
  //   },
  //   preheaderText: "Hello World"
  // });
  // minHeight.value="600px"
}
const exportHtml = () => {
  emailEditor.value.editor.exportHtml((data: any) => {
    console.log('exportHtml', data);
  });
  // emailEditor.value.editor.loadDesign(a)
}


</script>

<style scoped lang="less">
.choose {
  border-width: 0px;

  :deep(.n-base-selection__border) {
    border-width: 0px;
    //  background-color: aqua;
  }

  :deep(.n-base-selection--selected) {
    border-width: 0px;
  }

  :deep(.n-base-selection__border:hover) {
    border-width: 0px;
    //  background-color: aqua;
  }

  :deep(.n-base-selection-input__content) {
    font-family: 'Inria Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 34px;
    /* identical to box height, or 142% */


    color: rgba(9, 27, 61, 0.5);
  }




}
</style>