<template>
  <div class="demo1">
    <div>
      <h1>{{ msg }}</h1>
      <h2>名称：{{ name }}</h2>
      <h2>年龄：{{ myAge + 1 }}</h2>
      <button @click="udpateAge">修改年龄</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      msg: "Hello",
      myAge:this.age
    };
  },
  // 简单接受
  // props:['name','age']

  // 接收同时进行类型限制
  // props:{
  //   name:String,
  //   age:Number
  // }

  //接收同时限制类型＋必要性限制
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      default: 99,
    },
  },
  methods: {
    udpateAge(){
      this.myAge++
    }
  },
};
</script>


<style>
/* 组件样式 */
.demo1 {
  background: skyblue;
}
</style>
