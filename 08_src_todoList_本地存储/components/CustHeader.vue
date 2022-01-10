<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="name" @keyup.enter="addTodo"/>
  </div>   
</template>


<script>
import {nanoid} from 'nanoid'
export default {
  name: "CustHeader",
  data() {
    return {
      name:''
    };
  },
  props:['setData'],
  methods: {
    addTodo(){
      if (!this.name) return alert('输入不能为空！')
      const todo = {id:nanoid(),name:this.name,finish:false}
      //往App组件中的todoList数组塞对象
      this.setData(todo);
      this.name=''
    }
  },
};
</script>


<style lang="less" scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
