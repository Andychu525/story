<template>
  <a-layout :class="layoutClass">
    <app-sider v-if="isSideMenu()"></app-sider>
    <div class="app-content">
      <app-header></app-header>
      <app-setting></app-setting>
    </div>
  </a-layout>
</template>


<script lang="ts">
import { Vue, Component, Prop, Mixins } from 'vue-property-decorator';
import { AppHeader, AppSetting, AppSider } from './components';
import { AppMixin } from '@/mixins';

@Component({
  components: {
    AppSider,
    AppHeader,
    AppSetting
  }
})
export default class BasicLayout extends Mixins(AppMixin) {
  get layoutClass() {
    return {
      'app-layout': true,
    };
  }
}
</script>