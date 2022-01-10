<template>
  <div class="container">
    <Category titile="美食">
      <!-- 可自行找一张图片到该网址上传:https://imgbb.com/ 拿到图片地址替换下面地址 -->
      <img src="https://i.ibb.co/NmXLvpq/image.jpg" />
    </Category>
    <Category titile="游戏">
      <ul>
        <li v-for="(item, index) in games" :key="index">{{ item }}</li>
      </ul>
    </Category>
    <Category titile="电影">
      <video
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      ></video>
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
  data() {
    return {
      foods: ["火锅", "海底捞", "烧烤", "炸鸡"],
      games: ["王者荣耀", "刺激战场", "永劫无间", "PUBG"],
      films: [
        "《你好，李焕英》",
        "《雪中悍刀行》",
        "《长津湖》",
        "《拆弹专家》",
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.container {
  display: flex;
  justify-content: space-around;

  img {
    width: 100%;
  }

  video {
    width: 100%;
  }
}
</style>