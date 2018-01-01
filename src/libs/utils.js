exports.getTranslationFile = (name, locale = 'en-US') => {
  switch (locale) {
    case 'ja-JP':
      return require(`./translations/ja/${name}`)
    default:
      return require(`./translations/en/${name}`)
  }
}

exports.getLocaleFromEvent = (event) => {
  let lang = 'en-US'
  const { request } = event
  if (!request) return lang
  const { locale } = request
  if (!locale) return lang
  return locale
}
