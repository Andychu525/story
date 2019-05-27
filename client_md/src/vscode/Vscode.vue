<template>
  <div id="vs">
    <vs-navigation class="vs-nav"></vs-navigation>
    <vs-work-bench class="vs-work-bench elevation-2"></vs-work-bench>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import VsNavigation from './components/VsNavigation'
import VsWorkBench from './components/VsWorkBench'

@Component({ components: { VsNavigation, VsWorkBench } })
export default class Vscode extends Vue {}
</script>

<style lang="stylus" scoped>
#vs {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: hidden;

  .vs-nav {
    flex: 0 1 300px;
  }

  .vs-work-bench {
    flex: 1 1 0;
    background-color: #d5d8da;
  }
}
</style>
