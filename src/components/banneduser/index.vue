<template>
<span class="bartext">
    <n-space justify="space-between" size="large">
    <n-avatar
        round
        size="small"
        :src="buser.avatar"
    />
    <span class="name">
        {{buser.name}}
    </span>
    <n-button
        strong
        secondary
        type="info"
        style="color: #5aa8d7"
        @click="handleUnban"
    >
        解除禁言
    </n-button>
    </n-space>
</span>    
</template>

<script setup lang="ts">
import axios from 'axios'
import { onMounted,Ref,reactive } from 'vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import internal from 'stream';
import { ElMessageBox,ElMessage  } from 'element-plus'
import {
  FormInst,
  FormItemInst,
  FormItemRule,
  useMessage,
  FormRules
} from 'naive-ui'
import { Plus } from '@element-plus/icons-vue'
import type { UploadProps } from 'element-plus'
type Props = {
  buser: {
        avatar: string,
        name: String,
        user_id:String,
    }
}
const props=defineProps<Props>()
const message = useMessage()

const handleUnban = (e: MouseEvent) => {
  e.preventDefault()
  
        // console.log(t1.toString)
        axios.post('/portal/unban_user', {
        user_id:props.buser.name,
        
      })
        .then(function (response) {
          // 处理成功情况
          console.log(response.data)
          if(response.data?.success){
              message.success('解除禁言成功！~')
          }
          else{
             message.error('解禁失败')
          }
          console.log(response.data)
        }
        )

      
    } 

</script>

<style scoped>
.bartext {
  position: relative;
  bottom: 5px;
  font-family: Roboto, sans-serif;
  color: #594545;
  font-size: 14px;
  text-align: left;
}
.name{
    color: #594545;
font-family: Roboto;
font-weight: regular;
font-size: 14px;
line-height: normal;
letter-spacing: 0px;
text-align: left;

}
</style>
