import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class AppHeader extends Vue {
  @Prop({ type: Boolean, default: false })
  clipped!: boolean

  render() {
    return (
      <v-toolbar clipped-left={this.clipped} app absolute>
        <v-toolbar-side-icon />
        <v-toolbar-title>Vuetify</v-toolbar-title>
      </v-toolbar>
    )
  }
}
