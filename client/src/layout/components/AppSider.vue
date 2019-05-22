<template>
  <a-layout-sider width="256"
                  :class="siderClass"
                  collapsible
                  theme="light"
                  v-model="collapsed">
    <app-logo class="app-sider-logo"
              :showTitle="!collapsed"></app-logo>
    <c-menu :menu="menus"
            class="app-sider-menu"
            mode="inline"></c-menu>
  </a-layout-sider>
</template>

<script lang="ts">
import { Vue, Component, Mixins } from 'vue-property-decorator';
import { routerMap } from '@/route/config';
import { AppMixin } from '@/mixins';
import CMenu from '@/components/CMenu';
import AppLogo from './AppLogo.vue';


@Component({
  components: {
    CMenu,
    AppLogo
  }
})
export default class AppSider extends Mixins(AppMixin) {
  collapsed = true

  get menus() {
    return routerMap[0].children;
  }
  get siderClass() {
    return {
      'app-sider': true,
      'app-sider--fixed': true
    }
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

