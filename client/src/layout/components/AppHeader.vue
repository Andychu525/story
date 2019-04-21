<template>
  <a-layout-header :class="headerClass">
    <div v-if="isSideMenu()"
         class="app-header-sidemenu">
      <a-icon class="trigger"
              :type="sidebar ? 'menu-unfold' : 'menu-fold'"
              @click="toggleSider" />
      <user-menu></user-menu>
    </div>

    <div class="app-header-topmenu"
         v-else>
      <div class="app-header-left">
        <app-logo></app-logo>
        <s-menu :menu="menus"
                class="app-header-menu"
                mode="horizontal"></s-menu>
      </div>
      <user-menu class="app-header-right"></user-menu>
    </div>
  </a-layout-header>
</template>

<script lang="ts">
import { Vue, Component, Prop, Mixins } from "vue-property-decorator";
import { routerMap } from "@/route/config";
import { AppMixin } from "@/mixins";
import SMenu from "@/components/Menu";
import UserMenu from "./UserMenu.vue";
import AppLogo from "./AppLogo.vue";

@Component({
  components: {
    SMenu,
    UserMenu,
    AppLogo
  }
})
export default class AppHeader extends Mixins(AppMixin) {
  get headerClass() {
    return [
      "app-header",
      this.fixedHeader && "app-header_fixed",
      this.isSideMenu() && (this.sidebar ? "sider-close" : "sider-open")
    ];
  }
  get menus() {
    return routerMap[0].children;
  }
}
</script>

<style lang="less" scoped>
.app-header {
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  position: relative;
  line-height: 64px;
  width: 100%;
  .trigger {
    font-size: 20px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      background-color: #fff4ed;
    }
  }
  &_fixed {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    transition: width 0.2s;
    &.sider-close {
      width: calc(100% - 80px);
    }
    &.sider-open {
      width: calc(100% - 256px);
    }
  }
  &-sidemenu {
    display: flex;
    height: 100%;
  }
  &-topmenu {
    max-width: 1200px;
    margin: auto;
    display: flex;
    height: 100%;
    .app-header-left {
      display: flex;
      flex: 0 1 1000px;
      .app-header-menu {
        padding-left: 20px;
        line-height: 62px !important;
        flex: 1;
      }
    }
    .app-header-right {
      flex: 1 0 auto;
    }
  }
}
</style>
