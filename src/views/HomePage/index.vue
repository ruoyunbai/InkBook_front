<template>
  <!-- bacckgorund Layer -->
  <div style="position: relative">
    <div style="position: absolute; margin-left: -5px; left: 0; top: 0">
      <el-row>
        <el-col :span="12">
          <n-image preview-disabled
            style="top: 0px; left: -5px; width: 105%; margin-top: 10px"
            src="svg\homePage\Union-left.svg"
          />
        </el-col>
        <el-col :span="12">
          <n-image preview-disabled
            style="top: 0px; margin-left: -5px; width: 105%; margin-top: 10px"
            src="svg\homePage\Union-right.svg"
          />
        </el-col>
      </el-row>
    </div>
    <transition-group
      enter-active-class="animated backInLeft"
      appear-active-class="animated backInLeft"
    >
      <div
        style="
          position: absolute;
          margin-top: 70px;
          width: 100%;
          text-align: center;
        "
      >
        <n-image preview-disabled src="svg\homePage\top.svg" />
      </div>
    </transition-group>

    <div class="background">
      <div style="position: absolute; left: 0; top: 2350px">
        <n-image preview-disabled width="1600" src="svg\homePage\background1.svg" />
      </div>
      <div style="position: absolute; left: 80px; margin-top: 3730px">
        <n-image preview-disabled src="svg\homePage\circle.svg" />
      </div>
      <div style="position: absolute; left: 0px; margin-top: 3870px">
        <n-image preview-disabled src="svg\homePage\leftRec.svg" />
      </div>
      <div
        style="
          position: absolute;
          left: 0;
          margin-top: 3980px;
          margin-left: -10px;
        "
      >
        <n-image preview-disabled width="1640" src="svg\homePage\background2.svg" />
      </div>
    </div>
  </div>
  <!-- Header -->
  <div class="header" style="position: absolute; top: 0px; left: 0px">
    <n-grid x-gap="12" :cols="15">
      <n-gi span="1" align="right">
        <n-image preview-disabled
          width="32"
          height="32"
          style="margin-top: 20px"
          src="svg\homePage\Icon-1.svg"
        />
      </n-gi>
      <n-gi span="4">
        <span style="height: 70px; line-height: 70px">InkBook</span>
      </n-gi>
      <n-gi span="6"></n-gi>
      <n-gi span="2" align="right" style="margin-top:5px">
        <button @click="$router.push({path:'/logIn'})" class="headButton">??????</button>
      </n-gi>
      <n-gi span="2" align="left" style="margin-top:5px">
        <button @click="$router.push({path:'/signUp'})" class="headButton">??????</button>
      </n-gi>
    </n-grid>
  </div>
  <!-- First Page -->
  <!-- <div style="" class="topIcon">
    <n-grid x-gap="0" :cols="25">
      <n-gi span="11"></n-gi>
      <n-gi span="1">
        <n-image preview-disabled
          width="20"
          height="20"
          style="margin-top: 20px"
          src="svg\homePage\Group 84.svg"
        />
      </n-gi>
      <n-gi span="1">
        <n-image preview-disabled
          width="20"
          height="20"
          style="margin-top: 20px"
          src="svg\homePage\Vector.svg"
        />
      </n-gi>
      <n-gi span="1">
        <n-image preview-disabled
          width="20"
          height="20"
          style="margin-top: 20px"
          src="svg\homePage\earth.svg"
        />
      </n-gi>
    </n-grid>
  </div>
  <div style="position: absolute; top: 130px; left: 0px" class="title1">
    ??? <span style="font-style: italic">InkBook</span>,<br />
    ??????<span style="color: #ea9d82"> ???????????? </span
    ><span style="color: #8dca8d"> ???????????? </span>??????
  </div> -->
  <div class="page1">
    <div class="pic1">
      <!--style="position: absolute; top: 320px; left: 0px"-->
      <n-image preview-disabled src="svg\homePage\Union.svg" />
    </div>
    <div style="position: absolute; top: -30px; left: -180px" class="pic1">
      <n-image preview-disabled width="90" height="90" src="svg\homePage\sphere.svg" />
    </div>
    <div style="position: absolute; top: 230px; left: 680px" class="pic1">
      <n-image preview-disabled width="25" height="25" src="svg\homePage\sphere.svg" />
    </div>
    <div style="position: absolute; top: 270px; left: -630px" class="pic1">
      <n-image preview-disabled width="60" height="60" src="svg\homePage\sphere.svg" />
    </div>
    <div style="position: absolute; top: 610px; left: 350px" class="pic1">
      <n-image preview-disabled width="40" height="40" src="svg\homePage\sphere.svg" />
    </div>
    <div style="position: absolute; top: 710px; left: 1200px">
      <button @click="$router.push({path:'/logIn'})" class="headButton" style="background-color: #8dca8d">
        ????????????
      </button>
    </div>
  </div>

  <!-- Second Page -->
  <div class="belt" style="position: absolute; top: 1220px; left: 0px">
    <n-image preview-disabled
      width="40"
      height="40"
      style="margin: auto"
      src="svg\homePage\whiteStar.svg"
    />
    <transition-group
      name="posts"
      tag="p"
      enter-active-class="animate__animated animate__backInLeft"
      appear-active-class="animate__animated animate__backInLeft"
    >
    ???????????? ???????????? ???????????? ????????????
    </transition-group>
    <n-image preview-disabled
      width="40"
      height="40"
      style="margin: auto"
      src="svg\homePage\whiteStar.svg"
    />
  </div>

  <div class="page2">
    <div style="position: absolute; top: 60px; left: 1100px">
      <n-image preview-disabled width="40" height="40" src="svg\homePage\blackStar.svg" />
    </div>
    <div class="teamTitle" style="position: absolute; top: 70px; left: 0px">
      <span style="margin-left: -100px">????????? </span
      ><span style="color: #ea9d82"> ????????????</span><br />
      <span style="color: #8dc18d; margin-left: 100px">???????????? </span> ????????????
    </div>
    <div style="position: absolute; top: 440px; left: 100px">
      <n-image preview-disabled width="70" height="70" src="svg\homePage\sphere_red.svg" />
    </div>
    <div style="position: absolute; top: 360px; right: 130px">
      <n-image preview-disabled
        width="150"
        height="150"
        src="svg\homePage\sphere_purple.svg"
      />
    </div>
    <div style="position: absolute; top: 340px; left: 0px; width: 100%">
      <n-grid x-gap="0" :cols="3" style="justify-items: center; width: 100%">
        <n-gi
          sapn="3"
          class="teamIntro"
          style="margin-top: 100px; margin-right: -100px"
        >
          <n-image preview-disabled
            width="70"
            height="70"
            style="margin-left: 10px"
            src="svg\homePage\teamIcon.svg"
          />
          <div style="font-weight: 400; font-size: 30px; margin-left: 10px">
            ????????????
          </div>
          <div style="font-size: 16px">
            ?????????????????????????????????????????????<br />
            ????????????????????????????????????????????????<br />
            ????????????????????? ????????????????????????
          </div>
          <button @click="$router.push({path:'/logIn'})" class="headButton" style="background-color: #8dca8d">
            ?????????
          </button>
        </n-gi>
        <n-gi sapn="3" class="teamIntro">
          <n-image preview-disabled
            width="70"
            height="70"
            style="margin-left: 10px"
            src="svg\homePage\newIcon.svg"
          />
          <div style="font-weight: 400; font-size: 30px; margin-left: 10px">
            ????????????
          </div>
          <div style="font-size: 16px">
            ???????????????????????????????????????<br />
            ???????????????????????????????????????<br />
            ??????????????????????????????????????????
          </div>
          <button @click="$router.push({path:'/logIn'})" class="headButton" style="background-color: #8dca8d">
            ?????????
          </button>
        </n-gi>
        <n-gi
          sapn="3"
          class="teamIntro"
          style="margin-top: 100px; margin-left: -100px"
        >
          <n-image preview-disabled
            width="70"
            height="70"
            style="margin-left: 10px"
            src="svg\homePage\changeIcon.svg"
          />
          <div style="font-weight: 400; font-size: 30px; margin-left: 10px">
            ????????????
          </div>
          <div style="font-size: 16px">
            ???????????????<br />
            ?????????????????????<br />
            ???????????????????????????
          </div>
          <button @click="$router.push({path:'/logIn'})" class="headButton" style="background-color: #8dca8d">
            ?????????
          </button>
        </n-gi>
      </n-grid>
    </div>

    <div style="position: absolute; top: 380px; left: 22%; width: 100%">
      <n-image preview-disabled width="300" src="svg\homePage\leftLine.svg" />
    </div>
    <div style="position: absolute; top: 350px; left: 22%; width: 100%">
      <n-image preview-disabled
        width="300"
        style="margin-left: 465px"
        src="svg\homePage\rightLine.svg"
      />
    </div>
  </div>

  <!-- Third Page -->
  <div class="page3">
    <div style="position: absolute; top: 80px; left: 0px">
      <n-image preview-disabled
        width="942.5"
        style="margin-left: 465px"
        src="svg\homePage\purple1.svg"
      />
    </div>
    <div style="position: absolute; top: 40px; left: 850px">
      <n-image preview-disabled src="svg\homePage\upLine.svg" />
    </div>
    <div
      class="introContent"
      style="position: absolute; top: 80px; left: 850px"
    >
      ???????????? ????????????<br />
      ???????????? ????????????<br />
      ???????????? ????????????
    </div>
    <button @click="$router.push({path:'/logIn'})"
      class="headButton"
      style="
        position: absolute;
        top: 190px;
        left: 850px;
        background-color: #8dca8d;
      "
    >
      ???????????????
    </button>
    <div style="position: absolute; top: 230px; left: 180px">
      <n-image preview-disabled src="svg\homePage\tagLine.svg" />
    </div>
    <div class="introTitle" style="position: absolute; top: 200px; left: 200px">
      ????????????<br />
      <div style="color: #8dca8d">??????????????????</div>
    </div>
    <div style="position: absolute; top: 270px; left: 440px">
      <n-image preview-disabled src="svg\homePage\stroke.svg" />
    </div>
    <div style="position: absolute; top: 220px; left: 600px">
      <n-image preview-disabled width="30" src="svg\homePage\purpleCircle.svg" />
    </div>
    <div style="position: absolute; top: 450px; left: 180px">
      <n-image preview-disabled src="svg\homePage\prototype.svg" />
    </div>
  </div>

  <!-- Fourth Page -->
  <div style="position: absolute; top: 3950px; right: 100px">
    <n-image preview-disabled src="svg\homePage\sphere_red.svg" />
  </div>
  <div class="page4">
    <div style="position: absolute; top: 60px; left: -300px">
      <n-image preview-disabled
        width="1136"
        style="margin-left: 465px"
        src="svg\homePage\purple2.svg"
      />
    </div>
    <div style="position: absolute; top: 0px; right: 150px">
      <n-image preview-disabled src="svg\homePage\tagLine.svg" />
    </div>
    <div style="position: absolute; top: -20px; right: 580px">
      <n-image preview-disabled width="30" src="svg\homePage\purpleCircle.svg" />
    </div>
    <div
      class="introTitle"
      style="position: absolute; top: -30px; right: 170px; text-align: right"
    >
      ????????????<br />
      <div style="color: #8dca8d">??????????????????</div>
    </div>
    <div style="position: absolute; top: 50px; right: 400px">
      <n-image preview-disabled src="svg\homePage\stroke.svg" />
    </div>
    <div style="position: absolute; top: 340px; left: 300px">
      <n-image preview-disabled src="svg\homePage\myProject.svg" />
    </div>
    <div style="position: absolute; top: 700px; right: 230px">
      <n-image preview-disabled src="svg\homePage\upLine.svg" />
    </div>
    <div
      class="introContent"
      style="position: absolute; top: 740px; right: 200px"
    >
      ???????????? ????????????<br />
      ???????????? ????????????<br />
      ???????????? ????????????
    </div>
    <button @click="$router.push({path:'/logIn'})"
      class="headButton"
      style="
        position: absolute;
        top: 850px;
        right: 225px;
        background-color: #8dca8d;
      "
    >
      ???????????????
    </button>
  </div>

  <!-- Slides * 3 -->
  <div style="position: absolute; top: 5600px; width: 100%;">
    <el-carousel height="600px" width="1440px" autoplay>
    <el-carousel-item>
      <div class="slide">
        <n-grid x-gap="0" :cols="2" style="height: 100%">
          <n-gi style="margin: auto">
            <n-image preview-disabled src="svg\homePage\project.svg" />
          </n-gi>

          <n-gi style="height: 100%; width: 100%">
            <div style="position: relative; top: 160px; left: -40px">
              <n-image preview-disabled
                width="70"
                height="70"
                src="svg\homePage\blackStar.svg"
              />
            </div>
            <div class="slideTag">????????????</div>
            <div style="position: relative; top: 120px; left: 400px">
              <n-image preview-disabled
                width="90"
                height="90"
                src="svg\homePage\sphere_red.svg"
              />
            </div>
            <n-grid x-gap="0" :cols="2">
              <n-gi>
                <n-image preview-disabled
                  style="position: relative; top: 140px; left: 50px"
                  src="svg\homePage\sort.svg"
                />
                <div
                  style="position: relative; top: 170px; left: 50px"
                  class="slideContent"
                >
                  ????????????
                </div>
              </n-gi>

              <n-gi>
                <n-image preview-disabled
                  style="position: relative; top: 140px; left: -80px"
                  src="svg\homePage\search.svg"
                />
                <div
                  style="position: relative; top: 170px; left: -80px"
                  class="slideContent"
                >
                  ????????????
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
            <n-image preview-disabled src="svg\homePage\uml.svg" />
          </n-gi>

          <n-gi style="height: 100%; width: 100%">
            <div style="position: relative; top: 160px; left: -40px">
              <n-image preview-disabled
                width="70"
                height="70"
                src="svg\homePage\blackStar.svg"
              />
            </div>
            <div class="slideTag">UML?????????</div>
            <div style="position: relative; top: 120px; left: 400px">
              <n-image preview-disabled
                width="90"
                height="90"
                src="svg\homePage\sphere_red.svg"
              />
            </div>
            <n-grid x-gap="0" :cols="2">
              <n-gi>
                <n-image preview-disabled
                  style="position: relative; top: 140px; left: 50px"
                  src="svg\homePage\sort.svg"
                />
                <div
                  style="position: relative; top: 170px; left: 50px"
                  class="slideContent"
                >
                  ????????????
                </div>
              </n-gi>

              <n-gi>
                <n-image preview-disabled
                  style="position: relative; top: 140px; left: -80px"
                  src="svg\homePage\search.svg"
                />
                <div
                  style="position: relative; top: 170px; left: -80px"
                  class="slideContent"
                >
                  ????????????
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
            <n-image preview-disabled src="svg\homePage\trash.svg" />
          </n-gi>

          <n-gi style="height: 100%; width: 100%">
            <div style="position: relative; top: 160px; left: 0px">
              <n-image preview-disabled
                width="70"
                height="70"
                src="svg\homePage\blackStar.svg"
              />
            </div>
            <div class="slideTag" style="left: 130px">?????????</div>
            <div style="position: relative; top: 120px; left: 400px">
              <n-image preview-disabled
                width="90"
                height="90"
                src="svg\homePage\sphere_red.svg"
              />
            </div>
            <n-grid x-gap="0" :cols="2">
              <n-gi>
                <n-image preview-disabled
                  style="position: relative; top: 140px; left: 90px"
                  src="svg\homePage\trash1.svg"
                />
                <div
                  style="position: relative; top: 170px; left: 90px"
                  class="slideContent"
                >
                  ????????????
                </div>
              </n-gi>

              <n-gi>
                <n-image preview-disabled
                  style="position: relative; top: 140px; left: -40px"
                  src="svg\homePage\trash2.svg"
                />
                <div
                  style="position: relative; top: 170px; left: -40px"
                  class="slideContent"
                >
                  ????????????
                </div>
              </n-gi>
            </n-grid>
          </n-gi>
        </n-grid>
      </div>
    </el-carousel-item>
  </el-carousel>
  </div>

  <!-- Footer -->
  <div style="position: absolute; top: 6220px; width: 100%; text-align: center;" >
    <n-image preview-disabled src="svg\homePage\bottomLabel.svg" />
  </div>
  <div style="position: absolute; top: 6570px;  width: 100%; text-align: center;">
    <button @click="$router.push({path:'/signUp'})" class="headButton" style="background-color:white; color:#8dc18d">????????????</button>
  </div>
</template>

<script lang="ts" setup>
import Vue from "vue";
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

.background {
  position: absolute;
  width: 100%;
  left: 0;
  top: 2350;
}
.header {
  justify-items: center;
  align: center;
  height: 70px;
  width: 100%;
  /* margin-top: 10px; */

  font-family: "Inria Sans";
  font-weight: bold;
  font-size: 32px;
  justify-content: center;

  background-color: white;
}

.page1 {
  position: absolute;
  top: 380px;
  left: 0px;
  width: 100%;
}

.page2 {
  position: absolute;
  top: 1410px;
  left: 0px;
  width: 100%;
}

.page3 {
  position: absolute;
  top: 2590px;
  left: 0px;
  width: 100%;
}

.page4 {
  position: absolute;
  top: 4140px;
  left: 0px;
  width: 100%;
}

.slide {
  width: 100%;
  height: 600px;
  background: rgba(235, 183, 98, 0.1);
}

.headButton {
  border-radius: 8px;
  border: none;
  height: 40px;
  width: 128px;

  text-align: center;
  color: white;
  font-family: "Roboto";
  font-weight: bold;
  font-size: 16px;
  justify-content: center;

  background-color: rgb(245, 181, 68);
}

.topIcon {
  position: absolute;
  top: 70px;
  left: 0px;
  display: inline;
  align: center;
  width: 100%;
  height: 20px;
}

.title1 {
  line-height: 69px;
  width: 100%;
  font-family: "Roboto";
  weight: 800;
  font-size: 64px;
  color: #1e344f;

  text-align: center;
  letter-spacing: 0.05em;
}

.pic1 {
  text-align: center;
  width: 100%;
  height: 800px;
}

.belt {
  width: 100%;
  height: 120px;
  display: inline-flex;
  align-items: center;
  text-align: center;

  background-color: #8dca8d;
  line-height: 56px;
  letter-spacing: -0.03em;
  font-family: "Roboto";
  font-weight: 700;
  font-size: 44px;
  color: white;
}

.teamTitle {
  width: 100%;
  font-family: "Roboto";
  font-weight: 700;
  font-size: 70px;
  line-height: 82px;
  /* identical to box height */

  text-align: center;
  letter-spacing: 0.05em;

  color: #1e344f;
}

.teamIntro {
  box-sizing: border-box;
  width: 324px;
  height: 412px;
  line-height: 35px;
  background: linear-gradient(
    126.3deg,
    #ffffff 62%,
    rgba(255, 255, 255, 0.76) 127.91%
  );
  backdrop-filter: blur(215px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 18px;
  padding: 25px;

  font-family: "Roboto";
  font-weight: 100;
  font-size: 16px;
  line-height: 48px;

  letter-spacing: 0.05em;

  color: #000000;
  opacity: 0.7;
}

.introContent {
  font-family: "Roboto";
  font-weight: 700;
  font-size: 18px;
  line-height: 29px;
}
.introTitle {
  font-family: "Roboto";
  font-weight: 700;
  font-size: 64px;
  line-height: 88px;

  letter-spacing: 0.05em;
  color: #1e344f;
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