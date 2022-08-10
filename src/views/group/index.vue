<template>
  <div id="group_up_blank"></div>
  <div id="group_up">
    <n-grid x-gap="12" :cols="16">
      <n-gi span="1">

      </n-gi>
      <n-gi span="1">

        <div id="group_name">
          <n-icon>
              <n-image src="svg\project_svg\home.svg" />
            </n-icon>
          团队管理</div>
      </n-gi>
      <n-gi span="1">
        <tk-select selected="请选择">
          <template #selectDropDown>
            <tk-select-item value="最新案例">最新案例</tk-select-item>
            <tk-select-item value="最热案例">最热案例</tk-select-item>
          </template>
        </tk-select>
      </n-gi>
      <n-gi span="4">

      </n-gi>
      <!-- v-model:value="" -->
      <n-gi span="5">
        <n-input ref="inputInstRef" placeholder="输入成员昵称" clearable round size="large" style="margin-left: 19px" v-model:value="val">
          <template #prefix>
            <n-image src="svg\members_svg\search.svg"></n-image>
          </template>
        </n-input>
      </n-gi>
      <n-gi span="1">
      </n-gi>
      <n-gi span="3">
        <el-button round color="#2772F0" size="large" @click="dialogEditVisible = true">
          <template #icon>
            <n-icon>
              <n-image src="svg\project_svg\white_plus.svg" />
            </n-icon>
          </template>
          <div class="commonText">
            添加成员
          </div>
        </el-button>
      </n-gi>

    </n-grid>
  </div>
  <div id="group_title">
    <n-icon>
      <n-image src="svg\project_svg\list.svg" />
    </n-icon>
    全部成员
  </div>
  <div id="group_mid">
    <!-- <div id="panel_title">
      <div class="title_font first">昵称</div>
      <div class="title_font forth"></div>
      <div class="title_font second">邮箱</div>
      <div class="title_font third"></div>
      <div class="title_font forth">身份</div>
      <div class="title_font fifth"></div>
    </div> -->
     <div style="margin:1px 10px 0px 10px">&ensp;</div>
      <n-grid x-gap="0" :cols="80">
        <n-gi span="7">
        </n-gi>
        <n-gi span="1">
        </n-gi>
        <n-gi span="12">
          <div class="name2" style="margin:10px 10px 10px 30px">
          昵称
          </div>
        </n-gi>
        <n-gi span="28">
          <div class="name2" style="margin:10px 10px 10px 30px">&ensp;邮箱</div>
        </n-gi>
        <n-gi span="16">
          <div class="name2" style="margin:10px 10px 10px 30px">身份</div>
        </n-gi>
        <n-gi span="16">
          <div class="name2" style="margin:10px 10px 10px 30px">
           操作
          </div>
        </n-gi>
      </n-grid>
    <n-image lenth="120%" src="svg\project_svg\Title(2).svg"/>
    <div> </div>
    <div v-for="(member, index) in members">
      <Bar :key="member.member_id" :oneMember="member"></Bar>
    </div >
    
    <!-- <ul class="group_mem">
      <li v-for="(todo, index) in todos" :key="todo.name">
        <div class="person">
          <input type="checkbox" v-model="todo.done" class="tip_checkbox">
          <span class="first">{{ todo.name }}</span>
          <span class="second">{{ todo.email }}</span>
          <span class="third">{{ todo.identity }}</span>
          <span class="forth" @click="deltodo(index)">
            <n-image src="svg\group_svg\trash.svg" />
          </span>
          <span class="fifth tip_font" @click="changeTode(index)">
            <n-image src="svg\group_svg\manage.svg" />
          </span>
        </div>
      </li>
    </ul> -->
    <!-- <div id="del_all">
      <input type="checkbox" v-model="isAll" id="del_checkbox">
      <span class="del_font">全选</span>
      <span class="del_font">{{ selNum }}/{{ len }}</span>
      <button @click="delAll" id="del_btn">删除</button>
    </div> -->


    <el-dialog v-model="dialogEditVisible" title="&ensp; &ensp; 邀请成员">
        <el-form :model="form">
        <el-form-item label="" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off" placeholder="待邀请成员的用户名"/>
        </el-form-item>
        </el-form>
        <template #footer>
        <span class="dialog-footer">
            <el-button @click="dialogEditVisible = false">取消</el-button>
            <el-button type="primary" @click="invite_member()"
            >立即邀请</el-button
            >
        </span>
        </template>
    </el-dialog>

  </div>

</template>

<script lang="ts" setup>
import {
  onUpdated,
  toRaw,
  reactive,
  onBeforeMount,
  ref,
  onMounted,
  StyleValue,
  Ref,
  getCurrentInstance,
  h,
} from "vue";
import Bar from "../../components/member.vue";
import axios from "axios";
import { useMemberStore } from "../../store/Member";
import { useUserStore } from "../../store/User";
import { useDialog,InputInst, useMessage } from "naive-ui";
import { useRouter } from "vue-router"

const router = useRouter();

const Member = useMemberStore();
const message = useMessage();
const User = useUserStore();
const dialogEditVisible = ref(false)
const formLabelWidth = '100px'
let count: number = 0;
let one_group_id: number;
const members: any[] = reactive([]);
const form = reactive({
  name: '',
})

onBeforeMount(() => {
  getMembers();
  console.log("1");
});

const invite_member = () =>{
  axios({
    url: axios.defaults.baseURL + "/group/invite_member",
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Authorization": User.token
    },
    data: {
      group_id: one_group_id,
      username: form.name
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
    if (response.data?.success) {
      message.success("邀请成功");
      getMembers();
      console.log("2!!");
      dialogEditVisible.value = false;

    } else {
      message.error(response.data?.message);
    }
    console.log(response.data);
  });
}

//删除成员 设为管理员
Member.$subscribe((mutation, state)=>{
    if(Member.operation=="")return;
    else if(Member.operation=="remove_member"){
        console.log("user_id"+ Member.user_id);
        axios({
        url: axios.defaults.baseURL + "/group/remove_member",
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "Authorization": User.token
        },
        data: {
          group_id: one_group_id,
          user_id: Member.user_id
        },
        transformRequest: [
          function (data, headers) {
            let data1 = JSON.stringify(data);
            return data1;
          },
        ],
      }).then(function (response) {
        // 处理成功情况
        console.log("response"+Member.user_id);
        console.log(response)
        getMembers();
      })
      Member.operation="";
    }
    else if(Member.operation=="set_status"){
      axios({
        url: axios.defaults.baseURL + "/group/set_member_status",
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "Authorization": User.token
        },
        data: {
          group_id: one_group_id,
          status: 2,
          user_id: Member.user_id
        },
        transformRequest: [
          function (data, headers) {
            let data1 = JSON.stringify(data);
            return data1;
          },
        ],
      }).then(function (response) {
        // 处理成功情况
        console.log("response"+Member.user_id);
        console.log(response)
        getMembers();
      })
      Member.operation="";
    }else if(Member.operation=="quit_manager"){
      axios({
        url: axios.defaults.baseURL + "/group/set_member_status",
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "Authorization": User.token
        },
        data: {
          group_id: one_group_id,
          status: 1,
          user_id: Member.user_id
        },
        transformRequest: [
          function (data, headers) {
            let data1 = JSON.stringify(data);
            return data1;
          },
        ],
      }).then(function (response) {
        // 处理成功情况
        console.log("response"+Member.user_id);
        console.log(response)
        getMembers();
      })
      Member.operation="";
    }


})

//获取成员
//status:1 普通成员 2管理员 3创建者
const getMembers = (clear: boolean = true) => {
  axios({
    url: axios.defaults.baseURL + "/group/get_groups",
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Authorization": User.token
    },
    data: {
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
    if (response.data?.success) {
      count = response.data?.count;
      console.log(response.data);
      let i = 0;
      if (clear) while (members.length != 0) members.pop();
      if (response.data != null){
        if(response.data.count==0){
          router.push({
          name:"NewGroup",
          // params:{
          //   proj_id:props.oneProject.proj_id,
          // }
          })
        }
        else{
          one_group_id = response.data.groups[0].group_id;//不对，团队是可以切换的！！！
          console.log("one_group_id" + one_group_id);
          axios({
            url: axios.defaults.baseURL + "/group/get_group_members",
            method: "post",
            headers: {
              "Content-Type": "application/json",
              "Authorization": User.token
            },
            data: {
              group_id: one_group_id,
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
            if (response.data?.success) {
              count = response.data?.count;
              console.log(response.data);
              let i = 0;
              if (clear) while (members.length != 0) members.pop();
              if (response.data != null)
                for (i = 0; i < count; i++) {
                  let temp = reactive({
                    email: response.data.members[i].email,
                    real_name: response.data.members[i].real_name,
                    status: response.data.members[i].status,
                    user_id: response.data.members[i].user_id,
                    username: response.data.members[i].username,
                  });
                  console.log("!!!user_id" + temp.user_id);
                  members.push(temp);
                }
              console.log(members);
              // User.Name=modelRef.value.name,
              // User.Id=response.data.data.user_id,
            } else {
            }
            console.log(response.data);
          });

        }
         
        // User.Name=modelRef.value.name,
        // User.Id=response.data.data.user_id, 
        }
    } else {
    }
    console.log(response.data);
  });

}


// interface todo {
//   done: boolean,
//   name: string,
//   email: string,
//   identity: string,
// }
// let val = ref('')
// let todos = ref<todo[]>([])
// // 增
// const addTodo=function() {
//   if (val.value) {
//     todos.value.push({
//       done: false,
//       name: val.value,
//       email: val.value+"@buaa.edu.cn",
//       identity: "普通成员",
//     })
//     val.value = ''
//   }
// }
// // 删
// function deltodo(index: number) {
//   todos.value.splice(index, 1)
// }
// // 全选功能实现
// let len = computed<number>(() => todos.value.length)
// let selNum = computed<number>(() => todos.value.filter(v => v.done).length)
// let isAll = computed<boolean>({
//   get() {
//     return len.value === 0 ? false : len.value == selNum.value
//   },
//   set(val: boolean) {
//     todos.value.forEach(v => { v.done = val })
//   }
// })
// let changeDemo = ref({
//   show: false,
//   name: '',
//   val: '管理员',
//   changeIndex: -1
// })
// // 改
// function changeTode(i: number) {
//   const demo = todos.value[i]
//   changeDemo.value = {
//     show: true,
//     name: demo.name,
//     val: '管理员',
//     changeIndex: i
//   }
//   saveChange();
// }
// function saveChange() {
//   let { changeIndex, val } = changeDemo.value
//   todos.value[changeIndex].identity = val
//   changeDemo.value = {
//     show: false,
//     name: '',
//     val: '',
//     changeIndex: -1
//   }
// }
// // 全选删除
// function delAll() {
//   if (isAll.value) {
//     todos.value = []
//   }
// }
</script>

<style>
.name{
    font-size: 16px;
    font-weight: bold;
}
.name2{
    font-size: 20px;
    font-weight: bold;
}
#group_up_blank{
  height: 30px;
}

#group_up{
  height: 105px;
}

#group_name{
  margin-left: 22px;
  color: #000000;
  font-family: Inria Sans;
  font-weight: bold;
  font-size: 30px;
  line-height: 34px;
  letter-spacing: 0px;
  text-align: left;
  position: absolute;
}

#group_title{
  height: 34px;
  width: 196px;
  margin-left: 90px;
  margin-bottom: 10px;
  color: #000000;
  font-family: Inria Sans;
  font-weight: bold;
  font-size: 24px;
  line-height: 34px;
  letter-spacing: 0px;
  text-align: left;
}

#group_mid{
  width: 90%;
  margin-left: 5%;
  height: 700px;
  background-color: #FFFFFF;
  border-radius: 24px;
  padding-left: 20px;
  padding-right: 20px;
}

#panel_title {
  position: relative;
  height: 68px;
  border-bottom: 1px solid rgba(9, 27, 61, 0.5);
  padding-left: 45px;
}

.title_font {
  font-family: 'Inria Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
}

.first {
  position: absolute;
  margin-left: 113px;
  margin-top: 20px;
  height: 24px;
  width: 100px;
  text-align: left;
}

.second {
  position: absolute;
  margin-left: 292px;
  margin-top: 20px;
  height: 24px;
  width: 300px;
  text-align: left;
}

.third {
  position: absolute;
  margin-left: 572px;
  margin-top: 20px;
  height: 24px;
  width: 100px;
  text-align: left;
}

.forth {
  position: absolute;
  margin-left: 708px;
  margin-top: 20px;
  height: 24px;
  width: 40px;
  text-align: left;
}

.fifth {
  position: absolute;
  margin-left: 804px;
  margin-top: 20px;
  height: 24px;
  width: 40px;
  text-align: left;
}

.group_mem{
  list-style-type: none;
}

.person {
  height: 61px;
  width: 1100px;
  background-color: #FFF8E8;
  margin-left: 6px;
  border-radius: 26px;
  margin-top: 17px;
  margin-bottom: 17px;
  position: relative;
}

.tip_checkbox{
  height: 20px !important;
  width: 20px !important;
  margin-top: 20px;
  margin-left: 20px;
}

#del_all{
  margin-left: 1000px;
  margin-top: 600px;
  text-align: center;
}

#del_checkbox{
  width: 16px !important;
  height: 16px !important;
}

.del_font{
  font-weight: bold;
  font-size: 15px;
  margin-left: 5px;
}

#del_btn{
  margin-left: 10px;
}



</style>