const conversation = require('alexa-conversation')
const app = require('../../../src/indexV2.js')
const {
  getConfig
} = require('../helpers')
const opts = getConfig(app, 'ja-JP')

opts.name = 'Tell Cafe Intent in Japanese by one-shot request'
conversation(opts)
  .userSays('CafeIntent')
  .plainResponse
  .shouldContain('京都のカフェ情報です。')
  .end()

opts.name = 'Tell Cafe Intent in Japanese by launch request'
conversation(opts)
  .userSays('LaunchRequest')
  .plainResponse
  .shouldContain('「アレクサ、京都ガイドで京都のお寺を教えて」と聞いてみてください。')
  .userSays('CafeIntent')
  .plainResponse
  .shouldContain('京都のカフェ情報です。')
  .end()
