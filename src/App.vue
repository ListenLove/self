<template>
  <div id="app">
    <!--    <homepage></homepage>-->
    <router-view></router-view>
  </div>
</template>

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
  @include bg_sub_color();
}

</style>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
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
