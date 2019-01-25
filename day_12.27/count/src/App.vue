<template>
  <div id="app">
    <button @click="changeNumSync({payload:'sub'})">-</button>
    <span>{{num}}</span>
    <span>{{date}}</span>
    <button @click="changeNumSync({payload:'add'})">+</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "app",
  computed: {
    ...mapState({
      num: state => state.app.num
    }),
    ...mapGetters({
      date: "app/date"
    })
  },
  mounted() {
    console.log(this.$store);
  },
  methods: {
    ...mapMutations({
      changeNumSync: "app/changeNum"
    }),
    ...mapActions({
      changeNumAsync: "app/changeNumAsync"
    }),
    changeNum(type) {
      //this.$store.commit("changeNum", { payload: type });
      /* this.$store.commit({
        type: "app/changeNum",
        payload: type
      }); */
      //   this.$store
      //     .dispatch({
      //       type: "app/changeNumAsync",
      //       payload: type
      //     })
      //     .then(res => {
      //       console.log("异步操作完成！");
      //     });
      this.changeNumAsync({ payload: type }).then(res => {
        console.log("异步操作完成！");
      });
    }
  }
};
</script>

<style lang="scss">
</style>
