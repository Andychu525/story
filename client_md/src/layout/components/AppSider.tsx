import { Vue, Component, Prop } from 'vue-property-decorator'
import AppMenu from '@/components/CMenu'

@Component({ components: { AppMenu } })
export default class AppSider extends Vue {
  @Prop({ type: Boolean, default: false })
  private clipped!: boolean
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
      <v-navigation-drawer absolute overflow app>
        <app-menu menus={this.menus} />
      </v-navigation-drawer>
    )
  }
}
