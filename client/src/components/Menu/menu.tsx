import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import { Icon, Menu } from 'ant-design-vue'

const { SubMenu, Item } = Menu

@Component
export default class SMenu extends Vue {
  @Prop({ type: Array, required: true }) menu: []
  @Prop({ type: String, required: false, default: 'light' }) theme: string
  @Prop({ type: String, required: true, default: 'inline' }) mode: string
  @Prop({ type: Boolean, required: false, default: false }) collapsed: boolean

  openKeys: any[] = []
  selectedKeys: any[] = []
  cachedOpenKeys: any[] = []

  get rootSubmenuKeys() {
    const keys: any[] = []
    this.menu.forEach((item: any) => keys.push(item.path))
    return keys
  }

  created() {
    this.updateMenu()
  }

  @Watch('collapsed')
  onCollapsedChange(val: boolean) {
    if (val) {
      this.cachedOpenKeys = this.openKeys.concat()
      this.openKeys = []
    } else {
      this.openKeys = this.cachedOpenKeys
    }
  }

  @Watch('$route')
  onRouteChange() {
    this.updateMenu()
  }

  // select menu item
  onOpenChange(openKeys: []) {
    // 在水平模式下时执行，并且不再执行后续
    if (this.mode === 'horizontal') {
      this.openKeys = openKeys
      return
    }
    // 非水平模式时
    const latestOpenKey = openKeys.find(key => !this.openKeys.includes(key))
    if (!this.rootSubmenuKeys.includes(latestOpenKey)) {
      this.openKeys = openKeys
    } else {
      this.openKeys = latestOpenKey ? [latestOpenKey] : []
    }
  }
  updateMenu() {
    const routes = this.$route.matched.concat()

    if (routes.length >= 4 && this.$route.meta.hidden) {
      routes.pop()
      this.selectedKeys = [routes[2].path]
    } else {
      this.selectedKeys = [(routes.pop() as any).path]
    }

    const openKeys: any[] = []
    if (this.mode === 'inline') {
      routes.forEach(item => {
        openKeys.push(item.path)
      })
    }
    this.collapsed
      ? (this.cachedOpenKeys = openKeys)
      : (this.openKeys = openKeys)
  }

  renderIcon(icon: any) {
    if (icon === 'none' || icon === undefined) {
      return null
    }
    const props: any = {}
    typeof icon === 'object' ? (props.component = icon) : (props.type = icon)
    return <Icon {...{ props }} />
  }
  renderItem(menu: any) {
    if (!menu.hidden) {
      return menu.children && !menu.hideChildrenInMenu
        ? this.renderSubMenu(menu)
        : this.renderMenuItem(menu)
    }
    return null
  }

  renderMenuItem(menu: any) {
    const target = menu.meta.target || null
    const tag = (target && 'a') || 'router-link'
    const props = { to: { name: menu.name } }
    const attrs = { href: menu.path, target: menu.meta.target }
    return (
      <Item {...{ key: menu.path }}>
        <tag {...{ props, attrs }}>
          {this.renderIcon(menu.meta.icon)}
          <span>{menu.meta.title}</span>
        </tag>
      </Item>
    )
  }

  renderSubMenu(menu: any) {
    const itemArr: any = []
    if (!menu.hideChildrenInMenu) {
      menu.children.forEach((item: any) => itemArr.push(this.renderItem(item)))
    }
    return (
      <SubMenu {...{ key: menu.path }}>
        <span slot='title'>
          {this.renderIcon(menu.meta.icon)}
          <span>{menu.meta.title}</span>
        </span>
        {itemArr}
      </SubMenu>
    )
  }
  render() {
    const props = {
      mode: this.mode,
      theme: this.theme,
      openKeys: this.openKeys
    }
    const on = {
      select: (obj: any) => {
        this.selectedKeys = obj.selectedKeys
        this.$emit('select', obj)
      },
      openChange: this.onOpenChange
    }
    const menuTree = this.menu.map(item => {
      if ((item as any).hidden) {
        return null
      }
      return this.renderItem(item)
    })
    return (
      <Menu v-model={this.selectedKeys} {...{ props, on }}>
        {menuTree}
      </Menu>
    )
  }
}
