<!--组件结构-->
<template>
  <div class="demo">
    <div>
      <h2>名称：{{ name }}</h2>
      <h2>年龄：{{ age }}</h2>
    </div>
  </div>
</template>

<script>
export default Student({
  data() {
    return {
      name: "rhys",
      age: 25,
    };
  },
  setup() {},
});
</script>


<style>
/* 组件样式 */
.demo {
  background: skyblue;
}
</style>
