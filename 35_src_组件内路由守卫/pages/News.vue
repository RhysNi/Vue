<template>
  <ul>
    <li :style="{ opacity }">RhysNi</li>
    <li>news001 <input type="text" /></li>
    <li>news002 <input type="text" /></li>
    <li>news003 <input type="text" /></li>
  </ul>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      opacity: 1,
    };
  },
  //生命周期钩子
  //Vue完成模板解释并把初始的真实D莫元素放入页面后（挂在完毕）调用mounted
  // mounted() {
  //   this.timer = setInterval(() => {
  //     this.opacity -= 0.01;
  //     if (this.opacity <= 0) {
  //       this.opacity = 1;
  //     }
  //   }, 16);
  // }, //常用
  // beforeDestroy() {
  //   clearInterval(this.timer);
  // },

  activated() {
    console.log('News组件被激活了');
    this.timer = setInterval(() => {
      this.opacity -= 0.01;
      if (this.opacity <= 0) {
        this.opacity = 1;
      }
    }, 16);
  },
  deactivated() {
    console.log('News组件失活了');
    clearInterval(this.timer);
  },
};
</script>

<style>
</style>