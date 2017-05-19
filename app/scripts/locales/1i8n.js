(function() {

  $(document).ready(function() {

    $('.content-language a').click(function(event) {
      event.preventDefault();
      setLang($(event.target).data('lang'));
    });

    function setLang(lang) {
      localStorage.setItem('lang', lang);
      i18njs.setLang(lang);
      $('.content-language .active').removeClass('active').addClass('second');
      $('.content-language a[data-lang="' + lang + '"]').addClass('active').removeClass('second');
      $('*[data-locale]:not([data-locale-attr])').each(function(index, item) {
        var localized = i18njs.get($(item).data('locale'));
        $(item).html(localized);
      });
      $('*[data-locale-attr]').each(function(index, item) {
        var attr = i18njs.get($(item).data('locale-attr'));
        var localized = i18njs.get($(item).data('locale'));
        $(item).attr(attr, localized);
      });
    }

    /**
     * Returns the default user -> browser -> app language (in that order)
     * @return {String} The lang name
     */
    function getDefaultLang() {

      // app default lang
      var defaultLang = 'en';
      var lang = defaultLang;

      // browser default lang
      // if (navigator.userLanguage) {
      //   // Explorer
      //   lang = navigator.userLanguage;
      // }
      // if (navigator.language) {
      //   lang = navigator.language;
      // }
      // if (navigator.languages && navigator.languages.length) {
      //   lang = navigator.languages[0];
      // }

      // lang = lang.split('-')[0];

      // user default lang
      if (localStorage.getItem('lang')) {
        lang = localStorage.getItem('lang');
      }

      lang = i18njs.has(lang) ? lang : defaultLang;

      return lang;

    }

    setLang(getDefaultLang());

  });

})();
