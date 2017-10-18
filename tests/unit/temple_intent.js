const assert = require('power-assert')
const MyLambdaFunction = require('../../src/index.js')
const helpers = require('./helpers')
const {
  event,
  callback,
} = helpers

describe('Test TempleIntent', () => {
  beforeEach(() => {
    event.request.locale = 'ja'
    event.request.type = 'TempleIntent'
    event.request.intent = {
      slots: {
        distance: {
          value: 100
        }
      }
    }
  })
  it('get response', () => {
    MyLambdaFunction['handler'](
      event,
      {
        succeed: (data) => {
          assert.deepEqual(data.response.outputSpeech, {
            type: 'SSML',
            ssml: '<speak> Try Fenway Park, which is 38 miles away. Have fun! Home of the Boston Red Sox, Fenway park hosts baseball games From April until October, and is open for tours.  </speak>'
          })
          assert.ok(true)
        },
        fail: (err) => {
          console.log(err)
          assert.ok(false)
        }
     },
     callback
    )
  })
})
