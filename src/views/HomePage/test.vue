<template>
  <el-carousel height="645px" width="1440px">
    <el-carousel-item>
      <div class="slide">
        <n-grid x-gap="0" :cols="2" style="height: 100%">
          <n-gi style="margin: auto">
            <n-image src="svg\\homePage\\project.svg" />
          </n-gi>

          <n-gi style="height: 100%; width: 100%">
            <div style="position: relative; top: 160px; left: -40px">
              <n-image
                width="70"
                height="70"
                src="svg\\homePage\\blackStar.svg"
              />
            </div>
            <div class="slideTag">项目筛选</div>
            <div style="position: relative; top: 120px; left: 400px">
              <n-image
                width="90"
                height="90"
                src="svg\\homePage\\sphere_red.svg"
              />
            </div>
            <n-grid x-gap="0" :cols="2">
              <n-gi>
                <n-image
                  style="position: relative; top: 140px; left: 50px"
                  src="svg\\homePage\\sort.svg"
                />
                <div
                  style="position: relative; top: 170px; left: 50px"
                  class="slideContent"
                >
                  智能排序
                </div>
              </n-gi>

              <n-gi>
                <n-image
                  style="position: relative; top: 140px; left: -80px"
                  src="svg\\homePage\\search.svg"
                />
                <div
                  style="position: relative; top: 170px; left: -80px"
                  class="slideContent"
                >
                  项目搜索
                </div>
              </n-gi>
            </n-grid>
          </n-gi>
        </n-grid>
      </div>
    </el-carousel-item>
    <el-carousel-item>
      <div class="slide">
        <n-grid x-gap="0" :cols="2" style="height: 100%">
          <n-gi style="margin: auto">
            <n-image src="svg\\homePage\\uml.svg" />
          </n-gi>

          <n-gi style="height: 100%; width: 100%">
            <div style="position: relative; top: 160px; left: -40px">
              <n-image
                width="70"
                height="70"
                src="svg\\homePage\\blackStar.svg"
              />
            </div>
            <div class="slideTag">UML图绘制</div>
            <div style="position: relative; top: 120px; left: 400px">
              <n-image
                width="90"
                height="90"
                src="svg\\homePage\\sphere_red.svg"
              />
            </div>
            <n-grid x-gap="0" :cols="2">
              <n-gi>
                <n-image
                  style="position: relative; top: 140px; left: 50px"
                  src="svg\\homePage\\sort.svg"
                />
                <div
                  style="position: relative; top: 170px; left: 50px"
                  class="slideContent"
                >
                  项目分析
                </div>
              </n-gi>

              <n-gi>
                <n-image
                  style="position: relative; top: 140px; left: -80px"
                  src="svg\\homePage\\search.svg"
                />
                <div
                  style="position: relative; top: 170px; left: -80px"
                  class="slideContent"
                >
                  保存导出
                </div>
              </n-gi>
            </n-grid>
          </n-gi>
        </n-grid>
      </div>
    </el-carousel-item>
    <el-carousel-item>
      <div class="slide">
        <n-grid x-gap="0" :cols="2" style="height: 100%">
          <n-gi style="margin: auto">
            <n-image src="svg\\homePage\\trash.svg" />
          </n-gi>

          <n-gi style="height: 100%; width: 100%">
            <div style="position: relative; top: 160px; left: 0px">
              <n-image
                width="70"
                height="70"
                src="svg\\homePage\\blackStar.svg"
              />
            </div>
            <div class="slideTag" style="left: 130px">回收站</div>
            <div style="position: relative; top: 120px; left: 400px">
              <n-image
                width="90"
                height="90"
                src="svg\\homePage\\sphere_red.svg"
              />
            </div>
            <n-grid x-gap="0" :cols="2">
              <n-gi>
                <n-image
                  style="position: relative; top: 140px; left: 90px"
                  src="svg\\homePage\\trash1.svg"
                />
                <div
                  style="position: relative; top: 170px; left: 90px"
                  class="slideContent"
                >
                  防止误删
                </div>
              </n-gi>

              <n-gi>
                <n-image
                  style="position: relative; top: 140px; left: -40px"
                  src="svg\\homePage\\trash2.svg"
                />
                <div
                  style="position: relative; top: 170px; left: -40px"
                  class="slideContent"
                >
                  定时清理
                </div>
              </n-gi>
            </n-grid>
          </n-gi>
        </n-grid>
      </div>
    </el-carousel-item>
  </el-carousel>
  <!-- <el-carousel-item></el-carousel-item> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>

<style>

.el-carousel__button {
  height: 5px;
  width: 40px;
  border: none;
  background-color: rgb(84, 84, 84, 0.3);
}
.is-active .el-carousel__button {
  background: #8DCA8D;
}
.slide {
  width: 100%;
  height: 645px;
  background: rgba(235, 183, 98, 0.3);
  border-bottom: 1px solid #ebb762;
}
.slideTag {
  font-family: "KoHo";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 88px;
  letter-spacing: 0.03em;
  color: #263238;

  position: relative;
  top: 150px;
  left: 50px;
}

.slideContent {
  font-family: "KoHo";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.03em;

  color: #263238;
}
</style>
