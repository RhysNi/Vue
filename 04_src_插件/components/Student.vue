<template>
  <div class="demo1">
    <div>
      <h2>名称：{{ name | myslice }}</h2>
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


<style>
/* 组件样式 */
.demo1 {
  background: skyblue;
}
</style>
