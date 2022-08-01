<template>
  <Header></Header>
  <n-layout embedded content-style="padding: 15px 40px 15px 40px;"
    ><!--背景暗一些 突出上面的卡片-->
    <div class="card">
      <n-space vertical size="large"
        ><!--和layout has-sider组合使用-->
        <n-layout has-sider>
          <n-layout-sider content-style="padding: 45px 0px 0px 65px;">
            <n-space vertical align="center">
              <n-avatar round :size="100" :src="Ava"></n-avatar>
              <span class="NAME">{{ Name }}</span>
            </n-space>
          </n-layout-sider>

          <n-layout>
            <n-layout-header content-style="padding: 48px;"></n-layout-header>
            <n-layout-content content-style="padding: 18px;"></n-layout-content>
            <n-layout-content content-style="padding:0px;padding-top: 5px;">
              <n-grid :cols="11">
                <n-gi offset="1">
                  <div class="level">Lev {{ Level }}</div>
                </n-gi>
                <n-gi offset="3">
                  <div class="level">Lev {{ Level + 1 }}</div>
                </n-gi>
              </n-grid>
            </n-layout-content>
            <n-layout-content content-style="padding: 2px;">
              <n-grid :cols="11">
                <n-gi offset="1" span="5">
                  <div style="padding-top: 6px">
                    <n-progress
                      type="line"
                      status="warning"
                      :percentage="percentage"
                      :show-indicator="false"
                      :indicator-placement="'inside'"
                    />
                  </div>
                </n-gi>

                <n-gi offset="1" span="4">
                  <n-button
                    round
                    strong
                    color="#7C76BB"
                    ghost
                    style="margin-right: 25px"
                    @click="routerToLevel"
                    v-show="isSelf"
                  >
                    <p class="buttonText2">查看等级权限</p>
                  </n-button>

                  <n-button
                    round
                    strong
                    color="#7C76BB"
                    ghost
                    @click="routerToExperience"
                    v-show="isSelf"
                  >
                    <p class="buttonText2">经验值获取规则</p>
                  </n-button>
                </n-gi>
              </n-grid>
            </n-layout-content>

            <n-layout-content content-style="padding: 40px 40px 30px 40px;">
              <n-grid :cols="16">
                <n-gi offset="1">
                  <n-icon size="50">
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="25" cy="25" r="25" fill="#FFD52F" />
                      <path
                        d="M20.0538 13.9389C20.0427 13.9481 19.8018 14.1485 19.5614 14.4334L19.5996 14.4656L19.5614 14.4334C19.2015 14.8599 19.013 15.2703 19.013 15.6523C19.013 16.0686 19.1492 16.4206 19.3905 16.6687C19.6319 16.917 19.9749 17.0575 20.3809 17.0575C20.787 17.0575 21.1299 16.917 21.3714 16.6687C21.6127 16.4206 21.7489 16.0686 21.7489 15.6523C21.7489 15.2703 21.5604 14.8599 21.2005 14.4334L21.1623 14.4656L21.2005 14.4334C20.96 14.1485 20.7192 13.9481 20.7082 13.9389L20.7081 13.9389C20.5183 13.7818 20.2436 13.7818 20.0538 13.9389ZM20.0538 13.9389L20.0856 13.9774L20.0537 13.9389C20.0537 13.9389 20.0538 13.9389 20.0538 13.9389ZM30.7562 16.6687C30.5148 16.917 30.1718 17.0575 29.7658 17.0575C29.3598 17.0575 29.0168 16.917 28.7754 16.6687C28.5341 16.4206 28.3979 16.0686 28.3978 15.6523C28.3978 15.2703 28.5863 14.8599 28.9462 14.4334C29.1864 14.1488 29.427 13.9485 29.4386 13.9389C29.4386 13.9389 29.4386 13.9389 29.4386 13.9389L29.4705 13.9774L30.7562 16.6687ZM30.7562 16.6687C30.9975 16.4206 31.1337 16.0686 31.1337 15.6523M30.7562 16.6687L31.1337 15.6523M31.1337 15.6523C31.1337 15.2703 30.9453 14.8599 30.5853 14.4334C30.3449 14.1485 30.1041 13.9481 30.093 13.9389L31.1337 15.6523ZM25.0734 15.98C25.5134 15.98 25.8847 15.8276 26.1461 15.5585C26.4073 15.2896 26.5549 14.908 26.5549 14.4563C26.5549 14.0406 26.3472 13.5905 25.9497 13.1195C25.6812 12.8013 25.4128 12.578 25.4006 12.5679C25.2107 12.4107 24.936 12.4107 24.7462 12.5679C24.734 12.578 24.4656 12.8013 24.1971 13.1195C23.7996 13.5905 23.5919 14.0406 23.5919 14.4563C23.5919 14.908 23.7395 15.2896 24.0007 15.5585C24.262 15.8276 24.6334 15.98 25.0734 15.98ZM25.074 13.6749C25.1886 13.8011 25.2979 13.9391 25.3808 14.0718C25.4737 14.2204 25.5287 14.355 25.5287 14.4563C25.5287 14.6371 25.4897 14.7592 25.4186 14.8362C25.3483 14.9124 25.2379 14.9538 25.0734 14.9538C24.9089 14.9538 24.7985 14.9124 24.7282 14.8362C24.6571 14.7592 24.6181 14.6371 24.6181 14.4563C24.6181 14.3559 24.6732 14.2216 24.7663 14.0727C24.8495 13.9399 24.9591 13.8015 25.074 13.6749ZM37.6837 34.3719H35.6145V25.5026C35.6145 24.0331 34.419 22.8376 32.9495 22.8376H30.9628V17.7265C30.9628 17.4431 30.7331 17.2134 30.4497 17.2134H29.0819C28.7985 17.2134 28.5688 17.4431 28.5688 17.7265V22.8376H26.3612V16.9795C26.3612 16.6961 26.1315 16.4664 25.8481 16.4664H24.2986C24.0152 16.4664 23.7855 16.6961 23.7855 16.9795V22.8376H21.578V17.7265C21.578 17.4431 21.3482 17.2134 21.0649 17.2134H19.697C19.4137 17.2134 19.1839 17.4431 19.1839 17.7265V22.8376H17.1973C15.7278 22.8376 14.5323 24.0331 14.5323 25.5026V34.3719H12.4631C12.1797 34.3719 11.95 34.6016 11.95 34.885V37.0369C11.95 37.3203 12.1797 37.55 12.4631 37.55H37.6837C37.9671 37.55 38.1968 37.3203 38.1968 37.0369V34.885C38.1968 34.6016 37.9671 34.3719 37.6837 34.3719ZM29.595 22.8376V18.2395H29.9367V22.8376H29.595ZM24.8117 22.8376V17.4925H25.3351V22.8376H24.8117ZM20.2101 22.8376V18.2395H20.5518V22.8376H20.2101ZM37.1706 35.3981L37.1706 36.5239H12.9761V35.3981H37.1706ZM32.9495 23.8637C33.8531 23.8637 34.5883 24.599 34.5883 25.5026V34.3719H15.5585V25.5026C15.5585 24.599 16.2937 23.8637 17.1973 23.8637H32.9495ZM20.3809 15.0539C20.4694 15.1558 20.5508 15.2629 20.6122 15.3636C20.6833 15.4803 20.7227 15.5809 20.7227 15.6523C20.7227 15.7954 20.6934 15.8876 20.6415 15.9444C20.5906 16.0001 20.509 16.0314 20.381 16.0314C20.2529 16.0314 20.1713 16.0001 20.1204 15.9444C20.0686 15.8876 20.0392 15.7954 20.0392 15.6523C20.0392 15.5809 20.0786 15.4802 20.1497 15.3635C20.2111 15.2628 20.2925 15.1557 20.3809 15.0539ZM29.7658 15.0539C29.8543 15.1558 29.9357 15.2629 29.9971 15.3636C30.0682 15.4803 30.1076 15.5809 30.1076 15.6523C30.1076 15.7954 30.0782 15.8876 30.0264 15.9444C29.9755 16.0001 29.8939 16.0314 29.7658 16.0314C29.6378 16.0314 29.5561 16.0001 29.5052 15.9444C29.4534 15.8876 29.424 15.7954 29.424 15.6523C29.424 15.5809 29.4635 15.4802 29.5346 15.3635C29.596 15.2628 29.6774 15.1557 29.7658 15.0539Z"
                        fill="#242424"
                        stroke="#242424"
                        stroke-width="0.1"
                      />
                    </svg>
                  </n-icon>
                </n-gi>
                <n-gi span="2">
                  <div class="info">年龄：{{ Age }}</div>
                </n-gi>
                <n-gi>
                  <n-icon size="50">
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="25" cy="25" r="25" fill="#FFD52F" />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M21.5 22.5C21.5 20.567 23.067 19 25 19C26.933 19 28.5 20.567 28.5 22.5C28.5 24.433 26.933 26 25 26C23.067 26 21.5 24.433 21.5 22.5ZM25 21C24.1716 21 23.5 21.6716 23.5 22.5C23.5 23.3284 24.1716 24 25 24C25.8284 24 26.5 23.3284 26.5 22.5C26.5 21.6716 25.8284 21 25 21Z"
                        fill="#152C70"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M28.3307 34.4319C32.2161 33.0599 35 29.355 35 25C35 19.4772 30.5228 15 25 15C19.4772 15 15 19.4772 15 25C15 29.355 17.7839 33.0599 21.6693 34.4319C22.5201 34.7843 23.611 35 25 35C26.3889 35 27.4798 34.7843 28.3307 34.4319ZM25 17C20.5817 17 17 20.5817 17 25C17 27.1106 17.8173 29.0302 19.1527 30.4598C19.9332 28.9504 21.4916 28 23.1943 28H26.806C28.5086 28 30.0669 28.9503 30.8475 30.4596C32.1828 29.0301 33 27.1105 33 25C33 20.5817 29.4183 17 25 17ZM27.6147 32.5629C28.0486 32.3753 28.3306 32.1555 28.5144 31.9634C28.791 31.6741 28.9106 31.3796 28.9621 31.1883C28.4982 30.4536 27.6865 30 26.806 30H23.1943C22.3137 30 21.502 30.4536 21.0381 31.1883C21.0896 31.3796 21.2091 31.6742 21.4857 31.9634C21.6695 32.1555 21.9514 32.3753 22.3853 32.5629C23.2046 32.8462 24.0843 33 25 33C25.9156 33 26.7954 32.8462 27.6147 32.5629Z"
                        fill="#152C70"
                      />
                    </svg>
                  </n-icon>
                </n-gi>
                <n-gi span="2">
                  <div class="info">性别：{{ Gender }}</div>
                </n-gi>
                <n-gi>
                  <n-icon size="50">
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="25" cy="25" r="25" fill="#FFD52F" />
                      <path
                        d="M32.25 16H17.75C16.233 16 15 17.234 15 18.752V31.247C15 32.765 16.233 34 17.75 34H32.25C33.767 34 35 32.765 35 31.247V18.752C35 17.234 33.767 16 32.25 16ZM17.75 17.5H32.25C32.94 17.5 33.5 18.06 33.5 18.75V19.464L25.45 24.831C25.177 25.011 24.824 25.013 24.55 24.829L16.5 19.464V18.75C16.5 18.06 17.06 17.5 17.75 17.5V17.5ZM32.25 32.498H17.75C17.06 32.498 16.5 31.938 16.5 31.248V21.222L23.74 26.052C24.123 26.308 24.562 26.436 25 26.436C25.44 26.436 25.877 26.308 26.26 26.053L33.5 21.223V31.245C33.5 31.935 32.94 32.495 32.25 32.495V32.498Z"
                        fill="#242424"
                      />
                    </svg>
                  </n-icon>
                </n-gi>
                <n-gi span="5">
                  <div class="info">电子邮件：{{ Email }}</div>
                </n-gi>
<!--                <n-gi span="1">-->
<!--                  <n-button class="ban" size="large" v-show="isSelf && isadmin">-->
<!--                    <p class="buttonText3">升级</p>-->
<!--                  </n-button>-->
<!--                </n-gi>-->
<!--                <n-gi style="padding-left: 25px">-->
<!--                  <n-button class="ban" size="large" v-show="isSelf && isadmin">-->
<!--                    <p class="buttonText3">降级</p>-->
<!--                  </n-button>-->
<!--                </n-gi>-->
              </n-grid>
            </n-layout-content>
          </n-layout>
        </n-layout>
      </n-space>
      <n-space vertical align="center" v-show="!isSelf && isadmin">
        <n-button
          class="ban"
          @click="handleValidateButtonClick3"
          size="large"
          v-show="!isSelf && isadmin"
        >
          <p class="buttonText3">禁言用户</p>
        </n-button>
      </n-space>

      <n-grid :cols="12" v-show="isSelf">
        <n-gi offset="1">
          <n-button
            color="#E27F86"
            size="large"
            @click="UserExit"
            style="border-radius: 10px"
            v-show="isSelf"
          >
            <p class="buttonText3">退出登录</p>
          </n-button>
        </n-gi>
        <n-gi offset="2">
          <n-button
            color="#F48023"
            ghost
            round
            size="large"
            @click="routerToChangeProfile"
            v-show="isSelf"
          >
            <n-icon size="22" color="#F48023">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.47475 2.59424C4.69939 2.59424 2.44952 4.69978 2.44952 7.29711V16.7028C2.44952 19.3002 4.6994 21.4057 7.47475 21.4057H17.5252C20.3006 21.4057 22.5504 19.3002 22.5504 16.7028V12C22.5504 11.4805 22.1005 11.0594 21.5454 11.0594C20.9903 11.0594 20.5403 11.4805 20.5403 12V16.7028C20.5403 18.2612 19.1904 19.5246 17.5252 19.5246H7.47475C5.80954 19.5246 4.45961 18.2612 4.45961 16.7028V7.29711C4.45961 5.73871 5.80954 4.47539 7.47475 4.47539H12.5C13.0551 4.47539 13.505 4.05428 13.505 3.53481C13.505 3.01535 13.0551 2.59424 12.5 2.59424H7.47475Z"
                  fill="#F48023"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.7485 4.2808C19.5234 3.13429 17.5371 3.13429 16.312 4.2808L9.16788 10.9667C8.78146 11.3283 8.50733 11.7814 8.37479 12.2776L7.50478 15.5344C7.41916 15.8549 7.51951 16.1939 7.76914 16.4276C8.01878 16.6612 8.38108 16.7551 8.72358 16.675L12.2036 15.8608C12.7338 15.7367 13.2179 15.4802 13.6044 15.1186L20.7485 8.43269C21.9736 7.28618 21.9736 5.42731 20.7485 4.2808ZM17.7334 5.61097C18.1735 5.19909 18.8871 5.19909 19.3272 5.61097C19.7673 6.02285 19.7673 6.69064 19.3272 7.10252L12.183 13.7884C12.0542 13.9089 11.8928 13.9944 11.7161 14.0358L9.86112 14.4698L10.3249 12.7338C10.369 12.5684 10.4604 12.4174 10.5892 12.2968L17.7334 5.61097Z"
                  fill="#F48023"
                />
              </svg>
            </n-icon>
            <span class="buttonText">&nbsp;修改个人信息</span>
          </n-button>
        </n-gi>
        <n-gi offset="1">
          <n-button
            color="#F48023"
            ghost
            round
            size="large"
            @click="routerToChangePassword"
            v-show="isSelf"
          >
            <n-icon size="22" color="white">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.47475 2.59424C4.69939 2.59424 2.44952 4.69978 2.44952 7.29711V16.7028C2.44952 19.3002 4.6994 21.4057 7.47475 21.4057H17.5252C20.3006 21.4057 22.5504 19.3002 22.5504 16.7028V12C22.5504 11.4805 22.1005 11.0594 21.5454 11.0594C20.9903 11.0594 20.5403 11.4805 20.5403 12V16.7028C20.5403 18.2612 19.1904 19.5246 17.5252 19.5246H7.47475C5.80954 19.5246 4.45961 18.2612 4.45961 16.7028V7.29711C4.45961 5.73871 5.80954 4.47539 7.47475 4.47539H12.5C13.0551 4.47539 13.505 4.05428 13.505 3.53481C13.505 3.01535 13.0551 2.59424 12.5 2.59424H7.47475Z"
                  fill="#F48023"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.7485 4.2808C19.5234 3.13429 17.5371 3.13429 16.312 4.2808L9.16788 10.9667C8.78146 11.3283 8.50733 11.7814 8.37479 12.2776L7.50478 15.5344C7.41916 15.8549 7.51951 16.1939 7.76914 16.4276C8.01878 16.6612 8.38108 16.7551 8.72358 16.675L12.2036 15.8608C12.7338 15.7367 13.2179 15.4802 13.6044 15.1186L20.7485 8.43269C21.9736 7.28618 21.9736 5.42731 20.7485 4.2808ZM17.7334 5.61097C18.1735 5.19909 18.8871 5.19909 19.3272 5.61097C19.7673 6.02285 19.7673 6.69064 19.3272 7.10252L12.183 13.7884C12.0542 13.9089 11.8928 13.9944 11.7161 14.0358L9.86112 14.4698L10.3249 12.7338C10.369 12.5684 10.4604 12.4174 10.5892 12.2968L17.7334 5.61097Z"
                  fill="#F48023"
                />
              </svg>
            </n-icon>
            <span class="buttonText">&nbsp;修改账户密码</span>
          </n-button>
        </n-gi>
      </n-grid>
      <n-divider />

      <n-space vertical size="large" class="downDivider"
        ><!--和layout has-sider组合使用-->
        <n-layout has-sider>
          <n-layout content-style="padding: 0px 100px 15px 120px;">
            <n-layout-header>
              <div>
                <n-icon size="40">
                  <svg
                    width="38"
                    height="29"
                    viewBox="0 0 38 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.97689 15.8968C3.66827 14.19 3.20959 12.1721 3.68699 10.222C4.16439 8.27198 5.54503 6.52393 7.56961 5.30619C9.59418 4.08845 12.1234 3.48482 14.6822 3.60865C17.2411 3.73249 19.6535 4.57527 21.4664 5.97873C23.2793 7.38218 24.368 9.24973 24.528 11.2306C24.6879 13.2116 23.9082 15.1695 22.3352 16.7368C20.7621 18.3042 18.5041 19.373 15.9851 19.7426C13.4661 20.1121 10.8595 19.757 8.65474 18.744L5.02067 19.5462C4.87094 19.5788 4.7127 19.5799 4.56222 19.5494C4.41174 19.519 4.27445 19.4581 4.16447 19.3729C4.05448 19.2878 3.97578 19.1815 3.93645 19.065C3.89711 18.9485 3.89857 18.826 3.94067 18.7101L4.97689 15.8968Z"
                      stroke="#594545"
                      stroke-width="1.34409"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.4415 19.8737C13.9559 21.009 14.7896 22.0417 15.8824 22.8972C16.9752 23.7526 18.2999 24.4095 19.7606 24.8203C21.2213 25.2311 22.7817 25.3856 24.329 25.2726C25.8762 25.1597 27.3718 24.7821 28.7075 24.1671V24.1671L32.3416 24.9692C32.4914 25.0018 32.6496 25.003 32.8001 24.9725C32.9506 24.9421 33.0878 24.8811 33.1978 24.796C33.3078 24.7109 33.3865 24.6046 33.4258 24.4881C33.4652 24.3716 33.4637 24.2491 33.4216 24.1332L32.3854 21.3199C33.3105 20.1177 33.8188 18.751 33.8611 17.3521C33.9033 15.9532 33.4781 14.5695 32.6266 13.3352C31.7751 12.1009 30.5261 11.0578 29.0008 10.307C27.4755 9.55623 25.7255 9.12316 23.9205 9.0498"
                      stroke="#594545"
                      stroke-width="1.34409"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </n-icon>
                <span class="subtitle">&nbsp;&nbsp;已发布的帖子</span>
              </div>
            </n-layout-header>
            <n-layout-content content-style="padding: 0px 30px 0px 0px;">
              <!-- 帖子  -->
              <Posting
                v-for="(item, i) in onpoList"
                :key="i"
                :onePost="item"
              ></Posting>
              <!-- <Post v-show="IfRead" :onePost="posttest"></Post> -->
              <n-space vertical align="center">
                <n-pagination
                  v-model:page="posPage"
                  :item-count="npost"
                  :page-size="3"
                  class="pageNum"
                  :on-update:page="posPageHandler"
                >
                  <template #prev>
                    <n-icon>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 6L9 12L15 18"
                          stroke="#242730"
                          stroke-opacity="0.36"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </n-icon>
                  </template>
                  <template #next>
                    <n-icon>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 6L15 12L9 18"
                          stroke="#242730"
                          stroke-opacity="0.36"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </n-icon>
                  </template>
                </n-pagination>
              </n-space>
            </n-layout-content>
          </n-layout>

          <n-layout-sider :width="500" content-style="padding-right:134px;">
            <n-layout-content
              content-style="padding-top: 11px;padding-bottom:10px;"
            >
              <n-icon size="25">
                <svg
                  width="17"
                  height="20"
                  viewBox="0 0 17 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.8591 8.6C12.8591 7.64522 12.3593 6.72955 11.4697 6.05442C10.5801 5.37928 9.37354 5 8.11545 5C6.85736 5 5.6508 5.37928 4.76119 6.05442C3.87159 6.72955 3.37182 7.64522 3.37182 8.6C3.37182 12.8 1 14 1 14H15.2309C15.2309 14 12.8591 12.8 12.8591 8.6Z"
                    stroke="#808080"
                    stroke-width="1.34409"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.55145 17.7383C9.41134 17.9458 9.21023 18.1181 8.96825 18.2378C8.72628 18.3576 8.45194 18.4206 8.1727 18.4206C7.89346 18.4206 7.61912 18.3576 7.37715 18.2378C7.13517 18.1181 6.93406 17.9458 6.79395 17.7383"
                    stroke="#808080"
                    stroke-width="1.34409"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <circle
                    cx="11.8887"
                    cy="5.04032"
                    r="4.36828"
                    fill="#77C5EA"
                    stroke="white"
                    stroke-width="1.34409"
                  />
                </svg>
              </n-icon>
              <span class="subtitle2"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;消息通知</span
              >
            </n-layout-content>
            <n-layout-content>
              <!-- 评论了...赞了...回复了... -->

              <n-card content-style="padding: 0;">
                <n-tabs
                  type="segment"
                  :animated="true"
                  :on-update:value="switchTab"
                >
                  <n-tab-pane name="SystemNotif" tab="系统消息">
                    <Sysmes
                      v-for="(item, i) in onsysmesList"
                      :key="i"
                      :Notif="item"
                    ></Sysmes>
                  </n-tab-pane>
                  <n-tab-pane name="LoveNotif" tab="点赞">
                    <Notification
                      v-for="(item, i) in onlikeList"
                      :key="i"
                      :Notif="item"
                    ></Notification>
                  </n-tab-pane>
                  <n-tab-pane name="CommentNotif" tab="评论">
                    <Notification
                      v-for="(item, i) in oncomList"
                      :key="i"
                      :Notif="item"
                    ></Notification>
                  </n-tab-pane>
                </n-tabs>
                <n-space vertical align="center">
                  <n-pagination
                    v-model:item-count="mesat"
                    :page-size="5"
                    class="pageNum"
                    v-model:page="mesPage"
                    :on-update:page="mesPageHandler"
                  >
                    <template #prev>
                      <n-icon>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15 6L9 12L15 18"
                            stroke="#242730"
                            stroke-opacity="0.36"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </n-icon>
                    </template>
                    <template #next>
                      <n-icon>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 6L15 12L9 18"
                            stroke="#242730"
                            stroke-opacity="0.36"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </n-icon>
                    </template>
                  </n-pagination>
                </n-space>
              </n-card>
            </n-layout-content>
          </n-layout-sider>
        </n-layout>
      </n-space>

      <n-divider />
      <!-- <template #footer> -->
      <n-space vertical size="large" v-if="!isadmin && isSelf && isGreen">
        <el-dialog v-model="greenOut" width="33%" center>
          <span id="notice"
            >恭喜你完成所有新手任务！祝你在论坛能够收获你想要的知识和快乐！</span
          >
          <template #footer>
            <span>
              <n-button
                @click="greenOutHandler"
                type="warning"
                round
                size="medium"
                color="#F48023"
                style="border-radius: 10px; margin-left: 30px"
              >
                <span class="buttonText3">我会好好加油的！</span>
              </n-button>
              <!-- <el-button type="primary" @click="routerToPersonalInfo"
                    >退出</el-button
                    > -->
            </span>
          </template>
        </el-dialog>
        <n-layout has-sider>
          <n-layout-sider
            :width="800"
            content-style="padding-left:134px;"
            style="position: relative"
          >
            <n-layout-content content-style="padding: 15px;">
              <span class="subtitle"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;新手礼包</span
              >
            </n-layout-content>
            <n-space vertical align="center">
              <n-image
                src="svg/普通用户个人信息svg/Group39799.svg"
                style="padding-bottom: 20px"
              ></n-image>
            </n-space>
            <n-image
              src="svg/普通用户个人信息svg/check.svg"
              class="check"
              style="top: 126px"
              id="check1"
            ></n-image>
            <n-image
              src="svg/普通用户个人信息svg/check.svg"
              class="check"
              style="top: 192px"
              id="check2"
              v-show="check2"
            ></n-image>
            <n-image
              src="svg/普通用户个人信息svg/check.svg"
              class="check"
              style="top: 257px"
              id="check3"
              v-show="check3"
            ></n-image>
            <div class="expText" style="left: 472px; top: 125px" id="exp51">
              +5
            </div>
            <div class="expText" style="left: 491px; top: 195px" id="exp52">
              +5
            </div>
            <div class="expText" style="left: 469px; top: 259px" id="exp53">
              +5
            </div>
          </n-layout-sider>

          <n-layout content-style="padding: 15px;padding-right:134px;">
            <n-image
              preview-disabled
              class="bg2"
              src="svg/个人信息svg/bg.svg"
            />
          </n-layout>
        </n-layout>
      </n-space>

      <n-space vertical size="large" v-show="isadmin && isSelf"
        ><!--和layout has-sider组合使用-->
        <n-layout has-sider v-show="isadmin && isSelf">
          <n-layout-sider :width="500" content-style="padding-left:134px;">
            <n-layout-content content-style="padding: 15px;">
              <n-icon size="18">
                <svg
                  width="24"
                  height="19"
                  viewBox="0 0 24 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.859 0C8.71379 0 5.69746 1.00089 3.47349 2.78253C1.24942 4.56404 0 6.98048 0 9.5C0 12.0195 1.24942 14.4359 3.47349 16.2175C5.69738 17.9991 8.71387 19 11.859 19C15.0042 19 18.0206 17.9991 20.2446 16.2175C22.4686 14.436 23.7181 12.0195 23.7181 9.5C23.7181 7.83249 23.1701 6.19423 22.1293 4.75003C21.0883 3.30584 19.5914 2.10668 17.7885 1.27272C15.9857 0.438965 13.9406 0 11.859 0ZM13.9598 13.4879L13.8152 13.8757C13.7908 13.9433 13.7408 14.0032 13.6723 14.0472C12.856 14.5487 11.8102 14.7456 10.8005 14.588L10.8091 14.5786C10.7828 14.5749 10.7565 14.5716 10.7302 14.5663C10.313 14.4833 9.95397 14.2711 9.73229 13.9761C9.51043 13.6812 9.44392 13.3278 9.54749 12.9936L10.6742 9.35584C10.9443 8.48378 9.75036 8.69132 9.25534 8.81126C9.2148 8.82093 9.17079 8.81205 9.14085 8.78793C9.11107 8.76394 9.09998 8.72869 9.11223 8.69622L9.25683 8.30842C9.28131 8.24083 9.33128 8.18092 9.39977 8.13692C10.2162 7.63543 11.2618 7.43847 12.2717 7.59607C12.2717 7.59607 12.3341 7.60482 12.3655 7.61105C12.7828 7.69401 13.1416 7.90633 13.3633 8.20123C13.5851 8.49611 13.6516 8.84957 13.5481 9.18369L12.3633 13.0091C12.3104 13.6669 13.3599 13.4836 13.8167 13.3728C13.8573 13.3631 13.9014 13.372 13.9312 13.3961C13.9612 13.4201 13.9721 13.4554 13.9598 13.4879ZM12.9154 7.07541C12.4657 7.07541 12.0344 6.93228 11.7164 6.67767C11.3984 6.42294 11.2198 6.07745 11.2198 5.71719C11.2198 5.35698 11.3984 5.01145 11.7164 4.75685C12.0344 4.50213 12.4657 4.35898 12.9154 4.35898C13.3651 4.35898 13.7962 4.50211 14.1142 4.75672C14.4322 5.01144 14.6109 5.35694 14.6109 5.71719C14.6109 6.07741 14.4322 6.42294 14.1142 6.67767C13.7962 6.93227 13.3651 7.07541 12.9154 7.07541Z"
                    fill="#5AA8D7"
                  />
                </svg>
              </n-icon>
              <span class="subtitle"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;已禁言的用户
              </span>
            </n-layout-content>

            <n-space vertical align="center">
              <n-space vertical>
                <buser
                v-for="(item, i) in onbanList"
                :key="i"
                :buser="item"></buser>
              </n-space>

              <!-- 被禁言的用户 -->
              <n-pagination  :page-size="3" :item-count="nban" :page-slot="5" class="pageNum" v-model:page="banPage">
                <template #prev>
                  <n-icon>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 6L9 12L15 18"
                        stroke="#242730"
                        stroke-opacity="0.36"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </n-icon>
                </template>
                <template #next>
                  <n-icon>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 6L15 12L9 18"
                        stroke="#242730"
                        stroke-opacity="0.36"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </n-icon>
                </template>
              </n-pagination>
            </n-space>
          </n-layout-sider>

          <n-layout content-style="padding: 15px;padding-right:134px;">
            <n-layout-header> </n-layout-header>
            <n-layout-content content-style="padding: 100px;">
            </n-layout-content>
            <n-layout-content>
              <n-button
                color="#5AA8D7"
                round
                size="large"
                @click="ModifyGreenbird"
              >
                <n-icon size="22" color="white">
                  <svg
                    width="25"
                    height="23"
                    viewBox="0 0 25 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.03536 1.88135C4.26 1.88135 2.01013 3.98689 2.01013 6.58422V15.99C2.01013 18.5873 4.26 20.6928 7.03536 20.6928H17.0858C19.8612 20.6928 22.111 18.5873 22.111 15.99V11.2871C22.111 10.7676 21.6611 10.3465 21.106 10.3465C20.5509 10.3465 20.101 10.7676 20.101 11.2871V15.99C20.101 17.5483 18.751 18.8117 17.0858 18.8117H7.03536C5.37015 18.8117 4.02022 17.5483 4.02022 15.99V6.58422C4.02022 5.02582 5.37015 3.7625 7.03536 3.7625H12.0606C12.6157 3.7625 13.0656 3.34139 13.0656 2.82192C13.0656 2.30246 12.6157 1.88135 12.0606 1.88135H7.03536Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M20.3091 3.56791C19.084 2.4214 17.0977 2.42139 15.8726 3.56791L8.72849 10.2538C8.34207 10.6154 8.06794 11.0685 7.9354 11.5647L7.06539 14.8215C6.97977 15.142 7.08012 15.4811 7.32975 15.7147C7.57939 15.9483 7.94169 16.0422 8.28419 15.9621L11.7642 15.1479C12.2944 15.0238 12.7786 14.7673 13.165 14.4057L20.3091 7.7198C21.5342 6.57329 21.5342 4.71442 20.3091 3.56791ZM17.294 4.89808C17.7341 4.4862 18.4477 4.4862 18.8878 4.89808C19.3279 5.30996 19.3279 5.97775 18.8878 6.38963L11.7436 13.0755C11.6148 13.196 11.4534 13.2816 11.2767 13.3229L9.42173 13.7569L9.88548 12.0209C9.92965 11.8555 10.021 11.7045 10.1498 11.5839L17.294 4.89808Z"
                      fill="white"
                    />
                  </svg>
                </n-icon>
                <span class="buttonText3">&nbsp;修改新手上路</span>
              </n-button>
            </n-layout-content>
            <n-image
              preview-disabled
              class="bg"
              src="../../../public/svg/个人信息svg/bg.svg"
            />
          </n-layout>
        </n-layout>
      </n-space>
      <!-- </template> -->
    </div>
  </n-layout>
</template>

<script setup lang="ts">
import { onMounted, Ref, reactive, onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";
import {
  FormInst,
  FormItemInst,
  FormItemRule,
  useMessage,
  FormRules,
} from "naive-ui";
import Header from "../../components/block/header/index.vue";
import Main from "../../components/block/main/index.vue";
import Post from "../../components/block/post/OuterPost/index.vue";
import Posting from "../../components/posting/index.vue";
import Notification from "../../components/Notification/index.vue";
import Sysmes from "../../components/sysmes/index.vue";
import buser from "../../components/banneduser/index.vue";

import { useUserStore } from "../../store/User";
import { useBlockStore } from "../../store/Block";
import axios from "axios";
import { gsap } from "gsap";
import { AnyKindOfDictionary } from "lodash";
import { defineComponent, ref } from "vue";
import { ElMessageBox } from "element-plus";


const User = useUserStore();
const page = ref(2);
const posPage=ref(0)
const IfEdit: Ref<boolean> = ref(false);
const IfRead: Ref<boolean> = ref(true);
const checked: Ref<boolean> = ref(false);

const check2 = ref<boolean>(false);
const check3 = ref<boolean>(false);
const greenOut = ref<boolean>(false);

const router = useRouter();
const route = useRoute();
const isadmin = ref<boolean>(false);
const isSelf = ref<boolean>(false);
const isGreen = ref<boolean>(true);

let polist: any[] = reactive([]);
let sysmeslist: any[] = reactive([]);
let likelist: any[] = reactive([]);
let comlist: any[] = reactive([]);
let banlist: any[] = reactive([]);

const onpoList: any[] = reactive([]);
const onsysmesList: any[] = reactive([]);
const onlikeList: any[] = reactive([]);
const oncomList: any[] = reactive([]);
const onbanList: any[] = reactive([]);

const postPage = ref<number>(1);
const mesPage = ref<number>(1);
const banPage = ref<number>(1);
let sysPage = 1;
let likePage = 1;
let commentPage = 1;

const atTab = ref<string | number>("SystemNotif");

const Ava: any = ref("");
const Name: any = ref("");
const Age: any = ref("");
const Gender: any = ref("");
const Email: any = ref("");
const Level: any = ref();
const Exp: any = ref();
const percentage: any = ref(67);
let npost = ref<number>(0);
let nlike = ref<number>(0);
let ncomment = ref<number>(0);
let nsysmes = ref<number>(0);
let mesat = ref<number>(0);
let nban = ref<number>(0);

let countt = 0;
// const in_id:any=ref("");

const greenOutHandler = () => {
  greenOut.value = false;
  isGreen.value = false;
};

const switchTab = (value: string | number) => {
  atTab.value = value;
  switch (value) {
    case "SystemNotif": {
      mesat.value = nsysmes.value;
      mesPage.value = sysPage;
      break;
    }
    case "LoveNotif": {
      mesat.value = nlike.value;
      mesPage.value = likePage;
      break;
    }
    case "CommentNotif": {
      mesat.value = ncomment.value;
      mesPage.value = commentPage;
      break;
    }
  }
};

const mesPageHandler = (page: number) => {
  let i = (page - 1) * 5;
  switch (atTab.value) {
    case "SystemNotif": {
      onsysmesList.length = 0;
      for (; i < page * 5; ++i) {
        if (i >= sysmeslist.length) {
          break;
        }
        onsysmesList.push(sysmeslist[i]);
      }
      sysPage = page;
      break;
    }
    case "LoveNotif": {
      onlikeList.length = 0;
      for (; i < page * 5; ++i) {
        if (i >= likelist.length) {
          break;
        }
        onlikeList.push(likelist[i]);
      }
      likePage = page;
      break;
    }
    case "CommentNotif": {
      oncomList.length = 0;
      for (; i < page * 5; ++i) {
        if (i >= comlist.length) {
          break;
        }
        oncomList.push(comlist[i]);
      }
      commentPage = page;
      break;
    }
  }
  mesPage.value=page
};

const posPageHandler = (page: number) => {
  let i = (page - 1) * 3;
  onpoList.length = 0;
  for (; i < page * 3; ++i) {
    if (i >= polist.length) {
      break;
    }
    onpoList.push(polist[i]);
  }
};

onBeforeMount(() => {
  let block = useBlockStore();
  block.block = "";
  block.section = -1;
});
onMounted(() => {
  let in_id = route.query.user_id as string;
  localStorage.setItem("nowID", in_id);
  let t2 = localStorage.getItem("user_ID");
  if (t2 == "9982443") {
    isadmin.value = true;
  } else {
    isadmin.value = false;
  }
  axios.post("post/get_banned_users").then(function (response) {
    console.log(response);
    let i = 0;
    if (response.data?.success) {
      if (response.data.data != null)
        for (i = 0; i < response.data.data.length; i++) {
          let temp = reactive({
            avatar: response.data.users[i].avatar_url,
            name: response.data.users[i].name,
          });
          banlist.push(temp);
        }
      for (i = 0; i < 4; ++i) {
        if (i >= banlist.length) {
          break;
        }
        onbanList.push(banlist[i]);
      }
      console.log(banlist);
    } else {
      message.error("查询失败...");
    }
  });

  if (t2 == in_id) {
    axios.post("/user/info", { user_id: t2 }).then(function (response) {
      console.log(response);
      if (response.data?.status) {
        Name.value = response.data.data.user_name;
        Age.value = response.data.data.age;
        Gender.value = response.data.data.sex;
        Email.value = response.data.data.email;
        Level.value = response.data.data.level;
        Ava.value = response.data.data.avatar_url;
        Exp.value = response.data.data.exp;
        isGreen.value = response.data.data.isnoob;
        console.log(response.data.data);
        console.log(response.data.data.avatar_url);
        console.log(Level.value);
        console.log(Ava.value);

        switch (Level.value) {
          case 0:
            percentage.value = 0;
            console.log("bug:basic Level is 1!");
            break;
          case 1:
            percentage.value = ((Exp.value * 100) / 30).toFixed();

            break;
          case 2:
            percentage.value = ((Exp.value * 100) / 60).toFixed();
            break;
          case 3:
            percentage.value = ((Exp.value * 100) / 150).toFixed();
            break;
          case 4:
            percentage.value = ((Exp.value * 100) / 450).toFixed();
            break;
          case 5:
            percentage.value = ((Exp.value * 100) / 1050).toFixed();
            break;
          case 6:
            percentage.value = ((Exp.value * 100) / 2100).toFixed();
            break;
          case 7:
            percentage.value = ((Exp.value * 100) / 3600).toFixed();
            break;
          case 8:
            percentage.value = ((Exp.value * 100) / 5500).toFixed();
            break;
          case 9:
            percentage.value = ((Exp.value * 100) / 10500).toFixed();
            break;
          default:
            console.log("bad Level" + percentage.value + " " + Level.value);
        }
      } else {
        message.error("查询失败...");
      }
      isSelf.value = true;
      console.log(isGreen.value);
      if (isGreen.value && !isadmin.value) {
        axios.post("/portal/get_green", { user_id: t2 }).then((response) => {
          console.log(response.data);
          check2.value = response.data.completeuserinfo;
          check3.value = response.data.uploaduseravatar;
          if (check2.value && check3.value) {
            greenOut.value = true;
            axios.post("/portal/check_noob", { user_id: t2 });
          }
        });
      }
    });
    axios
    .post("portal/get_user_message", {
      user_id: t2,
      offset: 0,
      length: 100,
    })
    .then(function (response) {
      console.log(response);
      if (response.data?.success) {
        nsysmes.value = response.data.count;
        console.log(nsysmes);
        let i = 0;
        if (response.data.data != null)
          for (i = 0; i < response.data.data.length; i++) {
            let temp = reactive({
              type: response.data.data[i].type,
              exp: response.data.data[i].times,
              time: response.data.data[i].date,
            });
            sysmeslist.push(temp);
          }
        console.log(sysmeslist);
        for (i = 0; i < 5; ++i) {
          if (i >= sysmeslist.length) {
            break;
          }
          onsysmesList.push(sysmeslist[i]);
        }
        mesat.value = nsysmes.value;
      } else {
        message.error("查询失败...");
      }
    });
  axios
    .post("portal/get_notifications", {
      user_id: t2,
      offset: 0,
      length: 100,
      type: 0, //点赞
    })
    .then(function (response) {
      console.log(response.data);
      if (response.data?.success) {
        nlike.value = response.data.count;
        console.log(nlike);
        // polist.values = response.data.data;
        let i = 0;
        // if (countt == 0) {
        //   message.success("你还没有发表过帖子");
        // }
        if (response.data.data != null)
          for (i = 0; i < response.data.data.length; i++) {
            let temp = reactive({
              title: response.data.data[i].notification.title,
              time: response.data.data[i].notification.create_time,
              username: response.data.data[i].notification.username,
              type: response.data.data[i].notification.type,
              user_avatar: response.data.data[i].user_avatar,
            });
            likelist.push(temp);
          }
        console.log(likelist);
        for (i = 0; i < 5; ++i) {
          if (i >= likelist.length) {
            break;
          }
          onlikeList.push(likelist[i]);
        }
      } else {
        message.error("查询失败...");
      }
    });

  axios
    .post("portal/get_notifications", {
      user_id: t2,
      offset: 0,
      length: 100,
      type: 1, //评论
    })
    .then(function (response) {
      console.log(response);
      if (response.data?.success) {
        ncomment.value = response.data.count;
        console.log(nlike);
        // polist.values = response.data.data;
        let i = 0;
        if (response.data.data != null) countt = response.data.data.length;
        console.log(countt);
        // if (countt == 0) {
        //   message.success("你还没有发表过帖子");
        // }
        if (response.data.data != null)
          for (i = 0; i < response.data.data.length; i++) {
            let temp = reactive({
              title: response.data.data[i].notification.title,
              time: response.data.data[i].notification.create_time,
              username: response.data.data[i].notification.username,
              type: response.data.data[i].notification.type,
              user_avatar: response.data.data[i].user_avatar,
            });
            comlist.push(temp);
          }
        console.log(comlist);
        for (i = 0; i < 5; ++i) {
          if (i >= comlist.length) {
            break;
          }
          oncomList.push(comlist[i]);
        }
      } else {
        message.error("查询失败...");
      }
    });

  axios
    .post("post/get_user_posts", {
      user_id: t2,
      offset: 0,
      length: 100,
    })
    .then(function (response) {
      console.log(response);
      if (response.data?.success) {
        npost.value = response.data.count;
        console.log(npost);
        // polist.values = response.data.data;
        let i = 0;
        if (response.data.data != null) countt = response.data.data.length;
        console.log(countt);
        if (countt == 0) {
          message.success("你还没有发表过帖子");
        }
        if (response.data.data != null)
          for (i = 0; i < response.data.data.length; i++) {
            let temp = reactive({
              tags: response.data.data[i].tags.map((tag: any) => {
                return tag.name;
              }),
              title: response.data.data[i].post.title,
              content: response.data.data[i].post.content,
              watches: response.data.data[i].post.views,
              comments: response.data.data[i].post.comment,
              ups: response.data.data[i].post.like,
            });
            polist.push(temp);
          }
        console.log(polist);
        for (i = 0; i < 3; ++i) {
          if (i >= polist.length) {
            break;
          }
          onpoList.push(polist[i]);
        }
      } else {
        message.error("查询失败...");
      }
    });

  axios.post("portal/get_banned_users").then(function (response) {
    console.log(response);
    let i = 0;
    if (response.data?.success) {
      if (response.data.users != null)
        for (i = 0; i < response.data.users.length; i++) {
          let temp = reactive({
            avatar: response.data.users[i].avatar_url,
            name: response.data.users[i].user_name,
            user_id:response.data.users[i].user_id,
          });
          banlist.push(temp);
        }
        for(i=0;i<4;++i)
        {
          if(i>=banlist.length)
          {
            break;
          }
          onbanList.push(banlist[i])
        }
      console.log(banlist);
    } else {
      message.error("查询已禁言用户失败...");
    }
  });


  } else {
    axios.post("/user/info", { user_id: in_id }).then(function (response) {
      console.log(response);
      if (response.data?.status) {
        Name.value = response.data.data.user_name;
        Age.value = response.data.data.age;
        Gender.value = response.data.data.sex;
        Email.value = response.data.data.email;
        Level.value = response.data.data.level;
        Ava.value = response.data.data.avatar_url;
        Exp.value = response.data.data.exp;
        console.log(response.data.data);
        console.log(response.data.data.avatar_url);
        console.log(Level.value);
        console.log(Ava.value);

        switch (Level.value) {
          case 0:
            percentage.value = 0;
            console.log("bug:basic Level is 1!");
            break;
          case 1:
            percentage.value = ((Exp.value * 100) / 30).toFixed();
            break;
          case 2:
            percentage.value = ((Exp.value * 100) / 60).toFixed();
            break;
          case 3:
            percentage.value = ((Exp.value * 100) / 150).toFixed();
            break;
          case 4:
            percentage.value = ((Exp.value * 100) / 450).toFixed();
            break;
          case 5:
            percentage.value = ((Exp.value * 100) / 1050).toFixed();
            break;
          case 6:
            percentage.value = ((Exp.value * 100) / 2100).toFixed();
            break;
          case 7:
            percentage.value = ((Exp.value * 100) / 3600).toFixed();
            break;
          case 8:
            percentage.value = ((Exp.value * 100) / 5500).toFixed();
            break;
          case 9:
            percentage.value = ((Exp.value * 100) / 10500).toFixed();
            break;
          default:
            console.log("bad Level" + percentage.value + " " + Level.value);
        }
      } else {
        message.error("查询失败...");
      }
      isSelf.value = false;
    });
    axios
    .post("portal/get_user_message", {
      user_id: in_id,
      offset: 0,
      length: 100,
    })
    .then(function (response) {
      console.log(response);
      if (response.data?.success) {
        nsysmes.value = response.data.count;
        console.log(nsysmes);
        let i = 0;
        if (response.data.data != null)
          for (i = 0; i < response.data.data.length; i++) {
            let temp = reactive({
              type: response.data.data[i].type,
              exp: response.data.data[i].times,
              time: response.data.data[i].date,
            });
            sysmeslist.push(temp);
          }
        console.log(sysmeslist);
        for (i = 0; i < 5; ++i) {
          if (i >= sysmeslist.length) {
            break;
          }
          onsysmesList.push(sysmeslist[i]);
        }
        mesat.value = nsysmes.value;
      } else {
        message.error("查询失败...");
      }
    });
  axios
    .post("portal/get_notifications", {
      user_id: in_id,
      offset: 0,
      length: 100,
      type: 0, //点赞
    })
    .then(function (response) {
      console.log(response.data);
      if (response.data?.success) {
        nlike.value = response.data.count;
        console.log(nlike);
        // polist.values = response.data.data;
        let i = 0;
        // if (countt == 0) {
        //   message.success("你还没有发表过帖子");
        // }
        if (response.data.data != null)
          for (i = 0; i < response.data.data.length; i++) {
            let temp = reactive({
              title: response.data.data[i].notification.title,
              time: response.data.data[i].notification.create_time,
              username: response.data.data[i].notification.username,
              type: response.data.data[i].notification.type,
              user_avatar: response.data.data[i].user_avatar,
            });
            likelist.push(temp);
          }
        console.log(likelist);
        for (i = 0; i < 5; ++i) {
          if (i >= likelist.length) {
            break;
          }
          onlikeList.push(likelist[i]);
        }
      } else {
        message.error("查询失败...");
      }
    });

  axios
    .post("portal/get_notifications", {
      user_id: in_id,
      offset: 0,
      length: 100,
      type: 1, //评论
    })
    .then(function (response) {
      console.log(response);
      if (response.data?.success) {
        ncomment.value = response.data.count;
        console.log(nlike);
        // polist.values = response.data.data;
        let i = 0;
        if (response.data.data != null) countt = response.data.data.length;
        console.log(countt);
        // if (countt == 0) {
        //   message.success("你还没有发表过帖子");
        // }
        if (response.data.data != null)
          for (i = 0; i < response.data.data.length; i++) {
            let temp = reactive({
              title: response.data.data[i].notification.title,
              time: response.data.data[i].notification.create_time,
              username: response.data.data[i].notification.username,
              type: response.data.data[i].notification.type,
              user_avatar: response.data.data[i].user_avatar,
            });
            comlist.push(temp);
          }
        console.log(comlist);
        for (i = 0; i < 5; ++i) {
          if (i >= comlist.length) {
            break;
          }
          oncomList.push(comlist[i]);
        }
      } else {
        message.error("查询失败...");
      }
    });

  axios
    .post("post/get_user_posts", {
      user_id: in_id,
      offset: 0,
      length: 100,
    })
    .then(function (response) {
      console.log(response);
      if (response.data?.success) {
        npost.value = response.data.count;
        console.log(npost);
        // polist.values = response.data.data;
        let i = 0;
        if (response.data.data != null) countt = response.data.data.length;
        console.log(countt);
        if (countt == 0) {
          message.success("你还没有发表过帖子");
        }
        if (response.data.data != null)
          for (i = 0; i < response.data.data.length; i++) {
            let temp = reactive({
              tags: response.data.data[i].tags.map((tag: any) => {
                return tag.name;
              }),
              title: response.data.data[i].post.title,
              content: response.data.data[i].post.content,
              watches: response.data.data[i].post.views,
              comments: response.data.data[i].post.comment,
              ups: response.data.data[i].post.like,
            });
            polist.push(temp);
          }
        console.log(polist);
        for (i = 0; i < 3; ++i) {
          if (i >= polist.length) {
            break;
          }
          onpoList.push(polist[i]);
        }
      } else {
        message.error("查询失败...");
      }
    });

  }
  expTween();
  console.log(isadmin);
  console.log(isSelf);
  // console.log("yes")
});
const formRef = ref<FormInst | null>(null);

const handleValidateButtonClick3 = (e: MouseEvent) => {
  e.preventDefault();
  let in_id = Number(localStorage.getItem("nowID"));
  console.log(in_id);
  //formRef.value?.validate((errors) => {
  // let t1=localStorage.getItem("user_ID")
  console.log("test");
  //if (!errors) {
  // console.log(t1.toString)
  axios
    .post("/portal/ban_user", {
      user_id: in_id,
    })
    .then(function (response) {
      // 处理成功情况
      console.log(response.data);
      if (response.data?.success) {
        message.success("禁言成功！！");
        //User.Login=true;
        //localStorage.setItem("login","true")
      } else {
        message.error("禁言失败:(");
      }
      console.log(response.data);
    });
};

//  } else {
//    console.log(errors)
//     message.error('禁言失败')
//  }
//}
//)

const expTween = () => {
  let timeline = gsap.timeline();
  timeline.to("#exp51", {
    duration: 1,
    x: "+=2",
    scale: 1.5,
    repeat: Infinity,
    yoyo: true,
  });
  timeline.to(
    "#exp52",
    {
      duration: 1,
      x: "+=2",
      scale: 1.5,
      repeat: Infinity,
      yoyo: true,
    },
    "<0.3"
  );
  timeline.to(
    "#exp53",
    {
      duration: 1,
      x: "+=2",
      scale: 1.5,
      repeat: Infinity,
      yoyo: true,
    },
    "<0.3"
  );
};

const message = useMessage();
const UserExit = () => {
  message.success("退出成功");
  User.Login = false;
  localStorage.setItem("login", "false");
  localStorage.setItem("user_ID", "null");
  router.push("/");
};
const routerToLevel = () => {
  router.push("/Level");
};
const routerToExperience = () => {
  router.push("/Experience");
};
const routerToChangeProfile = () => {
  router.push("/changeProfile");
};
const routerToChangePassword = () => {
  router.push("/changePassword");
};
const posttest = reactive({
  tags: ["go", "python"],
  title: "title",
  content: "content",
  watches: 5,
  comments: 6,
  ups: 7,
});
const notifTestlikepost = reactive({
  username: "Lyc",
  title: "titletest",
  time: "20220518T0925",
  type: 0,
  user_avatar: "http://43.138.77.133:81/media/avatars/default.jpg",
});
const notifTestlikecomment = reactive({
  username: "Lyc",
  title: "titletest",
  time: "20220518T0925",
  type: 1,
  user_avatar: "http://43.138.77.133:81/media/avatars/default.jpg",
});
const notifTestcomment = reactive({
  username: "Lyc",
  title: "titletest",
  time: "20220518T0925",
  type: 2,
  user_avatar: "http://43.138.77.133:81/media/avatars/default.jpg",
});
const ModifyGreenbird = () => {
  router.push({
    path: "/greenbird",
    query: {
      modifying: "true",
    },
  });
};
</script>

<style scoped>
.ban {
  border-radius: 10px;
  background: #5aa8d7;
}
.card {
  padding: 0;
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 10px 10px 80px 0px #3f276619;
  overflow: hidden;
}
.downDivider {
  padding-top: 0px;
}
.info {
  color: #242424;
  font-family: nunito-sans, sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: normal;
  letter-spacing: 0px;
  text-align: left;
  display: inline-block;
  height: 0%;
  vertical-align: middle;
}
.infoname {
  color: #242424;
  font-family: nunito-sans, sans-serif;

  font-size: 16px;
  line-height: normal;
  letter-spacing: 0px;
  text-align: left;
  /*display: inline-block;*/
  height: 0%;
  vertical-align: middle;
}
.level {
  color: #242424;
  font-family: nunito-sans, sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: normal;
  letter-spacing: 0px;
  text-align: center;
}
.buttonText {
  color: #f48023;
  font-family: nunito-sans, sans-serif;
  font-weight: bold;
  font-size: 14px;
  line-height: normal;
  letter-spacing: 2px;
  text-align: left;
}

.buttonText2 {
  color: #7c76bb;
  font-family: nunito-sans, sans-serif;
  font-weight: bold;
  font-size: 14px;
  line-height: normal;
  letter-spacing: 2px;
  text-align: left;
}
.buttonText3 {
  color: white;
  font-family: nunito-sans, sans-serif;
  font-weight: bold;
  font-size: 14px;
  line-height: normal;
  letter-spacing: 2px;
  text-align: left;
}
.subtitle {
  position: relative;
  bottom: 11px;
  color: #242424;
  font-family: nunito-sans, sans-serif;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 0px;
  text-align: left;
}
.subtitle2 {
  position: relative;
  bottom: 7px;
  color: #242424;
  font-family: nunito-sans, sans-serif;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 0px;
  text-align: left;
}
.bartext {
  position: relative;
  bottom: 5px;
  font-family: Roboto, sans-serif;
  color: #594545;
  font-size: 14px;
  text-align: left;
}

.pageNum {
  color: #24273056;
  font-family: poppins, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;
  letter-spacing: 0px;
  text-align: center;
  /* //margin:0 auto; */
}
.bg {
  position: absolute;
  left: 660px;
  top: 50px;
  height: 500px;
  width: 200px;
}
.bg2 {
  position: absolute;
  left: 300px;
  top: 50px;
  height: 500px;
  width: 200px;
}
.NAME {
  color: #242424;
  font-family: nunito-sans, sans-serif;
  font-weight: bold;
  font-size: 32px;
  line-height: normal;
  letter-spacing: 0px;
  text-align: center;
}
.check {
  position: absolute;
  left: 247px;
}
.expText {
  position: absolute;
  color: #f48023;
  font-family: Nunito Sans;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
}
</style>