<template>
  <div class="home" ref="home">
    <div class="navbar-wrapper">
      <navbar></navbar>
    </div>
    <div class="router-wrapper">
      <router-view class="child-view"/>
    </div>
    <div class="footer">footer</div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Navbar from '@/components/bloghome/Navbar'
  import ArticleList from '@/components/bloghome/ArticleList'
  import { ebookMixin } from '@/utils/mixin'

  export default {
    mixins: [ebookMixin],
    components: { Navbar, ArticleList },
    watch: {
      offsetY(v) {

      }
    },
    methods: {
      restore() {

      },
      move(offsetY) {
      },
      startLoopReadTime() {

      }
    },
    created() {
    },
    mounted() {
    },
    beforeDestroy() {

    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../assets/styles/global";

  .home {
    .navbar-wrapper {
      width: 100%;
    }

    .router-wrapper {
      width: 100%;
      height: 100%;

    }

    .footer {
      width: 100%;
    }
  }
</style>
