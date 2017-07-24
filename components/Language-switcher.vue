<template>
  <div class="language-switcher">
    <ul>
      <li><button @click="setLang('en')">{{$t('english')}}</button></li>
      <li><button @click="setLang('es')">{{$t('spanish')}}</button></li>
    </ul>
  </div>
</template>
<script>

  export default {
    i18n: {
      messages: {
        en: {
          english: 'English',
          spanish:  'Spanish'
        },
        es: {
          english: 'Inglés',
          spanish: 'Español'
        }
      }
    },
    methods: {
      setLang(lang) {
        console.log(lang)
        this.$store.commit('i18n/SET_LANG', lang);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .language-switcher {
    background-color: #00ffbb;
  }
</style>
