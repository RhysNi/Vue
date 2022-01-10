<template>
  <div class="student">
      <h2>名称：{{ name }}</h2>
      <h2>年龄：{{ age }}</h2>
      <button @click="sendStudentName">点击给App学生名称</button>

      <button @click="unbindEvent">解绑自定义事件</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "Rhys",
      age: 18, 
    };
  },
  methods: {
    sendStudentName(){
      this.$emit('rhysni',this.name,66,888,222);
      this.$emit('demo',this.name);
    },
    unbindEvent(){
      //解绑一个自定义事件
      // this.$off('rhysni') 
      // console.log('rhysni事件被解绑了');

      //解绑多个自定义事件
      // this.$off(['rhysni','demo']);
      // console.log('多个事件被解绑了');
      
      //解绑所有自定义事件
      this.$off();
      console.log('所有事件被解绑了');
    }
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
