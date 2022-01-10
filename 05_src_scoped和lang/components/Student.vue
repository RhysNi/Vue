<template>
  <div class="demo">
    <div>
      <h2>名称：{{ name }}</h2>
      <h2>年龄：{{ age }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "RhysNi",
      age: 18,
    };
  },
};
</script>


<style scoped>
/* 组件样式 */
.demo {
  background: skyblue;
}
</style>
