const conversation = require('alexa-conversation')
const app = require('../../../src/indexV2.js')
const { getConfig } = require('../helpers')
const opts = getConfig(app, 'ja-JP')

opts.name = 'Tell Temple Intent in Japanese'
conversation(opts)
  .userSays('TempleIntent')
  .plainResponse.shouldContain('京都のお寺情報です。')
  .end()
