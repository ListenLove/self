<template>
  <div class="register" v-show="isShowRegisterPage">
    <div class="mask" @click="hideRegister"></div>
    <div class="sign-up">
      <h2>注册</h2>
      <form class="sign-up-form">
        <label>
          <input type="text" name="user" placeholder="用户名">
          <el-tooltip class="item" :effect="getTheme" placement="right">
             <div slot="content">
               <span>一、用户名</span><span style="color: #9c042c">字符必须为英文字母或阿拉伯数字</span><br/>
               <span>二、用户名</span><span style="color: #9c042c">首字符必须为英文字母</span><br>
               <span>三、示例：</span><span style="color: #049c09">admin2021</span><br>
             </div>
            <svg class="icon lint" aria-hidden="true">
              <use xlink:href="#icon-Info"></use>
            </svg>
          </el-tooltip>
        </label>
        <label>
          <input type="email" name="user" placeholder="用户邮箱">
          <el-tooltip class="item" :effect="getTheme" content="请输入常用邮箱" placement="right">
            <svg class="icon lint" aria-hidden="true">
              <use xlink:href="#icon-email"></use>
            </svg>
          </el-tooltip>
        </label>
        <label>
          <input type="password" name="user" placeholder="用户密码">
          <el-tooltip class="item" :effect="getTheme" content="密码长度不得小于8" placement="right">
          <svg class="icon lint" aria-hidden="true">
            <use xlink:href="#icon-lock"></use>
          </svg>
          </el-tooltip>
        </label>
        <label>
          <input type="password" name="user" placeholder="确认密码">
          <el-tooltip class="item" :effect="getTheme" content="请再次输入密码" placement="right">
          <svg class="icon lint" aria-hidden="true">
            <use xlink:href="#icon-Info"></use>
          </svg>
          </el-tooltip>
        </label>
        <button class="sign-up-button">提交</button>
      </form>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "Register",
  computed: {
    ...mapGetters(
      [
        'isShowRegisterPage',
        'getTheme'
      ]
    )
  },
  methods: {
    ...mapActions(
      [
        'setShowRegisterPage'
      ]
    ),
    hideRegister() {
      const h = this.$createElement
      this.$message({
        message: h('p', null, [
          h('b', {style: 'color: teal'}, '注册页'),
          h('span', null, '已关闭')
        ]),
        duration: 800,
      })
      this.setShowRegisterPage(false)
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/css/mixin";

.register {
  --op: 0.5;
  --shadow-color: rgba(255, 255, 255, 0.5);
  z-index: 999;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;

  .mask {
    width: 100%;
    height: 100%;
    position: absolute;
    backdrop-filter: blur(2px);
    background-color: rgba(0, 0, 0, 0.3);
    top: 0;
  }

  .sign-up {
    margin: 0 auto;

    h2 {
      margin: 20px;
    }

    border-radius: 10px;
    width: 25%;
    height: 30%;
    min-width: 300px;
    min-height: 300px;
    //background-color: #fff;
    @include bg_sub_color();
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 6px 20px  -6px var(--shadow-color);
    overflow: hidden;

    .sign-up-form {
      label {
        display: block;
        text-align: left;
        font-size: 24px;

        input {
          box-sizing: border-box;
          font-size: 14px;
          position: relative;
          left: 20%;
          height: 40px;
          width: 60%;
          padding: 10px;
          outline: none;
          border: none;
          border-bottom: 1px solid #353e4f;
          @include border_color();
          //@include content_color();
          @include bg_color();

          [theme=dark] & {
            background-color: #1d2b39;
            color: #ffffff;
          }

          &::placeholder {
            [theme=dark] & {
              color: rgba(255, 255, 255, 0.5);
            }
          }
        }

        &:nth-of-type(1) input {
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
        }

        &:nth-last-of-type(1) input {
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
        }

        .lint {
          position: relative;
          margin-left: 25%;
          display: inline-block;
          font-size: 24px;
          vertical-align: -0.33em;
          //background-color: red;
        }
      }

      .sign-up-button {
        @include button_bg_color();
        outline: none;
        border: none;
        width: 40%;
        min-height: 40px;
        min-width: 100px;
        margin-top: 15px;
        border-radius: 20px;
        transition: all 0.7s ease;
        color: rgba(255, 255, 255, 0.5);
        font-weight: 500;

        &:hover {
          @include button_bg_sub_color();
        }
      }

    }
  }
}
</style>
