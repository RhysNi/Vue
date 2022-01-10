<template>
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>地址：{{ sAddress }}</h2>
    <input type="text" v-fbind:value="name" />
    <button @click="hello">点击测试</button>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "南京工业大学",
      sAddress: "南京浦口校区",
    };
  },
};
</script>


<style>
/* 组件样式 */
.demo {
  background: sandybrown;
}
</style>
