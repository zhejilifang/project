<template>
  <web-view :src="src" @message="message"></web-view>
</template>
<script>
export default {
  data() {
    return {
      src: ""
    };
  },
  methods: {
    message() {}
  },
  onShow() {
    this.src = this.$root.$mp.query.src;
    console.log(this.src);
  }
};
</script>
