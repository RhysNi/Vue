<template>
  <div>
    <li
      :style="{ background: bgColor }"
      @mouseenter="handlerEnter(true)"
      @mouseleave="handlerEnter(false)"
    >
      <label>
        <input
          type="checkbox"
          :checked="todo.finish"
          @change="updateChecked(todo.id)"
        />
        <!--如下代码也能实现 不建议的写法 修改了props 但是vue没监测到-->
        <!-- <input type="checkbox" v-model="todo.finish"/> -->
        <span>{{ todo.name }}</span>
      </label>
      <button
        @click="deleteById(todo.id)"
        v-show="isShow"
        class="btn btn-danger"
      >
        删除
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
    handlerEnter(isEnter) {
      if (isEnter) {
        this.bgColor = "#cccccc";
        this.isShow = true;
      } else {
        this.bgColor = "#ffffff";
        this.isShow = false;
      }
    },
    deleteById(id) {
      if (confirm("确认删除吗?")) {
        this.$bus.$emit("deleteById", id);
      }
    },
    updateChecked(id) {
      this.$bus.$emit("updateChecked", id);
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

