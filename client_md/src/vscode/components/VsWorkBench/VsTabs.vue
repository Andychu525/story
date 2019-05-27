<template>
  <div>
    <textarea></textarea>
    <!-- <div
      v-for="file in files"
      :key="file.path"
      :ref="file.path"
      class="tag"
      :class="{active:current.path==file.path}"
      @click="onSelect(file)"
    >
      <svg-icon :name="$getVscodeIcon(file.title,false,false)" :original="true"></svg-icon>
      <span>{{ file.title }}</span>
    </div>-->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { getIconForFile } from 'vscode-icons-js'
// import VuePerfectScrollbar from 'vue-perfect-scrollbar/index.vue'

@Component({ components: {} })
export default class ScrollTag extends Vue {
  psSetting = {
    maxScrollbarLength: 200,
    minScrollbarLength: 40,
    suppressScrollY: true,
    useBothWheelAxes: true
  }

  @Watch('current')
  refreshTags(newFile: any, oldFile: any) {
    // 不在可是区域，计算滚动矢量
    setTimeout(() => {
      if (newFile && this.$refs[newFile.path]) {
        const parentRect: ClientRect = this.$el.getBoundingClientRect()
        const childRect = (this.$refs[
          newFile.path
        ] as Element[])[0].getBoundingClientRect()
        const offsetX = childRect.left - parentRect.left
        scrollX = 0
        if (offsetX < 0) {
          scrollX = offsetX
        } else if (offsetX < parentRect.width - childRect.width) {
          scrollX = 0
        } else {
          scrollX = offsetX - parentRect.width + childRect.width
        }
        this.$el.scrollLeft += scrollX
      }
    }, 150)
  }
}
</script>

<style lang="stylus" scoped>
.scoll-tag {
  display: -webkit-box;

  .ps__scrollbar-x-rail, .ps__scrollbar-x {
    height: 3px !important;
    bottom: 0px !important;
  }

  .tag {
    min-width: 120px;
    border-right: 1px solid #bbb;

    &.active {
      background: white;
    }

    padding-left: 8px;
    padding-right: 8px;

    img {
      height: 20px;
      width: 20px;
    }

    span {
      line-height: 30px;
      margin-left: 5px;
    }

    i {
      margin-left: 10px;
    }
  }
}
</style>

