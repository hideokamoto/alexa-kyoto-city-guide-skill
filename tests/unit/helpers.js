exports.event =
  {
    "session": {
      "sessionId": "SessionId.f9e6dcbb-b7da-4b47-905c.etc.etc",
      "application": {
        "applicationId": "amzn1.echo-sdk-ams.app.1234"
      },
      "attributes": {},
      "user": {
        "userId": "amzn1.ask.account.VO3PVTGF563MOPBY.etc.etc"
      },
      "new": true
    },
    "request": {
      "type": "LaunchRequest",

      "requestId": "request5678",

      "locale": "en-US"
    },
    "version": "1.0"
  };

exports.context = {
  'succeed': function (data) {
    console.log(JSON.stringify(data, null,'\t') );

  },
  'fail': function (err) {
    console.log('context.fail occurred');
    console.log(JSON.stringify(err, null,'\t') );
  }

};