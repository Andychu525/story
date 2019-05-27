<template>
  <div id="vsWorkBench">
    <div class="tabs-and-actions">
      <vs-tabs></vs-tabs> 
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import VsTabs from './VsTabs.vue'

@Component({ components: { VsTabs } })
export default class VsWorkBench extends Vue {}
</script>

<style lang="stylus" scoped>
#vsWorkBench {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
}
</style>

