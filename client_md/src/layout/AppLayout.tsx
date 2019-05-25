import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class AppLayout extends Vue {
  private primaryDrawer = {
    model: null,
    type: 'default (no property)',
    clipped: false,
    floating: false,
    mini: false
  };

  render() {
    return (
      <div>
        <router-view />
      </div>
    )
  }
}
