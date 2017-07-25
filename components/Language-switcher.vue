<template>
  <div class="language-switcher">
    <nav>
      <ul>
        <h1 class="hidden">{{$t('changeLang')}}</h1>
        <li>
          <nuxt-link :to="$route.params.lang === 'en' ? $route.fullPath : '/en' + $route.fullPath" exact hreflang="en" rel="alternate">
            {{ $t('nav.english') }}
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="$route.fullPath.replace(/^\/[^\/]+/, '')" exact hreflang="es" rel="alternate">
            {{ $t('nav.spanish') }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
  export default {
    i18n: {
      messages: {
        en: {
          nav: {
            english: 'English',
            spanish:  'Spanish',
          },
          changeLang: 'Change language'
        },
        es: {
          nav: {
            english: 'Inglés',
            spanish: 'Español',
          },
          changeLang: 'Cambiar idioma'
        }
      }
    }
  }
</script>

<style lang="scss" scoped></style>
