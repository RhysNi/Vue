<template>
  <div>
    <h2>我是About的内容</h2>
  </div>
</template>

<script>
export default {
  name: "About",
  // 通过路由规则进入该组件时被调用
  beforeRouteEnter(to, from, next) {
    console.log('组件内路由守卫',to,from)
    //判断是否需要授权
    if (to.meta.isAuth) {
      if (localStorage.getItem("name") === "rhys") {
        next();
      } else {
        alert("该用户无该功能查看权限");
      }
    } else {
      next();
    }
  },
  // 通过路由规则离开该组件时被调用
  beforeRouteLeave(to, from, next) {
    console.log('组件内路由守卫',to,from)
     next();
  },
};
</script>

<style>
</style>