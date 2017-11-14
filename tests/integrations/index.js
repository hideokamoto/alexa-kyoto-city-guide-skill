const conversation = require('alexa-conversation')
const app = require('../../src/index.js')

const opts = {
  name: 'Alexa Shifter man',
  appId: 'your-app-id',
  app: app,
  handler: app.hello
}

conversation(opts)
  .userSays('TempleIntent')
  .plainResponse
  .shouldContain("Here\'s the shifter")
  .end()
