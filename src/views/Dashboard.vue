<template>
  <div class="board">
    <projects></projects>
    <tags></tags>
  </div>
</template>

<script>
import Projects from "@/components/Dashboard/Projects";
import Tags from "@/components/Dashboard/Tags";

export default {
  name: "Dashboard",
  components: {Tags, Projects}
}
</script>

<style scoped lang="scss">
@import "src/assets/css/mixin";
.board {
  @include bg_color();
  box-sizing: border-box;
  padding-top: 20px;
  width: 100%;
  height: 100%;
}
</style>
