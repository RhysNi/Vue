<template>
  <div class="container">
    <Category titile="美食">
      <!-- 可自行找一张图片到该网址上传:https://imgbb.com/ 拿到图片地址替换下面地址 -->
      <img slot="center" src="https://i.ibb.co/NmXLvpq/image.jpg" />
      <a slot="footer" href="www.baidu.com">更多美食</a>
    </Category>
    <Category titile="游戏">
      <ul slot="center">
        <li v-for="(item, index) in games" :key="index">{{ item }}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="http://www.4399.com/">单机游戏</a>
        <a href="https://www.yjwujian.cn">网络游戏</a>
      </div>
    </Category>
    <Category titile="电影">
      <video
        slot="center"
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      ></video>
      <template v-slot:footer>
        <div class="foot">
          <a
            href="https://list.iqiyi.com/www/1/-------------4-1-1-iqiyi--.html?vfrm=pcw_home&vfrmblk=C&vfrmrst="
            >经典</a
          >
          <a
            href="https://list.iqiyi.com/www/1/-------------11-1-1-iqiyi--.html?vfrm=pcw_home&vfrmblk=C&vfrmrst="
            >热门</a
          >
          <a
            href="https://list.iqiyi.com/www/1/-------------8-1-1-iqiyi--.html?vfrm=pcw_home&vfrmblk=C&vfrmrst="
            >推荐</a
          >
        </div>
        <h4>欢迎前来影院观看</h4>
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
.container,
.foot {
  display: flex;
  justify-content: space-around;

  h4{
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