<template>
  <div id="app">
    <navbar></navbar>
    <div class="content">
      <router-view></router-view>
    </div>
    <self-footer></self-footer>
    <register></register>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import Navbar from "@/components/Navbar";
import SelfFooter from "@/components/SelfFooter"
import Register from "@/components/Register";

export default {
  components: {
    Register,
    Navbar,
    SelfFooter,
  },
  computed: {
    ...mapGetters(
      [
        'getTheme'
      ]
    ),
  },
  methods: {
    ...mapActions([
      'setThemeNowAct'
    ])
  },
  mounted() {
    document.documentElement.setAttribute('theme', this.getTheme)
  },
  watch: {
    '$store.state.themeNow': (newVal) => {
      // 监听 vuex 全局变量 themeNow 发生改变时，修改系统主题
      document.documentElement.setAttribute('theme', newVal)
    }
  }
}
</script>

<style lang="scss">
// 全局引入 normalize 文件，优化浏览器默认显示
@import "src/assets/css/base";
@import "src/assets/css/mixin";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  //color: #2c3e50;
  @include content_color();
  @include mask_bg();
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 1440px;
  margin: 0 auto;

  .content {
    //width: 60%;
    width: 980px;
  }
}

</style>

