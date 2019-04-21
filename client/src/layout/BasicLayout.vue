<template>
  <a-layout class="basic-layout"
            :class="layoutClass">
    <app-sider v-if="isSideMenu()"></app-sider>
    <div class="layout-content">
      <app-header></app-header>
    </div>
    <app-setting></app-setting>
  </a-layout>
</template>


<script lang="ts">
import { Vue, Component, Prop, Mixins } from "vue-property-decorator";
import { AppHeader, AppSetting, AppSider } from "./components";
import { AppMixin } from "@/mixins";

@Component({
  components: {
    AppSider,
    AppHeader,
    AppSetting
  }
})
export default class BasicLayout extends Mixins(AppMixin) {
  get layoutClass() {
    return [
      this.isSideMenu() ? "sidemenu" : "topmenu",
      this.isSideMenu() && this.sidebar && "sidemenu_collapsed",
      this.isSideMenu() && this.fixsidebar && "sidemenu_fixed"
    ];
  }
}
</script>

<style lang="less" scoped>
.layout-content {
  display: relative;
  min-height: 100vh;
  width: 100%;
}
&.sidemenu_fixed {
  .layout-content {
    padding-left: 256px;
  }
  &.sidemenu_collapsed {
    .layout-content {
      padding-left: 80px;
    }
  }
}
</style>
