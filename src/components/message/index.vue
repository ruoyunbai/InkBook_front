<template>
    <div>
        <div v-if="props.M.type === 1" class="undefine frame1">
            <n-image preview-disabled src="svg\主页svg\unread.svg" class="noti_img" />
            <span class="noti_font">@{{ props.M.content }}</span>
            <n-button @click="accept" color="#FFFFFF" text-color="#2772F0"
                style="position: absolute; width: 94px; height: 37px; margin-left: 115px; margin-top: 60px; border-radius: 16px">
                <n-image preview-disabled src="svg\主页svg\yes.svg" />
                <span class="btn_font">同意</span>
            </n-button>
            <n-button  @click="decline" color="#FFFFFF" text-color="#2772F0"
                style="position: absolute; width: 94px; height: 37px; margin-left: 225px; margin-top: 60px; border-radius: 16px">
                <n-image preview-disabled src="svg\主页svg\no.svg" />
                <span class="btn_font">拒绝</span>
            </n-button>
        </div>
        <!--      已拒绝的邀请-->
        <div v-if="props.M.type===2" class="refuse frame1">
            <n-image preview-disabled src="svg\主页svg\read.svg" class="noti_img" />
            <span class="noti_font">@{{ props.M.content }}</span>
            <n-button disabled color="#FFFFFF" text-color="#2772F0"
                style="position: absolute; width: 125px; height: 37px; margin-left: 185px; margin-top: 60px; border-radius: 16px">
                <n-image preview-disabled src="svg\主页svg\no.svg" />
                <span class="btn_font">已拒绝</span>
            </n-button>
        </div>
        <!--      已同意的邀请-->
        <div v-if="props.M.type===3" class="agree frame1">
            <n-image preview-disabled src="svg\主页svg\read.svg" class="noti_img" />
            <span class="noti_font">@{{ props.M.content }}</span>
            <n-button disabled color="#FFFFFF" text-color="#2772F0"
                style="position: absolute; width: 125px; height: 37px; margin-left: 185px; margin-top: 60px; border-radius: 16px">
                <n-image preview-disabled src="svg\主页svg\yes.svg" />
                <span class="btn_font">已同意</span>
            </n-button>
        </div>
        <!--      管理员收到拒绝邀请的通知-->
        <div v-if="props.M.type===4" class="refuse_bc frame2">
            <n-image preview-disabled src="svg\主页svg\triangle.svg" class="noti_img2" />
            <span class="noti_font">@{{ props.M.content }}</span>
        </div>
        <!--      全体成员收到同意邀请的通知-->
        <div v-if="props.M.type===5" class="agree_bc frame2">
            <n-image preview-disabled src="svg\主页svg\sound.svg" class="noti_img2" />
            <span class="noti_font">@{{ props.M.content }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, Ref, ref, onUpdated } from "vue";
import axios from "axios";
import { useRouter } from "vue-router"
// import Vditor from 'vditor';
import "vditor/dist/index.css";
import {useUserStore} from '../../store/User'
import { Message } from "@element-plus/icons-vue";
import { useMsgStore } from "../../store/Msg";
const Msg=useMsgStore()
const router = useRouter()
const User=useUserStore()

// const vditor = ref<Vditor | null>(null);
const text: Ref<string> = ref("content");
onMounted(() => {

});
onUpdated(() => {

});
const accept=()=>{
     axios({
        url: axios.defaults.baseURL + "/user/accept_invitation",
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Authorization": User.token
        },
        data: {
            message_id:props.M.message_id
        },
        transformRequest: [
            function (data, headers) {
                let data1 = JSON.stringify(data);
                return data1;
            },
        ],
    }).then(function (response) {
        // 处理成功情况
        console.log("responseMsg", response)
        console.log(response.data);
        Msg.opt="change"
        if (response.data?.success) {
            Message.success(response.data?.message)

          
        }else{
            Message.info(response.data?.message)
        }
    })
}

const decline=()=>{
    axios({
        url: axios.defaults.baseURL + "/user/decline_invitation",
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Authorization": User.token
        },
        data: {
            message_id:props.M.message_id
        },
        transformRequest: [
            function (data, headers) {
                let data1 = JSON.stringify(data);
                return data1;
            },
        ],
    }).then(function (response) {
        // 处理成功情况
        Msg.opt="change"
        console.log("responseMsg", response)
        console.log(response.data);

        if (response.data?.success) {
            Message.success(response.data?.message)

          
        }else{
            Message.info(response.data?.message)
        }
    })
}


type Props = {
    M?: {
        message_id: Number,
        receiver_id: Number,
        sender_id: Number,
        content: String,
        group_id: Number,
        type: Number,
        status: Number
    };
};

const props = withDefaults(defineProps<Props>(), {
    M: () => {
        return {
            message_id: 5,
            receiver_id: 2,
            sender_id: 27,
            content: "gwx0 邀请您加入团队 tst1",
            group_id: 29,
            type: 1,
            status: 0
        };
    },
});


</script>

<style scoped lang="less">
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
    border-radius: 5px;
    background: #ffffff;
    border: 1px solid #eaeaea;
    box-shadow: 2px 1px 5px 0px #00000026;
    padding-left: 40px;
    padding-top: 50px;
    padding-right: 40px;
    padding-bottom: 40px;
    margin: 10px;
    width: 94%;
}

.title {
    color: #000000;
    font-family: Roboto;
    font-weight: bold;
    font-size: 18px;
    line-height: normal;
    letter-spacing: 0px;
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

.frame1 {
    width: 345px;
    height: 109px;
    border-radius: 26px;
    background-color: #FFF8E8;
    margin-bottom: 15px;
    padding-left: 30px;
    padding-top: 5px;
    position: relative;
}

.frame2 {
    width: 345px;
    height: 77px;
    border-radius: 26px;
    background-color: #FFF8E8;
    margin-bottom: 15px;
    padding-left: 30px;
    padding-top: 5px;
    position: relative;
}

.noti_font {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 140%;
    position: absolute;
    margin-top: 20px;
    margin-left: 45px;
}

.noti_img {
    position: absolute;
    margin-top: 10px;
}

.noti_img2 {
    position: absolute;
    margin-top: 18px;
}

.btn_font {
    font-family: 'Inria Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    margin-left: 5px;
}
</style>
