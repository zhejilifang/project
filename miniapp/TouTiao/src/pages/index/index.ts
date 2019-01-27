import { Vue, Component } from 'vue-property-decorator'


const debug = require('debug')('log:Index')
import { mapState, mapActions } from "vuex";

// 必须使用装饰器的方式来指定component
@Component({
  computed: {
    ...mapState({
      channels: state => state['index'].channels,
      currentUrl: state => state['index'].currentUrl,
      newsList: state => state['index'].newsList
    })
  },
  methods: {
    ...mapActions({
      getSetting: 'index/getSetting',
      getNewsList: 'index/getNewsList'
    })
  }
})
class Index extends Vue {
  current: string = "推荐"


  onShow() { // 小程序 hook
    debug('onShow')
    this['getSetting']().then(() => {
      this['getNewsList'](this['currentUrl'])
    })

  }

  mounted() { // vue hook
    debug('mounted')
  }

  handleClickTab(changeTab, changeUrl) {
    //console.log(changeUrl);
    this.current = changeTab;
    this['getNewsList'](changeUrl)
  }
}

export default Index
