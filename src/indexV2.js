const Alexa = require('alexa-sdk')
const defaultHandler = require('./libs/defaultHandlers')
const languageStrings = require('./libs/translations/index')

module.exports.handler = function (event, context, callback) {
  var alexa = Alexa.handler(event, context)
  alexa.resources = languageStrings
  alexa.registerHandlers(defaultHandler)
  alexa.execute()
}
