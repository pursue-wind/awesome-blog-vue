<template>
  <a-dropdown>
    <div class="ant-dropdown-link mirror-avatar">
      <v-avatar
        class="mirror-pic"
        :size="avatarSize"
        src="https://cdn.vuetifyjs.com/images/john.jpg"/>
      <!--下拉信息框-->
      <div class="avatar-dropdown">
        <div v-if="this.token!==null">
          <h3 class="avatar-dropdown-name">{{this.curUser.name}}</h3>
          <router-link to="/personalspace" tag="div">
            <span style="cursor:pointer"><i class="iconfont">&#xe60c;</i>个人中心</span>
          </router-link>
          <div><span class="userInfoName">邮箱:</span>{{this.curUser.email}}</div>
          <!--<div><span class="userInfoName">手机:</span>{{this.curUser.phone}}</div>-->

          <div><span class="userInfoName">注册时间:</span>{{this.curUser.registerTime|dateFmt}}</div>
          <!--<div>最后更新:{{this.curUser.lastUpdateTime}}</div>-->
          <!--<div>积分:{{this.curUser.score}}</div>-->
          <div>
            <v-btn @click="CLogOut">注销</v-btn>
          </div>
        </div>

        <div v-if="this.token===null">
          <div style="margin-top: 36px">
            <img :src="this.$store.state.defalutSmallGifAvatar"/>
          </div>
          <div style="padding: 36px">
            <div style="margin-bottom: 15px">
              <span>还没有登录嗷~</span>
            </div>
            <v-btn style="float: left;" @click="CLoginModal">登录</v-btn>
            <v-btn style="float: right;" @click="CRegisterModal">注册</v-btn>
          </div>
        </div>
      </div>
    </div>
  </a-dropdown>
</template>

<script>
  export default {
      name: "AvatarDropdown"
  }
</script>

<style scoped>

</style>