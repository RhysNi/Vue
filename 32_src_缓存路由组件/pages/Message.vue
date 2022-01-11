<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- 跳转路由并携带参数，to的的对象写法（query传参） -->
        <router-link
          :to="{ name: 'detail', query: { id: m.id, title: m.title } }"
          >{{ m.title }}</router-link
        >
        <button @click="pushShow(m)">push查看</button>
        <button @click="replaceShow(m)">replace查看</button>
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messageList: [
        { id: "001", title: "消息001" },
        { id: "002", title: "消息002" },
        { id: "003", title: "消息003" },
      ],
    };
  },
  methods: {
    pushShow(message) {
      this.$router.push({
        name: "detail",
        query: { id: message.id, title:message.title },
      });
    },
    replaceShow(message) {
      this.$router.replace({
        name: "detail",
        query: { id: message.id, title:message.title },
      });
    },
  },
};
</script>

<style>
</style>