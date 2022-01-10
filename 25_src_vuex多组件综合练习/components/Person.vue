<template>
  <div class="container">
    <h3 style="color: red">Count组件的求和为：{{ sum }}</h3>

    <h1>人员列表</h1>
    <h3>列表中第一个人的名字是：{{ firstPersonName }}</h3>
    <input type="text" placeholder="请输入姓名" v-model="name" />
    <button @click="addPerson">添加</button>
    <button @click="addPersonWang">添加姓王的人</button>
    <ul>
      <li v-for="person in personList" :key="person.id">{{ person.name }}</li>
    </ul>

    <button @click="addQuotations">来句语录疗疗伤</button>
    <h1 class="quotation">{{ quotations }}</h1>
  </div>
</template>

<script>
import { nanoid } from "nanoid";

export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    addPerson() {
      const p = { id: nanoid(), name: this.name };
      this.$store.commit("personAbout/AddPerson", p);
      this.name = "";
    },
    addPersonWang() {
      const p = { id: nanoid(), name: this.name };
      this.$store.dispatch("personAbout/addPersonWang", p);
      this.name = "";
    },
    addQuotations() {
      this.$store.dispatch("personAbout/addQuotationsFromServer");
    },
  },
  computed: {
    personList() {
      return this.$store.state.personAbout.personList;
    },
    sum() {
      return this.$store.state.countAbout.sum;
    },
    quotations() {
      return this.$store.state.personAbout.quotations;
    },
    firstPersonName() {
      return this.$store.getters["personAbout/firstPersonName"];
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  .quotation {
    color: rgb(48, 48, 238);
    text-align: center;
  }
}
</style>