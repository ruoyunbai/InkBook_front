<template>
  <div class="hello">
    <h1>使用Animate.css动画库:</h1>
    <button @click="showAnimate = !showAnimate">Toggle render</button>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated bounceIn"
      leave-active-class="animated bounceOut"
    >
      <p v-if="showAnimate">hello</p>
    </transition>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      showAnimate: true,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
