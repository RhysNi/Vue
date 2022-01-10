<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="condition"
      />&nbsp;<button @click="getUserList">Search</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      condition: "",
    };
  },
  methods: {
    getUserList() {
      // 请求更新数据
      this.$bus.$emit("updateListData", {
        userList: [],
        isFirst: false,
        isLoading: true,
        errMsg: "",
      });
      //将axios替换成this.$http
      this.$http
        .get(`https://api.github.com/search/users?q=${this.condition}`)
        .then(
          (response) => {
            this.$bus.$emit("updateListData", {
              userList: response.data.items,
              isLoading: false,
              errMsg: "",
            });
          },
          (error) => {
            this.$bus.$emit("updateListData", {
              userList: [],
              isLoading: false,
              errMsg: error.message,
            });
          }
        );
    },
  },
};
</script>

<style scoped>
</style>