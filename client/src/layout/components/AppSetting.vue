<template>
  <div ref="appSetting">
    <a-drawer width="300"
              placement="right"
              @close="onClose"
              :mask="false"
              :closable="false"
              :visible="visible"
              :getContainer="() => $refs.appSetting">

      <div class="setting-drawer-content">
        <div>
          <h3>整体风格设置</h3>
          <div class="setting-drawer-blockChecbox">
            <div class="setting-drawer-item"
                 @click="handleMenuTheme('dark')">
              <img src="https://gw.alipayobjects.com/zos/rmsportal/LCkqqYNmvBEbokSDscrm.svg"
                   alt="dark">
              <div class="setting-drawer-selectIcon"
                   v-if="navTheme === 'dark'">
                <a-icon type="check" />
              </div>
            </div>

            <div class="setting-drawer-item"
                 @click="handleMenuTheme('light')">
              <img src="https://gw.alipayobjects.com/zos/rmsportal/jpRkZQMyYRryryPNtyIC.svg"
                   alt="light">
              <div class="setting-drawer-selectIcon"
                   v-if="navTheme !== 'dark'">
                <a-icon type="check" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 class="setting-drawer-title">主题色</h3>
          <div>
            <a-tag :color="item.color"
                   class="setting-drawer-theme-color-colorBlock"
                   v-for="(item, index) in colorList"
                   :key="index"
                   @click="changeColor(item.color)">
              <a-icon type="check"
                      v-if="item.color === primaryColor"></a-icon>
            </a-tag>
          </div>
        </div>
      </div>
      <div class="setting-drawer-handle"
           @click="toggle">
        <a-icon type="setting"
                v-if="!visible" />
        <a-icon type="close"
                v-else />
      </div>
    </a-drawer>
  </div>
</template>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class AppSetting extends Vue {
  visible = false;
  navTheme = 'dark';
  primaryColor = '#F5222D';
  colorList = [
    { key: '薄暮', color: '#F5222D' },
    { key: '火山', color: '#FA541C' },
    { key: '日暮', color: '#FAAD14' },
    { key: '明青', color: '#13C2C2' },
    { key: '极光绿', color: '#52C41A' },
    { key: '拂晓蓝（默认）', color: '#1890FF' },
    { key: '极客蓝', color: '#2F54EB' },
    { key: '酱紫', color: '#722ED1' }
  ];
  onClose() {
    this.visible = false;
  }
  toggle() {
    this.visible = !this.visible;
  }
  handleMenuTheme(theme: string) {
    this.navTheme = theme;
  }
  changeColor(color: string) {
    this.primaryColor = color;
  }
}
</script>


<style lang="less" scoped>
.setting-drawer-content {
  .setting-drawer-blockChecbox {
    display: flex;

    .setting-drawer-item {
      margin-right: 16px;
      position: relative;
      border-radius: 4px;
      cursor: pointer;

      img {
        width: 48px;
      }

      .setting-drawer-selectIcon {
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        padding-top: 15px;
        padding-left: 24px;
        height: 100%;
        color: #1890ff;
        font-size: 14px;
        font-weight: 700;
      }
    }
  }
  .setting-drawer-theme-color-colorBlock {
    width: 20px;
    height: 20px;
    border-radius: 2px;
    float: left;
    cursor: pointer;
    margin-right: 8px;
    padding-left: 0px;
    padding-right: 0px;
    text-align: center;
    color: #fff;
    font-weight: 700;

    i {
      font-size: 14px;
    }
  }
}

.setting-drawer-handle {
  position: absolute;
  top: 240px;
  background: #1890ff;
  width: 48px;
  height: 48px;
  right: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  pointer-events: auto;
  z-index: 1001;
  text-align: center;
  font-size: 16px;
  border-radius: 4px 0 0 4px;

  i {
    color: rgb(255, 255, 255);
    font-size: 20px;
  }
}
</style>


