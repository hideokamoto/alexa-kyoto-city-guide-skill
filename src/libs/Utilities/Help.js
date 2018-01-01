module.exports = function () {
  this.response
    .speak(this.t('ME') + this.t('ABOUT') + this.t('HELP'))
    .listen(this.t('HELP'))
  this.emit(':responseReady')
}
