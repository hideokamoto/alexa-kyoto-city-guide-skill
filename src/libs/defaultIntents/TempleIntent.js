const { getTranslationFile, getLocaleFromEvent } = require('../utils')

function getTempleList (locale) {
  return getTranslationFile('temples', locale)
}
function randomArrayElement (array) {
  var i = 0
  i = Math.floor(Math.random() * array.length)
  return array[i]
}

module.exports = function () {
  const locale = getLocaleFromEvent(this.event)
  const templeList = getTempleList(locale)
  const temple = randomArrayElement(templeList)
  let say = '京都のお寺情報です。'
  say += `${temple['name']}は`
  say += temple['locale'] ? `${temple['locale']}にある` : '京都の'
  say += 'お寺です。'
  say += temple['description']
  this.response.speak(say)
  this.emit(':responseReady')
}
