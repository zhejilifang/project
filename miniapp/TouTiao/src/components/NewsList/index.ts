import { Vue, Component, Prop } from 'vue-property-decorator'
import { mapMutations } from 'vuex'

@Component({
  methods: {
    ...mapMutations({
      removeNews: 'index/removeNews'
    })
  }
})
class newsList extends Vue {
  @Prop({
    type: Array,
    default: []
  }) list;

  mounted() {
  }

}
export default newsList