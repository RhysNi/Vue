<template>
  <div class="demo">
    <h2>学校名称：{{ sName }}</h2>
    <h2>地址：{{ sAddress }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      sName: "南京工业大学",
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
