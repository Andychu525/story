import { Vue, Component } from 'vue-property-decorator'

import AppHeader from './components/AppHeader'
import AppSider from './components/AppSider'
import AppFooter from './components/AppFooter'
import { directives } from 'vuetify/lib'

@Component({
  components: { AppHeader, AppSider, AppFooter }
})
export default class AppLayout extends Vue {
  private a = [1, 2, 3]

  getDivIf() {
    return this.a.length > 5 ? <div>长度大于5</div> : <div>小于5</div>
  }

  render() {
    let items = ['Foo', 'Bar', 'Fizz', 'Buzz']
    let divList = this.a.map((item: number, index: number) => {
      return <div>{item}</div>
    })

    return (
      <v-app>
        <app-header />
        <app-sider />
        <v-content>
          <div>{divList}</div>
          <div>{this.getDivIf()}</div>
          <v-select items={items} label="Standard" />
        </v-content>
        <app-footer />
      </v-app>
    )
  }
}
