<template>
  <div>
    <Main-Menu></Main-Menu>
    <nuxt class="main"/>
  </div>
</template>


<script>
  import MainMenu from '~components/menu/MainMenu.vue'

  export default {
    components: { MainMenu },
    head() {
      return {
        htmlAttrs: {
          lang: this.$i18n.locale,
        },
      }
    }
  }
</script>

<style>
  .main {
    padding-top: 130px;
  }
</style>
