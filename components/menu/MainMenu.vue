<template>
  <div class="main-menu" :class="{ 'is-open': isOpen }">
    <div class="header layout-row layout-align-space-between-center">
      <h1 class="flex"><nuxt-link to="/" class="logo" exact>Etéreo</nuxt-link></h1>
      <Hamburguer class="flex" :open="isOpen" @click.native="toggleMenu"/>
    </div>
    <div class="body layout-row" v-show="isOpen">
      <div class="left flex">
        todo
      </div>
      <div class="right flex layout-column layout-align-center-space-between">
        <Language-Switcher class="language-switcher"/>
        <Navigation/>
        <Social-Icons/>
      </div>
    </div>
  </div>
</template>

<script>
  import LanguageSwitcher from '~components/LanguageSwitcher.vue'
  import Navigation from '~components/menu/Navigation.vue'
  import SocialIcons from '~components/menu/SocialIcons.vue'
  import Hamburguer from '~components/menu/Hamburguer.vue'

  export default {
    data() {
      return {
        isOpen: false
      };
    },
    methods: {
      toggleMenu() {
        this.isOpen = !this.isOpen;
      }
    },
    components: { LanguageSwitcher, Navigation, SocialIcons, Hamburguer }
  }
</script>

<style lang="scss" scoped>
  @import '~assets/css/variables.scss'; // will be fixed soon
  .main-menu {
    position: fixed;
    width: 100vw;
    &.is-open {
      height: 100vh;
    }
  }
  .header {
    padding: 50px;
    .logo {
      background-image: url('/logo.svg');
      background-position: left;
      display: inline-block;
      background-repeat: no-repeat;
      width: 110px;
      height: 30px;
      background-size: 100%;
      text-indent: -99999px;
    }
  }
  .body {
    height: calc(100vh - 130px);
    .left {
      width: 50%;
      background-color: white;
    }
    .right {
      height: 100%;
      max-width: 50%;
      background-color: $darkGrey;
      padding: 45px 100px;
    }
  }
</style>
