<template>
  <nav class="nav">
    <h1 class="logo" @click.prevent="changeTheme">
      <a href="javascript:">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-chengji"></use>
        </svg>
        Self
      </a>
    </h1>
    <div class="line"></div>
    <ul class="menu">
      <li><a href="#">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-17home"></use>
        </svg>
        <span>Description</span></a></li>
      <li><a href="#">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-26manage"></use>
        </svg>
        <span>Dashboard</span></a></li>
      <li><a href="#">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-24madel"></use>
        </svg>
        <span>Links</span></a></li>
      <li><a href="#">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-30noticeboard"></use>
        </svg>
        <span>Resume</span></a></li>
    </ul>
    <div class="line"></div>
  </nav>
</template>

<script>
import '@/assets/fonts/iconfonts/iconfont'

export default {
  name: "Navbar",
  data() {
    return {
      themes: ['light', 'dark']
    }
  },
  methods: {
    changeTheme() {
      let themeNow = document.documentElement.getAttribute("theme")
      let index = this.themes.indexOf(themeNow)
      if ((index + 1) < this.themes.length) {
        index++
      } else {
        index = 0
      }
      themeNow = this.themes[index]
      const h = this.$createElement;
      this.$message({
        message: h('p', null, [
          h('span', null, '切换为 '),
          h('b', {style: 'color: teal'}, themeNow),
          h('span', null, ' 主题')
        ])
      });
      document.documentElement.setAttribute("theme", themeNow)
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/css/variable";
@import "src/assets/css/mixin";

@media screen and (min-width: $large_screen_device) {
  .nav {
    min-width: 220px;
    height: 100vh;
    //background-color: $light_theme_background_color;
    @include bg_color();
    float: left;
    border-radius: 5px;

    .logo {
      font-size: 40px;
      line-height: 40px;
      text-align: center;
      padding: 30px 0;
      @include content_color();

      a {
        text-decoration: none;
        color: inherit;
      }
    }

    .menu {
      text-align: left;
      margin: 0 auto;
      padding: 20px 0;
      font-weight: 500;

      a {
        text-decoration: none;
        color: inherit;
        overflow: hidden;
      }

      font-size: 24px;
      list-style: none;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      li {
        margin-left: 10px;
        margin-bottom: 20px;
        height: 60px;
        line-height: 60px;
        min-width: 200px;

        &:last-child {
          margin-bottom: 0;
        }

        &:hover {
          //background-color: $light_theme_sub_background_color;
          @include bg_sub_color();
          border-radius: 5px;
        }

        a {
          box-sizing: border-box;
          @include no_wrap();
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding: 0 10px;
          //color: $light_theme_color;
          @include content_color();
          line-height: 60px;
          text-align: center;
          font-size: 32px;

          svg {
            margin-right: 10px;
          }

          span {
            font-size: 24px;
          }
        }
      }
    }

    .line {
      width: 96%;
      height: 1px;
      box-sizing: border-box;
      border-bottom: 1px solid #eee;
      @include border_color();
      margin: 0 auto;
    }
  }
}

</style>
