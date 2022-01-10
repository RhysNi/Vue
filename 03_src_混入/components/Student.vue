<template>
  <div class="demo1">
    <div>  
      <h2 @click="showName">名称：{{ name }}</h2>
      <h2>年龄：{{ age }}</h2>
    </div>
  </div>
</template>

<script>
import {mixin,mixinData} from '../mixin'

export default {
  name: "Student",
  data() {
    return {
      name: 'RhysNi',
      age:18
    };
  },
  mixins:[mixin,mixinData]
};
</script>


<style>
/* 组件样式 */
.demo1 {
  background: skyblue;
}
</style>
