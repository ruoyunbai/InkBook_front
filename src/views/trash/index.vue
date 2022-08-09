<template>
  <div class="trash_head">
    <n-image src="svg\trash_svg\shape.svg" class="title_img"/>
    <div class="title_font">已删除内容(4)</div>
  </div>
  <div class="trash_body">
<!--    项目-->
    <div class="one_trash project">
      <div class="wrap">
        <div class="tip_first">项目名称</div>
        <div class="tip_second">项目描述</div>
        <div class="tip_btn">
          <n-button style=" width: 200px;height: 40px; border-radius: 12px; border: 1px solid #cdcdcd"
                    color="transparent" text-color="#2772F0">
            <n-image src="svg\trash_svg\recover.svg" />
            <span class="btn_font">恢复</span>
          </n-button>
        </div>
      </div>
    </div>
<!--    文档-->
    <div class="one_trash project">
      <div class="wrap">
        <div class="tip_first">文档名称</div>
        <div class="tip_btn">
          <n-button style=" width: 200px;height: 40px; border-radius: 12px; border: 1px solid #cdcdcd"
                    color="transparent" text-color="#2772F0">
            <n-image src="svg\trash_svg\recover.svg" />
            <span class="btn_font">恢复</span>
          </n-button>
        </div>
      </div>
    </div>
<!--    设计原型-->
    <div class="one_trash project">
      <div class="wrap">
        <div class="tip_first">设计原型名称</div>
        <div class="tip_btn">
          <n-button style=" width: 200px;height: 40px; border-radius: 12px; border: 1px solid #cdcdcd"
                    color="transparent" text-color="#2772F0">
            <n-image src="svg\trash_svg\recover.svg" />
            <span class="btn_font">恢复</span>
          </n-button>
        </div>
      </div>
    </div>
<!--    uml-->
    <div class="one_trash project">
      <div class="wrap">
        <div class="tip_first">UML图名称</div>
        <div class="tip_btn">
          <n-button style=" width: 200px;height: 40px; border-radius: 12px; border: 1px solid #cdcdcd"
                    color="transparent" text-color="#2772F0">
            <n-image src="svg\trash_svg\recover.svg" />
            <span class="btn_font">恢复</span>
          </n-button>
        </div>
      </div>
    </div>
  </div>

</template>

<script >
</script>

<style>

.btn_font{
  font-family: 'Inria Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  margin-left: 5px;
}

.trash_head{
  margin-top: 100px;
  margin-left: 100px;
  height: 40px;
  position: relative;
}

.title_img{
  margin-top: 5px;
  position: absolute;
}

.title_font{
  position: absolute;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  margin-left: 50px;
}

.trash_body{
  width: 94%;
  height: 600px;
  max-height: 600px;
  margin-left: 3%;
  margin-top: 50px;
  padding-top: 30px;
  background-color: #FFFFFF;
  border-radius: 24px;
  overflow-y: scroll;
}

.one_trash{
  width: 21%;
  height: 300px;
  margin-left: 40px;
  margin-top: 10px;
  margin-bottom: 10px;
  background: rgba(75,159,71, 0.1);
  mix-blend-mode: normal;
  border-radius: 24px;
  float: left;
}

.wrap{
  position: relative;
}

.tip_first{
  position: absolute;
  font-family: 'Inria Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  margin-left: 28px;
  margin-top: 63px;
}

.tip_second{
  position: absolute;
  font-family: 'Inria Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  margin-top: 120px;
  margin-left: 28px;
}

.tip_btn{
  margin-top: 220px;
  margin-left: 20px;
  position: absolute;
}

</style>
