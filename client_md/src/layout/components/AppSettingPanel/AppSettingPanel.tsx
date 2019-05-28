import { Vue, Component } from 'vue-property-decorator'
import style from './index.styl'

@Component
export default class AppLayout extends Vue {
  created() {
    debugger
    console.error(`${style.demo}`)
  }
  render() {
    return <div class={`${style.demo}`}>{`${style}`}</div>
  }
}
