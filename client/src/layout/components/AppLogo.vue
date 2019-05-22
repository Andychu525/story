<template>
  <router-link to="/dashboard"
               class="app-logo">
    <div>
      <svg-icon name="logo"
                width="2.5em"
                height="2.5em"></svg-icon>
    </div>
    <span v-if="showTitle">Test Plaform</span>
  </router-link>
</template>
<script lang="ts">
import { Vue, Component, Prop, Mixins } from 'vue-property-decorator';

@Component
export default class AppLogo extends Vue {
  @Prop({ type: Boolean, default: true }) showTitle: boolean;
}
</script>

<style lang="less" scoped>
.app-logo {
  height: 64px;
  line-height: 64px;
  color: #ee4d2d;
  overflow: hidden;
  position: relative;
  display: flex;
  transition: all 0.3s;
  text-decoration: none;

  svg {
    margin-right: 8px;
  }
  span {
    font-size: 20px;
    font-weight: 500;
  }
}
</style>
