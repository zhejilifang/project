import { Vue, Component } from 'vue-property-decorator'
import { mapState, mapActions } from 'vuex'

@Component({
  computed: {
    ...mapState({
      content: state => state['detail'].content,
      info: state => state['detail'].info,
      comment: state => state['detail'].comment
    })
  },
  methods: {
    ...mapActions({
      getDetailList: 'detail/getDetailList',
      getCommentList: 'detail/getCommentList'
    })
  }
})
class Detail extends Vue {
  placeholder: string = '写评论...'
  isCollection: boolean = false
  size: number = 18
  page: number = 1

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
    this['getCommentList']({ id: this.$root.$mp.query.id, page: this.page }).then(() => {
      console.log('detail-comment', this['comment'])
    })
  }

  onReachBottom() {
    this.page++;
    this['getCommentList']({ id: this.$root.$mp.query.id, page: this.page });
    console.log('detail-comment', this['comment'])
  }

  changeFont(type) {
    if (type == 'add') {
      if (this.size >= 22) {
        return
      }
      this.size += 2
    } else if (type == 'sub') {
      if (this.size <= 14) {
        return
      }
      this.size -= 2
    }
  }

}
export default Detail