<template>
  <div>
    <button @click="getStudents">请求学生数据</button>
    <button @click="getCars">请求汽车数据</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  methods: {
    getStudents() {
      axios.get("http://localhost:8080/api/students").then(
        (response) => {
          console.log("请求成功了", response.data);
        },
        (error) => {
          console.log("请求出错了~~~", error.message);
        }
      );
    },
    getCars() {
      axios.get("http://localhost:8080/v/cars").then(
        (response) => {
          console.log("请求成功了", response.data);
        },
        (error) => {
          console.log("请求出错了~~~", error.message);
        }
      );
    },
  },
};
</script>

<style>
</style>