import { Vue, Component } from 'vue-property-decorator'
import { Getter, Action } from 'vuex-class'

@Component
export default class AppMixin extends Vue {
  @Getter('layout') layoutMode: string
  @Getter('sidebar') sidebar: boolean
  @Getter('fixedHeader') fixedHeader: boolean
  @Getter('fixsidebar') fixsidebar: boolean
  @Action('ToggleSidebar') togglesidebar: Function
  isTopMenu() {
    return this.layoutMode === 'topmenu'
  }
  isSideMenu() {
    return !this.isTopMenu()
  }
  toggleSider() {
    this.togglesidebar()
  }
}
