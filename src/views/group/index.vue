<template>
  <div id="group_up_blank"></div>
  <div id="group_up">
    <n-grid x-gap="12" :cols="16">
      <n-gi span="1">

      </n-gi>
      <n-gi span="1">
        <n-image src="svg\group_svg\home.svg" />
        <span id="group_name">团队名称</span>

      </n-gi>
      <n-gi span="2">

      </n-gi>
      <n-gi span="3">
        <el-button @click="handleClick()" class="add_group">
          <n-image src="svg\group_svg\add.svg" class="add_group_img"/>
          <span class="add_group_word">新建团队</span>
        </el-button>

      </n-gi>
      <!-- v-model:value="" -->
      <n-gi span="5">
        <n-input ref="inputInstRef" placeholder="输入成员昵称" clearable round size="large" style="margin-left: 19px" v-model:value="val">
          <template #prefix>
            <n-image src="svg\project_svg\search.svg"></n-image>
          </template>
        </n-input>
      </n-gi>
      <n-gi span="1">
      </n-gi>
      <n-gi span="3">
        <el-button round color="#2772F0" size="large" @click="addTodo">
          <template #icon>
            <n-icon>
              <n-image src="svg\project_svg\plus.svg" />
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
    <ul class="group_mem">
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
          <!--          <span v-if="changeDemo.show">-->
          <!--            <input type="text" v-model="changeDemo.val" class="tip_modify">-->
          <!--            <button @click="saveChange">保存</button>-->
          <!--          </span>-->
        </div>
      </li>
    </ul>
    <div id="del_all">
      <input type="checkbox" v-model="isAll" id="del_checkbox">
      <span class="del_font">全选</span>
      <span class="del_font">{{ selNum }}/{{ len }}</span>
      <button @click="delAll" id="del_btn">删除</button>
    </div>
  </div>

</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { defineComponent } from 'vue'
import { useMessage } from 'naive-ui'
import { useRouter} from 'vue-router'

const router = useRouter()
const handleClick = () => {
  router.push({
    path: 'NewGroup',
  })
}

interface todo {
  done: boolean,
  name: string,
  email: string,
  identity: string,
}
let val = ref('')
let todos = ref<todo[]>([])
// 增
const addTodo=function() {
  if (val.value) {
    todos.value.push({
      done: false,
      name: val.value,
      email: val.value+"@buaa.edu.cn",
      identity: "普通成员",
    })
    val.value = ''
  }
}
// 删
function deltodo(index: number) {
  todos.value.splice(index, 1)
}
// 全选功能实现
let len = computed<number>(() => todos.value.length)
let selNum = computed<number>(() => todos.value.filter(v => v.done).length)
let isAll = computed<boolean>({
  get() {
    return len.value === 0 ? false : len.value == selNum.value
  },
  set(val: boolean) {
    todos.value.forEach(v => { v.done = val })
  }
})
let changeDemo = ref({
  show: false,
  name: '',
  val: '管理员',
  changeIndex: -1
})
// 改
function changeTode(i: number) {
  const demo = todos.value[i]
  changeDemo.value = {
    show: true,
    name: demo.name,
    val: '管理员',
    changeIndex: i
  }
  saveChange();
}
function saveChange() {
  let { changeIndex, val } = changeDemo.value
  todos.value[changeIndex].identity = val
  changeDemo.value = {
    show: false,
    name: '',
    val: '',
    changeIndex: -1
  }
}
// 全选删除
function delAll() {
  if (isAll.value) {
    todos.value = []
  }
}
</script>

<style>

.add_group{
  height: 30px !important;
  border: none !important;
  background-color: transparent !important;
}

.add_group_img{
  height: 30px;
  width: 30px;
}

.add_group_word{
  margin-left: 32px;
  color: #000000;
  font-family: Inria Sans;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  position: absolute;
}

.add_group_word:hover{
  color: #F5B544 !important;
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
