const conversation = require('alexa-conversation')
const app = require('../../../src/indexV2.js')
const { getConfig } = require('../helpers')
const opts = getConfig(app, 'ja-JP')

opts.name = 'Tell About Intent in Japanese'
conversation(opts)
  .userSays('AboutIntent')
  .plainResponse.shouldContain(
    'このスキルでは、京都のお寺や観光地などを紹介します。'
  )
  .end()
