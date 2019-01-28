import { Vue, Component, Prop } from 'vue-property-decorator'
import { mapMutations, mapActions } from 'vuex'

@Component({

})
class Detail extends Vue {
  articleUrl: string = ''

  onLoad(options) {
    this.articleUrl = options.url
  }

}
export default Detail