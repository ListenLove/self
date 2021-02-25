<template>
  <div class="root">
    项目主页
    <navbar></navbar>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar"

export default {
  name: "homepage",
  components: {
    Navbar
  },
  methods: {
    selfNotification() {
      const h = this.$createElement;

      this.$notify({
        title: 'Self 站内通信',
        message: h('i', {style: 'color: teal'}, 'Self 站前后端尚在施工当中，感谢您的关注！'),
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

</style>
