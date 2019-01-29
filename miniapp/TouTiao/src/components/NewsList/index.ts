import { Vue, Component, Prop } from 'vue-property-decorator'
import { mapMutations, mapActions } from 'vuex'

@Component({
  methods: {
    ...mapMutations({
      removeNews: 'index/removeNews'
    }),
    ...mapActions({
      getDetailList: 'index/getDetailList'
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

  handleToDetail(url) {
    // console.log(id)
    console.log(url)
    let detailId = url.split('/')[url.split('/').length - 2]
    console.log(detailId)
    wx.navigateTo({ url: '/pages/detail/main?id=' + detailId });

    // this['getDetailList'](detailId)
  }
}
export default newsList