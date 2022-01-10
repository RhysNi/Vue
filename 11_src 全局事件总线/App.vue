<template>
  <div class="app">
    <h1>{{name}}</h1>
    <School/>
    <Student/>
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
  }
};
</script>

<style>
  .app{
    background-color: rgb(105, 192, 124); 
    padding: 5px;
  }
</style>