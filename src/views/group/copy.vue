<template>
  <div id="group_up_blank"></div>
  <div id="group_up">
    <n-grid x-gap="12" :cols="16">
      <n-gi span="1">

      </n-gi>
      <n-gi span="1">
        <div id="group_name">团队名称</div>
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
        <el-button round color="#2772F0" size="large" @click="addTodo">
          <template #icon>
            <n-icon>
              <n-image src="svg\members_svg\plus.svg" />
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
    全部成员
  </div>
  <div id="group_mid">
    <div id="panel_title">
      <div class="title_font first">昵称</div>
      <div class="title_font second">邮箱</div>
      <div class="title_font third">身份</div>
      <div class="title_font forth"></div>
      <div class="title_font fifth"></div>
    </div>
    <div v-for="(member, index) in members">
      <Bar :key="member.member_id" :oneMember="member">
      </Bar>
    </div>
    <Bar ></Bar>
    

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
// import { usememberstore } from "../../store/members";
import { useUserStore } from "../../store/User";
import { useDialog,InputInst, useMessage } from "naive-ui";

const User = useUserStore();
let count: number = 0;
let one_group_id: number;
const members: any[] = reactive([]);

onBeforeMount(() => {
  getMembers();
  console.log("1");
});

//获取项目
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
      if (response.data != null)
      one_group_id = response.data.groups[0].group_id;
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
              // console.log("  membersid" + temp.proj_id);
              members.push(temp);
            }
          console.log(members);
          // User.Name=modelRef.value.name,
          // User.Id=response.data.data.user_id,
        } else {
        }
        console.log(response.data);
      });
      // User.Name=modelRef.value.name,
      // User.Id=response.data.data.user_id,
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
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  position: absolute;
}

#group_title{
  height: 34px;
  width: 96px;
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