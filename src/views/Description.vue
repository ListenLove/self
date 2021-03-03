<template>
  <div class="root">
    <div class="top">
      <h2>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-chengji"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-letter-s"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-letter-e"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-letter-l"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-letter-f"></use>
        </svg>
      </h2>
    </div>
    <div class="bottom">
      <div class="container">
        <div class="box1">
          <h2>For Everyone</h2>
        </div>
        <div class="box2">
          <h2>For Creative</h2>
        </div>
        <div class="box3">
          <h2>For Fun</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getDescription} from '@/assets/api'

export default {
  name: "Description",
  components: {},
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
  created() {
    getDescription().then(res => {
      console.log(res);
    })
  }
  ,
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
  //background-color: green;
  //background-color: #2c3e50;
  margin: 0 auto;
  //position: relative;
  .top {
    width: 100%;
    height: 280px;
    //background-color: red;
    @include bg_color();

    h2 {
      font-size: 100px;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
    }

    border-radius: 5px;
    box-shadow: inset 0 0 10px rgba(255, 255, 255, 1);

    [theme=light] & {
      box-shadow: 0 0 10px rgba(0, 0, 0, 1);
    }
  }

  .bottom {
    box-sizing: border-box;
    width: 100%;
    height: calc(100% - 280px);
    padding: 10px;

    .container {
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px;
      grid-auto-rows: minmax(200px, auto);

      div {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        @include bg_color();

        &:hover {
          @include box-shadow-style();
        }

        h2 {
          @include content_color();
          position: relative;
          top: 50%;
          transform: translateY(-50%);
          font-size: 60px;
        }

        &:nth-of-type(3n+1) {
          background: linear-gradient(to right bottom, #c6ffdd, #fbd7b6, #ff797d);

          [theme=dark] & {
            background: linear-gradient(to right bottom, #0F2027, #203A43, #2C5364);
          }
        }

        &:nth-of-type(3n+2) {
          background: linear-gradient(to right bottom, #2980b9, #6dd5fa, #ffffff);

          [theme=dark] & {
            background: linear-gradient(to right bottom, #b92b27, #1565c0);
          }
        }

        &:nth-of-type(3n) {
          background: linear-gradient(to right bottom, #6190e8, #a7bfeb);


          [theme=dark] & {
            background: linear-gradient(to right bottom, #108d7c, #ef8e38);
          }
        }
      }
    }
  }
}

</style>
