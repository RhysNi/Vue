<!--组件结构-->
<template>
  <div class="demo">
    <h2>学校名称：{{ sName }}</h2>
    <h2>地址：{{ sAddress }}</h2>
    <student></student>
  </div>
</template>

<script>
export default School({
  data() {
    return {
      sName: "南京工业大学",
      sAddress: "南京浦口校区",
    };
  },
  setup() {},
});
</script>


<style>
/* 组件样式 */
.demo {
  background: sandybrown;
}
</style>
