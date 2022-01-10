<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <CustHeader @setData="setData" />
      <CustList :todoList="todoList" />
      <CustFooter
        v-show="todoList.length > 0"
        :todoList="todoList"
        @clearFinished="clearFinished"
        @checkAllTodo="checkAllTodo"
      />
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
      todoList: JSON.parse(localStorage.getItem("todoList")) || [],
    };
  },
  methods: {
    setData(todo) {
      console.log("setData事件被触发");
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
      this.todoList = this.todoList.filter((todo) => {
        return todo.id !== id;
      });
    },
    clearFinished() {
      console.log("clearFinished事件被触发");
      this.todoList = this.todoList.filter((todo) => {
        return !todo.finish;
      });
    },
    checkAllTodo(val) {
      console.log("checkAllTodo事件被触发");
      this.todoList.forEach((todo) => {
        todo.finish = val;
      });
    },
  },
  watch: {
    todoList: {
      deep: true,
      handler(val) {
        localStorage.setItem("todoList", JSON.stringify(val));
      },
    },
  },
  mounted() {
    this.$bus.$on("updateChecked", (data) => {
      this.updateChecked(data);
    }),
      this.$bus.$on("deleteById", (data) => {
        this.deleteById(data);
      });
  },
  beforeDestroy() {
    console.log('销毁事件····');
    this.$bus.$off(['updateChecked','deleteById']);
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