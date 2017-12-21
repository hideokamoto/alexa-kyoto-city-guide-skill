const conversation = require('alexa-conversation')
const app = require('../../../src/indexV2.js')
const {
  getConfig
} = require('../helpers')
const opts = getConfig(app, 'ja-JP')

opts.name = 'Tell Cafe Intent in Japanese'
conversation(opts)
  .userSays('CafeIntent')
  .plainResponse
  .shouldContain('京都のカフェ情報です。')
  .end()
