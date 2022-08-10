<template>
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
</template>

<script>
export default {
  name: "file_trash"
}
</script>

<style>

.center_head{
  margin-top: 50px;
}

.title_font{
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 34px;
  margin-left: 10px;
}

.btn_font{
  font-family: 'Inria Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  margin-left: 5px;
}

.center_mid{
  position: relative;
  margin-top: 30px;
}

.center_edit{
  position: absolute;
  margin-left: 5%;
  width: 60%;
  background-color: #FFFFFF;
  height: 800px;
  border-radius: 24px;
}

.center_menu{
  position: absolute;
  margin-left: 70%;
  width: 25%;
  background-color: #FFFFFF;
  height: 780px;
  border-radius: 24px;
  padding-top: 20px;
}

.add_btn_font{
  font-family: 'Inria Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
}

.add_btn{
  position: absolute;
  z-index: 5;
  margin-left: 76%;
  margin-top: 750px;
}

</style>
