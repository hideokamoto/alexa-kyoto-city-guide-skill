const conversation = require('alexa-conversation')
const app = require('../../../src/indexV2.js')

const opts = {
  appId: 'your-app-id',
  app: app,
  locale: 'ja-JP',
  handler: app.handler
}

opts.name = 'Tell AMAZON.HelpIntent in Japanese'
conversation(opts)
  .userSays('AMAZON.HelpIntent')
  .plainResponse
  .shouldContain('このスキルでは、京都のお寺や観光地などを紹介します。')
  .shouldContain('「アレクサ、京都ガイドで京都のお寺を教えて」と聞いてみてください。')
  .end()
