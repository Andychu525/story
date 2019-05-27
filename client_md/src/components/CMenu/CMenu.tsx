import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import {
  VList,
  VListGroup,
  VListTile,
  VListTileContent,
  VListTileTitle,
  VListTileAction,
  VSubheader,
  VDivider
} from 'vuetify/lib'

interface Meta {
  title: string
  icon?: string
  target?: string
  header?: boolean
  divider: boolean
}

interface Menu {
  name: string
  path?: string
  hidden?: boolean
  redirect?: string
  children?: Menu[]
  meta: Meta
}

@Component
export default class CMenu extends Vue {
  @Prop({ type: Array, required: true })
  menus!: Menu[]

  // renderIcon(icon: any) {
  //   if (icon === 'none' || icon === undefined) {
  //     return null
  //   }
  //   const props: any = {}
  //   typeof icon === 'object' ? (props.component = icon) : (props.type = icon)
  //   return <Icon {...{ props }} />
  // }

  renderSubHeader(menu: Menu) {
    return <v-sub-header>{menu.meta.title}</v-sub-header>
  }

  renderDivider(menu: Menu) {
    return <v-divider />
  }

  renderItem(menu: Menu) {
    if (!menu.hidden) {
      if (menu.meta.header) return this.renderSubHeader(menu)
      else if (menu.meta.divider) return this.renderDivider(menu)
      else if (menu.children) return this.renderSubMenu(menu)
      else return this.renderMenuItem(menu)
    } else {
      return null
    }
  }

  renderMenuItem(menu: Menu) {
    return (
      <v-list-tile ripple="ripple" to={menu.meta.target}>
        <v-list-tile-content>
          <v-list-tile-title>{menu.meta.title}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    )
  }
  renderSubMenu(menu: any) {
    const childern = menu.children.map((item: Menu) => {
      console.error(item)
      return this.renderItem(item)
    })

    return (
      <v-list-group no-action="no-action">
        <v-list-tile slot="activator" ripple="ripple">
          <v-list-tile-content>
            <v-list-tile-title>{menu.meta.title}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        {childern}
      </v-list-group>
    )
  }

  render() {
    const childern = this.menus.map((item: Menu) => {
      return this.renderItem(item)
    })

    return (
      <v-list dense expand>
        {childern}
      </v-list>
    )
  }
}
