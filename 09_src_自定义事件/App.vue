<template>
  <div class="app">
    <h1>{{name}}</h1>
    <School :getSchoolName="getSchoolName"/>

    <!-- 自定义事件 第一种写法 -->
    <Student v-on:rhysni="getStudentName" v-on:demo="m1"/>

    <!-- 第二种写法 -->
    <!-- <Student ref="student" /> -->
  </div>
</template>

<script>
import School from "./components/School";
import Student from "./components/Student";

export default {
  name: "App",
  components: {
    School,
    Student,
  },
  data() {
    return {
      name: "RhysNi",
    };
  },
  methods: {
    getSchoolName(name){
      return this.name=name;
    },
    getStudentName(name,...params){
      console.log('rhysni事件被触发了');

      //params为数组，接受除name以外的参数
      console.log(params);

      return this.name=name;
    },
    m1(){
      console.log('demo事件被触发了');
    }
  },
  mounted() {
    // this.$refs.student.$on('rhysni',this.getStudentName)

    //一次性
    // this.$refs.student.$once('rhysni',this.getStudentName)
  },
};
</script>

<style>
  .app{
    background-color: rgb(105, 192, 124); 
    padding: 5px;
  }
</style>