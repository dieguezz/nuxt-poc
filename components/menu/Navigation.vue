<template>
  <nav class="navigation">
    <h1 class="nav-title">{{ $t('menuName') }}</h1>
    <ul>
      <nuxt-link :to="path('/services')" exact>
        {{ $t('nav.services') }}
      </nuxt-link>
      <nuxt-link :to="path('/about')" exact>
        {{ $t('nav.about') }}
      </nuxt-link>
      <nuxt-link :to="path('/careers')" exact>
        {{ $t('nav.careers') }}
      </nuxt-link>
      <nuxt-link :to="path('/blog')" exact>
        {{ $t('nav.blog') }}
      </nuxt-link>
      <nuxt-link :to="path('/contact')" exact>
        {{ $t('nav.contact') }}
      </nuxt-link>
    </ul>
  </nav>
</template>

<script>
  export default {
    methods: {
      path(url) {
        return (this.$i18n.locale === 'es' ? url : '/' + this.$i18n.locale + url)
      }
    },
    i18n: {
      messages: {
        en: {
          nav: {
            services: 'Services',
            about:  'About Us',
            careers:  'Careers',
            blog:  'Blog',
            contact:  'Contact Us',
          },
          menuName: 'Navigation'
        },
        es: {
          nav: {
            services: 'Servicios',
            about:  'Nosotros',
            careers:  'Empleos',
            blog:  'Blog',
            contact:  'Contacta',
          },
          menuName: 'Navegación'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~assets/css/variables.scss'; // will be fixed soon
  .nav-title {
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: $slateGrey;
    padding-bottom: 50px;
  }
  ul {
    a {
      display: block;
      font-size: 36px;
      font-weight: 300;
      line-height: 2.0;
      color: #ffffff;
      text-decoration: none;
    }
  }
</style>
