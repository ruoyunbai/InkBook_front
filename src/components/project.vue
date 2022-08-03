<template>
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
                        @click="routerToPersonalInfo"
                    >
                      <p class="buttonText2">
                          <router-link to="/projectDetail">进入项目</router-link>
                        </p>
                    </n-button>

                    <n-button
                        round
                        size="large"
                        color="#DADADA"
                        ghost
                        style="margin:5px 10px 10px 10px"
                        @click="showPromptBox"
                    >
                      <p class="buttonText2">编辑信息</p>
                    </n-button>
                    
                  </n-space>
                </div>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$prompt('请输入项目名称', '编辑项目信息', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '项目名称是 ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消修改'
          });       
        });
      }
    }
  }
// import $ from "jquery";
// export default {
//   data() {
//     return {};
//   },
//   mounted() {
//     console.log("输出this.$layer", this.$layer);
//   },
//   methods: {
//     showPromptBox() {
//       this.$layer.prompt(
//         {
//           title: "个人信息",
//           formType: 0, //输入框类型，支持0（文本）默认1（密码）2（多行文本）
//           value: "", //初始时的值，默认空字符
//           maxlength: 140, //可输入文本的最大长度，默认500
//           area: ["400px", "270px"], //自定义文本域宽高
//           scrollbar: false,
//         },
//         (age, index) => {
//           if ($("#username").val() == "" || age == "") {
//             this.$message.warning("姓名和年龄不能为空");
//             return;
//           } else {
//             console.log(
//               `获取弹框的信息 姓名：${$("#username").val()} 年龄：${age}`
//             );
//             this.$layer.close(index);
//           }
//         }
//       );
//       // 往class=vl-input元素前插入
//       $(".vl-input").before(
//         `<div style="margin-bottom:8px">姓名</div><input id="username" data-v-6c69dd9a type="text" style="margin-bottom:10px" class="vl-input"/><div style="margin-bottom:8px">年龄</div>`
//       );
//     },
//   },
// };

</script>

<style>
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
</style>