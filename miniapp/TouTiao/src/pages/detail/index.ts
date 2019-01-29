import { Vue, Component } from 'vue-property-decorator'
import { mapState, mapActions } from 'vuex'

@Component({
  computed: {
    ...mapState({
      content: state => state['detail'].content,
      info: state => state['detail'].info
    })
  },
  methods: {
    ...mapActions({
      getDetailList: 'detail/getDetailList'
    })
  }
})
class Detail extends Vue {
  placeholder: string = '写评论'
  isCollection: boolean = false

  get formatContent() {
    return this['content'].map(item => {
      if (typeof item == 'string') {
        return {
          type: 'text',
          content: item
        }
      } else {
        return item
      }
    })
  }

  get publishTime() {
    let date = new Date(this['info'].publish_time * 1000);
    let month = date.getMonth() + 1,
      day = date.getDate(),
      hour = date.getHours(),
      min = date.getMinutes();
    return `${month}-${day} ${hour}:${min}`;
  }

  onShow() {
    this['getDetailList'](this.$root.$mp.query.id)
  }

}
export default Detail