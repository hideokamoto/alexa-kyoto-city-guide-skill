const conversation = require('alexa-conversation')
const app = require('../../../src/indexV2.js')

const opts = {
  appId: 'your-app-id',
  app: app,
  locale: 'ja-JP',
  handler: app.handler
}

opts.name = 'Tell Cafe Intent in Japanese'
conversation(opts)
  .userSays('CafeIntent')
  .plainResponse
  .shouldContain('京都のカフェ情報です。')
  .end()
