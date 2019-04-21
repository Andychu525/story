<template>
  <a-layout-sider width="256px"
                  :class="appSiderClass"
                  v-model="sidebar">
    <router-link to="/dashboard">
      <app-logo class="app-sider-logo"
                :showTitle="!sidebar"></app-logo>
    </router-link>
    <s-menu :menu="menus"
            class="app-sider-menu"
            mode="inline"></s-menu>
  </a-layout-sider>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { routerMap } from "@/route/config";
import { AppMixin } from "@/mixins";
import { mixins } from "vue-class-component";
import SMenu from "@/components/Menu";
import AppLogo from "./AppLogo.vue";
@Component({
  components: {
    SMenu,
    AppLogo
  }
})
export default class AppSider extends mixins(AppMixin) {
  get menus() {
    return routerMap[0].children;
  }

  get appSiderClass() {
    return ["app-sider", this.fixsidebar && "app-sider_fixed"];
  }
}
</script>
<style lang="less" scoped>
.app-sider {
  height: 100vh;
  max-height: 100vh;
  min-height: 100vh;
  overflow-x: hidden;
  box-shadow: 2px 0 8px 0 rgba(29, 35, 41, 0.05);
  &_fixed {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
  }
  &-logo {
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    padding-left: 24px;
  }
  &-menu {
    padding-top: 20px;
  }
}
</style>

