<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏（动画）</button>
    <!-- 给transition取名后需要同步将动画前缀改为与该名称相同 -->
    <transition name="hello" appear>
      <h1 v-show="isShow">RhysNi</h1>
    </transition>
  </div>
</template>

<script>
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
}
/* 
    Vue取名规范 
    前缀默认为：v
    如果transition标签取名则用标签对应的名称作为前缀
*/
.hello-enter-active {
  animation: rhysni 0.5s;
}

.hello-leave-active {
  animation: rhysni 0.5s reverse;
}

@keyframes rhysni {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>