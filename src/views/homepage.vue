<template>
  <div class="root">
    <navbar></navbar>
    <register></register>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar"
import Register from "@/components/Register"

export default {
  name: "homepage",
  components: {
    Navbar,
    Register,
  },
  methods: {
    selfNotification() {
      const h = this.$createElement;

      this.$notify({
        title: 'Self 站内通信',
        message: h('i', {style: 'color: teal'}, 'Self 站尚在施工当中，感谢关注！'),
        type: "info",
        duration: 0
      });
    }
  },
  mounted() {
    this.selfNotification()
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/css/mixin";

.root {
  height: 100%;
  width: 980px;
  //@include bg_color();
  //background-color: red;
  background-color: #2c3e50;
  margin: 0 auto;
  //position: relative;
}

</style>
