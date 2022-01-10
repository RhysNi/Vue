<template>
  <div>
    <div class="todo-footer">
      <label>
        <input type="checkbox" v-model="isAll"/>
      </label>
      <span>
        <span>已完成{{ finished }}</span> / 全部{{ size }}
      </span>
      <button @click="clearFinished" class="btn btn-danger">
        清除已完成任务
      </button>
    </div>
  </div>
</template>


<script>
export default {
  name: "CustFooter",
  data() {
    return {};
  },
  props: ["todoList", "clearFinished",'checkAllTodo'],
  computed: {
    finished() {
      return this.todoList.reduce((pre, todo) => pre + (todo.finish ? 1 : 0),0);
    },
    size() {
      return this.todoList.length;
    },
    isAll:{
      get(){
      return this.finished === this.size;
      },
      set(val){
        this.checkAllTodo(val)
      }
    },
  },
};
</script>


<style lang="less" scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
