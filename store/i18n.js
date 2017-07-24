import i18n from '~/plugins/i18n';

const state = () => ({
  locales: ['en', 'es'],
  lang: null
})

const mutations = {
  SET_LANG (state, lang) {
    if (state.locales.includes(lang)) {
      state.lang = lang;
    }
  }
}

export default {
  state,
  mutations
}
