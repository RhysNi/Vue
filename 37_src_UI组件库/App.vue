<template>
  <div>
    <button>原生按钮</button>
    <input type="text" />

    <rhys-row>
      <rhys-button>默认按钮</rhys-button>
      <rhys-button type="primary">主要按钮</rhys-button>
      <rhys-button type="success">成功按钮</rhys-button>
      <rhys-button type="info">信息按钮</rhys-button>
      <rhys-button type="warning">警告按钮</rhys-button>
      <rhys-button type="danger">危险按钮</rhys-button>
    </rhys-row>

    <span class="demonstration">默认</span>
    <rhys-date-picker v-model="value1" type="date" placeholder="选择日期"/>

    <span class="demonstration">带快捷选项</span>
    <rhys-date-picker v-model="value2" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions"/>

    <rhys-row>
      <rhys-button icon="el-icon-search" circle></rhys-button>
      <rhys-button type="primary" icon="el-icon-phone" circle></rhys-button>
      <rhys-button type="success" icon="el-icon-check" circle></rhys-button>
      <rhys-button type="info" icon="el-icon-message" circle></rhys-button>
      <rhys-button type="warning" icon="el-icon-star-off" circle></rhys-button>
      <rhys-button type="danger" icon="el-icon-delete" circle></rhys-button>
    </rhys-row>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            },
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            },
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            },
          },
        ],
      },
      value1: "",
      value2: "",
    };
  },
};
</script>