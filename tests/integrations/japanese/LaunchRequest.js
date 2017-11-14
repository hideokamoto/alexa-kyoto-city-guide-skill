const conversation = require('alexa-conversation')
const app = require('../../../src/indexV2.js')

const opts = {
  appId: 'your-app-id',
  app: app,
  locale: 'ja-JP',
  handler: app.handler
}

opts.name = 'Tell LaunchReques in Japanese'
conversation(opts)
  .userSays('LaunchRequest')
  .plainResponse
  .shouldContain('「アレクサ、京都ガイドで京都のお寺を教えて」と聞いてみてください。')
  .end()
