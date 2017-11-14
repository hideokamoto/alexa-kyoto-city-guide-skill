module.exports = function () {
  this.response.speak(this.t('WELCOME') + this.t('HELP'))
  this.emit(':responseReady')
}
