/* global describe, beforeEach, it */
const assert = require('power-assert')
const MyLambdaFunction = require('../../../src/index.js')
const MyLambdaFunctionV2 = require('../../../src/indexV2.js')
const { handler } = MyLambdaFunction
const handlerV2 = MyLambdaFunctionV2.handler
const helpers = require('../helpers')
const { event, executeFunction, fail } = helpers

describe('AMAZON.HelpIntent', () => {
  beforeEach(() => {
    event.request.type = 'AMAZON.HelpIntent'
    event.session.new = false
  })
  it('should talk about the skill [English]', () => {
    event.request.locale = 'en-US'
    const succeed = data => {
      const { response } = data
      const { outputSpeech, shouldEndSession } = response
      assert.equal(outputSpeech.type, 'SSML')
      assert.equal(
        outputSpeech.ssml,
        '<speak> Say about, to hear more about the city, or say recommend a temples, or say, go outside. </speak>'
      )
      assert.equal(shouldEndSession, false)
    }
    executeFunction(event, { succeed, fail }, handler)
  })
  it('should talk about the skill [Japanese]', () => {
    event.request.locale = 'ja-JP'
    const succeed = data => {
      const { response } = data
      const { outputSpeech, shouldEndSession } = response
      assert.equal(shouldEndSession, false)
      assert.equal(outputSpeech.type, 'SSML')
      assert.equal(
        outputSpeech.ssml,
        '<speak> このスキルでは、京都のお寺や観光地などを紹介します。「アレクサ、京都ガイドで京都のお寺を教えて」と聞いてみてください。 </speak>'
      )
    }
    executeFunction(event, { succeed, fail }, handlerV2)
  })
})
