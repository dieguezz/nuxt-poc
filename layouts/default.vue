<template>
  <div>
    <language-switcher></language-switcher>
    <nuxt/>
  </div>
</template>


<script>
  import LanguageSwitcher from '~components/Language-switcher.vue'

  export default {
    components: {LanguageSwitcher},
    head () {
      return {
        htmlAttrs: {
          lang: this.$i18n.locale,
        },
      }
    }
  }
</script>


<style></style>
