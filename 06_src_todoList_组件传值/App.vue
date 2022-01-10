<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <CustHeader :setData="setData" />
      <CustList
        :todoList="todoList"
        :updateChecked="updateChecked"
        :deleteById="deleteById"
      />
      <CustFooter :todoList="todoList" :clearFinished="clearFinished" :checkAllTodo="checkAllTodo"/>
    </div>
  </div>
</template>

<script>
import CustHeader from "./components/CustHeader";
import CustFooter from "./components/CustFooter";
import CustList from "./components/CustList";

export default {
  name: "App",
  components: {
    CustHeader,
    CustFooter,
    CustList,
  },
  data() {
    return {
      todoList: [
        {
          id: "0",
          name: "吃饭",
          finish: true,
        },
        {
          id: "1",
          name: "睡觉",
          finish: true,
        },
        {
          id: "2",
          name: "打豆豆",
          finish: false,
        },
      ],
    };
  },
  methods: {
    setData(todo) {
      this.todoList.unshift(todo);
    },
    updateChecked(id) {
      this.todoList.forEach((todo) => {
        if (todo.id === id) {
          todo.finish = !todo.finish;
        }
      });
    },
    deleteById(id) {
      if (confirm("确认删除吗?")) {
        this.todoList = this.todoList.filter((todo) => {
          return todo.id !== id;
        });
      }
    },
    clearFinished() {
      if (confirm("确认清除所有已完成项吗?")) {
        this.todoList = this.todoList.filter((todo) => {
          return !todo.finish;
        });
      }
    },
    checkAllTodo(val) {
      this.todoList.forEach((todo) => {
          todo.finish = val;
      });
    },
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>