<template>
  <div class="demo">
    <h2 @click="showName">学校名称：{{ name }}</h2>
    <h2>地址：{{ sAddress }}</h2>
  </div>
</template>

<script>
//引入一个混合 
import {mixin,mixinData} from '../mixin'

export default {
  name: "School",
  data() {
    return {
      name: "南京工业大学",
      sAddress: "南京浦口校区",
    };
  },
  mixins:[mixin,mixinData]
};
</script>


<style>
/* 组件样式 */
.demo {
  background: sandybrown;
}
</style>
