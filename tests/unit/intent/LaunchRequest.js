/* global describe, beforeEach, it */
const assert = require('power-assert')
const MyLambdaFunction = require('../../../src/index.js')
const MyLambdaFunctionV2 = require('../../../src/indexV2.js')
const { handler } = MyLambdaFunction
const handlerV2 = MyLambdaFunctionV2.handler
const helpers = require('../helpers')
const { event, executeFunction, fail } = helpers

describe('LaunchRequest', () => {
  beforeEach(() => {
    event.request.type = 'LaunchRequest'
    event.session.new = true
  })
  it('should talk welcome message and wait user response [English]', () => {
    event.request.locale = 'en-US'
    const succeed = data => {
      const { response } = data
      const { outputSpeech, shouldEndSession } = response
      assert.equal(outputSpeech.type, 'SSML')
      assert.equal(
        outputSpeech.ssml,
        '<speak> Welcome to Kyoto Guide! Say about, to hear more about the city, or say recommend a temples, or say, go outside. </speak>'
      )
      assert.equal(shouldEndSession, false)
    }
    executeFunction(event, { succeed, fail }, handler)
  })
  it('should talk welcome message and wait user response [Japanese]', () => {
    event.request.locale = 'ja-JP'
    const succeed = data => {
      const { response } = data
      const { outputSpeech, shouldEndSession } = response
      assert.equal(shouldEndSession, false)
      assert.equal(outputSpeech.type, 'SSML')
      assert.equal(
        outputSpeech.ssml,
        '<speak> 京都ガイドへようこそ！「アレクサ、京都ガイドで京都のお寺を教えて」と聞いてみてください。 </speak>'
      )
    }
    executeFunction(event, { succeed, fail }, handlerV2)
  })
})
