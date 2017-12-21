module.exports = function () {
  this.response.speak(this.t('STOP'))
  this.emit(':responseReady')
}
