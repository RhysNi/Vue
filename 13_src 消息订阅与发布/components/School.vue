<template>
  <div class="school">
    <h2 class="txt">学校名称：{{ name }}</h2>
    <h2>地址：{{ sAddress }}</h2>
  </div>
</template>

<script>
//引入消息订阅库
import pubsub from "pubsub-js";

export default {
  name: "School",
  data() {
    return {
      name: "南京工业大学",
      sAddress: "南京浦口校区",
    };
  },
  mounted() {
    //订阅消息
    //函数需为箭头函数'this'才能找到vc
    this.pubId = pubsub.subscribe("hello", (msgName, data) => {
      this.name = data;
    });
    console.log(this.pubId);
  },
  beforeDestroy() {
    console.log("beforeDestroy", this.pubId);
    pubsub.unsubscribe(this.pubId);
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
