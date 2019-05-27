import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class AppFooter extends Vue {
  @Prop({ type: Boolean, default: false })
  clipped!: boolean

  render() {
    return (
      <v-footer app>
        <span class="px-3">&copy; {new Date().getFullYear()}</span>
      </v-footer>
    )
  }
}
