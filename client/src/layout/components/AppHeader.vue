<template>
  <a-layout-header :class="headerClass">
    <div class="app-header-content">
      <div class="app-header-left">
        <a-icon class="trigger"
                type="menu-fold"
                v-if="isSideMenu()"
                @click="()=>{}" />
        <app-logo v-if="isTopMenu()"></app-logo>
        <s-menu v-if="isTopMenu()"
                :menu="menus"
                class="app-header-menu"
                mode="horizontal"></s-menu>
      </div>
      <user-menu class="app-header-right"></user-menu>
    </div>
  </a-layout-header>
</template>

<script lang="ts">
import { Vue, Component, Prop, Mixins } from 'vue-property-decorator';
import { routerMap } from '@/route/config';
import { AppMixin } from '@/mixins';
import SMenu from '@/components/Menu';
import UserMenu from './UserMenu.vue';
import AppLogo from './AppLogo.vue';

@Component({
  components: {
    SMenu,
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
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  line-height: 64px;
  width: 100%;
  height: 64px;
  margin: auto;
  .app-header-content {
    margin: auto;
    display: flex;
    height: 64px;
  }
}
.app-header--topmenu {
  .app-header-content {
    max-width: 1200px;
  }
}

.app-header-left {
  display: flex;
  flex: 1 0 auto;
  .app-header-menu {
    padding-left: 20px;
    line-height: 62px !important;
    flex: 1;
  }
}
.app-header-right {
  flex: 0 1 230px;
}

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
</style>
