var MyLambdaFunction = require('../../src/index.js');
const helpers = require('./helpers');
const {
  event,
  context,
} = helpers;
function callback(error, data) {
  if(error) {
    console.log('error: ' + error);
  } else {
    console.log(data);
  }
}

MyLambdaFunction['handler'] (event, context, callback);