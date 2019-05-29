<script lang="tsx">
import { Vue, Component } from 'vue-property-decorator'
import { VBtnToggle, VListGroup } from 'vuetify/lib'

@Component
export default class AppSettingPanel extends Vue {
  render() {
    return <div class="demo" />
  }
}
</script>

<style lang="stylus">
.demo {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 200px;
  height: 200px;
  background-color: red;
}
</style>

<template></template>
