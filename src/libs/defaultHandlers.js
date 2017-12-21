module.exports = {
  LaunchRequest: require('./defaultIntents/LaunchRequest'),
  AboutIntent: require('./defaultIntents/AboutIntent'),
  CafeIntent: require('./defaultIntents/CafeIntent'),
  TempleIntent: require('./defaultIntents/TempleIntent'),
  'AMAZON.HelpIntent': require('./Utilities/Help'),
  'AMAZON.NoIntent': require('./Utilities/Stop'),
  'AMAZON.CancelIntent': require('./Utilities/Stop'),
  'AMAZON.StopIntent': require('./Utilities/Stop')
}
