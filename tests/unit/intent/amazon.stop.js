/* global describe, beforeEach, it */
const assert = require('power-assert')
const MyLambdaFunction = require('../../../src/index.js')
const MyLambdaFunctionV2 = require('../../../src/indexV2.js')
const { handler } = MyLambdaFunction
const handlerV2 = MyLambdaFunctionV2.handler
const helpers = require('../helpers')
const { event, executeFunction, fail } = helpers

describe('AMAZON.StopIntent', () => {
  beforeEach(() => {
    event.request.type = 'AMAZON.StopIntent'
    event.session.new = false
  })
  it('should end the session [English]', () => {
    event.request.locale = 'en-US'
    const succeed = data => {
      const { response } = data
      const { outputSpeech, shouldEndSession } = response
      assert.equal(shouldEndSession, true)
      assert.equal(outputSpeech.type, 'SSML')
      assert.equal(
        outputSpeech.ssml,
        '<speak> Okay, see you next time! </speak>'
      )
    }
    executeFunction(event, { succeed, fail }, handler)
  })
  it('should end the session [Japanese]', () => {
    event.request.locale = 'ja-JP'
    const succeed = data => {
      const { response } = data
      const { outputSpeech, shouldEndSession } = response
      assert.equal(shouldEndSession, true)
      assert.equal(outputSpeech.type, 'SSML')
      assert.equal(
        outputSpeech.ssml,
        '<speak> またのご利用をお待ちしております。 </speak>'
      )
    }
    executeFunction(event, { succeed, fail }, handlerV2)
  })
})
