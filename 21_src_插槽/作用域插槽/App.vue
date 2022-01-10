<template>
  <div class="container">
    <Category titile="游戏">
      <!-- 结构赋值 -->
      <template scope="{games}">
        <ul>
          <li v-for="(item, index) in games" :key="index">{{ item }}</li>
        </ul>
      </template>
    </Category>

    <Category titile="游戏">
      <template scope="{games}">
        <ol>
          <li v-for="(item, index) in games" :key="index">{{ item }}</li>
        </ol>
      </template>
    </Category>

    <Category titile="游戏">
      <!-- 新结构赋值 -->
      <template slot-scope="{games}">
        <h4 v-for="(item, index) in games" :key="index">{{ item }}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category";

export default {
  name: "App",
  components: {
    Category,
  },
};
</script>
<style lang="less" scoped>
.container,
.foot {
  display: flex;
  justify-content: space-around;

  h4 {
    text-align: center;
  }
  img {
    width: 100%;
  }

  video {
    width: 100%;
  }
}
</style>