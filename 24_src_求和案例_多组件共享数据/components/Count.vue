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
    <button @click="Increment(addNum)">+</button>
    <button @click="Decrement(addNum)">-</button>
    <button @click="incrementOdd(addNum)">和为奇数再加</button>
    <button @click="incrementWait(addNum)">等一 等再加</button>

    <h3 style="color:red">Person组件的总人数是：{{personList.length}}</h3>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "Count",
  data() {
    return {
      addNum: 1,
    };
  },
  computed: {
    //借助mapState生成计算属性，从state中读取数据(数组写法)
    ...mapState(["sum", "dayTime", "subject",'personList']),

    //借助mapGetters生成计算属性，从state中读取数据(数组写法)
    ...mapGetters(["largeSum"]),
  },
  methods: {
    //借助mapMutations生成对应方法，方法中会调用commit去联系mutations（数组写法，支持对象中k,v名称相同时使用）
    ...mapMutations(["Increment", "Decrement"]),

    //借助mapActions生成对应方法，方法中会调用dispatch去联系actions （数组写法）
    ...mapActions(["incrementOdd", "incrementWait"]),
  },
};
</script>
 
<style lang="less" scoped>
button {
  margin-left: 5px;
}
</style>