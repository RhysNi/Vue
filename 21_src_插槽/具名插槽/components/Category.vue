<template>
  <div class="category">
      <h3>{{titile}}</h3>
      <!-- 定义一个插槽，等着组件使用者填充 -->
      <slot name="center"></slot>
      <slot name="footer"></slot>

  </div>
</template>

<script>
export default {
    name:'Category',
    props:['titile']
};
</script>

<style lang="less" scoped>
    .category{
        background-color:rgb(26, 167, 223);
        width: 200px;
        height: 300px;
        h3{
            text-align: center;
            background-color: orange;
        }
    }
</style>>