import { Vue, Component } from 'vue-property-decorator'
import { Getter, Action } from 'vuex-class'
import { TOGGLE_APP_DARK, TOGGLE_DRAWER_CLIPED } from '@/Store/actionTypes'
import { DrawerState } from '@/Store/modules/app'

import AppHeader from './components/AppHeader'
import AppSider from './components/AppNavSider'
import AppFooter from './components/AppFooter'
import AppSetting from './components/AppSettingPanel/index'

@Component({ components: { AppHeader, AppSider, AppFooter, AppSetting } })
export default class AppLayout extends Vue {
  @Getter('dark') dark!: boolean
  @Getter('drawer') drawer!: DrawerState

  @Action(TOGGLE_APP_DARK) toggleAppDark!: Function
  @Action(TOGGLE_DRAWER_CLIPED) toggleDrawerCliped!: Function

  private themeOptions = [
    { text: 'dark', value: true },
    { text: 'light', value: false }
  ]

  onInput(dark: boolean) {
    this.toggleAppDark(dark)
  }
  onChange(clipped: boolean) {
    this.toggleDrawerCliped(clipped)
  }

  renderThemeSelect() {
    return (
      <v-select
        items={this.themeOptions}
        value={this.dark}
        onInput={this.onInput.bind(this)}
      />
    )
  }

  renderDrawerControl() {
    return (
      <v-switch
        value={this.drawer.clipped}
        onChange={this.onChange.bind(this)}
      />
    )
  }

  render() {
    return (
      <v-app dark={this.dark}>
        <app-header />
        <app-sider />
        <v-content>
          {this.renderThemeSelect()}
          {this.renderDrawerControl()}
        </v-content>
        <app-setting />
        <app-footer />
      </v-app>
    )
  }
}
