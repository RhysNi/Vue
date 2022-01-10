<template>
  <div>
    <li
      :style="{ background: bgColor }"
      @mouseenter="handleEnter(true)"
      @mouseleave="handleEnter(false)"
    >
      <label>
        <input
          type="checkbox"
          :checked="todo.finish"
          @change="handleChecked(todo.id)"
        />
        <span v-show="!todo.isEdit">{{ todo.name }}</span>
        <input
          v-show="todo.isEdit"
          type="text"
          :value="todo.name"
          @blur="handleBlur(todo, $event)"
          ref="inputName"
        />
      </label>

      <button
        @click="handleDelete(todo.id)"
        v-show="isShow"
        class="btn btn-danger"
      >
        删除
      </button>

      <button
        @click="handleUpdate(todo)"
        v-show="isShow && !todo.isEdit"
        class="btn btn-edit"
      >
        编辑
      </button>
    </li>
  </div>
</template>


<script>
export default {
  name: "CustItem",
  data() {
    return {
      bgColor: "white",
      isShow: false,
    };
  },
  props: ["todo"],
  methods: {
    handleEnter(isEnter) {
      if (isEnter) {
        this.bgColor = "#cccccc";
        this.isShow = true;
      } else {
        this.bgColor = "#ffffff";
        this.isShow = false;
      }
    },
    handleDelete(id) {
      if (confirm("确认删除吗?")) {
        this.$bus.$emit("deleteById", id);
      }
    },
    //运行时放开
    handleUpdate(todo) {
      //判断对象中是否存在某个属性      
      if (todo.hasOwnProperty("isEdit")) {
        todo.isEdit = true;
      } else {
        this.$set(todo, "isEdit", true);
      }
      //在下一次Dom更新结束后执行其指定的回调，自动获取焦点（官方推荐）
      this.$nextTick(function() {
        this.$refs.inputName.focus();
      })
    },
    handleChecked(id) {
      this.$bus.$emit("updateChecked", id);
    },
    handleBlur(todo, e) {
      todo.isEdit = false;
      if (e.target.value.trim() == "") {
        return alert("输入不能为空! ");
      } else {
        this.$bus.$emit("updateTodo", todo.id, e.target.value);
      }
    },
  },
};
</script>


<style lang="less" scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>

