<template>
  <div id="group_message">
    <div id="group_name">团队名称</div>
    <div id="group_intro">团队简介</div>
    <el-form :model="dengmiQueryForm" ref="dengmiQueryForm" label-width="80px" class="demo-ruleForm" size="mini">
      <el-row>
        <el-col span="8">
          <el-form-item class="add_mem_input">
            <el-input v-model="data.formData.Username"></el-input>
          </el-form-item>
        </el-col>
        <el-col span="8">
          <el-form-item>
            <el-button type="primary" @click="addRow1" icon="el-icon-search" class="add_mem_btn">
              <n-image class="add_mem_btn_img" src="svg/group_svg/plus.svg" />
              <div class="btn_font">
                邀请成员
              </div>
            </el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
  <div id="title">全部成员</div>

  <div id="group_panel">
    <el-table :data="admin" style="width: 90%" :header-cell-style="{ 'text-align': 'center', height: '80px' }"
      :row-style="{ height: '55px' }" :cell-style="{ 'text-align': 'center' }">
      <el-table-column prop="Username" label="昵称" />
      <el-table-column prop="RealName" label="姓名" />
      <el-table-column prop="Email" label="邮箱" />
      <el-table-column prop="Status" label="职务">
        <template #default="{ row }">
          <span v-if="row.Status == 1">普通会员</span>
          <span v-if="row.Status == 2">管理员</span>
          <span v-if="row.Status == 3">创建者</span>
        </template>
      </el-table-column>

      <el-table-column fixed="right" label="操作">
        <template #default="{ row }">
          <!-- <el-button type="text" size="small" @click="handleDetail(row)"
            >查看</el-button
          > -->
          <el-button type="text" size="small" @click="handlejiru(row)">加入管理员</el-button>
          <!--  <el-button type="text" size="small" @click="handleEdit(row)"
            >编辑</el-button
          > -->
          <el-button type="text" size="small" @click="handleDel(row)">删除</el-button>
        </template>
      </el-table-column>

    </el-table>

    <!--    <Dialog-->
    <!--        v-if="dialogShow"-->
    <!--        v-model:dialogShow="dialogShow"-->
    <!--        :rowInfo="rowInfo"-->
    <!--        :title="title"-->
    <!--        :arrayNum="studentInfo.length"-->
    <!--        @addRow="addRow"-->
    <!--        @editRow="editRow"-->
    <!--    />-->
    <!-- 详情弹窗 -->
    <Detail v-if="detailShow" :rowInfo="rowInfo" @closeDetail="closeDetail" />
  </div>
</template>

<script setup>
import { reactive, ref, toRefs, onMounted } from "vue";
import { ElMessageBox } from "element-plus";
import Dialog from "./dialog.vue";
import Detail from "./detail.vue";
import { useRouter } from 'vue-router'
import { useUserStore } from '../../store/User'
import axios from 'axios'
const router = useRouter();
const User = useUserStore()
onMounted(() => {
  //localStorage.setItem("token","");
  // let token = localStorage.getItem("token");
  // if (token) {
  //   // 判断当前的token是否存在
  //    console.log("ceshi", token);
  // } else {
  //   router.push('/logIn')

  // }
  method.getstudent();
})


const data = reactive({
  dialogShow: false, // 新增/编辑弹框
  detailShow: false, // 详情弹窗
  rowInfo: {}, // 新增/编辑的数据
  title: "", // 是新建还是修改
  formData: {
    Username: ""
  },
  group_id: 1,
  admin: [
    {
      id: 1,
      nickname: "昵称1",
      name: "星星",
      email: "qwr@qq.com",
      identity: "管理员",
    },
    {
      id: 2,
      nickname: "昵称2",
      name: "月亮",
      email: "qwr11@qq.com",
      identity: "管理员",
    },
  ],
  studentInfo: [
    {
      id: 1,
      nickname: "昵称1",
      name: "星星",
      email: "qwr@qq.com",
      identity: "普通会员",
      sex: "女",
    },
    {
      id: 2,
      nickname: "昵称2",
      name: "月亮",
      email: "qwr11@qq.com",
      identity: "普通会员",
    },
  ],
});
const method = reactive({
  handleNew() {
    data.title = "新增";
    data.rowInfo = {};
    data.dialogShow = true;
  },
  handleDetail(val) {
    data.detailShow = true;
    data.rowInfo = val;
  },
  handleEdit(val) {
    data.title = "修改";
    data.dialogShow = true;
    data.rowInfo = val;
  },
  handleDel(val) {
    let that = this;
    ElMessageBox.confirm("你确定删除这个学生的信息吗?", "提示", {
      confirmButtonText: "确认",
      cancelButtonText: "取消",
      type: "warning",
    })
      .then(() => {
        let params = {
          group_id: data.group_id,
          user_id: val.UserID,
        };
        axios({
          url: axios.defaults.baseURL + "/group/remove_member",
          method: "post",
          headers: {
            "Content-Type": "application/json",
            "Authorization": User.token
          },
          data: params,
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
        // that.$request.post("/group/remove_member", params).then((res) => {
        //   if (res.data.code == 0) {
        //     console.log("删除信息是", res.data);
        //   } else {
        //     console.log("登录信息是2", res);
        //   }
        // });
        method.handleSure(val);
      })
      .catch(() => {
        // catch error
      });
  },
  handleSure(val) {
    /* this.dialogVisible = false;
    const index = data.studentInfo.findIndex((item) => item.id === val.id);
    data.studentInfo.splice(index, 1); */
    let that = this;
    let params = {
      group_id: data.group_id,
      user_id: val.UserID,
    };

    // that.$request.post("/group/remove_member", params).then((res) => {
    //   if (res.data.code == 0) {
    //     console.log("删除信息是", res.data);
    //   } else {
    //     console.log("登录信息是2", res);
    //   }
    // });
  },
  handlejiru(val) {
    /* this.dialogVisible = false;
    const index = data.studentInfo.findIndex((item) => item.id === val.id);
    data.studentInfo.splice(index, 1);
    data.admin.push(val); */
    let that = this;
    let params = {
      group_id: data.group_id,
      status: 2,
      user_id: val.UserID,
    };

    // that.$request.post("/group/set_member_status", params).then((res) => {
    //   if (res.data.code == 0) {
    //     console.log("加入管理员", res.data);
    //   } else {
    //     console.log("登录信息是2", res);
    //   }
    // });
    method.getstudent();
  },

  // 添加行
  addRow(val) {
    data.studentInfo.push(val);
  },
  addRow1() {
    let that = this;
    let params = {
      group_id: data.group_id,
      username: data.formData["Username"],
    };

    // that.$request.post("/group/add_member", params).then((res) => {
    //   if (res.data.code == 0) {
    //     console.log("add信息是", res.data);
    //   } else {
    //     console.log("登录信息是2", res);
    //   }
    // });
    method.getstudent();
  },
  // 编辑行
  editRow(val) {
    let index = data.studentInfo.findIndex(
      (item, index) => item.id === val.id
    );
    data.studentInfo.splice(index, 1, val);
  },
  getstudent() {

    axios({
      url: axios.defaults.baseURL + "/group/get_groups",
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Authorization": User.token
      },
      data: {},
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
      data.group_id=response.data.groups[0].GroupID
      // console.log("group",response.data.groups[0])
      // console.log("data",data.group_id)
      if (response.data?.success) {
            axios({
              url: axios.defaults.baseURL + "/group/get_group_members",
              method: "post",
              headers: {
                "Content-Type": "application/json",
                "Authorization": User.token
              },
              data: {
                group_id: data.group_id
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
                  data.studentInfo=response.data?.members

              }
            })

      }
    })
    /*  let params = {
      group_id: 1,

    }; */
    // this.$request.post("/group/get_group_members", params).then((res) => {
    // that.$request.post("/group/get_groups").then((res) => {
    //   if (res.data.code == 0) {
    //     console.log("列表是", res.data);
    //     data.group_id = res.data.groups[0].GroupID;
    //     console.log("group_id是", data.group_id);
    //     let params = {
    //       group_id: data.group_id,
    //     };

    //     that.$request
    //         .post("/group/get_group_members", params)
    //         .then((res) => {
    //           if (res.data.code == 0) {
    //             console.log("此团对成员", res.data);
    //             data.studentInfo = res.data.members;
    //           } else {
    //             console.log("登录信息是20", res);
    //           }
    //         }); // localStorage.setItem("token",res.data.token);
    //     //  this.$router.push({name:'home'})
    //   } else {
    //     console.log("信息是2", res);
    //   }
    // });
  },
  // 关闭详情弹窗
  closeDetail() {
    data.detailShow = false;
  },
});



</script>
<style scoped>
/deep/ .el-table__body .el-table__row.hover-row td {
  background-color: #FFF8E8 !important;
}

/deep/ .el-table th {
  font-family: Inria Sans;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0px;
}

/deep/ .el-table__row {
  font-family: Nunito Sans;
  font-weight: bold;
  font-size: 15px;
  line-height: normal;
  letter-spacing: -0.25px;
  text-align: left;
}

.operate_img {
  height: 20px;
  width: 20px;
}

#group_message {
  height: 120px;
  margin-bottom: 28px;
  margin-top: 17px;
  position: relative;
}

#group_name {
  margin-left: 122px;
  margin-top: 35px;
  color: #000000;
  font-family: Inria Sans;
  font-weight: bold;
  font-size: 30px;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  position: absolute;
}

#group_intro {
  margin-left: 272px;
  margin-top: 46px;
  color: #000000;
  font-family: Nunito Sans;
  font-size: 15px;
  line-height: normal;
  letter-spacing: -0.25px;
  text-align: left;
  position: absolute;
}

.add_mem_input {
  margin-top: 39px;
  margin-left: 540px;
}

.add_mem_input:deep(.el-input__inner) {
  height: 46px !important;
  width: 350px !important;
}

.add_mem_btn {
  border-radius: 16px !important;
  background: #2772F0 !important;
  height: 46px;
  width: 154px;
  margin-top: 39px;
}

.add_mem_btn_img {
  height: 20px;
  width: 20px;
}

.btn_font {
  color: #FFFFFF;
  font-family: Inria Sans;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
}

#title {
  height: 34px;
  width: 96px;
  margin-left: 90px;
  color: #000000;
  font-family: Inria Sans;
  font-weight: bold;
  font-size: 24px;
  line-height: 34px;
  letter-spacing: 0px;
  text-align: left;

}

#group_panel {
  margin-left: 64px;
  margin-top: 29px;
  width: 1172px;
  height: 609px;
  background-color: #ffffff;
  border-radius: 24px;
  padding-left: 5%;
  padding-top: 10px;
}

#panel_title {
  position: relative;
  height: 98px;
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
  margin-top: 38px;
  height: 24px;
  width: 40px;
}

.second {
  position: absolute;
  margin-left: 342px;
  margin-top: 38px;
  height: 24px;
  width: 40px;
}

.third {
  position: absolute;
  margin-left: 522px;
  margin-top: 38px;
  height: 24px;
  width: 40px;
}

.forth {
  position: absolute;
  margin-left: 808px;
  margin-top: 38px;
  height: 24px;
  width: 40px;
}

.fifth {
  position: absolute;
  margin-left: 984px;
  margin-top: 38px;
  height: 24px;
  width: 40px;
}

#panel_line {
  height: 3px;
  background: #091B3D;
  mix-blend-mode: normal;
  opacity: 0.05;
}

.person {
  height: 61px;
  width: 1080px;
  background-color: #FFF8E8;
  margin-left: 46px;
  border-radius: 26px;
  margin-top: 17px;
  margin-bottom: 17px;
  position: relative;
}

.content_font {
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: -0.25px;
}
</style>
