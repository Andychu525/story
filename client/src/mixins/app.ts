import { Vue, Component } from 'vue-property-decorator'
import { Getter } from 'vuex-class'

@Component
export default class AppMixin extends Vue {
  @Getter('layout') layoutMode: string
  isTopMenu() {
    return this.layoutMode === 'topmenu'
  }
  isSideMenu() {
    return !this.isTopMenu()
  }
}
