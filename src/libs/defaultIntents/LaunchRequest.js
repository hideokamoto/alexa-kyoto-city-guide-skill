module.exports = function () {
  const message = this.t('WELCOME') + this.t('HELP')
  this.emit(':ask', message, this.t('HELP'))
}
