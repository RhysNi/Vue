<template>
  <div>
    <!-- 数据存放在$store.state中 -->
    <h3>当前数总和：{{ sum }}</h3>
    <h3>当前数10倍总和：{{ largeSum }}</h3>
    <h3>我{{ dayTime }}天学完了{{ subject }}</h3>
    <select v-model.number="addNum">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">和为奇数再加</button>
    <button @click="incrementWait">等一 等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "Count",
  data() {
    return {
      addNum: 1,
    };
  },
  computed: {
    // 开发自己写方法
    //state获取数据
    // sum() {
    //   return this.$store.state.sum;
    // },
    // school() {
    //   return this.$store.state.school;
    // },
    // subject() {
    //   return this.$store.state.subject;
    // },

    //借助mapState生成计算属性，从state中读取数据(对象写法)
    // ...mapState({sum:'sum',dayTime:'dayTime',subject:'subject'}),

    //借助mapState生成计算属性，从state中读取数据(数组写法)
    ...mapState(["sum", "dayTime", "subject"]),

    // 开发自己写方法
    //getters获取数据
    // largeSum() {
    //   return this.$store.getters.largeSum;
    // },

    //借助mapGetters生成计算属性，从state中读取数据(对象写法)
    // ...mapGetters({largeSum:'largeSum'})

    //借助mapGetters生成计算属性，从state中读取数据(数组写法)
    ...mapGetters(["largeSum"]),
  },
  methods: {
    increment() {
      //没有复杂业务逻辑可跳过actions阶段直接调用commit
      this.$store.commit("Increment", this.addNum);
    },
    decrement() {
      this.$store.commit("Decrement", this.addNum);
    },
    incrementOdd() {
      this.$store.dispatch("incrementOdd", this.addNum);
    },
    incrementWait() {
      this.$store.dispatch("incrementWait", this.addNum);
    },
  },
};
</script>

<style lang="less" scoped>
button {
  margin-left: 5px;
}
</style>