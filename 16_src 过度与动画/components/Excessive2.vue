<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏（过度)</button>
    <!-- 给transition取名后需要同步将动画前缀改为与该名称相同 -->
    <transition-group
      name="animate__animated animate__bounce"
      appear
      enter-active-class="animate__backInLeft"
      leave-active-class="animate__backOutRight"
    >
      <h1 v-show="!isShow" key="1">RhysNi1</h1>
      <h1 v-show="isShow" key="2">RhysNi2</h1>
    </transition-group>
  </div>
</template>

<script>
import "animate.css";
export default {
  name: "Animation",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: salmon;
  /* 也可写在active中 */
  /* transition: 0.5s linear;   */
}
</style>