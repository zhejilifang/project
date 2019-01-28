import { Vue, Component } from 'vue-property-decorator'
import NewsList from "@/components/NewsList/index"

const debug = require('debug')('log:Index')
import { mapState, mapActions } from "vuex";

// 必须使用装饰器的方式来指定component
@Component({
  components: {
    NewsList
  },
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
      getNewsList: 'index/getNewsList',
      getMore: 'index/getMore'
    })
  }
})
class Index extends Vue {
  current: string = "推荐"
  isRefresh: boolean = false


  onShow() { // 小程序 hook
    debug('onShow')
    this['getSetting']().then(() => {
      this['getNewsList'](this['currentUrl'])
    })

  }

  mounted() { // vue hook
    debug('mounted')
  }

  onReachBottom() {
    this.isRefresh = true;
    this.loadData();
  }

  refreshPage() {
    this.isRefresh = true;
    this.loadData();
  }

  handleClickTab(changeTab, changeUrl) {
    //console.log(changeUrl);
    this.current = changeTab;
    this['getNewsList'](changeUrl)
  }

  loadData() {
    let appUrl = this['currentUrl'];
    this['getMore'](appUrl).then(() => {
      this.isRefresh = false;
    }).catch(() => {
      this.isRefresh = false;
    })
  }
}

export default Index
