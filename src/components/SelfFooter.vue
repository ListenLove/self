<template>
  <div class="footer">
    <items-pad v-for="(_, index) in arr" :key="index" :show-array="arr" :index="index"
               @changeItInPad="itemShowAnimation">
    </items-pad>
  </div>
</template>

<script>
import ItemsPad from "@/components/FooterComponents/ItemsPad";

export default {
  name: "SelfFooter",
  components: {
    ItemsPad,
  },
  data() {
    return {
      arr: [true, false, false]
    }

  },
  methods: {
    itemShowAnimation(i) {
      this.arr = this.arr.map(((value, index) => {
        if (index === i) {
          return !value
        }
        return false
      }))
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/css/mixin";

.footer {
  width: 20%;
  min-width: 200px;
  max-width: 220px;
  min-height: 100vh;
  cursor: pointer;
  // background-color: $light_theme_background_color;
  @include bg_color();
  // float: left;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

}
</style>
