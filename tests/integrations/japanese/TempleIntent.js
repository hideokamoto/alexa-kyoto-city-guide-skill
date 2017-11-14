const conversation = require('alexa-conversation')
const app = require('../../../src/indexV2.js')

const opts = {
  appId: 'your-app-id',
  app: app,
  locale: 'ja-JP',
  handler: app.handler
}

opts.name = 'Tell Temple Intent in Japanese'
conversation(opts)
  .userSays('TempleIntent')
  .plainResponse
  .shouldContain('京都のお寺情報です。')
  .end()
