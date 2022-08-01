<template>
  <n-card>
    <n-layout >
      <n-layout>
        <n-layout-content class="cnt" content-style="padding-top:4px" v-show="Notif.type==0">
          你发了一个帖子，经验值+{{Notif.exp}}
        </n-layout-content >
        <n-layout-content v-show="Notif.type==1" class="cnt" content-style="padding-top:4px">
          你发表了一条评论，经验值+{{Notif.exp}}
        </n-layout-content>
        <n-layout-content v-show="Notif.type==2" class="cnt" content-style="padding-top:4px">
          你阅读了一个帖子，经验值+{{Notif.exp}}
        </n-layout-content>
        <n-layout-content v-show="Notif.type==3" class="cnt" content-style="padding-top:4px">
            恭喜你升到了{{Notif.exp}}级！
        </n-layout-content>
        <n-layout-content v-show="Notif.type==4" class="cnt" content-style="padding-top:4px">
          你阅读了新手上路，经验值+{{Notif.exp}}
        </n-layout-content>
        <n-layout-content v-show="Notif.type==5" class="cnt" content-style="padding-top:4px">
          你完善了用户信息，经验值+{{Notif.exp}}
        </n-layout-content>
        <n-layout-content v-show="Notif.type==6" class="cnt" content-style="padding-top:4px">
          你上传了头像，经验值+{{Notif.exp}}
        </n-layout-content>
        <n-layout-content v-show="Notif.type==7" class="cnt" content-style="padding-top:4px">
          今日登录，经验值+{{Notif.exp}}
        </n-layout-content>
        <n-layout-content class="Time" style="padding-top:7px">
          {{Notif.time}}
        </n-layout-content>
      </n-layout>
      
    </n-layout>
  </n-card>


    
</template>

<script setup lang="ts">
import internal from 'stream';



type Props={
    Notif: {
        time:string,
        type: number,
        exp:number,
    }

}
defineProps<Props>()
</script>

<style scoped>
.Time{
  color: #959BA5;
  font-family: Poppins;
  font-weight: regular;
  font-size: 12px;
  line-height: 1.4;
  letter-spacing: 0px;
  text-align: left;

}
.cnt{
  color: #000000;
  font-family: poppins,sans-serif;
  font-weight: regular;
  font-size: 14px;
  line-height: 1.4;
  letter-spacing: 0px;
  text-align: left;

}

.mycard{
    border-radius: 24px;
    background: #FFFFFF;
    box-shadow: 10px 10px 80px 0px #3F276619;
    padding:10px,10px,10px,10px;
    margin:10px;
    width:94%;
}
.title{
   color: #000000;
font-family: roboto, sans-serif;
font-weight: 700;
font-size: 14px;
line-height: normal;
letter-spacing: 2px;
text-align: left;
padding-bottom: 10px;
}
.tags{
    color: #808080;
font-family: roboto, sans-serif;
font-weight: regular;
font-size: 10px;
line-height: normal;

text-align: left;
  padding: 3px 10px 5px 10px;
    border-radius: 5px;
background: #EAEAEA;
}
.content{
    color: #000000;
font-family: roboto, sans-serif;
font-weight: 200;
font-size: 14px;
line-height: 25px;
letter-spacing: 2px;
text-align: left;

}
</style>
