import { Vue, Component } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  private a = '1';
  render() {
    return (
      <div id="app">
        <router-view />
      </div>
    )
  }
}
