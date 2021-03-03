<template>
  <div class="pad">
    <h3 class="title" @click="hide"><span>
    </span>
      title
    </h3>
    <ul class="items" v-if="showArray[index]">
      <li><span class="item-icon"></span><a href="#">1</a></li>
      <li><span class="item-icon"></span><a href="#">122</a></li>
      <li><span class="item-icon"></span><a href="#">122333</a></li>
      <li><span class="item-icon"></span><a href="#">1223334444</a></li>
      <li><span class="item-icon"></span><a href="#">122333444455555</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ItemsPad",
  props: {
    index: {
      default: 0,
      type: Number,
    },
    showArray: {
      default: () => [],
      type: Array
    },
  },
  methods: {
    hide() {
      this.$emit("changeItInPad", this.index)
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/css/mixin";

.show {
  display: block;
}

.pad {
  width: 80%;
  min-width: 180px;
  margin: 20px auto 0;
  border-radius: 5px;
  overflow: hidden;
  @include bg_color();
  @include content_color();
  border: 2px solid #000;
  @include border_color();
  transition: transform 0.5s 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
    @include box-shadow-style();
  }


  .title {
    height: 80px;
    line-height: 80px;
  }

  .items {
    //background-color: #fff;
    @include bg_color();
    overflow: hidden;
    min-height: 360px;
    box-sizing: border-box;
    padding: 5px;

    li {
      width: 100%;
      border-radius: 5px;
      height: 60px;
      list-style: none;
      line-height: 60px;
      display: flex;
      padding: 10px 5px;


      &:hover {
        @include bg_sub_color();
      }

      .item-icon {
        flex-shrink: 0;
        width: 50px;
        height: 50px;
        border-radius: 25px;
        background-color: lightblue;
        margin: 5px 10px;
      }

      a {
        margin-left: 5px;
        @include content_color();
        @include no_wrap();
      }
    }
  }

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0);
  }
}


</style>
