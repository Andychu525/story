import { Vue, Component } from 'vue-property-decorator'
import { Getter } from 'vuex-class'
import { DrawerState } from '@/Store/modules/app'

import AppMenu from '@/components/CMenu'

@Component({ components: { AppMenu } })
export default class AppSider extends Vue {
  @Getter('drawer') darwer!: DrawerState
  private menus = [
    {
      name: 'AA',
      children: [
        {
          name: 'BB',
          children: [
            {
              name: 'AA',
              children: [
                {
                  name: 'BB',
                  meta: {
                    title: 'vscode',
                    target: 'vscode'
                  }
                }
              ],
              meta: {
                title: 'tile'
              }
            }
          ],
          meta: {
            title: 'child'
          }
        }
      ],
      meta: {
        title: 'tile'
      }
    }
  ]

  render() {
    return (
      <v-navigation-drawer absolute overflow app clipped={this.darwer.clipped}>
        <app-menu menus={this.menus} />
      </v-navigation-drawer>
    )
  }
}
