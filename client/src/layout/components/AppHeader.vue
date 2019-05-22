<template>
  <a-layout-header :class="headerClass">
    <div class="app-header-content">
      <div class="app-header-left">
        <template v-if="isTopMenu()">
          <app-logo></app-logo>
          <c-menu class="app-header-menu"
                  mode="horizontal"
                  :menu="menus"></c-menu>
        </template>
      </div>
      <user-menu class="app-header-right"></user-menu>
    </div>
  </a-layout-header>
</template>

<script lang="ts">
import { Vue, Component, Prop, Mixins } from 'vue-property-decorator';
import { routerMap } from '@/route/config';
import { AppMixin } from '@/mixins';
import CMenu from '@/components/CMenu';
import UserMenu from './AppHeaderUserMenu.vue';
import AppLogo from './AppLogo.vue';

@Component({
  components: {
    CMenu,
    UserMenu,
    AppLogo
  }
})
export default class AppHeader extends Mixins(AppMixin) {
  get headerClass() {
    return {
      'app-header': true,
      'app-header--topmenu': this.isTopMenu()
    };
  }
  get menus() {
    return routerMap[0].children;
  }
}
</script>

<style lang="less" scoped>
.app-header {
  height: 64px;
  width: 100%;
  line-height: 64px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  &-left {
    display: flex;
    flex: 1 0 auto;
    .app-header-menu {
      flex: 1;
      padding-left: 20px;
      line-height: 62px !important;
    }
  }
  &-right {
    flex: 0 1 230px;
  }
  &-content {
    margin: auto;
    display: flex;
  }

  &--topmenu {
    .app-header-content {
      max-width: 1200px;
    }
  }
}
</style>
