<template>
  <div>
    <!-- <School/> -->
    <Student name="李四" :age="18" />
  </div>
</template>

<script>
// import School from "./components/School";
import Student from "./components/Student";

export default {
  name: "App",
  components: {
    // School,
    Student,
  },
  data() {
    return {
      name: "RhysNi",
    };
  },
  methods: {
    showDom() {
      console.log(this.$refs.title);
    },
  },
};
</script>

<style>
</style>