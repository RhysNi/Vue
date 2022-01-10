<template>
  <div class="school">
    <h2 class="txt">学校名称：{{ name }}</h2>
    <h2>地址：{{ sAddress }}</h2>
    <button @click="sendSchoolName">点击给App传学校名称</button>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "南京工业大学",
      sAddress: "南京浦口校区",
    };
  },
  props:['getSchoolName'],
  methods: {
    sendSchoolName(){
      this.getSchoolName(this.name);
    }
  },
};
</script>


<style scoped lang="less">
/* 组件样式 */ 
.school {
  background: sandybrown;
  padding: 5px;
}
</style>
