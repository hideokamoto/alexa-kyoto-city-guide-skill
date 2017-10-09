const assert = require('power-assert')
const MyLambdaFunction = require('../../src/index.js')
const helpers = require('./helpers')
const {
  event,
  callback,
} = helpers

describe('Test Auth Actions', () => {
  beforeEach(() => {
    event.request.type = 'LaunchRequest'
  })
  it('a', () => {
    MyLambdaFunction['handler'](
      event,
      {
        succeed: (data) => {
          assert.deepEqual({},{})
          assert.ok(true)
        },
        fail: (err) => {
          assert.ok(false)
        }
      },
      callback
    )
  })
})
