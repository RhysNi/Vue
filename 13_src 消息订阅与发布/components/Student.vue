<template>
  <div class="student">
    <h2>名称：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="sendStudentName">点击将学生名给学校组件</button>
  </div>
</template>

<script>
//引入消息订阅库
import pubsub from "pubsub-js";

export default {
  name: "Student",
  data() {
    return {
      name: "Rhys",
      age: 18,
    };
  },
  methods: {
    sendStudentName() {
      //发布消息
      pubsub.publish("hello", this.name);
    },
  },
};
</script>


<style scoped>
/* 组件样式 */
.student {
  background: skyblue;
  margin-top: 5px;
  padding: 5px;
}
</style>
