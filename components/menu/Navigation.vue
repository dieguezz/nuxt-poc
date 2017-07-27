<template>
  <nav class="navigation">
    <h1 class="hidden">$t{{'menuName'}}</h1>
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
          menuName: 'Main navigation'
        },
        es: {
          nav: {
            services: 'Servicios',
            about:  'Sobre nosotros',
            careers:  'Empleos',
            blog:  'Blog',
            contact:  'Contacta',
          },
          menuName: 'Navegación principal'
        }
      }
    }
  }
</script>
