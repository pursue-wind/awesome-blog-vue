<template>
  <div class="article-wrapper">

    <v-container style="height: 1000px;">
      <scroll class="article-list">
        <div v-for="(i,index) in 100" :key="index">{{i}}</div>
      </scroll>
    </v-container>
  </div>
</template>

<script type="text/ecmascript-6">
  import Scroll from '@/components/Scroll'

  export default {
    components: {
      Scroll
    },
    data() {
      return {}
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../assets/styles/global";

  .article-wrapper {
    z-index: 11000;

    .article-list {
      width: 100%;

    }

  }
</style>
