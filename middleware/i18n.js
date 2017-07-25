export default function ({ app, store, route, params, error, redirect, hotReload }) {
  // If middleware is called from hot-reloading, ignore it
  if (hotReload) return
  // Get locale from params
  const lang = params.lang || 'es'
  if (!store.state.i18n.locales.includes(lang)) {
    return error({ message: 'This page could not be found.', statusCode: 404 })
  }
  // Set locale
  store.commit('i18n/SET_LANG', lang)
  app.i18n.locale = store.state.i18n.lang
  // If route is /en/... -> redirect to /...
  if (lang === 'es' && route.fullPath.indexOf('/es') === 0) {
    return redirect(route.fullPath.replace(/^\/es/, '/'))
  }
}
