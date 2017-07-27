<template>
  <div class="main-menu">
    <Language-Switcher></Language-Switcher>
    <Navigation></Navigation>
    <Social-Icons></Social-Icons>
  </div>
</template>

<script>
  import LanguageSwitcher from '~components/Language-Switcher.vue'
  import Navigation from '~components/menu/Navigation.vue'
  import SocialIcons from '~components/menu/Social-Icons.vue'

  export default {
    components: { LanguageSwitcher, Navigation, SocialIcons }
  }
</script>
