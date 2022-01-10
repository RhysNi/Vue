<template>
  <div>
    <ul class="todo-main">
      <CustItem v-for="todo in todoList" :key="todo.id" :todo="todo"/>
    </ul>
  </div>
</template>


<script>
import CustItem from "./CustItem";

export default {
  name: "CustList",
  data() {
    return {
       
    };
  },
  components: {
    CustItem,
  },
  props:['todoList']
};
</script>


<style lang="less" scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>

