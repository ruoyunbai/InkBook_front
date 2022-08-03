<template>
  <div id="group_message">
    <div id="group_name">团队名称</div>
    <div id="group_intro">团队简介</div>
    <el-form :model="dengmiQueryForm" ref="dengmiQueryForm" label-width="80px" class="demo-ruleForm" size="mini">
      <el-row>
        <el-col span="8">
          <el-form-item class="add_mem_input">
            <el-input  v-model="formData.nickname"></el-input>
          </el-form-item>
        </el-col>
        <el-col span="8">
          <el-form-item>
            <el-button type="primary" @click="addRow1" icon="el-icon-search" class="add_mem_btn">
              <n-image class="add_mem_btn_img" src="svg/group_svg/plus.svg"/>
              <div class="btn_font">
                邀请成员
              </div></el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
  <div id="title">全部成员</div>

  <div id="group_panel">
<!--    <div id="panel_title">-->
<!--      <div class="title_font first">昵称</div>-->
<!--      <div class="title_font second">姓名</div>-->
<!--      <div class="title_font third">邮箱</div>-->
<!--      <div class="title_font forth">身份</div>-->
<!--      <div class="title_font fifth">操作</div>-->
<!--    </div>-->
<!--    <div id="panel_line"></div>-->
<!--&lt;!&ndash;    admin&ndash;&gt;-->
<!--    <div class="person">-->
<!--      <div class="content_font first_c">Aer</div>-->
<!--      <div class="content_font second_c">某某</div>-->
<!--      <div class="content_font third_c">19241036@buaa.edu.cn</div>-->
<!--      <div class="content_font forth_c">管理员</div>-->
<!--    </div>-->
<!--&lt;!&ndash;    member&ndash;&gt;-->
<!--    <div class="person">-->
<!--      <div class="content_font first_c">Aer</div>-->
<!--      <div class="content_font second_c">某某</div>-->
<!--      <div class="content_font third_c">19241036@buaa.edu.cn</div>-->
<!--      <div class="content_font forth_c">管理员</div>-->
<!--    </div>-->
    <el-table
        :data="admin"
        style="width: 90%"
        :header-cell-style="{'text-align':'center', height:'80px'}"
        :row-style="{height:'55px'}"
        :cell-style="{'text-align':'center'}">
      <el-table-column prop="nickname" label="昵称" />
      <el-table-column prop="name" label="姓名" />
      <el-table-column prop="email" label="邮箱" />
      <el-table-column label="身份">管理员</el-table-column>
      <el-table-column fixed="right" label="操作">
        <template #default="{row}">
        </template>
      </el-table-column>

    </el-table>
    <el-table
        :data="studentInfo"
        :show-header="false"
        :header-cell-style="{'text-align':'center'}"
        :cell-style="{'text-align':'center'}"
        :row-style="{height:'55px'}"
        style="width: 90%">
      <el-table-column prop="nickname"   />
      <el-table-column prop="name"  />
      <el-table-column prop="email"  />
      <el-table-column   label="身份">普通成员</el-table-column>
      <el-table-column fixed="right" >
        <template #default="{row}">
          <el-button type="text" size="small" @click="handleDel(row)">
            <n-image class="operate_img" src="svg/group_svg/trash.svg" />
          </el-button>
          <el-button type="text" size="small" @click="handlejiru(row)">
            <n-image class="operate_img" src="svg/group_svg/manage.svg" />
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <Dialog
        v-if="dialogShow"
        v-model:dialogShow="dialogShow"
        :rowInfo="rowInfo"
        :title="title"
        :arrayNum="studentInfo.length"
        @addRow="addRow"
        @editRow="editRow"
    />
    <!-- 详情弹窗 -->
    <Detail v-if="detailShow" :rowInfo="rowInfo" @closeDetail="closeDetail" />
  </div>
</template>

<script>
import { reactive, ref, toRefs } from "vue";
import { ElMessageBox } from "element-plus";
import Dialog from "./dialog.vue";
import Detail from "./detail.vue";

export default {
  components: { Dialog, Detail },

  setup() {
    const data = reactive({
      dialogShow: false, // 新增/编辑弹框
      detailShow: false, // 详情弹窗
      rowInfo: {}, // 新增/编辑的数据
      title: "", // 是新建还是修改
      formData: {},
      admin: [
        {
          id: 1,
          nickname:"A",
          name: "AA",
          email: "AAA@qq.com",
          identity:"管理员",

        },
        {
          id: 2,
          nickname:"B",
          name: "BB",
          email: "BBB11@qq.com",
          identity:"管理员",

        },
      ],
      studentInfo: [
        {
          id: 1,
          nickname:"C",
          name: "CC",
          email: "CCC@qq.com",
          identity:"普通会员",
        },
        {
          id: 2,
          nickname:"D",
          name: "DD",
          email: "DDD@qq.com",
          identity:"普通会员",
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
        ElMessageBox.confirm("真的要删除他吗:(", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
            .then(() => {
              method.handleSure(val);
            })
            .catch(() => {
              // catch error
            });
      },
      handleSure(val) {
        this.dialogVisible = false;
        const index = data.studentInfo.findIndex((item) => item.id === val.id);
        data.studentInfo.splice(index, 1);
      },
      handlejiru(val) {
        this.dialogVisible = false;
        const index = data.studentInfo.findIndex((item) => item.id === val.id);
        data.studentInfo.splice(index, 1);
        data.admin.push(val);
      },

      // 添加行
      addRow(val) {
        data.studentInfo.push(val);
      },
      addRow1() {
        //data.formData["id"] = data.studentInfo.length + 1;
        let id=data.studentInfo.length + 1;
        let nickname=data.formData["nickname"];
        let newdata={id:id,nickname:nickname};
        data.studentInfo.push(newdata);
      },
      // 编辑行
      editRow(val) {
        let index = data.studentInfo.findIndex(
            (item, index) => item.id === val.id
        );
        data.studentInfo.splice(index, 1, val);
      },
      // 关闭详情弹窗
      closeDetail() {
        data.detailShow = false;
      },
    });
    return { ...toRefs(data), ...method };
  },
};
</script>

<style scoped>
/deep/ .el-table__body .el-table__row.hover-row td{
  background-color: #FFF8E8 !important;
}

/deep/ .el-table th{
  font-family: Inria Sans;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0px;
}

/deep/ .el-table__row{
  font-family: Nunito Sans;
  font-weight: bold;
  font-size: 15px;
  line-height: normal;
  letter-spacing: -0.25px;
  text-align: left;
}

.operate_img{
  height: 20px;
  width: 20px;
}

#group_message{
  height: 120px;
  margin-bottom: 28px;
  margin-top: 17px;
  position: relative;
}

#group_name{
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

#group_intro{
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

.add_mem_input{
  margin-top: 39px;
  margin-left: 540px;
}

.add_mem_input:deep(.el-input__inner){
  height: 46px !important;
  width: 350px !important;
}

.add_mem_btn{
  border-radius: 16px !important;
  background: #2772F0 !important;
  height: 46px;
  width: 154px;
  margin-top: 39px;
}

.add_mem_btn_img{
  height: 20px;
  width: 20px;
}

.btn_font{
  color: #FFFFFF;
  font-family: Inria Sans;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
}

#title{
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

#group_panel{
  margin-left: 64px;
  margin-top: 29px;
  width: 1172px;
  height: 609px;
  background-color: #ffffff;
  border-radius: 24px;
  padding-left: 5%;
  padding-top: 10px;
}

#panel_title{
  position: relative;
  height: 98px;
}

.title_font{
  font-family: 'Inria Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
}

.first{
  position: absolute;
  margin-left: 113px;
  margin-top: 38px;
  height: 24px;
  width: 40px;
}

.second{
  position: absolute;
  margin-left: 342px;
  margin-top: 38px;
  height: 24px;
  width: 40px;
}

.third{
  position: absolute;
  margin-left: 522px;
  margin-top: 38px;
  height: 24px;
  width: 40px;
}

.forth{
  position: absolute;
  margin-left: 808px;
  margin-top: 38px;
  height: 24px;
  width: 40px;
}

.fifth{
  position: absolute;
  margin-left: 984px;
  margin-top: 38px;
  height: 24px;
  width: 40px;
}

#panel_line{
  height: 3px;
  background: #091B3D;
  mix-blend-mode: normal;
  opacity: 0.05;
}

.person{
  height: 61px;
  width: 1080px;
  background-color: #FFF8E8;
  margin-left: 46px;
  border-radius: 26px;
  margin-top: 17px;
  margin-bottom: 17px;
  position: relative;
}

.content_font{
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: -0.25px;
}
</style>
