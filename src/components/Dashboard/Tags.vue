<template>
  <div class="tags">
    <div class="item">
      <div class="box">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-html-copy"></use>
        </svg>
      </div>
      <h3>Frontend</h3>
    </div>
    <div class="item">
      <div class="box">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-code"></use>
        </svg>
      </div>
      <h3>Backend</h3>
    </div>
    <div class="item">
      <div class="box">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-sql"></use>
        </svg>
      </div>
      <h3>Database</h3>
    </div>
    <div class="item">
      <div class="box">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bianzu5"></use>
        </svg>
      </div>
      <h3>Data Science</h3>
    </div>
    <h2 class="more">More in Future</h2>
  </div>
</template>

<script>
export default {
  name: "Tags"
}
</script>

<style scoped lang="scss">
@import "src/assets/css/mixin";
.tags {
  @include bg_sub_color();
  box-sizing: border-box;
  margin: 20px;
  height: 144px;
  display: flex;

  .item {
    width: 144px;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    justify-content: center;

    .box {
      flex: 2;
      font-size: 72px;

      svg {
        position: relative;
        transform: translateY(20%);
      }

    }

    h3 {
      flex: 1;
      line-height: 48px;
    }
  }

  .more {
    line-height: 144px;
    color: #000;
    margin-left: 30px;

    [theme=dark] & {
      color: rgba(255, 255, 255, 0.7);
    }
  }


}
</style>
