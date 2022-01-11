<template>
  <div>
    <About />
    <Banner />
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <router-link replace class="list-group-item" active-class="active" to="/about"
            >About</router-link
          >
          <router-link replace class="list-group-item" active-class="active" to="/home"
            >Home</router-link
          >
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 指定组建的呈现位置 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "./components/Banner";
import About from "./pages/About";

export default {
  name: "App",
  components: { Banner,About },
};
</script>