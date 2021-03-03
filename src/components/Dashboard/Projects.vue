<template>
  <div class="projects">
    <div class="box-pad">
      <div class="container">
        <div class="top">
          <div class="top-banner">
            <p>2021年3月3日</p><a href="javascript:">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-more"></use>
            </svg>
          </a>
          </div>
          <h3 class="title"><a href="javascript:">Self</a></h3>
          <div class="desc">self make projects use web design,
            self make projects use web design,self make projects use web design,
            self make projects use web design
          </div>
        </div>
        <div class="bottom">
          <div class="contributor">
            <span>A</span>
            <span>b</span>
            <span>c</span>
            <a class="plus" href="javascript:">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-Plus"></use>
              </svg>
            </a>
          </div>
          <button class="star">star</button>
        </div>
      </div>
    </div>
    <div class="box-pad">
      <div class="container">
        <div class="top">
          <div class="top-banner">
            <p>2021年3月3日</p><a href="javascript:">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-more"></use>
            </svg>
          </a>
          </div>
          <h3 class="title"><a href="javascript:">Self</a></h3>
          <div class="desc">self make projects use web design,
            self make projects use web design,self make projects use web design,
            self make projects use web design
          </div>
        </div>
        <div class="bottom">
          <div class="contributor">
            <span>A</span>
            <span>b</span>
            <a class="plus" href="javascript:">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-Plus"></use>
              </svg>
            </a>
          </div>
          <button class="star">star</button>
        </div>
      </div>
    </div>
    <div class="box-pad">
      <div class="container">
        <div class="top">
          <div class="top-banner">
            <p>2021年3月3日</p><a href="javascript:">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-more"></use>
            </svg>
          </a>
          </div>
          <h3 class="title"><a href="javascript:">Self</a></h3>
          <div class="desc">self make projects use web design,
            self make projects use web design,self make projects use web design,
            self make projects use web design
          </div>
        </div>
        <div class="bottom">
          <div class="contributor">
            <span>A</span>
            <a class="plus" href="javascript:">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-Plus"></use>
              </svg>
            </a>
          </div>
          <button class="star">star</button>
        </div>
      </div>
    </div>
    <div class="box-pad">
      <div class="container">
        <div class="top">
          <div class="top-banner">
            <p>2021年3月3日</p><a href="javascript:">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-more"></use>
            </svg>
          </a>
          </div>
          <h3 class="title"><a href="javascript:">Self</a></h3>
          <div class="desc">self make projects use web design,
            self make projects use web design,self make projects use web design,
            self make projects use web design
          </div>
        </div>
        <div class="bottom">
          <div class="contributor">
            <span>A</span>
            <span>b</span>
            <span>c</span>
            <a class="plus" href="javascript:">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-Plus"></use>
              </svg>
            </a>
          </div>
          <button class="star">star</button>
        </div>
      </div>
    </div>
    <div class="box-pad">
      <div class="container">
        <div class="top">
          <div class="top-banner">
            <p>2021年3月3日</p><a href="javascript:">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-more"></use>
            </svg>
          </a>
          </div>
          <h3 class="title"><a href="javascript:">Self</a></h3>
          <div class="desc">self make projects use web design,
            self make projects use web design,self make projects use web design,
            self make projects use web design
          </div>
        </div>
        <div class="bottom">
          <div class="contributor">
            <span>A</span>
            <span>b</span>
            <a class="plus" href="javascript:">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-Plus"></use>
              </svg>
            </a>
          </div>
          <button class="star">star</button>
        </div>
      </div>
    </div>
    <div class="box-pad">
      <div class="container">
        <div class="top">
          <div class="top-banner">
            <p>2021年3月3日</p><a href="javascript:">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-more"></use>
            </svg>
          </a>
          </div>
          <h3 class="title"><a href="javascript:">Self</a></h3>
          <div class="desc">self make projects use web design,
            self make projects use web design,self make projects use web design,
            self make projects use web design
          </div>
        </div>
        <div class="bottom">
          <div class="contributor">
            <span>A</span>
            <a class="plus" href="javascript:">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-Plus"></use>
              </svg>
            </a>
          </div>
          <button class="star">star</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects"
}
</script>

<style scoped lang="scss">
@import "src/assets/css/mixin";

.projects {
  width: 100%;
  height: 560px;
  @include bg_color();
  //@include content_color();
  overflow-y: scroll;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  grid-auto-rows: 400px;
  // 自定义滚动条样式
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.5);

    [theme=dark] & {
      background-color: rgba(85, 43, 43, 0.8);
    }

    display: none;
    border-radius: 5px; /* roundness of the scroll thumb */
    opacity: 0.5;
    //border: 1px solid black; /* creates padding around scroll thumb */
  }

  &:hover::-webkit-scrollbar-thumb {
    display: initial;
  }

  .box-pad {
    width: 100%;
    height: 100%;
    position: relative;
    @include bg_color();
    z-index: 1;
    padding: 20px;
    box-sizing: border-box;

    .container {
      position: absolute;
      top: 20px;
      left: 20px;
      @include bg_sub_color();
      width: calc(100% - 60px);
      height: calc(100% - 60px);
      border-radius: 40px;
      overflow: hidden;

      .top {
        width: 100%;
        height: 240px;
        //background-color: lightpink;

        .top-banner {
          font-size: 24px;
          line-height: 60px;
          box-sizing: border-box;
          padding: 0 35px;
          width: 100%;
          height: 60px;
          display: flex;
          justify-content: space-between;
          align-items: center;

          a {
            font-size: 38px;
          }
        }

        .title {
          height: 80px;
          width: 100%;
          font-size: 48px;

          a {
            text-decoration: none;
            color: inherit;
            line-height: 80px;
            transition: color 0.3s ease-in-out;
          }

          a:hover {
            color: #199bbe;

            [theme=dark] & {
              color: #5157ed;
            }

            text-decoration: underline;
            font-weight: bolder;
          }
        }

        .desc {
          margin-top: 10px;
          //padding: 8px 10px;
          font-size: 24px;
          @include clamp(3);
        }
      }

      .bottom {
        margin-top: 10px;
        width: 100%;
        height: 80px;
        //background-color: royalblue;
        display: flex;
        justify-content: space-around;
        align-items: center;

        .contributor {
          display: flex;
          font-size: 32px;
          height: 60px;
          width: 180px;
          //background-color: turquoise;
          padding-left: 25px;

          a {
            margin-left: 15px;
            font-size: 48px;
            position: relative;
            top: 50%;
            transform: translateY(-50%);
          }

          span {
            position: relative;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: teal;
            border: 1px solid #000;
            margin-left: -15px;
            top: 50%;
            transform: translateY(-50%);
            text-align: center;
            line-height: 50px;
          }

        }

        button {
          padding: 1px;
          font-size: 32px;
          height: 50px;
          width: 150px;
          border-radius: 30px;
          outline: none;
          border: none;
          @include button_bg_color();
          cursor: pointer;

          &:hover {
            @include button_bg_sub_color();
          }
        }
      }
    }

    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: -20px;
      margin: 0;
      right: 0;
      clip-path: inset(40px 0 40px 40px round 10px);
      background-color: rgba(0, 0, 0, 0.3);

      [theme=dark] & {
        background-color: #6d6875;
        opacity: 0.5;
      }

      contain: strict;
      z-index: -1;
      transition: all 0.5s ease-in-out;
    }

    &:hover::after {
      clip-path: inset(0 0 0 0 round 10px);
    }

    &:nth-of-type(4n) {

    }
  }
}
</style>
