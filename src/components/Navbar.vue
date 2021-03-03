<template>
  <nav class="nav">
    <div class="top">
      <h1 class="logo" @click.prevent="changeTheme">
        <a href="javascript:">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-chengji"></use>
          </svg>
          Self
        </a>
      </h1>
      <div class="line"></div>
      <ul class="menu" ref="menu">
        <li class="selected" @click="select($event)">
          <router-link to="/description">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-17home"></use>
            </svg>
            <span>Description</span>
          </router-link>
        </li>
        <li @click="select($event)">
          <router-link to="/dashboard">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-26manage"></use>
          </svg>
          <span>Dashboard</span>
          </router-link>
        </li>
        <li @click="select($event)">
          <router-link to="#">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-24madel"></use>
          </svg>
          <span>Links</span></router-link></li>
        <li @click="select($event)">
          <router-link to="#">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-30noticeboard"></use>
          </svg>
          <span>Resume</span></router-link></li>
      </ul>
      <div class="line"></div>
    </div>
    <div class="bottom">
      <div class="login" @mouseenter="showChoices" ref="login" @mouseleave="hiddenChoice">
        <div class="login-button" v-show="hiddenChoices">
          <a href="javascript:">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-yonghu"></use>
            </svg>
          </a>
        </div>
        <div class="sign-in" v-show="!hiddenChoices">

          <a href="javascript:">
            <el-tooltip class="item" :effect="getTheme" content="登录" placement="top-start">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-login"></use>
              </svg>
            </el-tooltip>
          </a>
        </div>
        <div class="sign-up" v-show="!hiddenChoices" @click.prevent="toRegisterPage">

          <a href="javascript:">
            <el-tooltip class="item" :effect="getTheme" content="注册" placement="top-start">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-lujing6"></use>
              </svg>
            </el-tooltip>

          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import '@/assets/fonts/iconfonts/iconfont'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "Navbar",
  computed: {
    ...mapGetters([
      'getTheme',
      'getThemes'
    ])
  },
  data() {
    return {
      hiddenChoices: true,
    }
  },
  methods: {
    ...mapActions([
      'setShowRegisterPage',
      'setThemeNowAct'
    ]),
    select(e) {
      for (let child of this.$refs.menu.childNodes) {
        child.classList.remove("selected")
      }

      function findLi(node) {
        if (node.tagName === "LI") return node
        return findLi(node.parentElement)
      }

      findLi(e.target).classList.add("selected")

    },
    changeTheme() {
      let themeNow = this.getTheme
      let themes = this.getThemes
      let index = themes.indexOf(themeNow)
      if ((index + 1) < themes.length) {
        index++
      } else {
        index = 0
      }
      themeNow = themes[index]
      const h = this.$createElement;
      this.$message({
        message: h('p', null, [
          h('span', null, '切换为 '),
          h('b', {style: 'color: teal'}, themeNow),
          h('span', null, ' 主题')
        ]),
        duration: 1000,
      });
      this.setThemeNowAct(themeNow)
    },
    showChoices() {
      this.hiddenChoices = false
    },
    hiddenChoice() {
      this.hiddenChoices = true
    },
    toRegisterPage() {
      // 点击打开 注册页面
      const h = this.$createElement;
      this.setShowRegisterPage(true)
      this.$message({
        message: h('p', null, ['打开',
          h('b', {style: 'color: teal'}, '注册页'),
        ]),
        duration: 800,
      });
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/css/variable";
@import "src/assets/css/mixin";

.selected {
  @include bg_sub_color();
  border-radius: 5px;
  @include content_sub_color();
}

.nav {
  width: 20%;
  min-width: 200px;
  max-width: 220px;
  min-height: 100vh;
  //background-color: $light_theme_background_color;
  @include bg_color();
  //float: left;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .top {
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

        &:hover {
          //background-color: $light_theme_sub_background_color;
          @include bg_sub_color();
          border-radius: 5px;
          @include content_sub_color();
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

  .bottom {
    justify-self: flex-end;
    margin-bottom: 20px;

    .login {
      width: 200px;
      height: 64px;
      @include bg_color();
      display: flex;
      justify-content: space-evenly;

      .login-button {
        font-size: 60px;
      }

      a {
        line-height: 64px;
        text-decoration: none;
        @include content_sub_color();
        font-weight: 500;
      }

      .sign-in, .sign-up {
        font-size: 48px;
      }
    }
  }
}

/* 自定义类名 */
.hidden {
  visibility: hidden;
}

</style>
