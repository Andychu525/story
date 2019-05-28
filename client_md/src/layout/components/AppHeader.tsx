import { Vue, Component } from 'vue-property-decorator'
import { Getter, Action } from 'vuex-class'
import { DrawerState } from '@/Store/modules/app'

@Component
export default class AppHeader extends Vue {
  @Getter('drawer') darwer!: DrawerState

  render() {
    return (
      <v-toolbar clipped-left={this.darwer.clipped} app absolute>
        <v-toolbar-side-icon />
        <v-toolbar-title>Vuetify</v-toolbar-title>
      </v-toolbar>
    )
  }
}
