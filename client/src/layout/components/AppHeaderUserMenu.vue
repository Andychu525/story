<template>
  <div>
    <span class="action">
      <a-icon type="question-circle-o"></a-icon>
    </span>
    <c-notice-icon class="action" />
    <a-dropdown>
      <span class="action ant-dropdown-link user-dropdown-menu">
        <a-avatar class="avatar"
                  size="small" />
        <span>KunKun Chu</span>
      </span>
      <a-menu slot="overlay"
              class="user-dropdown-menu-wrapper">
        <a-menu-item key="0">
          <router-link :to="{ name: 'center' }">
            <a-icon type="user" />
            <span>个人中心</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="1">
          <router-link :to="{ name: 'settings' }">
            <a-icon type="setting" />
            <span>账户设置</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="2"
                     disabled>
          <a-icon type="setting" />
          <span>测试</span>
        </a-menu-item>
        <a-menu-divider />
        <a-menu-item key="3">
          <a href="javascript:;"
             @click="handleLogout">
            <a-icon type="logout" />
            <span>退出登录</span>
          </a>
        </a-menu-item>
      </a-menu>
    </a-dropdown>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import CNoticeIcon from '@/components/CNoticeIcon';
import { mapActions, mapGetters } from 'vuex';
import { Action } from 'vuex-class';

@Component({
  components: {
    CNoticeIcon
  }
})
export default class UserMenu extends Vue {
  @Action('Logout') logout: any

  handleLogout() {
    const that = this;
    this.$confirm({
      title: '提示',
      content: '真的要注销登录吗 ?',
      onOk() {
        return that.logout({}).then(() => {
          window.location.reload();
        }).catch((err: any) => {
          that.$message.error({
            title: '错误',
            description: err.message
          });
        });
      }
    });
  }
}
</script>

<style lang="less" scoped>
.action {
  padding: 0 12px;
  height: 100%;
  cursor: pointer;
  display: inline-block;
}
</style>

