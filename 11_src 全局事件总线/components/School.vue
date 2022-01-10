<template>
  <div class="school">
    <h2 class="txt">学校名称：{{ name }}</h2>
    <h2>地址：{{ sAddress }}</h2>
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
  mounted() {
    this.$bus.$on("hello", (d) => {
      this.name = d;
    });
  },
  beforeDestroy() {
    this.$bus.$off("hello");
  },
};
</script>


<style scoped lang="less">
/* 组件样式 */
.school {
  background: sandybrown;
  padding: 5px;
}
</style>
