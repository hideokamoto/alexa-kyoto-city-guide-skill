const conversation = require('alexa-conversation')
const app = require('../../../src/indexV2.js')
const { getConfig } = require('../helpers')
const opts = getConfig(app, 'ja-JP')

opts.name = 'End session by StopIntent in Japanese'
conversation(opts)
  .userSays('LaunchRequest')
  .plainResponse.shouldContain(
    '「アレクサ、京都ガイドで京都のお寺を教えて」と聞いてみてください。'
  )
  .userSays('AMAZON.StopIntent')
  .plainResponse.shouldContain('またのご利用をお待ちしております')
  .end()

opts.name = 'End session by CancelIntent in Japanese'
conversation(opts)
  .userSays('LaunchRequest')
  .plainResponse.shouldContain(
    '「アレクサ、京都ガイドで京都のお寺を教えて」と聞いてみてください。'
  )
  .userSays('AMAZON.CancelIntent')
  .plainResponse.shouldContain('またのご利用をお待ちしております')
  .end()
