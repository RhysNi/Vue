<template>
  <div class="row">
    <!-- 欢迎词 -->
    <h2 v-show="info.isFirst">欢迎使用~</h2>

    <!-- 用户列表 -->
    <div
      v-show="info.userList.length"
      class="card"
      v-for="user in info.userList"
      :key="user.id"
    >
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>

    <!-- 加载中 -->
    <h2 v-show="info.isLoading">加载中···</h2>

    <!-- 展示错误信息 -->
    <h2 v-show="info.errMsg">{{ info.errMsg }}</h2>
  </div>
</template>

<script>
export default {
  name: "UserList",
  data() {
    return {
      info: {
        userList: [],
        isFirst: true,
        isLoading: false,
        errMsg: "",
      },
    };
  },
  mounted() {
    this.$bus.$on("updateListData", (data) => {
      //对象 合并
      this.info = {...this.info,...data};
    });
  },
};
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 30%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  margin-right: 1rem;
  margin-left: 1rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>