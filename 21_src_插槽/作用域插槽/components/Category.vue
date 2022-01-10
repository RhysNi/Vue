<template>
  <div class="category">
    <h3>{{ titile }}</h3>
    <slot :games="games"></slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["titile"],
  data() {
    return {
      games: ["王者荣耀", "刺激战场", "永劫无间", "PUBG"],
    };
  },
};
</script>

<style lang="less" scoped>
.category {
  background-color: rgb(26, 167, 223);
  width: 200px;
  height: 300px;
  h3 {
    text-align: center;
    background-color: orange;
  }
}
</style>