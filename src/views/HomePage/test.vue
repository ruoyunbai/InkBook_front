<template>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css">
</head>
  <div class="test">
    <div style="height: 1200px;"></div>
    <section style="border:1px solid red">
      <div v-animate-onscroll="{up: 'animated slideInLeft'}">向上滚动一次</div>
      <div v-animate-onscroll="{down: 'animated slideInLeft'}">向下滚动一次</div>
 
      <div v-animate-onscroll.repeat="{up: 'animated slideInLeft'}">重复向上滚动</div>
      <div v-animate-onscroll.repeat="{down: 'animated slideInLeft'}">重复向下滚动</div>
 
      <div
        v-animate-onscroll="{down: 'animated slideInLeft', up: 'animated slideInRight' }"
      >多重动画。对不同滚动方向使用不同的动画</div>
    </section>
 
    <div style="height: 1300px;"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  destroyed() {}
};
</script>
<style lang="scss" scope>
.test {
  background-color: rgba(219, 219, 219, 0.705);
  color: black;
  overflow-x: hidden;
}
</style>