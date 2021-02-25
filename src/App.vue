<template>
  <div id="app">
    <homepage></homepage>
  </div>
</template>

<style lang="scss">
// 全局引入 normalize 文件，优化浏览器默认显示
@import "src/assets/css/base";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
<script>
import Homepage from "@/views/homepage";

export default {
  components: {Homepage}
}
</script>
